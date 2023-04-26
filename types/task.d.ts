export interface Task {
  id: number;
  title: string;
  content: string;
  is_completed: boolean;
  is_priority: boolean;
  due_date: string;
  createdAt: string;
}

export interface TaskInput {
  title: string;
  content: string;
  due_date: string;
  user_id: number;
}
