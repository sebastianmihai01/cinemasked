import React, { Fragment } from "react";
import { Link, NavLink, Route } from "react-router-dom";

const HeaderButton = (props) => {
  return (
    <Fragment>
      <NavLink to={`/${props.name}`} style={{ textDecoration: "none", color:'white'}}>
        <div
          className="nav-item nav-link"
        >
          {props.name}

        </div>

        {props.children}
        
      </NavLink>

    </Fragment>
  );
};

export default HeaderButton;
