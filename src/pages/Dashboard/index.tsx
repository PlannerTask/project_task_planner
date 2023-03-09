import React from "react";
import Footer from "../../components/Footer";
import { HeaderProfile } from "../../components/HeaderProfile";
import Search from "../../components/Search";
import TaskBoard from "../../components/TaskBoard";

const Dashboard = () => {
  return (
    <>
      <HeaderProfile />
      <main>
        <Search />
        <TaskBoard />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
