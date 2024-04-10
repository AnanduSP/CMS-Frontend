import { useState } from "react";
import "./NavBar.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const NavBar = () => {
  const GenralPathArr = [
    { pageName: "Home", path: "/general/home" },
    { pageName: "Login", path: "/general/login" },
    // { pageName: "Register", path: "/general/register" },
  ];

  const CompanyPathArr = [
    { pageName: "All-Company", path: "/company/all-company" },
    { pageName: "Update", path: "/company/update" },
    { pageName: "Search by Company id", path: "/company/search-by-id" },
  ];

  const CouponPathArr = [
    { pageName: "Add Coupon", path: "/coupon/add-coupon"},
    { pageName: "Search by company", path: "/coupon/by-company" },
  ];

  const [selectedPathArr, setSelectedPathArr] = useState(GenralPathArr); //selects which nav bar to be displayed

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
              navigate("/genral/login");
            }}
          >
            Genral
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setSelectedPathArr(CompanyPathArr);
              navigate("/company/all-company");
            }}
          >
            Company
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setSelectedPathArr(CouponPathArr);
              navigate("/coupon/by-company");
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
              size="small"
              // variant="contained"
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
