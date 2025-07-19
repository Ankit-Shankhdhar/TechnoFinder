import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
const Technician = () => {
  
  const navigate = useNavigate();
  
  const {speciality} =useParams();
  const [filterTec,SetFilterTec] = useState([])

  const {serviceProviders} = useContext(AppContext);

  console.log("Technicians:", serviceProviders);

  
  const applyFilter = () =>{
    if(speciality){
      SetFilterTec(serviceProviders.filter(tech => tech.speciality.toLowerCase() === speciality.toLowerCase()))
  }
  else{
    SetFilterTec(serviceProviders)
  }
}

useEffect(() => {
applyFilter()
},[serviceProviders,speciality])
  return (
    
    <div>
        <p className='text-gray-600'>Browse Through the speciality Technicians</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600 '>
            <p onClick={() => { speciality === 'Computer Technician' ? navigate(`/technician`) : navigate(`/technician/Computer Technician`) }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Computer Technician" ? "bg-indigo-100 text-black" : ""}`}>Computer Technician</p>
            <p onClick={() => { speciality === 'Home Technician' ? navigate(`/technician`) : navigate(`/technician/Home Technician`) }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Home Technician" ? "bg-indigo-100 text-black" : ""}`}>Home Technician</p>
            <p onClick={() => { speciality === 'Vehicle Technician' ? navigate(`/technician`) : navigate(`/technician/Vehicle Technician`) }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Vehicle Technician" ? "bg-indigo-100 text-black" : ""}`}>Vehicle Technician</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6 '>
            {
              filterTec.map((item,index)=>(
                <div onClick={()=> navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm '>{item.speciality}</p>
                    </div>
                </div>
            ))
            }
          </div>
        </div>
    </div>
  )
}


export default Technician