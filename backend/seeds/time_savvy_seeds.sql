TRUNCATE TABLE users,
tasks,
comments,
diaries RESTART IDENTITY CASCADE;

INSERT INTO
  users (email, username, password)
VALUES
  ('user@email.com', 'user1', 'password1'),
  ('user2@email.com', 'user2', 'password2');

INSERT INTO
  tasks (
    user_id,
    title,
    content,
    is_completed,
    is_priority,
    due_date
  )
VALUES
  (
    '1',
    'loundry',
    'wash the clothes',
    'false',
    'false',
    '2023-02-21'
  ),
  (
    '2',
    'make the bed',
    '-',
    'true',
    'false',
    'null'
  );

INSERT INTO
  diaries (
    title,
    content,
    views,
    is_public,
    user_id
  )
VALUES
  (
    'Monday entry',
    'Today is a beautiful day',
    '2',
    'false',
    '1'
  ),
  (
    'Tuesday entry',
    'Today is raining',
    '1',
    'false',
    '1'
  );

INSERT INTO
  comments (content, user_id, diary_id)
VALUES
  ('have a good monday', '1', '1');