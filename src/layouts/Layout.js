import Lnb from "../components/SideBar/Lnb";
import Top from "../components/Header/Top";
import { Outlet } from "react-router-dom";
import ChattingBox from "../components/MainBody/ChattingBox";
import MainBody from "../components/MainBody/MainBody";
// import ProfileModal from "../components/MainBody/ProfileModal";

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
            <MainBody/>
            <ChattingBox />
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
