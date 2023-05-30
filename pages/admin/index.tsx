import { AdminLayout } from "@/components/layout";
import Link from "next/link";
import React from "react";

export interface DashboardProps {}

export default function Dashboard(props: DashboardProps) {
  return (
    <div>
      Dashboard
      <Link href="/">Home</Link>
    </div>
  );
}
Dashboard.Layout = AdminLayout;
