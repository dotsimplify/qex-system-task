import Forgot from "../components/forgotPassword";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
const ResetPassword = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Forgot />
      </AuthProvider>
    </>
  );
};

export default ResetPassword;
