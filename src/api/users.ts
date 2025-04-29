import api, { request } from './client';
import { NewUser, User } from '../types/User';

export const fetchUsers = (): Promise<User[]> =>
  request(api.get<User[]>('/users'));

export const fetchUser = (id: string): Promise<User> =>
    request(api.get<User>(`/users/${id}`));

export const createUser = (user: NewUser): Promise<User> =>
  request(api.post<User>("/users", user));

export const deleteUser = (id: string): Promise<void> =>
  request(api.delete<void>(`/users/${id}`));
