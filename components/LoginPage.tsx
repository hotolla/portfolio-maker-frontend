import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';
import { Yup } from '@/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { Button, Typography, Container, Stack } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import * as authApi from '@/api/auth';
import { TextField } from '@/components/TextField';
import { useAuth } from '@/components/AuthProvider';

interface FormValues {
  email: string | null,
  password: string | null
}

const defaultValues = {
  email: '',
  password: ''
};

const validationSchema = Yup.object({
  email: Yup.string().nullable().required(),
  password: Yup.string().nullable().required()
});

export const LoginPage = () => {
  const [ isError, setIsError ] = useState(false);
  const router = useRouter();
  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema)
  });
  const { login } = useAuth();

  const userMutation = useMutation({
    mutationFn: (formData: FormValues) => {
      return authApi.login(formData);
    }
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const data = await userMutation.mutateAsync(values);
      console.log(data);
      login(data);
      router.push('/home');
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <Container maxWidth="xs">
      <FormProvider {...form}>
        <Stack sx={{ alignItems: 'center' }}>
          <LockOpenIcon  color="primary" fontSize="large"/>

          <Typography variant="h5" color="primary" mt={1}>
            Login to account:
          </Typography>
        </Stack>

        <Stack
          noValidate
          spacing={2}
          mt={4}
          component="form"
          onSubmit={(form.handleSubmit(handleSubmit))}
        >
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

          {isError &&
            <>
              <Typography align="center" color="error">
                Login details are not correct
              </Typography>
            </>
          }

          <Button
            type="submit"
            variant="contained"
            size="large"
          >
            Login
          </Button>

          <Typography>
            <Link href="/registration" style={{ textDecoration: 'none' }}>Forgot your password?</Link>
          </Typography>

          <Typography>
            <Link href="/registration" style={{ textDecoration: 'none' }}>Register a new account?</Link>
          </Typography>
        </Stack>
      </FormProvider>
    </Container>
  );
};
