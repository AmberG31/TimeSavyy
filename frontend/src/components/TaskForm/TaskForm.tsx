import { FormEvent, useState } from "react";
import styles from "./TaskForm.module.scss";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TaskInput } from "../../../../types/task";

const TaskForm = () => {
  const navigate = useNavigate();
  const mutation = useMutation((newTask: TaskInput) => {
    return axios.post("http://localhost:8081/tasks", newTask);
  });

  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    const data: TaskInput = {
      title: nameInput,
      due_date: dueDateInput,
      content: contentInput,
      user_id: 1,
    };
    mutation.mutate(data);
    setNameInput("");
    setDueDateInput("");
    setContentInput("");
    setIsSuccess(true);
    navigate("/tasks");
  };

  const [nameInput, setNameInput] = useState("");
  const [dueDateInput, setDueDateInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <form className={styles.container} onSubmit={handleClick}>
        <h1 className={styles.title}>Add Task</h1>
        <label htmlFor="title" className={styles.names}>
          Name
        </label>
        <input
          className={styles.inputName}
          id="title"
          type="text"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <label htmlFor="dueDate" className={styles.names}>
          Due date
        </label>
        <input
          className={styles.inputName}
          id="dueDate"
          type="text"
          value={dueDateInput}
          onChange={(event) => setDueDateInput(event.target.value)}
        />
        <textarea
          className={styles.content}
          id="content"
          placeholder="Add the description"
          value={contentInput}
          rows={10}
          onChange={(event) => setContentInput(event.target.value)}
        />
        <input
          className={`${styles.btn} ${styles.bttnAdd}`}
          type="submit"
          value="Add task"
        />
        <button
          data-cy="cancelButton"
          className={`${styles.btn} ${styles.bttnCancel}`}
          type="button"
        >
          Cancel
        </button>
        {isSuccess && <p id="successMessage">Task created</p>}
      </form>
    </>
  );
};

export default TaskForm;
