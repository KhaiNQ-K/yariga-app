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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "method not supported" });
  }
  const cookies = new Cookies(req, res);
  if (cookies) {
    cookies.set("access_token");
  }
  res.status(200).json({ message: "Logout successfully" });
}
