import { withAuthorizationRedirect } from "../Auth/WithAuthorizationRedirect";

const BaseComponent = () => {
  return <div>BuildingManagement</div>;
};
export const BuildingManagement = withAuthorizationRedirect(BaseComponent, {
  roles: ["Gerente", "Director"],
});
