import { FC } from "react";
import { CourseGoalList } from "../types/types";
import Goal from "./Goal";

const GoalList: FC<CourseGoalList> = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal title={goal.title}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
