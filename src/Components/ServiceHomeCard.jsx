import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHomeCard = ({service}) => {
    const {_id, img, title, price} =service || {}
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-start">
          <h2 className="card-title">{title}</h2>
     <div>
        <p className='text-orange-600 font-bold'>Price : ${price}</p>
        </div> 
        <Link to={`/checkout/${_id}`}> <button className='btn btn-outline btn-warning'>Book Now</button> </Link>
        </div>
      </div>
    );
};

export default ServiceHomeCard;