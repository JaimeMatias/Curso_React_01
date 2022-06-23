import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import React from 'react'
import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useSelector,useDispatch} from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPages = () => {
  const {status}=useSelector((state)=>state.auth)// Me devuelve el valor del estado del redux 
  const dispatch = useDispatch();
  const {email,password,onInputChange}= useForm({
    email:'matias@google.com',
    password:'123456'

  });

  const onSubmit=(event) =>{
    event.preventDefault();
    console.log({email,password})
    console.log(status)
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn =() =>{
    console.log('On googleSign iN')
    dispatch(startGoogleSignIn())
  }
  return (
    <AuthLayout title='Inicio de Sesion'>
          <form onSubmit={onSubmit}>
            <Grid container>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField label='Correo'
                  type='email'
                  placeholder='correo@google.com'
                  fullWidth 
                  name='email'
                  value={email}
                  onChange={onInputChange}/>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField label='Contrasena'
                  type='password'
                  placeholder='Contrasena'
                  fullWidth 
                  name='password'
                  value={password}
                  onChange={onInputChange}/>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Button type="submit" variant='contained' fullWidth  >Login</Button>
                </Grid>


                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth  onClick={onGoogleSignIn}>
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>

                  </Button>
                </Grid>
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Link component={RouterLink} color='inherit' to='/auth/register'>
                  Crear una cuenta
                </Link>

              </Grid>

            </Grid>


          </form>


 
     
    </AuthLayout>

  )
}


