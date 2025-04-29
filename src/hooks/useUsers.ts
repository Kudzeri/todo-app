import { useCallback, useEffect, useState } from "react";
import { User } from "../types/User";
import { createUser, deleteUser, fetchUser, fetchUsers } from "../api/users";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const addUser = useCallback((user: Omit<User, "id">) => {
    createUser(user)
      .then((newUser) => setUsers((prev) => [...prev, newUser]))
      .catch((err) => console.error("Error:", err));
  }, []);

  const removeUser = useCallback((id: number) => {
    deleteUser(id.toString())
    .then(() => {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    })
    .catch((err) => console.error("Error:", err));
  }, []);


  const fetchUserById  = useCallback((id: number) => {
    return fetchUser(id.toString())
    .then((user) => {
      setCurrentUser(user);
      return user;
    })
    .catch((err) => {
      console.error("Error:", err);
      return null;
    });
    },[]);

  return { users, currentUser, addUser, removeUser, fetchUserById  };
};
