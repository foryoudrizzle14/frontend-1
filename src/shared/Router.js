import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import ChattingBox from "../components/MainBody/ChattingBox";
import MainBody from "../components/MainBody/MainBody";
import Login from "../pages/Login";
import Signup from "../pages/Signup";



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/MainBody" element={<MainBody />} />
          <Route path="/ChattingBox" element={<ChattingBox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;  