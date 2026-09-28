import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 leading-relaxed text-zinc-700 shadow-sm transition-shadow duration-300 hover:shadow-md motion-reduce:transition-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:shadow-none">
      {children}
    </div>
  );
};

export default Card;
