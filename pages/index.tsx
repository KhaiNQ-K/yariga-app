import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <>
      Home page
      <Link href="/admin">Dashboard</Link>
    </>
  );
};
export default Home;
Home.Layout = MainLayout;
