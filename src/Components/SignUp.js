import React, { useState } from 'react';

const SignUp = () => {
  const [credentials, setCredentials] = useState({ displayName: '', email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setCredentials({ displayName: '', email: '', password: '' });
  };

    const { displayName, email, password } = credentials;

    return (
      <form className="SignUp" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={handleChange}
          autoComplete="true"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          autoComplete="true"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          autoComplete="true"
        />
        <input type="submit" value="Sign Up" />
      </form>
    );
}

export default SignUp;