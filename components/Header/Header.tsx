import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Typography,
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
// import { useAuth } from '@/components/AuthProvider';
import { useTheme } from '@mui/material/styles';

const pages = [ 'Home', 'Create Portfolio', 'Update portfolio', 'View portfolio' ];

export const Header = () => {
  const theme = useTheme();
  const [ anchorElUser, setAnchorElUser ] = React.useState<null | HTMLElement>(null);
  // const { isAuthenticated, user, logout } = useAuth();
  const [ isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  color="secondary" position="fixed">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'flex-start', margin: '0 4rem' }}>

          <Link href="/home" passHref legacyBehavior >
            <Box sx={{ marginRight: '2rem', cursor: 'pointer' }}>
              <Image src="/PortfolioMaker2.png" alt="PortfolioMaker Logo" width={50} height={50} />
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link  key={page} href={`/${page}`} passHref legacyBehavior>
                <Typography
                    variant="button"
                    color="primary"
                    align="center"
                    mr={5}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { color: theme.palette.error.main }
                    }}
                  >
                  {page}
                </Typography>
              </Link>
            ))}
          </Box>

          <Tooltip title={"user.name"}>
            <IconButton color="primary">
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>

          {/*{isClient && isAuthenticated ? (*/}
          {/*  <Link href="/login" passHref legacyBehavior>*/}
          {/*    <Button*/}
          {/*      color="inherit"*/}
          {/*      startIcon={<LoginIcon />}*/}
          {/*      // onClick={logout}*/}
          {/*    >*/}
          {/*      Logout*/}
          {/*    </Button>*/}
          {/*  </Link>*/}
          {/*) : (*/}
            <Link href="/login" passHref legacyBehavior>
              <Button
                color="primary"
                sx={{
                  '&:hover': { color: theme.palette.error.main }
                }}
                startIcon={<LoginIcon />}
              >
                Login
              </Button>
            </Link>
          {/*)}*/}
        </Toolbar>
    </AppBar>
    </Box>
  );
};