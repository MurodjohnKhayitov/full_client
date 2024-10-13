import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userImage from '../assets/download.png'
function OneIdUser() {
    const { id } = useParams();  // Get the id from the URL
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:5000/getuser/${id}`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUser();
    }, [id]);
    console.log(user);
    if (error) return <p>{error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div className='flex items-center justify-center w-full h-[100vh]'>
            <div className='max-w-[660px] w-full h-[400px] border rounded-lg flex flex-wrap ' >
                <div className='w-[50%] border h-full flex items-center justify-center'>
                    <img src={userImage} alt="" />
                </div>
                <div className='text-start flex flex-col gap-y-3 mt-10 ml-4 ' > 
                    <div className=' '><span className='font-bold mr-2'>ID: </span><span>{user?.user_id}</span></div>
                    <div className=' '><span className='font-bold mr-2'>Ism: </span><span>{user?.first_name}</span></div>
                    <div className=' '><span className='font-bold mr-2'>Familiya: </span><span>{user?.last_name}</span></div>
                    <div className=' '><span className='font-bold mr-2'>Email: </span><span>{user?.email}</span></div>
                    <div className=' '><span className='font-bold mr-2'>Pochta index: </span><span>{user?.zipcode}</span></div>
                    <div className=' '><span className='font-bold mr-2'>Ko'cha: </span><span>{user?.street}</span></div>
                    <div className=' '><span className='font-bold mr-2'>Shahar: </span><span>{user?.city}</span></div>
                </div>

            </div>

        </div>
    );
}

export default OneIdUser;
