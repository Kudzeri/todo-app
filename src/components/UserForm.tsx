interface Props {
  name: string;
  email: string;
  errors: string[];
  onNameChange: (v: string) => void;
  onEmailChange: (v: string) => void;
  onSubmit: () => void;
}

export const UserForm: React.FC<Props> = ({
  name, email, errors,
  onNameChange, onEmailChange,
  onSubmit
}) => (
  <form onSubmit={e => { e.preventDefault(); onSubmit(); }}
        className="border-2 w-68 items-center p-4 border-gray-300 rounded-md shadow-sm mb-4">
    <div className="mb-4 flex gap-3 justify-center">
      <label htmlFor="name" className="text-xl">Name:</label>
      <input id="name" value={name}
             onChange={e => onNameChange(e.target.value)}
             className="border-black border-2" />
    </div>
    <div className="mb-4 flex gap-3 justify-center">
      <label htmlFor="email" className="text-xl">Email:</label>
      <input type="email" id="email" value={email}
             onChange={e => onEmailChange(e.target.value)}
             className="border-black border-2" />
    </div>
    <button type="submit"
      className="border-2 rounded-md bg-black text-white p-2 hover:bg-gray-800 active:bg-white active:text-black transition-colors duration-300 justify-center w-full">
      Submit
    </button>
    {errors.length > 0 && (
      <div className="mt-4 p-4 border border-red-300 bg-red-100 text-red-700 rounded-md max-w-64 text-center">
        <ul>
          {errors.map((err,i) => <li key={i}>{err}</li>)}
        </ul>
      </div>
    )}
  </form>
);
