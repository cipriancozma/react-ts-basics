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

const Goal: FC<GoalProps> = ({
  id,
  title,
  description,
  children,
  handleDelete,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {children}
      </div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </article>
  );
};

export default Goal;
