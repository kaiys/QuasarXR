import { SignupFormSchema, SignupFormState, LoginFormState } from '@/app/lib/definitions';
import { redirect, useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export async function signup(state: SignupFormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  } );
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    // return {
    //   errors: validatedFields.error.flatten().fieldErrors,
    // }
  }
 
  // Call the provider or db to create a user...

  const newState : LoginFormState = {};
  console.log( formData.get('username'), formData.get('email'), formData.get('password') )
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password')
      })
    });
  
    if ( !response.ok ) {
      console.log( response );
      throw new Error('Signup failed');
    }  
    const data = await response.json();
    console.log('result:', data);
  } catch ( err ) {
    console.error(err);
    newState.errors = { message : [ 'Login failed, please try again' ] };
  }
  return newState;
}

export async function login( state: LoginFormState, formData : FormData ) {
  const newState : LoginFormState = {};

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      })
    });
    const data = await response.json();

    if ( !response.ok ) {
      newState.errors = { message : [ 'Login failed' ], email : data.email, password : data.password };
      console.log('login failed / result:', data, response, newState );
      return newState;
    }

    newState.redirect = '/dashboard';

    console.log('login successful / result:', data, response, newState );
  } catch (error) {
    console.error(error);
    newState.errors = { message : [ 'Login failed, fetch api failed' ] };
  }

  return newState;
}

export async function logout() {
}