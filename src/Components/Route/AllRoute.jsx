import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home';
import About from '../AboutPage/About';
import Tour from '../TourPage/Tour';
import Blog from '../BlogPage/Blog';
import Dashboard from '../DashboardPage/Dashboard';
import Contact from '../ContactPage/Contact';
import SignIn from '../SignUpSignInPage/SignIn/SignIn';
import SignUp from '../SignUpSignInPage/SignUp/SignUp';
import SingleBlog from '../SingleBlogPage/SingleBlog';
import TourSingle from '../TourSInglePage/TourSingle';
import BookNow from '../BookNow/BookNow';
import UpCommingEventDetails from '../HomePage/UpcomingEventDetails/UpCommingEventDetails';
import NoPageFound from '../NoPageFound/NoPageFound';
import PrivateRoute from '../SignUpSignInPage/PriveteRoute/PrivateRoute';

const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/singleTour/:id" element={<PrivateRoute> <TourSingle /> </PrivateRoute>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/singleBlog/:id" element={<PrivateRoute> <SingleBlog /> </PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/bookNow" element={<PrivateRoute> <BookNow /> </PrivateRoute>} />
            <Route path="/upComingEventDetails/:id" element={<UpCommingEventDetails />} />
            <Route path="*" element={<NoPageFound />} />
        </Routes>
    );
};

export default AllRoute;