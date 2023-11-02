import { FC } from "react";
import { GoalProps } from "../types/types";

// export default function Goal({ title, description, children }: GoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {description && <p>{description}</p>}
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

const Goal: FC<GoalProps> = ({ title, description, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default Goal;
