import { getRoles } from "../../data/user";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { withAuthorizationRedirect } from "../Auth/WithAuthorizationRedirect";
import { Link } from "react-router-dom";

function BaseComponent() {
  const { getAccessTokenSilently } = useAuth0();
  const {
    isPending: isGetRolesLoading,
    data: rolesData,
    error: rolesDataError,
  } = useQuery({
    queryKey: ["getRoles", getAccessTokenSilently],
    queryFn: () => getRoles(getAccessTokenSilently),
  });
  if (isGetRolesLoading) {
    return <div>Cargando</div>;
  }
  if (rolesDataError) {
    return <div>Ups... algo salio mal</div>;
  }
  if (rolesData) {
    //console.log(rolesData);
    return (
      <div>
        <ul className="nav nav-tabs">
          {rolesData.map((rol) => (
            <li className="nav-item" key={rol.id}>
              <Link className="nav-link" to={`/dashboard/users/${rol.id}`}>
                {rol.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export const TabsRoles = withAuthorizationRedirect(BaseComponent, {
  roles: ["Gerente"],
});
