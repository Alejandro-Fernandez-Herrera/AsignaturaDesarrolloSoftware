 
 import UsersList from "../components/UsersList"
 import { useQuery } from "react-query";
 import { fetchUsers } from "../data/users.api";
 export function UsersPage() {

  

    const { data, status } = useQuery('users', fetchUsers);
    console.log(data)
  return (
    <>
    {status === "error" && <p>Error fetching data</p>}
    {status === "loading" && <p>Fetching data...</p>}
    {status === "success" && <UsersList data={data}/>}
  </>
  )
}

