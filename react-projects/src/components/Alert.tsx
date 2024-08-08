import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// passing children component example
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary text-center">{children}</div>;
};

export default Alert;
