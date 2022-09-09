import React from "react";
import { Button, SideNavigation } from "@awsui/components-react";
import { menuItems } from "../helpers/constants";



const MenuLateral = () => {
  return (
    <div className="">
      <SideNavigation activeHref="repositories" items={menuItems} header={{text: "CodeCommit", href: ""}} />
      <div className="menuButtons">
        <Button className="menuButton" iconName="search" >Go to resource</Button>
        <Button className="menuButton" iconName="envelope" >Feedback</Button>
      </div>
    </div>
  );
};

export default MenuLateral;
