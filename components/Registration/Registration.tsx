'use client';

import { useForm, FormProvider } from 'react-hook-form';
import Link from 'next/link';
import { object, string } from 'yup';
import { Button, Typography, Stack, Grid } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import * as authApi from '@/api/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@/components/TextField';
import { useAuth } from '@/components/AuthProvider';
import { preventDefault } from '@/helpers/preventDefault';

interface FormValues {
  name: string | null,
  email: string | null,
  password: string | null,
  confirmPassword: string | null
}

const defaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const schema = object({
  name: string().nullable().required(),
  email: string().nullable().email().required(),
  password: string().nullable().required(),
  confirmPassword: string().nullable().required()
});

export const Registration = async () => {
   const form = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const { register } = useAuth();

  const handleSubmit = (values: FormValues) => {
    authApi.register(values)
    .then((data) => {
      register(data);
        // router.push('/home');
      });
  };
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={15}>
        <Grid item>
          <FormProvider {...form}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Stack alignItems="center">

                  <HowToRegIcon color="primary" fontSize="large"/>

                  <Typography variant="h5" color="primary" mt={1}>
                    Registering an account:
                  </Typography>
                </Stack>
              </Grid>

              <Grid item>
                <Stack
                  noValidate
                  spacing={2}
                  mt={4}
                  width={500}
                  alignItems="center"
                  component="form"
                  onSubmit={preventDefault(form.handleSubmit(handleSubmit))}
                >
                  <TextField
                    required
                    name="name"
                    label="Name"
                    placeholder="Enter name ..."
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
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter password ..."
                  />

                  <TextField
                    required
                    type="password"
                    name="confirmPassword"
                    label="Repeat password"
                    placeholder="Enter password ..."
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                  >
                    Register
                  </Button>

                  <Typography>
                    Already have an account?
                    <Link href="/login" style={{ marginLeft: 4 }}>Log in</Link>
                  </Typography>
                </Stack>
              </Grid>
              </Grid>
          </FormProvider>
        </Grid>
      </Grid>
  );
};

