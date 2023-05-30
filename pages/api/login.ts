import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";
export const config = {
  api: {
    bodyParser: false,
  },
};
type Data = {
  message: string;
};
const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "method not supported" });
  }
  //don't set cookie to api server
  return new Promise((resolve) => {
    req.headers.cookie = "";
    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", (chunk) => {
        body += chunk;
      });
      proxyRes.on("end", function () {
        try {
          const { access_token, expiredAt } = JSON.parse(body);
          const cookies = new Cookies(req, res);
          cookies.set("access_token", access_token, {
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expiredAt),
          });
          (res as NextApiResponse)
            .status(200)
            .json({ message: "Login successfully" });
        } catch (error) {
          (res as NextApiResponse)
            .status(200)
            .json({ message: "Something went wrong" });
        }
        resolve(true);
      });
    };
    proxy.once("proxyRes", handleLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
