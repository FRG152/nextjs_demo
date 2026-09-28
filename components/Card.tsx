import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="p-4 rounded-sm">{children}</div>;
};

export default Card;
