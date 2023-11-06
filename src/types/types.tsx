import { ReactNode } from "react";

export type GoalProps = {
  title: string;
  description?: string;
  children: ReactNode;
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
};
