import { FC, ReactNode } from "react";
import { CourseGoalList } from "../types/types";
import Goal from "./Goal";
import InfoBox from "./InfoBox";

const GoalList: FC<CourseGoalList> = ({ goals, handleDelete }) => {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no goals yet.</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Too many goals.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal id={goal.id} title={goal.title} handleDelete={handleDelete}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GoalList;
