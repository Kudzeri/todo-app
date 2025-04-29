import { Route, Routes } from "react-router-dom"

fetch('http://localhost:3001/users').then(res => console.log(res))

const app = () => {
  return (
    <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/:userId/tasks" element={<h1>Tasks</h1>} />
    </Routes>
  )
}

export default app