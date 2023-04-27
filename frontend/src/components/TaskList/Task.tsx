import styles from "./Task.module.scss";
import { type Task as TaskType } from "../../../../types/task";

type Props = {
  task: TaskType;
};

const Task = ({ task }: Props) => {
  const { title, content, is_completed, is_priority, createdAt } = task;
  return (
    <div className={styles.container}>
      <div className={styles.container_left_wrapper}>
        <div className={styles.tick_wrapper}>
          {is_completed && <p className={styles.tick}>√</p>}
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.title_wrapper}>
            <h2 className={styles.title}>{title}</h2>
            {is_priority && <div className={styles.tag}>priority</div>}
          </div>
          <p>{content}</p>
        </div>
      </div>
      <div className={styles.container_right_wrapper}>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default Task;
