import React, { useEffect } from "react";
import { useCheckAuth } from "../client/core/auth/hooks/useCheckAuth";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { onCheckAuth } = useCheckAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // onCheckAuth();
    } else {
      navigate("/sign-in");
    }
  }, []);

  return <>{children}</>;
};
