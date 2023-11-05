import { useState } from "react";
import "./App.css";
import Goal from "./components/Goal";
import Header from "./components/Header";
import { CourseGoal } from "./types/types";

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn TS",
        description: "Learn it in depth",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header
        image={{
          src: "https://images.unsplash.com/photo-1698570493404-ee2c4f1fc498?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "My goals",
        }}
      >
        <h1>Your Goals</h1>
      </Header>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal title={goal.title}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>

      <button onClick={handleAddGoal}>Add goal</button>
    </main>
  );
}

export default App;
