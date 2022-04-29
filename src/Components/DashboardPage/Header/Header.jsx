import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import useAuth from '../../SignUpSignInPage/UseAuthHook/useAuth';
import SelectedCard from '../SelectedCard/SelectedCard';
import Footer from '../../Shared/Footer/Footer';


const Header = () => {
    const [items, setItems] = useState([])
    const { isLoggedIn } = useAuth()
    const email = isLoggedIn.email
    console.log(isLoggedIn.email)


    useEffect(() => {
        fetch(`http://localhost:5000/individualBookTour?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [email])

    const horizontal = {
        width: "90%",
        margin: "0 auto",
        color: "blue",
        marginTop: '25px',
    }

    return (
        <>
            <Navbar />
            <div className="">
                <div className="container">
                    <div className="row">
                        {/* Client View Start Here */}
                        <h4 className="mt-3">{isLoggedIn.displayName !== null || undefined ? isLoggedIn.displayName : "Your"} Ordering Packages</h4>
                        {
                            items.map(singleData => <SelectedCard singleData={singleData} key={Math.random()} />)
                        }

                        {/* Admin View Start Here */}

                        <div style={horizontal}>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Header;