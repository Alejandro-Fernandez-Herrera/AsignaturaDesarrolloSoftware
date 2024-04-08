import { verifyResponseStatus } from "../helpers/data";

export const getUsersByRol = async (getToken,id) => {
    try{
    const token = await getToken()
    if(!token){
        throw 'Not token found'
    }
    const res = await fetch(`http://localhost:8000/api/roles/${id}/users/`,{headers:{
        'Authorization': `Bearer ${token}`
    }});
    
    if (verifyResponseStatus(res.status)) {            
        return res.json();
    }
    
    }
    catch(e){
        console.log(`getUsersByrol failed: ${e}`)
        throw `getUsersByrol failed: ${e}`
    }

};
export const getRoles = async (getToken) => {
    try{
    const token = await getToken()
    if(!token){
        throw 'Not token found'
    }
    const res = await fetch("http://localhost:8000/api/roles/",{headers:{
        'Authorization': `Bearer ${token}`
    }});
    
    if (verifyResponseStatus(res.status)) {            
        return res.json();
    }
    
    }
    catch(e){
        console.log(`getRoles failed: ${e}`)
        throw `getRoles failed: ${e}`
    }

};







