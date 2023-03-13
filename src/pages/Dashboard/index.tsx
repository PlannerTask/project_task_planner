import {Footer} from "../../components/Footer";
import { HeaderProfile } from "../../components/HeaderProfile";
import {Search} from "../../components/Search";
import {TaskBoard} from "../../components/TaskBoard";

export const Dashboard = () => {
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


