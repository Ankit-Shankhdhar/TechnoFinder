import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import RelatedTech from "../component/RelatedTech";
const Appointment = () => {
  const {techId}=useParams();
 
  const {serviceProviders, currencySymbol} = useContext(AppContext);


const daysOfWeek = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT'
  
];


  const [techInfo, setTechInfo] = useState(null);
  const [techSlot, setTechSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

const fetchTechInfo = async () => {
  const TechInfo = serviceProviders.find(tech => tech._id === techId);
  setTechInfo(TechInfo);
}

const getAvailableSlots = async () => {
setTechSlot([])
//getting the current date
const today = new Date(); 

for (let i = 0; i < 7; i++) {
  let currentDate = new Date(today);
  currentDate.setDate(today.getDate() + i); 
  // setting the end time with index
  let endTime = new Date();
  endTime.setDate(today.getDate() + i);
  endTime.setHours(21, 0, 0, 0); // 9 PM
  
  // setting hours

  if(today.getDate() === currentDate.getDate()){
    currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+1 : 10); // start from next hour
    currentDate.setMinutes(currentDate.getMinutes()>30? 30 :0)
  }
  else{
    currentDate.setHours(10, 0, 0, 0); // start from 10 AM
    currentDate.setMinutes(0);
  }

  let timeSlots = [];

  while (currentDate <= endTime) {
    let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    //add slots to array
    timeSlots.push({
      datetime: new Date(currentDate),
      time: formattedTime
    });

    //increment by 30 minutes
    currentDate.setMinutes(currentDate.getMinutes() + 30);
  }
  setTechSlot(prev => ([...prev, timeSlots]));
}
}

useEffect(() => {
  fetchTechInfo();
},[serviceProviders, techId]);

useEffect(()=>{
getAvailableSlots();
},[techInfo]);

useEffect(()=>{
console.log(techSlot);

},[techSlot])


  return techInfo && (
    <div>
        {/* ----------- Tech Details -------------- */}
        <div className="flex flex-col sm:flex-row gap-4 ">
          <div>
            <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={techInfo.image} alt="" />
          </div>
          <div className=" flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ">
            {/* Tech info = name,degree,experience */}
            <p className ="flex items-center gap-2 text-2xl font-medium text-gray-900">{techInfo.name} <img className ="w-5"src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
              <p>{techInfo.degree}</p>
              <p>{techInfo.speciality}</p>
              <button className=" py-0.5 px-2 border text-xs rounded-full ">{techInfo.experience}</button>
            </div>
            {/* Technician about */}
            <div>
              <p className=" flex items-center gap-1 text-smfont-medium text-gray-900 mt-3 "><img src={assets.info_icon} alt="" /></p>
              <p className="text-gray-600 max-w-[700px] mt-2">
                {techInfo.about}
              </p>
              </div>
              <p className="text-gray-800 font-medium mt-4">Appointment Fee: <span className="text-gray-900">
                {currencySymbol}{techInfo.fees}</span></p>
          </div>
        </div>
        {/* ------Booking Slots ------ */}
        <div className="sm:ml-72 sm:pt-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className=" flex gap-3 items-center w-full overflow-x-auto mt-4">
            {
              techSlot.length && techSlot.map((item,index) => (
                <div onClick={()=> setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" : "border-gray-300"} hover:bg-blue-200 transition-all duration-300`}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))
            }
          </div>
          <div>
            <div className="flex items-center gap-3 mt-4 w-full overflow-x-scroll">
              {
                techSlot.length && techSlot[slotIndex].map((item, index) => (
                  <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "text-grey-400 border border-grey-300"} `} key={index}>
                    {item.time.toLowerCase()}
                  </p>
                ))
              }
            </div>
          </div>
          <div>
            <button className=" bg-primary text-white text-sm rounded-full px-14 py-3 my-6">Book an Appointment</button>
          </div>
          
        </div>
    <RelatedTech techId={techId} speciality={techInfo.speciality} />
    </div>
  )
}

export default Appointment