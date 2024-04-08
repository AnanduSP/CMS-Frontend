import { useState } from "react";
import "./NavBar.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const NavBar = () => {
  const GenralPathArr = [
    { pageName: "Login", path: "/genral/login" },
    { pageName: "Register", path: "/genral/register" },
    { pageName: "Home", path: "/genral/home" },
  ];

  const CompanyPathArr = [
    { pageName: "All-Company", path: "/company/all-company" },
    { pageName: "Update", path: "/company/update" },
  ];

  const CouponPathArr = [
    { pageName: "Search by company", path: "/coupon/by-company" },
    { pageName: "Search by coupon-id", path: "/coupon/by-coupon-id" },
  ];

  const [selectedPathArr, setSelectedPathArr] = useState(CompanyPathArr);

  const navigate = useNavigate();

  return (
    <div className="navbar-parent">
      <div className="navbar-top">
        <div className="navbar-left">CMS</div>
        <div className="navbar-right">
          <Button
            variant="contained"
            onClick={() => {
              setSelectedPathArr(GenralPathArr);
            }}
          >
            Genral
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setSelectedPathArr(CompanyPathArr);
            }}
          >
            Company
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setSelectedPathArr(CouponPathArr);
            }}
          >
            Coupon
          </Button>
        </div>
      </div>
      <div className="navbar-bottom">
        {selectedPathArr.map((pathObj) => {
          return (
            <Button
              variant="contained"
              onClick={() => {
                navigate(pathObj.path);
              }}
            >
              {pathObj.pageName}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
export default NavBar;
