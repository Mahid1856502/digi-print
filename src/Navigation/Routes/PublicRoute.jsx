import { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Public from "../../components/Layout/Public";
import FullScreenLoader from "../../components/Loader/FullScreenLoader";
import LOOKUP from "../../utils/lookup";
// import PATH from "../Path";

function PublicRoute({ element }) {
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
  const getRole = LOOKUP.USER_ROLE.find(
        (item) => item.lookupId === user?.Role
      );

      window.location.href = getRole?.defaultPath ;
    }
  }, [user]);

  if (user === undefined) return <FullScreenLoader />;

  return <Public>{element}</Public>;
}

PublicRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PublicRoute;
