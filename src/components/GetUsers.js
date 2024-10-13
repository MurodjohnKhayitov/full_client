import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function GetUsers() {
    const [users, setUsers] = useState([]); // Foydalanuvchilarni saqlash uchun state

    // Foydalanuvchilar ro'yxatini olish funksiyasi
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/getusers');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUsers(data)
        } catch (error) {
        }
    };
    useEffect(() => {
        fetchUsers(); // Komponent o'rnatilganda foydalanuvchilarni olish
    }, []);
    console.log(users, "users");
    const navigate = useNavigate()
    const UserId = (id) => {
        navigate(`/user/${id}`)
    }
    return (
        <div className='w-full flex items-center justify-center mt-10'>


            <div className='max-w-[1280px]  w-full'>
                <div className='flex items-center justify-between my-5'>
                    <p className='font-bold'>Foydalanuvchilar Ruyhati  </p>
                    <button className='hidden mt-2 text-white border cursor-pointer flex items-center justify-center border-[#F2F2F2] w-fit px-4 h-10   bg-[#0077B6] select-none rounded-lg active:scale-95	active:opacity-70'>Foydalanuvchi qo'shish</button>
                </div>
                <div className='w-full bg-[#c1c1c1]  h-10 rounded	 border  flex items-center jsutify-between'>
                    <p className=' border-r w-[5%]'>ID</p>
                    <p className=' border-r w-[15%]'>Ism</p>
                    <p className=' border-r w-[15%]'>Familiya</p>
                    <p className=' border-r w-[15%]'>Email</p>
                    <p className=' border-r w-[12%]'>Pochta index</p>
                    <p className=' border-r w-[15%]'>Ko'cha</p>
                    <p className=' border-r  w-[15%]'>Shahar</p>
                    <p className='   w-[13%]'>Action</p>

                </div>
                <div className='border text-start mt-5 rounded' >
                    {users.map(user => (
                        <div className='cursor-pointer  flex gap-y-2 h-[80px] border items-center' key={user.user_id}>
                            <p className='text-center w-[5%]'>{user?.user_id}</p>
                            <p className='text-center w-[15%]'>{user?.first_name}</p>
                            <p className='text-center w-[15%]'>{user?.last_name}</p>
                            <p className='text-center w-[15%]'>{user?.email}</p>
                            <p className='text-center w-[12%]'>{user?.zipcode}</p>
                            <p className='text-center w-[15%]'>{user?.street}</p>
                            <p className='text-center w-[15%]'>{user?.city}</p>
                            <p onClick={() => UserId(user.user_id)} className=' text-center text-brandBlue hover:text-[#007DCA] active:scale-95	active:opacity-70  w-[13%]'>Batafsil</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GetUsers