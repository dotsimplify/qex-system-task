import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Login from "../components/login";
const login = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Login />
      </AuthProvider>
    </>
  );
};

export default login;
