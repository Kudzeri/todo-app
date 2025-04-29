import { Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/users";
import { TasksPage } from "../pages/tasks";

fetch("http://localhost:3001/users").then((res) => console.log(res));

const app = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/:userId/tasks" element={<TasksPage />} />
    </Routes>
  );
};

export default app;
