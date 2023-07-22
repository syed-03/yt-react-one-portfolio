import React from 'react'
import solidworks from '../assets/experience/solidworks.jpeg'
import Fusion360 from '../assets/experience/Fusion360.png'
import Autocad from '../assets/experience/Autocad.jpeg'
import Onshape from '../assets/experience/Onshape.jpeg'
import Ansys from '../assets/experience/Ansys.jpeg'
import d3printing from '../assets/experience/d3printing.jpeg'
import cura from '../assets/experience/cura.png'
import pvsyst from '../assets/experience/pvsyst.jpeg'
import MSExcel from '../assets/experience/MSExcel.jpeg'
import Cpp from '../assets/experience/Cpp.png'
import Python from '../assets/experience/Python.jpeg'
import html from '../assets/experience/html.png'
import javascript from '../assets/experience/javascript.png'
import react from '../assets/experience/react.png'



const Experience = () => {

  const techs=[
    {
       id:1,
       src:solidworks,
       title:'SolidWorks',
       style:'shadow-red-500',
    },
    {
      id:2,
      src:Fusion360,
      title:'Fusion360',
      style:'shadow-orange-500',
    },
    {
    id:3,
    src:Autocad,
    title:'AutoCAD',
    style:'shadow-red-400',
    },
    {
    id:4,
    src:Onshape,
    title:'Onshape',
    style:'shadow-green-800',
    },
    {
      id:5,
      src:Ansys,
      title:'Ansys',
      style:'shadow-yellow-500',
    },
    {
      id:6,
      src:d3printing,
      title:'3D printing',
      style:'shadow-gray-500',
    },
    {
      id:7,
      src:cura,
      title:'Ultimaker cura',
      style:'shadow-blue-500',
    },
    {
      id:8,
      src:pvsyst,
      title:'PVsyst',
      style:'shadow-sky-500',
    },
    {
      id:9,
      src:MSExcel,
      title:'MSExcel',
      style:'shadow-green-500',
    },
    {
      id:10,
      src:Cpp,
      title:'C++',
      style:'shadow-indigo-500',
    },
    {
      id:11,
      src:Python,
      title:'Python',
      style:'shadow-yellow-500',
    },
    {
      id:12,
      src:html,
      title:'HTML',
      style:'shadow-orange-500',
    },
    {
      id:13,
      src:javascript,
      title:'JavaScript',
      style:'shadow-yellow-500',
    },
    {
      id:14,
      src:react,
      title:'React',
      style:'shadow-blue-600',
    },

    
  ];



  return (
    <div name='experience' className='bg-gradient-to-b from-cyan-900 to-black w-full h-screen'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
          {
              techs.map(({ id, src, title, style}) =>(
              <div key={id} 
              className={`shadow:md hover:scale-105 duration-500 shadow py-2 rounded-lg ${style}`}> 
              <img src={src} alt="" className='w-12 mx-auto'/>
            <p className='mt-4'>{title}</p>
          </div>

            ))
          }
          
        </div>
      </div>
      
    </div>
  );
};

export default Experience;