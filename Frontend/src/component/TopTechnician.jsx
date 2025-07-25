import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
const TopTechnician = () => {

    const navigate = useNavigate();
    const { serviceProviders } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>
            Top Technician Section
        </h1>
        <p className='sm:w-1/3 text-center text-sm'>
            This section will display the top technicians based on user ratings and feedback.
        </p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {serviceProviders.slice(0,9).map((item,index)=>(
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

export default TopTechnician