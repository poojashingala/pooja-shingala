import React, {useEffect} from "react";
import { Button, SideNavigation } from "@awsui/components-react";
import { menuItems } from "../helpers/constants";
import './App.css'

const MenuLateral = () => {
  useEffect(() => {
    var nav:any = document.getElementById("navigation")?.querySelectorAll("[class*=awsui_header-navigation]")
    if(nav && nav?.length > 0) {
      for (let i = 0; i < nav.length; i++) {
        let content = nav[i].lastChild;
        const parts = content.innerText.split(" • ")
        content.innerHTML = content.innerHTML.replace(parts[0],'<div><b>'+parts[0]+'</b>').replace(" • "+parts[1], " • "+parts[1]+'</div>')
      }
    }
    var lists:any = document.getElementById("navigation")?.querySelectorAll("[class^=awsui_list-item]")
    if(lists && lists?.length > 0) {
      for (let i = 0; i < lists.length; i++) {
        let content = lists[i];
        content.classList.add('ml-20'); 
      }
    }
  })
  return (
    <div className="main-menu">
      <div className="menu-header-sub">
        <p>Developer Tools</p>
      </div>
      <SideNavigation id="navigation" className="navigation" activeHref="/" items={menuItems} header={{text: "CodeCommit", href: ""}} />
      <div className="menuButtons">
        <Button className="menuButton" iconName="search" >Go to resource</Button>
        <Button className="menuButton" iconUrl="comment.png" >Feedback</Button>
      </div>
    </div>
  );
};

export default MenuLateral;
