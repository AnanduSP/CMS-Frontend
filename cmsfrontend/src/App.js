import "./App.css";
// import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
// import RegisterPage from "./pages/RegisterPage";
import AllCompanyPage from "./pages/AllCompanyPage";
import UpdateCompanyPage from "./pages/UpdateCompanyPage";
import CouponByCompanyPage from "./pages/CouponByCompanyPage";
import CouponByIdPage from "./pages/CouponByIdPage";
import SearchCompanyPage from "./pages/SearchCompanyPage";
import LoginAltPage from "./pages/LoginAltPage";
import { useState,createContext } from "react";
import AddCouponPage from "./pages/AddCouponPage";
import AltNavbar from "./components/AltNavbar";
export const UserContext=createContext();
function App() {
  const [token,setToken]=useState("");

  const [isUser,setIsUser] = useState(false);

  return (
    <UserContext.Provider value={[token,setToken]}>
    <AltNavbar isUser={isUser} setIsUser={setIsUser}/>
    <div className="App">
      <Routes>
        {/* <Route path="/general/login" element={<LoginPage />} /> */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/general/login" element={<LoginAltPage setIsUser={setIsUser}/>} />
        {/* <Route path="/general/register" element={<RegisterPage />} /> */}
        <Route path="/general/home" element={<HomePage />} />

        <Route path="/company/all-company" element={<AllCompanyPage />} />
        <Route path="/company/update" element={<UpdateCompanyPage />} />
        <Route path="/company/search-by-id" element={<SearchCompanyPage />} />

        <Route path="/coupon/by-company" element={<CouponByCompanyPage />} />
        <Route path="/coupon/by-coupon-id" element={<CouponByIdPage />} />
        <Route path="/coupon/add-coupon" element={<AddCouponPage />} />    
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
