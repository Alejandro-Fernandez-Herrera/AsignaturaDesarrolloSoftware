import { useState, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { findCommonElements } from "../../helpers/arrays";

export const withAuthorizationDisplay = (Component, options) => {
  return function WithRole(props) {
    const { user } = useAuth0();
    const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
      async function checkRoles(roles, target) {
        const isAuthorized = findCommonElements(roles, target);
        setIsAuthorized(isAuthorized);
      }
      const roles = user?.appRoles || [];
      checkRoles(roles, options.roles);
    }, [user]);
    return isAuthorized ? <Component {...props} /> : <></>;
  };
};
