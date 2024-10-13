import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UserForm from '../components/UserForm'
import OneIdUser from '../components/OneIdUser'

function RouterMain() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/user" element={<UserForm />} />
                <Route path="/user/:id" element={<OneIdUser />} />

                <Route path="/" element={<Navigate to="/user" />} />
                <Route path="*" element={<Navigate to="/user" />} />
            </Routes>
        </div>
    )
}

export default RouterMain