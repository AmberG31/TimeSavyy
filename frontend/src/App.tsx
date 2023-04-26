import "./App.scss";
import { Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import MainLayout from "./components/Layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<h1>hello world!</h1>} />
          <Route path="/tasks">
            <Route path="" element={<TaskList />} />
            <Route path="add" element={<TaskForm />} />
          </Route>
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
