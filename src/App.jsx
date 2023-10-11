import Header from "./Components/Header"
import Formulario from "./Components/Formulario"
import ListadoPacientes from "./Components/ListadoPacientes"
import {useState,useEffect} from "react"

function App() {

const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
const [paciente,setPaciente]= useState({});

const eliminarPaciente = id =>{
  const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
  setPacientes(pacientesActualizados);

}

/* el siguiente UseEffect se utilizará para  que local storage almacene la información 
y que al recargar la página no se reinicie todo */


useEffect (()=>{
  localStorage.setItem('pacientes',JSON.stringify(pacientes));
},[pacientes]); /* si hay dependencia, en este caso paciente, le decimos que se ejecute 
cada que 'pacientes' cambie, si dejamos el arreglo vació solo se ejecutará una vez*/


return (

  <div className="container mx-auto">
  <Header/>
  <div className='mt-12 md:flex'>
  <Formulario
  pacientes={pacientes}
  setPacientes={setPacientes}
  paciente={paciente}
  setPaciente={setPaciente}/>


  <ListadoPacientes
  pacientes={pacientes}
  setPaciente={setPaciente}
  eliminarPaciente={eliminarPaciente}
  />
  </div>
  </div>
  

)
  
}

export default App
