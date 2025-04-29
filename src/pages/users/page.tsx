import React from "react";
import { useUsers } from "../../hooks/useUsers";
import { useUserForm } from "../../hooks/useUserForm";
import { UserForm } from "../../components/UserForm";
import { UserList } from "../../components/UserList";

export const UsersPage: React.FC = () => {
  const { users, addUser, removeUser } = useUsers();
  const { name, email, errors, setName, setEmail, handleSubmit } = useUserForm();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">Users:</h1>
      <UserForm
        name={name}
        email={email}
        errors={errors}
        onNameChange={setName}
        onEmailChange={setEmail}
        onSubmit={() => handleSubmit(({ name, email }) => addUser({ name, email }))}
      />
      <UserList users={users} onDelete={removeUser} />
    </div>
  );
};
