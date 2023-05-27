import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import ChattingBox from "../components/MainBody/ChattingBox";
import MainBody from "../components/MainBody/MainBody";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          {" "}
          {/* 감싸는 Layout과 하위 Contents 구성 */}
          <Route path={"/MainBody"} element={<MainBody />} />
          <Route path={"/ChattingBox"} element={<ChattingBox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
