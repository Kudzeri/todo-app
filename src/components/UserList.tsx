import { User } from "../types/User";

interface Props {
  users: User[];
  onDelete: (id: number) => void;
}

export const UserList: React.FC<Props> = ({ users, onDelete }) => (
  <div className="flex flex-col gap-2">
    {users.map((u) => (
      <div
        key={u.id}
        className="p-4 border border-gray-300 rounded-md shadow-sm max-w-48"
      >
        <h2 className="text-xl font-semibold">{u.name}</h2>
        <p className="text-gray-600">{u.email}</p>
        <button
          onClick={() => onDelete(u.id)}
          className="bg-red-700 text-white border-2 rounded-md p-0.5 active:bg-red-800 shadow-2xl hover:bg-red-600 transition-colors duration-300 mt-2"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

