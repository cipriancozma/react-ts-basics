import { ReactNode } from "react";

export type GoalProps = {
  id: number;
  title: string;
  description?: string;
  children: ReactNode;
  handleDelete: (id: number) => void;
};

interface ImageProps {
  src: string;
  alt: string;
}

export type HeaderProps = {
  image: ImageProps;
  children: ReactNode;
};

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export type CourseGoalList = {
  goals: CourseGoal[];
  handleDelete: (id: number) => void;
};

export type NewGoalProps = {
  handleAddGoal: (goal: string, summary: string) => void;
};

export type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

export type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

export type InfoBoxProps = HintBoxProps | WarningBoxProps;
