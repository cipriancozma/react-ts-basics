import { FormEvent, useRef } from "react";
import { NewGoalProps } from "../types/types";

const NewGoal = ({ handleAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const goalEntered = goal.current!.value;
    const summaryEntered = summary.current!.value;

    e.currentTarget.reset();

    if (goalEntered && summaryEntered) {
      handleAddGoal(goalEntered, summaryEntered);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
