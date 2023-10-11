import { useState,useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

    const [nombre,setNombre] =useState('');
    const [edad,setEdad] =useState('');
    const [email,setEmail] =useState('');
    const [fecha,setFecha] =useState('');
    const [time,setTime] =useState('');
    const [notas,setNotas] =useState('');
    const [error,setError]= useState(false);

    useEffect(()=>{
        if(Object.keys(paciente).length >0){
            setNombre(paciente.nombre)
            setEdad(paciente.edad)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setTime(paciente.time)
            setNotas(paciente.notas)
        }

    },[paciente])

    

    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return fecha + random;
    }


    const handleSubmit = (e) =>{
        e.preventDefault();

// VALIDACION DEL PACIENTE:
if([nombre,edad,email, fecha,time, notas].includes('')){
    console.log('Hay al menos un campo vacío');
    setError(true);
    return;
    }
    setError(false);

    //Objeto de paciente
    const objetoPaciente={
        nombre,
        edad,
        email,
        fecha,
        time,
        notas
        
    }

    if(paciente.id){
        //editando el registro

        objetoPaciente.id= paciente.id;
        const pacientesActualizados = pacientes.map(
            pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados);
        setPaciente({}); //para limpiar el state o el paciente que queda en la memoria
    }else{
        //agregando un nuevo paciente

        objetoPaciente.id = generarId();
        setPacientes([...pacientes,objetoPaciente]);
    }

    

    //reiniciar el formulario al enviarlo
    setNombre('')
    setEdad('')
    setEmail('')
    setFecha('')
    setTime('')
    setNotas('')
}



    return (  
        <div className= "md:w-1/2 lg:w-2/5 mx-5 ">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {" "}
        <span className="text-teal-600 font-bold text-lg">Adminístralos</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 border-teal-600 border-solid border-2 shadow-teal-700/50'>

            {error && <Error
            mensaje='Todos los campos son obligatorios'/>}

            <div className="mb-5 ">
                <label 
                htmlFor='Paciente' 
                className='block text-gray-700 uppercase font-bold'>
                    Nombre de Paciente
                </label>
                <input
                id='Paciente'
                type='text'
                placeholder="Nombre de paciente"
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}
                
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor='edad' 
                className='block text-gray-700 uppercase font-bold'>
                    Edad del paciente
                </label>
                <input
                id='edad'
                type='number'
                min='1'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={edad}
                onChange={ (e) => setEdad(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor='email' 
                className='block text-gray-700 uppercase font-bold'>
                    E-mail
                </label>
                <input
                id='email'
                type='email'
                placeholder="Agrega tu e-mail"
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor='cita' 
                className='block text-gray-700 uppercase font-bold'>
                    Selecciona la fecha de la cita
                </label>
                <input
                id='cita'
                type='date'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={fecha}
                onChange={ (e) => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor='hora' 
                className='block text-gray-700 uppercase font-bold'>
                    Selecciona la hora de la cita
                </label>
                <input
                id='hora'
                type='time'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={time}
                onChange={ (e) => setTime(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor='notas' 
                className='block text-gray-700 uppercase font-bold'>
                    Notas médicas
                </label>
                <textarea
                id='notas'
                placeholder='Agrega síntomas y malestares del paciente'
                className='w-full placeholder-gray-400 rounded-md border-2'
                value={notas}
                onChange={ (e) => setNotas(e.target.value)}/>
                
            </div>  

            <input
            type='submit'
            className="bg-teal-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
            value={paciente.id ? 'Guardar paciente': 'Agregar paciente'}>
                
            </input>
        </form>
        
        </div>

    )
}
 
export default Formulario;

