import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedTech = ({ techId, speciality  }) => {

  const {serviceProviders} = useContext(AppContext);

  const [relTech, setRelTech] = useState([])

  const navigate = useNavigate();

  useEffect(()=>{
    if(serviceProviders.length > 0 && speciality){
      const relatedTechnicians = serviceProviders.filter(tech => tech.speciality.toLowerCase() === speciality.toLowerCase() && tech._id !== techId);
      setRelTech(relatedTechnicians);
    } 
  },[techId, speciality, serviceProviders])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>
            Top Technician Section
        </h1>
        <p className='sm:w-1/3 text-center text-sm'>
            This section will display the top technicians based on user ratings and feedback.
        </p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {relTech.slice(0,5).map((item,index)=>(
                <div onClick={()=> {navigate(`/appointment/${item._id}`);scrollTo(0,0)}} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm '>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=> {navigate(`/technician`); scrollTo(0,0)}} className='text-gray-500 bg-blue-50 rounded-full px-12 py-3 mt-10 '>More</button>
    </div>
  )
}

export default RelatedTech