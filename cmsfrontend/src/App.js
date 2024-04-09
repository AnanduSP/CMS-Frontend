import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import AllCompanyPage from "./pages/AllCompanyPage";
import UpdateCompanyPage from "./pages/UpdateCompanyPage";
import CouponByCompanyPage from "./pages/CouponByCompanyPage";
import CouponByIdPage from "./pages/CouponByIdPage";
import SearchCompanyPage from "./pages/SearchCompanyPage";
import LoginAltPage from "./pages/LoginAltPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/genral/login" element={<LoginPage />} /> */}
        <Route path="/genral/login" element={<LoginAltPage />} />
        {/* <Route path="/genral/register" element={<RegisterPage />} /> */}
        <Route path="/genral/home" element={<HomePage />} />

        <Route path="/company/all-company" element={<AllCompanyPage />} />
        <Route path="/company/update" element={<UpdateCompanyPage />} />
        <Route path="/company/search-by-id" element={<SearchCompanyPage />} />

        <Route path="/coupon/by-company" element={<CouponByCompanyPage />} />
        <Route path="/coupon/by-coupon-id" element={<CouponByIdPage />} />
      </Routes>
    </div>
  );
}

export default App;
