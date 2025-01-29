import "./App.css";
import React, { useState } from "react";
import Task from "./components/task";

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      {
        id: 1,
        title: "Dishes",
        description: "Empty dishwasher",
        deadline: "Today",
        priority: "medium",
        priorityColor: "orange",
        done: false,
      },
      {
        id: 2,
        title: "Laundry",
        description: "Fold clothes and put away",
        deadline: "Tomorrow",
        priority: "low",
        priorityColor: "green",
        done: false,
      },
      {
        id: 3,
        title: "Tidy up",
        description: "Organize living room",
        deadline: "Today",
        priority: "high",
        priorityColor: "red",
        done: false,
      },
    ],
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
  }

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          priorityColor={task.priorityColor}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}

        />
      ))}
    </div>
  );
}

export default App;
