import { useCallback, useEffect, useState } from "react";
import { User } from "../types/User";
import { createUser, deleteUser, fetchUsers } from "../api/users";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, []);

  const addUser = useCallback((user: Omit<User, "id">) => {
    setLoading(true);
    createUser(user)
      .then((newUser) => setUsers((prev) => [...prev, newUser]))
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, []);

  const removeUser = useCallback((id: number) => {
    setLoading(true);
    deleteUser(id.toString())
      .then(() => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      })
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false)); 
  }, []);

  return { users, addUser, removeUser, loading };
};
