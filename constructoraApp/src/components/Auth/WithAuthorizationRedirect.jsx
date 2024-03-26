import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { findCommonElements } from "../../helpers/arrays";
export const withAuthorizationRedirect = (Component, options) => {
  return function WithRole(props) {
    const navigate = useNavigate();
    const { user } = useAuth0();
    const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
      async function checkRoles(roles, target) {
        const isAuthorized = findCommonElements(roles, target);
        if (!isAuthorized) {
          navigate("/dashboard");
        } else {
          setIsAuthorized(true);
        }
      }

      const roles = user?.appRoles || [];

      checkRoles(roles, options.roles);
    }, [user, navigate]);
    return isAuthorized ? <Component {...props} /> : <></>;
  };
};
