import { withAuthorizationRedirect } from "../Auth/WithAuthorizationRedirect";

function BaseComponent() {
  return <div>User management content</div>;
}

export const UserManagement = withAuthorizationRedirect(BaseComponent, {
  roles: ["Gerente"],
});
