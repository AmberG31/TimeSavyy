import { FormEvent, useState } from "react";

const TaskForm = () => {
  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    console.log({ title: titleInput, content: contentInput });
    setTitleInput("");
    setContentInput("");
  };

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  return (
    <>
      <form onSubmit={handleClick}>
        <label>
          Title
          <input
            id="title"
            type="text"
            value={titleInput}
            onChange={(event) => setTitleInput(event.target.value)}
          />
        </label>
        <label>
          Content
          <input
            id="content"
            type="text"
            value={contentInput}
            onChange={(event) => setContentInput(event.target.value)}
          />
        </label>
        <input type="submit" value="Add task" />
      </form>
      <h2>
        Title:{titleInput}
        {contentInput}
      </h2>
    </>
  );
};

export default TaskForm;
