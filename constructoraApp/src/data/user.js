import { verifyResponseStatus } from "../helpers/data";

export const getUsers = async (getToken) => {
    try{
    const token = await getToken()
    if(!token){
        throw 'Not token found'
    }
    const res = await fetch("http://localhost:8000/api/users/",{headers:{
        'Authorization': `Bearer ${token}`
    }});
    
    if (verifyResponseStatus(res.status)) {            
        return res.json();
    }
    
    }
    catch(e){
        console.log(`getUsers failed: ${e}`)
        throw `getUsers failed: ${e}`
    }

};




