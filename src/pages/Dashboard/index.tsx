import React from "react";
import Footer from "../../Components/Footer";
import { HeaderProfile } from "../../components/HeaderProfile";
import Search from "../../Components/Search";
import TaskBoard from "../../Components/TaskBoard";

const Dashboard = () => {
  return (
    <>
      <HeaderProfile />
      <body>
        <Search />
        <TaskBoard />
      </body>
      <Footer />
    </>
  );
};

export default Dashboard;
