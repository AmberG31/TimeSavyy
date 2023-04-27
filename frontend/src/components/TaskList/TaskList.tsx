import Task from "./Task";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { type Task as TaskType } from "../../../../types/task";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  const fetchData = async (): Promise<TaskType[]> => {
    const res = await axios.get("http://localhost:8081/tasks/1");
    return res.data;
  };

  const { data, status } = useQuery(["tasks"], fetchData);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Tasks</h1>
      <div className={styles.list}>
        {status === "success" &&
          data.map((task) => <Task key={task.id} task={task} />)}
      </div>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Something went wrong</p>}
    </div>
  );
};

export default TaskList;
