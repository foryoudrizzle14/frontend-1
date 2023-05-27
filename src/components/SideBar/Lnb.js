import React from "react";
import SideBody from "./SideBody";

function Lnb() {
  return (
    <div className="lnb">
      <div className="logo"></div>
      <div className="menus">
        <p className="tit"></p>
        <ul>
          <SideBody />
        </ul>
      </div>
    </div>
  );
}

export default Lnb;
