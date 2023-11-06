import { FC } from "react";
import { CourseGoalList } from "../types/types";
import Goal from "./Goal";

const GoalList: FC<CourseGoalList> = ({ goals, handleDelete }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal id={goal.id} title={goal.title} handleDelete={handleDelete}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
