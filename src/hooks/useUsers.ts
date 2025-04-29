import { useCallback, useState } from "react";
import { User } from "../types/User";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = useCallback((user: Omit<User, "id">) => {
    setUsers((prev) => [...prev, { id: prev.length + 1, ...user }]);
  }, []);

  const removeUser = useCallback((id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    }, []);

  return { users, addUser, removeUser };
};
