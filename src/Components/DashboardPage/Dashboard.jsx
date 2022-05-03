import React, { useEffect, useState } from 'react';
import useAuth from '../SignUpSignInPage/UseAuthHook/useAuth';
import AdminNav from './Admin/AdminNav/AdminNav';
import ClientDash from './ClientDash/ClientDash'

const Dashboard = () => {
    const [adminEmails, setAdminEmails] = useState([])
    const { isLoggedIn } = useAuth()
    console.log(isLoggedIn.email);
    useEffect(() => {
        fetch('http://localhost:5000/admins')
            .then(res => res.json())
            .then(data => {
                setAdminEmails(data);
                // console.log(data);
            })
    }, [])

    const isAdmin = adminEmails.find(ele => ele.email === isLoggedIn.email)
    console.log(isAdmin);
    // console.log(isAdmin.email);
    return (
        <>
            {
                isAdmin ? <AdminNav /> : <ClientDash />
            }
        </>
    );
};

export default Dashboard;