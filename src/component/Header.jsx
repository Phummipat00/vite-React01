import React from "react";

const header = () => {
  const menuFunction = () => {
    const menubtn = document.getElementById("myMenuNev");
    if (menubtn.className === "nav-menu") {
      menubtn.className += "reponsive";
    } else {
      menubtn.className = "nav-menu";
    }
  };
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Phummi</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a className="nav-link">about</a>
          </li>
          <li className="nav_list">
            <a className="nav-link">Contact</a>
          </li>
          <li className="nav_list">
            <a className="nav-link">Project</a>
          </li>
          <li className="nav_list">
            <a className="nav-link">Featured</a>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn">
          dowload CV <i className="uil uli-bars"></i>
        </button>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uli-bars"></i>
      </div>
    </nav>
  );
};

export default header;
