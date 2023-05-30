import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { NextPageWithLayout } from "@/models";
import { MainLayout } from "@/components/layout";
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
