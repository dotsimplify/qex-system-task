import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Modal from "react-modal";
const Profile = () => {
  const { currentUser } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
        className="p-2 outline-none focus:outline-none block lg:inline text-center font-semibold rounded-lg hover:bg-gray-500 bg-gray-800 text-white"
      >
        Apply for Job
      </button>

      <Modal
        style={{
          overlay: {
            backgroundColor: "#000",
          },
        }}
        isOpen={openModal}
        onRequestClose={() => {
          setOpenModal(false);
        }}
      >
        <div className="min-h-screen flex">
          <div className="m-auto">
            <div>Детали профиля</div>
            <div className="m-auto">{currentUser && currentUser.email}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Profile;
