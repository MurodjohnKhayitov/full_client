import React, { useState } from 'react';
import GetUsers from './GetUsers';

const UserForm = () => {
    const [first_name, setFirst_name] = useState()
    const [last_name, setLast_name] = useState()
    const [email, setEmail] = useState()
    const [zipcode, setZipcode] = useState()
    const [street, setStreet] = useState()
    const [city, setCity] = useState()



    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('http://localhost:5000/addusers', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    zipcode,
                    street,
                    city
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const result = await response.json();
            console.log('User added:', result);
            // Reset form or show success message as needed
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div>
            <form className=' hidden max-w-[440px] w-full flex flex-col gap-y-2 border p-2' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    required
                    className='w-full h-10 sm:h-12  border border-searchBgColor rounded-lg px-4'
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    required
                    className='w-full h-10 sm:h-12  border border-searchBgColor rounded-lg px-4'
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='w-full h-10 sm:h-12  border border-searchBgColor rounded-lg px-4'
                />
                <input
                    type="text"
                    name="zipcode"
                    placeholder="Zip Code"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    required
                    className='w-full h-10 sm:h-12  border border-searchBgColor rounded-lg px-4'
                />
                <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                    className='w-full h-10 sm:h-12  border border-searchBgColor rounded-lg px-4'
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className='w-full h-10 sm:h-12  border border-searchBgColor rounded-lg px-4'
                />
                <button type="submit" className='mt-2 text-white border cursor-pointer flex items-center justify-center border-[#F2F2F2] w-full px-4 h-10   bg-[#0077B6] select-none rounded-lg active:scale-95	active:opacity-70'>Foydalanuvchi qo'shish</button>

            </form>
            <GetUsers />
        </div>
    );
};

export default UserForm;
