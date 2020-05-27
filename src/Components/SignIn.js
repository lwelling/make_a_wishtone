import React, { useState } from 'react';
import { signInWithGoogle } from '../firebase';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setCredentials({ email: '', password: '' });
  };

    const { email, password } = credentials;

    return (
      <form className="SignIn" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input autoComplete="true"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input autoComplete="true"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input autoComplete="true" type="submit" value="Sign In" />
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </form>
    );
}

export default SignIn;