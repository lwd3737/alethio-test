import client from './client';

export const getOrderItems = async (pageNumber) => {
  const res = await client.get(`/order?page=${pageNumber}`);
  return res.data;
};

export const getOrderItem = async (orderId) => {
  const res = await client.get(`/order/${orderId}`);
  return res.data;
};
