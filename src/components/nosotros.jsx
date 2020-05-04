import React from 'react';

const Nosotros = ()=>{

   /* const datos=[
        {id:1, nombre:'React'},
        {id:1, nombre:'Vuejs'},
        {id:1, nombre:'Angular'}
    ]*/
    const[equipo, setEquipo]=React.useState([])
    
    React.useEffect( () =>{
    //console.log('useEffect')
    obtenerDatos()
     
    },[])
    //funcion para consumir datos de la api
    const obtenerDatos= async ()=>{
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const users= await data.json()
      //console.log(users)
      setEquipo(users)
    }
    return(
        <div>
            <h1> Nosotros</h1>
            <ul>
                {
                    equipo.map(item =>(
                        <li key={item.id}>{item.name}-{item.username}-{item.email}</li>
                    ))
                }
            </ul>
        </div>
    );

}
export default  Nosotros;