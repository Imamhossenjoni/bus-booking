import React, { useEffect, useState } from 'react';
import servicesData from '../../../src/services.json'
import Service from './Service';
const Services = () => {
    console.log(servicesData)
    const [services,setServices]=useState([]);
    return (
        <div className=''>
            <h3 className='mt-5 text-center text-primary text-4xl'>Determine your preferred bus</h3>
            <p className='text-center text-secondary'>Have a good journey, Stay with cholo jai</p>
           <div className='main_section g-5'>
           {
                servicesData.map(s=><Service key={s.id} s={s}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;