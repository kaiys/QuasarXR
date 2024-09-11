import { SignupFormSchema, SignupFormState, LoginFormState } from '@/app/lib/definitions';

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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      })
    });

    if ( !response.ok ) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    console.log('login successful / result:', data, response );
  } catch (error) {
    console.error(error);
    newState.errors = { message : [ 'Login failed, please try again' ] };
  }
  return newState;
}