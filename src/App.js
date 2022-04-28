import React from 'react';
import AllRoute from "./Components/Route/AllRoute";
import ScrollToTop from "react-scroll-to-top";
import AuthProvider from "./Components/SignUpSignInPage/AuthContext/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ScrollToTop smooth />
      <AllRoute />
    </AuthProvider>
  );
}

export default App;
