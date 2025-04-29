import { User } from "../types/User";

interface Props { users: User[]; }

export const UserList: React.FC<Props> = ({ users }) => (
  <div className="flex flex-col gap-2">
    {users.map(u => (
      <div key={u.id} className="p-4 border border-gray-300 rounded-md shadow-sm max-w-48">
        <h2 className="text-xl font-semibold">{u.name}</h2>
        <p className="text-gray-600">{u.email}</p>
      </div>
    ))}
  </div>
);
