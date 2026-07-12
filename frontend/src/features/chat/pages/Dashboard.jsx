import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import MessagePanel from "../components/MessagePanel";
import { useUser } from "../../user/hooks/useUser";

const Dashboard = () => {
  const { handleGetAllUsers, allUser } = useUser();

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  console.log(allUser);
  return (
    <div className="flex h-screen overflow-hidden gap-4 p-2">
      <div className="hidden md:block w-1/4">
        <Sidebar />
      </div>

      <div className="flex-1 min-w-0">
        <MessagePanel />
      </div>
    </div>
  );
};

export default Dashboard;
