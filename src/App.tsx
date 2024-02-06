import React, { useState } from 'react';

const Login: React.FC = () => {

  // states for fields email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // state for erros
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // handler on form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // email validation logic using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // logic for regex-expression.test(val)
    if (!emailRegex.test(email)) {
      setEmailError('Enter a valid email address');
      setSuccessMessage('');
      return;
    } else {
      setEmailError('');
    }

    // password validation log
    if (password.length < 8) {
      setPasswordError('Password should have atleast 8 characters');
      setSuccessMessage('');
      return;
    } else {
      setPasswordError('');
    }

    // upon success validation
    setSuccessMessage('Login successful!');
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-black mt-20">
      <h2 className="text-2xl font-semibold mb-4">Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-black rounded"
          />
          {emailError && <p className="text-red-600">{emailError}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-black rounded"
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <button type="submit" className="bg-fuchsia-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
    </div>
  );
};

export default Login;
