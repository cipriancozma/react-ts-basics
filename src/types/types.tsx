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
