/** @format */

import { Routes, Route } from "react-router-dom";
import WEB_PAGES from "../pages";
import PATH from "./Path.jsx";

const ROUTES = {
  name: "User",
  path: PATH.INDEX,
  page: <WEB_PAGES.CLIENT_PAGES.INDEX />,
};

function RouterConfig() {
  return (
    <Routes>
      <Route key={ROUTES.path} path={ROUTES.path} element={ROUTES.page} />
      {/* NO PAGE FOUND */}
      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NO_PAGE_FOUND />} />
    </Routes>
  );
}

export default RouterConfig;
