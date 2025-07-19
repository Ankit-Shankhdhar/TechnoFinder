import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import logo1 from './logo1.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
// import doc1 from './doc1.png'
// import doc2 from './doc2.png'
// import doc3 from './doc3.png'
// import doc4 from './doc4.png'
// import doc5 from './doc5.png'
// import doc6 from './doc6.png'
// import doc7 from './doc7.png'
// import doc8 from './doc8.png'
// import doc9 from './doc9.png'
// import doc10 from './doc10.png'
// import doc11 from './doc11.png'
// import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import sp1 from './sp1.png'
import sp2 from './sp2.png'
import sp3 from './sp3.png'
import sp4 from './sp4.png'
import sp5 from './sp5.png'
import sp6 from './sp6.png'
import sp7 from './sp7.png'
import sp8 from './sp8.png'
import sp9 from './sp9.png'
import sp10 from './sp10.png'
import sp11 from './sp11.png'
import sp12 from './sp12.png'
// import Dermatologist from './Dermatologist.svg'
// import Gastroenterologist from './Gastroenterologist.svg'
// import General_physician from './General_physician.svg'
// import Gynecologist from './Gynecologist.svg'
import comp_repair from './comp_repair.svg'
import home_repair from './home_repair.svg'
import vehcle_repair from './vehcle_repair.svg'
// import Neurologist from './Neurologist.svg'
// import Pediatricians from './Pediatricians.svg'


export const assets = {
    sp10,
    
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Computer Technician',
        image: comp_repair
    },
    {
        speciality: 'Home Technician',
        image: home_repair
    },
    {
        speciality: 'Vehicle Technician',
        image: vehcle_repair
    }
]

export const serviceProviders = [
    {
        _id: 'sp1',
        name: 'John Smith',
        image: sp1,
        speciality: 'Home Technician',
        degree: 'AC Repair',
        experience: '4 Years',
        about: 'John has a strong commitment to delivering comprehensive AC repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies. John has a strong commitment to delivering comprehensive AC repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies.',
        fees: 250,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp2',
        name: 'Emily Johnson',
        image: sp2,
        speciality: 'Vehicle Technician',
        degree: 'Bike Mechanic',
        experience: '3 Years',
        about: 'Emily has a strong commitment to delivering comprehensive bike repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies. Emily has a strong commitment to delivering comprehensive bike repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies.',
        fees: 620,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp3',
        name: 'Michael Brown',
        image: sp3,
        speciality: 'Vehicle Technician',
        degree: 'Car Engine Repair',
        experience: '1 Years',
        about: 'Michael has a strong commitment to delivering comprehensive car engine repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies. Michael has a strong commitment to delivering comprehensive car engine repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies.',
        fees: 320,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp4',
        name: 'Sarah Wilson',
        image: sp4,
        speciality: 'Computer Technician',
        degree: 'Virus Removal',
        experience: '2 Years',
        about: 'Sarah has a strong commitment to delivering comprehensive virus removal services, focusing on preventive measures, early detection, and effective removal strategies. Sarah has a strong commitment to delivering comprehensive virus removal services, focusing on preventive measures, early detection, and effective removal strategies.',
        fees: 240,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp5',
        name: 'David Taylor',
        image: sp5,
        speciality: 'Vehicle Technician',
        degree: 'Vehicle Repair',
        experience: '4 Years',
        about: 'David has a strong commitment to delivering comprehensive vehicle repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies. David has a strong commitment to delivering comprehensive vehicle repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies.',
        fees: 250,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp6',
        name: 'Jessica Anderson',
        image: sp6,
        speciality: 'Home Technician',
        degree: 'Plumber',
        experience: '4 Years',
        about: 'Jessica has a strong commitment to delivering comprehensive plumbing services, focusing on preventive maintenance, early diagnosis, and effective repair strategies. Jessica has a strong commitment to delivering comprehensive plumbing services, focusing on preventive maintenance, early diagnosis, and effective repair strategies.',
        fees: 250,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp7',
        name: 'Robert Thomas',
        image: sp7,
        speciality: 'computer Technician',
        degree: 'PC Repair',
        experience: '4 Years',
        about: 'Robert has a strong commitment to delivering comprehensive PC repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies. Robert has a strong commitment to delivering comprehensive PC repair services, focusing on preventive maintenance, early diagnosis, and effective repair strategies.',
        fees: 250,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp8',
        name: 'Jennifer Jackson',
        image: sp8,
        speciality: 'Vehicle Technician',
        degree: 'Engine Maintenance',
        experience: '3 Years',
        about: 'Jennifer has a strong commitment to delivering comprehensive engine maintenance services, focusing on preventive care, early diagnosis, and effective maintenance strategies. Jennifer has a strong commitment to delivering comprehensive engine maintenance services, focusing on preventive care, early diagnosis, and effective maintenance strategies.',
        fees: 360,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp9',
        name: 'Daniel White',
        image: sp9,
        speciality: 'Home Technician',
        degree: 'Electrician',
        experience: '1 Years',
        about: 'Daniel has a strong commitment to delivering comprehensive electrical services, focusing on preventive maintenance, early diagnosis, and effective repair strategies. Daniel has a strong commitment to delivering comprehensive electrical services, focusing on preventive maintenance, early diagnosis, and effective repair strategies.',
        fees: 730,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp10',
        name: 'Lisa Harris',
        image: sp10,
        speciality: 'Computer Technician',
        degree: 'Data Recovery',
        experience: '2 Years',
        about: 'Lisa has a strong commitment to delivering comprehensive data recovery services, focusing on careful handling, thorough analysis, and effective recovery strategies. Lisa has a strong commitment to delivering comprehensive data recovery services, focusing on careful handling, thorough analysis, and effective recovery strategies.',
        fees: 1040,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp11',
        name: 'Paul Martin',
        image: sp11,
        speciality: 'Home Technician',
        degree: 'Carpenter',
        experience: '4 Years',
        about: 'Paul has a strong commitment to delivering comprehensive carpentry services, focusing on quality materials, precise measurements, and effective construction strategies. Paul has a strong commitment to delivering comprehensive carpentry services, focusing on quality materials, precise measurements, and effective construction strategies.',
        fees: 550,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'sp12',
        name: 'Amy Thompson',
        image: sp12,
        speciality: 'Vehicle technician',
        degree: 'Car Mechanic',
        experience: '4 Years',
        about: 'Amy has a strong commitment to delivering comprehensive car mechanic services, focusing on preventive maintenance, early diagnosis, and effective repair strategies. Amy has a strong commitment to delivering comprehensive car mechanic services, focusing on preventive maintenance, early diagnosis, and effective repair strategies.',
        fees: 350,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    }
]