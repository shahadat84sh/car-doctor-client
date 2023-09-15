import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl text-orange-400">Services</h3>
                <h2 className="text-5xl">Our service Area</h2>
                <p className="w-1/2 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis animi illum similique perferendis necessitatibus placeat veniam aspernatur, enim asperiores ipsa..</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;