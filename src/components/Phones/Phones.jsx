import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from '../Phone/Phone';

const Phones = () => {
    const phones = useLoaderData();
    console.log(phones)
    return (
        <div>
            <h3>All phones are {phones.length}</h3>

            <div className='grid grid-cols-4 gap-5'>
                {
                    phones.map(phone => <Phone key={phone.id} phone={phone} /> )
                }
            </div>
        </div>
    );
};

export default Phones;