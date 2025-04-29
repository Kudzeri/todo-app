import { Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/users";
import { TasksPage } from "../pages/tasks";

const app = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/:userId/tasks" element={<TasksPage />} />
    </Routes>
  );
};

export default app;
