import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import React from 'react'
import AuthLayout from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
          <form>
            <Grid container>
              
            <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField label='Nombre'
                  type='text'
                  placeholder='Matias'
                  fullWidth />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField label='Correo'
                  type='email'
                  placeholder='correo@google.com'
                  fullWidth />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField label='Contrasena'
                  type='password'
                  placeholder='Contrasena'
                  fullWidth />
              </Grid>

              
                <Grid item xs={12} sm={12} sx={{mt:2}}>
                  <Button variant='contained' fullWidth  >Crear Cuenta</Button>
                </Grid>

              <Grid container direction='row' justifyContent='end' sx={{mt:1}}>
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


