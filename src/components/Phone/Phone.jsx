import React from 'react';
import { useNavigate } from 'react-router-dom';

const Phone = ({phone}) => {
    const navigate = useNavigate();
    const {id, name, price,description, image} = phone;
    return (
        <div className='border rounded-lg p-10 shadow'>
            <img src={image} alt="" />
            <h3 className='text-blue-300 text-2xl'>{name}</h3>
            <p className='text-xs'>{description}</p>
            <p>Price: <span className='text-green-400'>{price}</span></p>
            <button onClick={()=>navigate(`/phones/${id}`)} className='bg-purple-400 rounded-lg border'>Details</button>
        </div>
    );
};

export default Phone;