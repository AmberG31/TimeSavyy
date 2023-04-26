import { FormEvent, useState } from "react";
import styles from "./TaskForm.module.scss";

const TaskForm = () => {
  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    console.log({
      name: nameInput,
      dueDate: dueDateInput,
      content: contentInput,
    });
    setNameInput("");
    setDueDateInput("");
    setContentInput("");
  };

  const [nameInput, setNameInput] = useState("");
  const [dueDateInput, setDueDateInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  return (
    <>
      <form className={styles.container} onSubmit={handleClick}>
        <h1 className={styles.title}>Add Task</h1>
        <label htmlFor="title" className={styles.names}>
          Name
          <input
            className={styles.inputName}
            id="title"
            type="text"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
          />
        </label>
        <label htmlFor="dueDate" className={styles.names}>
          Due date
          <input
            className={styles.inputName}
            id="dueDate"
            type="text"
            value={dueDateInput}
            onChange={(event) => setDueDateInput(event.target.value)}
          />
        </label>
        <input
          className={styles.content}
          id="content"
          type="text"
          placeholder="Add the description"
          value={contentInput}
          onChange={(event) => setContentInput(event.target.value)}
        />
        <input
          className={`${styles.btn} ${styles.bttnAdd}`}
          type="submit"
          value="Add task"
        />
        <input
          className={`${styles.btn} ${styles.bttnCancel}`}
          type="submit"
          value="Cancel"
        />
      </form>
      <h2>
        {nameInput}
        {dueDateInput}
        {contentInput}
      </h2>
    </>
  );
};

export default TaskForm;
