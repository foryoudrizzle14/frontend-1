import Lnb from "../components/SideBar/Lnb";
import Top from "../components/Header/Top";
import { Outlet } from "react-router-dom";
import ChattingBox from "../components/MainBody/ChattingBox";

function Layout() {
  return (
    <div className="wrap">
      <div className="container">
        <div className="left_area">
          <Lnb />
        </div>
        <div className="right_area">
          <Top />
          <div className="contents_area">
            <Outlet />
            <ChattingBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
