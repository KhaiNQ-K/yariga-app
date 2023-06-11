import { Box, InputBase, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Link as MuiLink } from "@mui/material";
import { IconNotification, IconSearch } from "../icons";
export interface TopbarProps {}

export function Topbar(props: TopbarProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ px: 3, py: 2 }}
      justifyContent="space-between"
      height={70}
      bgcolor="common.white"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="82px"
        flexBasis={1}
      >
        <MuiLink
          underline="none"
          display="flex"
          alignItems="center"
          component={Link}
          prefetch={false}
          href={"/"}
          color="text.primary"
        >
          <Image src="/img/logo.png" width={173} height={35} alt="Yariga-app" />
        </MuiLink>
        <Stack
          alignItems="center"
          direction="row"
          borderRadius={1}
          bgcolor="grey.100"
          width={405}
          height={38}
          position="relative"
          gap={2}
          px={2}
        >
          <IconSearch />
          <InputBase placeholder="Search Property, Customer etc" fullWidth />
        </Stack>
      </Box>
      <Box display="flex" justifyContent="center">
        <span>
          <IconNotification />
        </span>
      </Box>
    </Box>
  );
}
