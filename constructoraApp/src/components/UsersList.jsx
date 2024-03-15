
import PropTypes from 'prop-types'
export default function UsersList({data}) {
    return (
        <>
            <div className="container mt-5">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Celular</th>
                    <th>Direccion</th>

                </tr>
                </thead>
                <tbody>
                {data.map((user) => (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nombres}</td>
                    <td>{user.apellidos}</td>
                    <td>{user.celular}</td>
                    <td>{user.direccion}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>      
        </>)
}

UsersList.propTypes={
    data: PropTypes.object,
}
