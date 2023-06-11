import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Logo from "@/images/Logo.png";
import { Link as MuiLink } from "@mui/material";
import { IconNotification } from "../icons";
export interface TopbarProps {}

export function Topbar(props: TopbarProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ mx: 3, my: 2 }}
      justifyContent="space-between"
      height={9}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link href="/" passHref>
          <MuiLink display="flex" alignItems="center">
            <Image src={Logo} width={35} height={40} alt="Yariga-app" />
            <Typography component="h1" variant="h3" ml={2}>
              Yariga
            </Typography>
          </MuiLink>
        </Link>
        <Box p="10px">
          <TextField type="input" placeholder="Search Property, Customer etc" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <span>
          <IconNotification />
        </span>
      </Box>
    </Box>
  );
}
