import Task from "./Task";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  return (
    <div>
      <h1>My Tasks</h1>
      <div className={styles.task_list_container}>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default TaskList;
