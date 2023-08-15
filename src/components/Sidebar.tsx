import React from "react";
import TagsList from "./TagsList";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Profile />
        <TagsList />
      </div>
    </div>
  );
};

export default Sidebar;
