import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { CourseGoal } from "./types/types";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
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
      <NewGoal handleAddGoal={handleAddGoal} />
      <GoalList goals={goals} handleDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
