import { NavLink } from "react-router-dom";
import React from "react";
import { fakeDataMenu } from "../../db/data";
import { nanoid } from "nanoid";

export default function Menu() {
  const classBased = "menu__item";
  return (
    <React.Fragment>
      <ul className="menu">
        {fakeDataMenu.map((item) => {
          return (
            <NavLink
              key={nanoid(8)}
              className={({ isActive }) =>
                isActive ? `${classBased} menu__item-active` : classBased
              }
              to={"/ra-router-menu" + item.path}
            >
              {item.name}
            </NavLink>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
