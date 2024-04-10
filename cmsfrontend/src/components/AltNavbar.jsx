import { useState } from "react";
import "./AltNavbar.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const AltNavbar = () => {
  const GenralPathArr = [
    { pageName: "Home", path: "/general/home" },
    { pageName: "Login", path: "/general/login" },
    // { pageName: "Register", path: "/general/register" },

    //company's pages
    { pageName: "All Company", path: "/company/all-company" },
    { pageName: "Update Company", path: "/company/update" },
    { pageName: "Search Company", path: "/company/search-by-id" },

    //coupons's pages
    { pageName: "Search by company", path: "/coupon/by-company" },
    { pageName: "Search by coupon-id", path: "/coupon/by-coupon-id" },
    { pageName: "Add Coupon", path: "/coupon/add-coupon"},
  ];

  const [selectedPathArr, setSelectedPathArr] = useState(GenralPathArr); //selects which nav bar to be displayed

  const navigate = useNavigate();

  return (
    <div className="navbar-parent special-bg">
      <div className="navbar-island">
        <div className="navbar-left">CMS</div>
        <div className="navbar-right">
          {selectedPathArr.map((pathObj) => {
            return (
              <Button
                size="small"
                // variant="outlined"
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
    </div>
  );
};

export default AltNavbar;
