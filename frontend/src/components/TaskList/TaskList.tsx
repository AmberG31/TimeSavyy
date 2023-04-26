import Task from "./Task";
import { type Task as TaskType } from "../../../../types/task";
import styles from "./TaskList.module.scss";

const fakeTasks: TaskType[] = [
  {
    id: 1,
    title: "sweep the floor",
    content: "have to do it before your mum comes back",
    due_date: "2023-04-26",
    is_completed: true,
    is_priority: false,
    createdAt: "2023-04-26T10:16:46.121Z",
  },
  {
    id: 2,
    title: "drink water",
    content: "8 glasses of water per day",
    due_date: "2023-02-24",
    is_completed: false,
    is_priority: true,
    createdAt: "2023-04-26T10:16:46.121Z",
  },
];

const TaskList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Tasks</h1>
      <div className={styles.list}>
        {fakeTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
