import { LayoutProps } from "@/models";
import { Box } from "@mui/material";
import * as React from "react";
import { Sidebar, Topbar } from "@/components/common";

export function AdminLayout({ children }: LayoutProps) {
  return (
    <Box>
      <Topbar />
      <Box>
        <Sidebar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
