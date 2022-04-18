import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work'
import React from "react";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <Link href="/" passHref>
      <ListItemButton component="a">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link href="/users" passHref>
      <ListItemButton component="a">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
    </Link>
      <Link href="/content" passHref>
      <ListItemButton component="a">
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Content" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);