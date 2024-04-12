// Core
import { Navigate, Route, Routes as Router } from "react-router-dom";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { ProtectedRoute } from "./PrivateRoute";

export const Routes = () => {
  return (
    <Router>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route
        path="/profile"
        element={<ProtectedRoute children={<ProfilePage />} />}
      />
      <Route path="" element={<Navigate to="/profile" />} />
    </Router>
  );
};
