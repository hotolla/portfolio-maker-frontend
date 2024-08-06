'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { array, object, string } from 'yup';
import { Button, Typography, Stack, Box, Grid } from '@mui/material';
import * as authApi from '@/api/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@/components/TextField';
import { HeaderTypography } from '@/components/HeaderTypography';
import { Dropzone } from '@/components/Dropzone';

interface FormValues {
  firstName: string | null,
  lastName: string | null,
  address: string | null,
  workExperience: [] | null,
  education: [] | null,
  email: string | null,
  contactInfo: string | null,
  skills: string | null,
  avatar: string | null,
  projects: [] | null,
  languages: [] | null
}

const defaultValues = {
  firstName: '',
  lastName: '',
  address: '',
  workExperience: [],
  education: [],
  email: '',
  contactInfo: '',
  skills: '',
  avatar: '',
  projects: [],
  languages: []
};

const schema = object({
  firstName: string().nullable().required(),
  lastName: string().nullable().required(),
  address: string().nullable().required(),
  workExperience: array().required(),
  education: array().required(),
  email: string().nullable().email().required(),
  contactInfo: string().nullable().required(),
  skills: string().nullable().required(),
  avatar: string().nullable().required(),
  projects: array().required(),
  languages: array().required()
});

export default function CreatePortfolio() {
  const router = useRouter();
  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  });

  const handleSubmit = (values: FormValues) => {
    authApi.register(values)
      .then((data) => {
        router.push('/home');
      });
  };

  return (
    <Box>
      <HeaderTypography>
        Let&apos;s create your portfolio!
      </HeaderTypography>

      <Typography variant="body1" color="textSecondary" align="center" mt={2}>
        Enter your portfolio details in the form.
      </Typography>

      <Grid container justifyContent="center" alignItems="center" spacing={15}>
        <Grid item>
          <FormProvider {...form}>
            <Grid container direction="column" alignItems="center">

              <Grid item>
                <Stack
                  noValidate
                  spacing={2}
                  mt={4}
                  width={500}
                  alignItems="center"
                  component="form"
                  // onSubmit={preventDefault(form.handleSubmit(handleSubmit))}
                >
                  <TextField
                    required
                    name="firstName"
                    label="First name"
                    placeholder="Enter first name ..."
                    variant="outlined"
                  />

                  <TextField
                    required
                    name="lastName"
                    label="Last name"
                    placeholder="Enter last name ..."
                    variant="outlined"
                  />

                  <TextField
                    required
                    name="address"
                    label="Address"
                    placeholder="Enter address ..."
                    variant="outlined"
                  />

                  <TextField
                    required
                    type="email"
                    name="email"
                    label="E-mail address"
                    placeholder="Enter e-mail ..."
                  />

                  <TextField
                    required
                    name="contactInfo"
                    label="Contact info"
                    placeholder="Enter contact information ..."
                  />

                  <TextField
                    required
                    name="skills"
                    label="Skills"
                    placeholder="Enter skills ..."
                  />

                  <Dropzone/>

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                  >
                    Apply
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Box>
  );
};
