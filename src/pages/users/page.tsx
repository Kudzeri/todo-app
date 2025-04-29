import React, { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useUserForm } from "../../hooks/useUserForm";
import { UserForm } from "../../components/UserForm";
import { UserList } from "../../components/UserList";

export const UsersPage: React.FC = () => {
  const { users, addUser, removeUser } = useUsers();
  const { name, email, errors, setName, setEmail, handleSubmit } = useUserForm();

  // Стейт для переключения формы
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">Users:</h1>

      {/* Кнопка-тоггл */}
      <button
        onClick={() => setShowForm(prev => !prev)}
        className="mb-4 px-4 py-2 bg-black text-white rounded-md active:bg-white active:text-black border-2 transition"
      >
        {showForm ? "Close" : "Add User"}
      </button>

      {showForm && (
        <UserForm
          name={name}
          email={email}
          errors={errors}
          onNameChange={setName}
          onEmailChange={setEmail}
          onSubmit={() => {
            handleSubmit(({ name, email }) => {
              addUser({ name, email });
              // setShowForm(false);
            });
          }}
        />
      )}

      <UserList users={users} onDelete={removeUser} />
    </div>
  );
};
