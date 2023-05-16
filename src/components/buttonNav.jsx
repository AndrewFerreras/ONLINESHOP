import React from "react";

const ButtonNavBar = ({title, uref}) => {
  return (
    <li className="nav-item active">
      <a className="nav-link" href={`${uref}`}>
        {title}
      </a>
    </li>
  );
};

export default ButtonNavBar;