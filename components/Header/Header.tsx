import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  IconButton,
  Toolbar,
  Tooltip,
  Box,
  Button,
  AppBar
} from '@mui/material';
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { SignOut } from '@/components/ui/SignOut';

const pages = [
  {
    name: 'home',
    path: 'home'
  },
  {
    name: 'create portfolio',
    path: 'create-portfolio'
  },
  {
    name: 'update portfolio',
    path: 'update-portfolio'
  },
  {
    name: 'view portfolio',
    path: 'view-portfolio'
  }
];

export const Header = () => {
  const [ isClient, setIsClient ] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <Link href="/home" passHref legacyBehavior >
          <Button sx={{ mr: 2 }}>
            <Image src="/PortfolioMaker2.png" alt="PortfolioMaker Logo" width={50} height={50} />
          </Button>
        </Link>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map(({ name, path }) => (
            <Link key={name} href={path} passHref legacyBehavior>
              <Button
                color="primary"
              >
                {name}
              </Button>
            </Link>
          ))}
        </Box>

        {/*<Tooltip title={user?.name}>*/}
        <Tooltip title={'user'}>
          <IconButton color="primary">
            <AccountCircleIcon />
          </IconButton>
        </Tooltip>

        {/*{isClient && isAuthenticated ? (*/}
        {isClient ? (
          // onClick={logout}
          <SignOut/>
        ) : (
          <Link href="/login" passHref legacyBehavior>
            <Button
              color="primary"
              startIcon={<LoginIcon />}
            >
              Log in
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};
