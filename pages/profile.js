import Profile from "../components/Profile";
import { AuthProvider } from "../context/AuthContext";
const profile = () => {
  return (
    <>
      <AuthProvider>
        <Profile />
      </AuthProvider>
    </>
  );
};

export default profile;
