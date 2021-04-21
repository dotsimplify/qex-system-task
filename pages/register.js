import Navbar from "../components/Navbar";

import Register from "../components/Register";
import { AuthProvider } from "../context/AuthContext";
const main = (props) => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Register />
      </AuthProvider>
    </>
  );
};

export default main;
