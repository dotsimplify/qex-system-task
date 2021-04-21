import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Login from "../components/login";
import Footer from "../components/Footer";
const login = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Login />
        <Footer />
      </AuthProvider>
    </>
  );
};

export default login;
