import { useState } from "react";
import "./AltNavbar.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const AltNavbar = () => {
  const GenralPathArr = [
    { pageName: "Home", path: "/general/home" },
    { pageName: "Login", path: "/general/login" },
    // { pageName: "Register", path: "/general/register" },
    { pageName: "All", path: "/company/all-company" },
    { pageName: "Update", path: "/company/update" },
    { pageName: "search company", path: "/company/search-by-id" },
    { pageName: "Search by company", path: "/coupon/by-company" },
    { pageName: "Search by coupon-id", path: "/coupon/by-coupon-id" },
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
