import React from 'react'
import SidebarListitems from './SidebarListitems';

function SidebarList() {
    const listItemData = [
        {
          listItemText: "Home",
          link: "/",
        },
        {
          listItemText: "About us",
          link: "/about",
        },
        {
            listItemText: "contact",
            link: "/contact",
          },
          {
            listItemText: "Counter",
            link: "/counter",
          },
          {
            listItemText: "Form",
            link: "/formpage",
          },
      ];
      return (
        <div className="sidebar-container__list">
          <ul>
            {listItemData.map((item, index) => {
              return <SidebarListitems key={index} link={item.link} text={item.listItemText} ></SidebarListitems>
            })}
           
          </ul>
        </div>
      );
}

export default SidebarList
