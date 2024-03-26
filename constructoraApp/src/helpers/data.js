// funcion verify response status 

export function verifyResponseStatus(status){
    switch(status){
        case 200:
            return true;
        case 400:  
            throw 'Bad Request'
        case 401:
            throw 'Not authenticated' 
        case 403: 
            throw'Not authorized'
        
    }
}
