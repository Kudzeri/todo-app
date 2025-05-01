import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="flex justify-center items-center bg-gray-800 text-white p-4">
            <NavLink to="/" className="text-2xl font-bold mr-4">
                User Management 
            </NavLink>
        </header>
    );
}