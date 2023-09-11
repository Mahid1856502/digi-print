import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import PATH from "../Path";
import FullScreenLoader from "../../components/Loader/FullScreenLoader.jsx";
import PrivateLayout from "../../components/Layout/Private/Index";
import UserLayout from "../../components/Layout/UserLayout";

function ProtectedRoute({ element }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate(PATH.LOGIN);
    }
  }, [user]);

  if (!user) return <FullScreenLoader />;

  if(location?.pathname ===PATH.USER || location?.pathname ===PATH.QUERY_HISTORY){
    return <UserLayout>{element}</UserLayout>
  }
return <PrivateLayout>{element}</PrivateLayout>;

}

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
