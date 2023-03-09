import React from "react";
import Footer from "../../components/Footer";
import { HeaderProfile } from "../../components/HeaderProfile";
import Search from "../../components/Search";
import TaskBoard from "../../components/TaskBoard";

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
