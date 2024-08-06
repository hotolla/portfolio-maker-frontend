import React from 'react';
import Link from 'next/link';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { HeaderTypography } from '@/components/HeaderTypography';

export default async function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(view.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 1,
          overflow: 'hidden',
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(2px)',
            zIndex: 1
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center'
          }}
        >
          <HeaderTypography sx={{ fontWeight: 800, color: 'error.main', fontSize: '2.5rem' }}>
            Welcome to Portfolio Maker!
          </HeaderTypography>
          <Typography variant="h6" align="center" gutterBottom>
            Your one-stop solution for creating professional and stunning portfolios.
            Whether you are an artist, designer, photographer,or any creative professional,
            we are here to help you showcase your work in the most compelling way possible.
          </Typography>
        </Box>
      </Box>

      <HeaderTypography>
        Get Started Today!
      </HeaderTypography>

      <Box textAlign="center">
        <Link href="/create-portfolio" passHref legacyBehavior>
          <Button variant="contained" color="error">
            CREATE PORTFOLIO
          </Button>
        </Link>
      </Box>

      <HeaderTypography>
        Our Services
      </HeaderTypography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Custom Portfolio Creation
              </Typography>
              <Typography variant="body1">
                We specialize in creating custom portfolios tailored to your specific needs.
                You can use templates yourself or with our personal help to develop a portfolio
                that will highlight your skills, experience and unique style.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Template-Based Portfolios
              </Typography>
              <Typography variant="body1">
                For those who need a quick and easy solution, we offer a wide range of pre-designed templates.
                Choose from our collection and customize it to fit your needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Portfolio Maintenance and Updates
              </Typography>
              <Typography variant="body1">
                Keep your portfolio up-to-date with our maintenance services.
                Whether you need to add new projects, update your bio, or make design tweaks, we’ve got you covered.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <HeaderTypography>
        What We Offer
      </HeaderTypography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Beautiful, Professional Designs
              </Typography>
              <Typography variant="body1">
                Our portfolios are designed to impress. With a focus on aesthetics and functionality,
                we create portfolios that not only look great but also effectively communicate your
                skills and achievements.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                User-Friendly Experience
              </Typography>
              <Typography variant="body1">
                We prioritize user experience in our designs. Your portfolio will be easy to navigate,
                ensuring that visitors can quickly find the information they need.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                SEO and Performance Optimized
              </Typography>
              <Typography variant="body1">
                Our portfolios are built with SEO best practices in mind. This means better search engine rankings
                and more visibility for your work. Plus, we optimize for performance to ensure fast loading times.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4}>
        <HeaderTypography>
          Contact Us
        </HeaderTypography>
        <Typography variant="body1">
          Email: info@portfoliomaker.com
        </Typography>
        <Typography variant="body1">
          Phone: (123) 456-7890
        </Typography>
        <Typography variant="body1">
          Address: 123 Creative Avenue, Design City, DC 12345
        </Typography>
      </Box>
    </Container>
  );
};
