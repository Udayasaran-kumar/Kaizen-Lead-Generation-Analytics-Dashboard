import { Navigate } from "react-router-dom";
import { auth } from "../components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
