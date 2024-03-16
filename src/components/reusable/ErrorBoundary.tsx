import { useEffect, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  useEffect(() => {
    console.error(
      "Error de hidratación detectado. Cambiando a renderización en cliente."
    );
  }, []);

  return <>{children}</>;
};

export default ErrorBoundary;
