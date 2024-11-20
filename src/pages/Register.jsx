import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegisterUserMutation } from '../redux/features/auth/authapi';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [registerUser] = useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formdata = {
        email,
        username,
        password,
      };
      console.log('Form data:', formdata);

      const res = await registerUser(formdata).unwrap();
      console.log('Response:', res);
      alert(res.message || 'Registered successfully!');
    } catch (error) {
      console.error('Error occurred:', error);
      setMessage(error.data?.message || 'An unexpected error occurred');
    }
  };

  return (
    <div>
      <div className="max-w-sm bg-white mx-auto p-8 mt-36">
        <h2 className="text-2xl font-semibold pt-5 text-center">Please Register</h2>
        <form onSubmit={handleSubmit} className="space-y-5 mx-w-sm mx-auto pt-8">
          <input
            type="text"
            className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="email"
            className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
          <input
            type="password"
            className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />
          {message && <p className="text-red-500 text-xs">{message}</p>}
          <button className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md">
            Register
          </button>
          <p className="my-5 text-center">
            Already have an account?{' '}
            <Link className="text-red-700" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
