import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import React from 'react'
import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

export const RegisterPage = () => {

  const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [(value) => value.length >= 8, 'La contrasena es muy corta'],
    name: [(value) => value.length >= 1, 'El nombre es obligatorio']
  }
  const { name, email, password, onInputChange, formState,
    isFormValid, nameValid, emailValid, passwordValid } = useForm({
      name: 'matias',
      email: 'matias@google.com',
      password: '123456'

    }, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState)
    console.log(nameValid )
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <form onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Nombre'
              type='text'
              placeholder='Matias'
              name='name'
              value={name}
              onChange={onInputChange}
              error={nameValid}
              helperText='El nombre es obligatorio'
              fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Correo'
              type='email'
              placeholder='correo@google.com'
              name='email'
              value={email}
              onChange={onInputChange}
              error={emailValid}
              helperText='El Correo es obligatorio'
              fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Contrasena'
              type='password'
              placeholder='Contrasena'
              name='password'
              value={password}
              onChange={onInputChange}
              error={passwordValid}
              helperText='La contrasena es obligatoria'
              fullWidth />
          </Grid>


          <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
            <Button type='submit' variant='contained' fullWidth  >Crear Cuenta</Button>
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
            <Typography>Ya tienes una cuenta ?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>

          </Grid>

        </Grid>


      </form>




    </AuthLayout>

  )
}


