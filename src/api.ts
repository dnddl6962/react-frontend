import axios from 'axios';
import { QueryFunctionContext } from '@tanstack/react-query';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
});

export const getRooms = () => instance.get('rooms/').then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [, roomPk] = queryKey;
  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
};

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
  const [, roomPk] = queryKey;
  return instance.get(`rooms/${roomPk}/reviews`).then((response) => response.data);
};
