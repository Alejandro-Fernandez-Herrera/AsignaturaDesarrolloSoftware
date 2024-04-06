//import { getUsers } from "../../data/user";
import { withAuthorizationRedirect } from "../Auth/WithAuthorizationRedirect";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { TabsRoles } from "./TabsRoles";
import { useParams } from "react-router-dom";
import { getUsersByRol } from "../../data/user";
import UsersList from "./UsersList";

function BaseComponent() {
  const { getAccessTokenSilently } = useAuth0();
  let { id } = useParams();
  console.log(id);
  const {
    isLoading: isGetUsersByRoleLoading,
    data: UsersByRoleData,
    error: UsersByRoleDataError,
  } = useQuery({
    queryKey: ["getUsersByRol", getAccessTokenSilently, id],
    queryFn: () => getUsersByRol(getAccessTokenSilently, id),
    enabled: !!id,
  });
  console.log(UsersByRoleData);
  return (
    <>
      <div className="container mt-3">
        <TabsRoles />

        {isGetUsersByRoleLoading && (
          <div className="row justify-content-center mt-3">
            <div className="col-auto">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          </div>
        )}

        {UsersByRoleDataError && (
          <div className="row mt-3">
            <div className="col">
              <div className="alert alert-danger" role="alert">
                Ups... algo salió mal
              </div>
            </div>
          </div>
        )}

        {UsersByRoleData && <UsersList data={UsersByRoleData} />}
      </div>
    </>
  );
}

export const UserManagement = withAuthorizationRedirect(BaseComponent, {
  roles: ["Gerente"],
});
