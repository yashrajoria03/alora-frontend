import React, { useContext, useEffect } from "react";
// import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import { ToastContainer } from "react-toastify";
import Featured from "../../components/featured/Featured";
// import AuthContext from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <Announcement />
      <Featured />
    </div>
  );
};

export default Home;
