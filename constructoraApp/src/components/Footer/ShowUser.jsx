import axios from 'axios';
import Swal from 'sweetaler2';
import withReactContent from 'sweetalert2-react-content';

const ShowUser = () => {
    const url='';
    const[User, setUser] = useState([]); //se traen todos los usuarios desde BD, su estado inicial es un array vacio
    const[id, setId] = useState(''); //columnas de la tabla en la que se mostraran los datos
    const[name, setName] = useState('');
    const[rol, setRol] = useState('');
    const[operation, setOperation] = useState(1);
    const[title, setTitle] = useState('');

    useEffect( ()=>{
        getProducts();
    }, [])

    const getProducts = async () =>{
        //se debe realizar la petición a BD para traer los usuarios 
    }

    const openModal = (op, id, name, rol) =>{
        setId('');
        setName('');
        setRol('');
        setOperation(op);
        if(op===1){
        //Se debe abrir el modal para la inscripción de nuevos registros (usuarios)
            setTitle('Registrar Usuarios')
        } 
        //Se debe abrir el modal para la edición de registros existentes (usuarios)
        else if(op ===2){
            setTitle('Editar Usuario')
            setId(id);
            setName(name);
            setRol(rol);
        }
        window.setTimeout(function(){
            document.getFlementById('nombre').focus();
        })
    }

    return(
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'></div>
                    <div className='d-grid mx-auto'>
                        <button onClick={()=>openModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalUsers'>
                            <i className='fa-solid fa-circle-plus'></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-8 offset-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr><th>#</th><th>ID</th><th>NOMBRE</th><th>ROL</th></tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                <tr>
                                AGREGAR DATAAAAAAAAAAAAAAAAAA
                                </tr>
                                <td>
                                    <button onClick={()=>openModal(2,id,name,rol)} className='btn btn-warning' data-bs-toggle='modal' data-bs-target="#modalUsers">
                                        <i className='fa-solid fa-edit'></i>
                                    </button>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id='modalUsers' className='modal fade' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <label className="h5">title</label>
                            <button typpe='button' className='btn-close' data-bs-dismiss="modal" aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <input type='hidden' id='id'/>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='da-solid fa-gift'></i></span>
                                <input type="text" id='nombre' className='form-control' placeholder='Nombre' value={id}/>
                            
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='da-solid fa-gift'></i></span>
                                <input type="text" id='nombre' className='form-control' placeholder='Nombre' value={name}/>
                            
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='da-solid fa-gift'></i></span>
                                <input type="text" id='nombre' className='form-control' placeholder='Nombre' value={rol}/>
                            
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        
    )
}