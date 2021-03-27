import client from './client';

export const signup = async ({ email, password, mobile }) => {
  const res = await client.post('/sign-up', {
    email,
    password,
    mobile,
  });
  return res.data;
};

export const login = async ({ email, password }) => {
  const res = await client.post('/login', {
    email,
    password,
  });
  return res.data;
};
