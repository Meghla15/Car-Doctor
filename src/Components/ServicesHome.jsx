import { useEffect, useState } from 'react';
import ServiceHomeCard from './ServiceHomeCard';

const ServicesHome = () => {
    const[services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then (data =>{
            setServices(data)
        })
    },[])
    return (
       <div>
         <div className='text-center space-y-4'>
            <h1 className='text-orange-600 font-bold'>Service</h1>
            <p className='font-bold text-3xl'>Our Service Area</p>
            <p className='w-2/3 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-3'>
        {
            services.map(service => <ServiceHomeCard
            key={service._id}
            service={service}
            ></ServiceHomeCard>)
        }
    </div>
       </div>
    );
};

export default ServicesHome;