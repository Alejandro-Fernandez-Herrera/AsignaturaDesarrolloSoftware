import PropTypes from "prop-types";
export default function UsersList({ data }) {
  return (
    <>
      <div className="container mt-5">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Email</th>
              <th>Nombre Completo</th>
              <th>Celular</th>
              <th>Tipo Doc</th>
              <th>Documento</th>
              <th>Género</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.user_id}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.user_metadata?.celular}</td>
                <td>{user.user_metadata?.doc_type}</td>
                <td>{user.user_metadata?.doc_number}</td>
                <td>{user.user_metadata?.gender}</td>
                <td>{user.user_metadata?.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

UsersList.propTypes = {
  data: PropTypes.array,
};
