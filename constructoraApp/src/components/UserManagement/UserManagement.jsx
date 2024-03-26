import { getUsers } from "../../data/user";
import { withAuthorizationRedirect } from "../Auth/WithAuthorizationRedirect";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";

function BaseComponent() {
  const { getAccessTokenSilently } = useAuth0();
  const {
    isPending: isGetUsersLoading,
    data: usersData,
    error: usersDataError,
  } = useQuery({
    queryKey: ["getUsers", getAccessTokenSilently],
    queryFn: () => getUsers(getAccessTokenSilently),
  });
  if (isGetUsersLoading) {
    return <div>Cargando</div>;
  }
  if (usersDataError) {
    return <div>Ups... algo salio mal</div>;
  }
  if (usersData) {
    console.log(usersData);
    return <div>User management content</div>;
  }
}

export const UserManagement = withAuthorizationRedirect(BaseComponent, {
  roles: ["Gerente"],
});
