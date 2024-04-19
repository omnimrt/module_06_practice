// src/components/Task/Task.jsx

// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from "../../Redux/actions";

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id)); // Викликаємо генератор екшену // Відправляємо результат - екшен перемикання статусу завдання

  // та передаємо ідентифікатор завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div>
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>{task.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
