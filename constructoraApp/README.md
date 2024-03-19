Hello coder

el proyecto esta estructurado de la siguiente forma:

- Carpeta elements: contiene elementos individuales que van a ser reusados en mas de un lugar. Por ejemplo, botones, inputs, texto, etc.
- Carpeta data: contiene las funciones desde las cuales se interactua con la capa de datos de la api. Desde aqui se escriben todas las funciones que usen fetch. La estructura de una funcion de data es la siguiente

async function getExampleData(args){
try{
//function to get token
const {getToken} = args
const token = await getToken()
if(!token){
throw 'No token found'
}
//helper function to get server url
const url = getUrl()
const request = await fetch(`${url}/api/endpoint`,{
headers:{
'Authorization': `Bearer ${token}`
}
})
if(validateRequestStatus(request)){
const result = request.json()
return result
}

    } catch(e){
        throw `getExampleData failed: ${e}`
    }

}
async function createExampleData(args){
try{
//function to get token
const {getToken,data} = args

        const token = await getToken()
        if(!token){
            throw 'No token found'
        }
        //helper function to get server url
        const url = getUrl()
        const request = await fetch(`${url}/api/endpoint`,{
        headers:{
        'Authorization': `Bearer ${token}`
        },
        method:"POST",
        body:JSON.stringify(data)

        })
        if(validateRequestStatus(request)){
            const result = request.json()
            return result
        }

    } catch(e){
        throw `createExampleData failed: ${e}`
    }

}
async function getExampleDataWithUuid(args){
try{
//function to get token
const {getToken, uuid} = args
const token = await getToken()
if(!token){
throw 'No token found'
}
if(!uuid){
throw 'No uuid provided'
}
/helper function to get server url
const url = getUrl()
const request = await fetch(`${url}/api/endpoint/${uuid}`,{
headers:{
'Authorization': `Bearer ${token}`
}
})
if(validateRequestStatus(request)){
const result = request.json()
return result
}

    } catch(e){
        throw `getExampleDataWithUuid failed: ${e}`
    }

}

- Carpeta components: contiene los componentes, piezas de codigo que incluyen, o no, estado y una interfaz compleja, compuesta de diferentes elementos y subcomponentes.
- Carpeta pages: contiene las paginas, en donde se hace la integracion con la capa de datos. Desde las paginas se renderizan los componentes y se les pasan los props
  de la capa de datos cuando sea necesario. Implementan los handlers que triggerean llamadas de red dinamicamente.
- Routes: define la navegacion de la aplicacion
- Context: datos compartidos alrededor de la aplicacion como el usuario loggeado, etc
