import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {
    const phone =useLoaderData();
    const {id, name, price,description, image} = phone;
    return (
        <div className='border rounded-lg p-10 shadow'>
        <img src={image} alt="" />
        <h3 className='text-blue-300 text-2xl'>{name}</h3>
        <p className='text-xs'>{description}</p>
        <p>Price: <span className='text-green-400'>{price}</span></p>
    </div>
    );
};

export default PhoneDetails;