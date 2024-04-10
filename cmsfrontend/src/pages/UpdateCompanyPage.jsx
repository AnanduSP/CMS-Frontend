import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./UpdateCompanyPage.css";
import CouponCard from "../components/CouponCard";
const UpdateCompanyPage = () => {
  const [companyId, setCompanyId] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [updateCompanyObj, setUpdateCompanyObj] = useState({});
  const handleSubmit = () => {
    console.log("search coupons from update search page");
    setIsValid(!isValid);
    // axios.get(""+companyId).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
  };

  const handleUpdateSubmit = () => {
    console.log("search coupons from update page");
    // axios.get(""+companyId).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
  };
  return (
    <div className="update-parent">
      <div className="search-company-form">
        <h2>Search Coupon</h2>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Enter your Company Id"
          onChange={(e) => setCompanyId(e.target.value)}
          value={companyId}
          fullWidth
          required
          sx={{ mt: 4 }}
        />

        <Button
          variant="outlined"
          type="submit"
          onClick={handleSubmit}
          sx={{ alignSelf: "flex-end", mt: 4 }}
        >
          Search
        </Button>
      </div>
      {isValid && (
        <div className="search-company-form" style={{ marginTop: "2rem" }}>
          <h2>Update Form</h2>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Enter your Company Id"
            onChange={(e) => setUpdateCompanyObj(e.target.value)}
            value={"This is fixed for now, please change it accordingly"}
            fullWidth
            required
            sx={{ mt: 4 }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Enter your Company Name"
            onChange={(e) => setUpdateCompanyObj(e.target.value)}
            value={"This is fixed for now, please change it accordingly"}
            fullWidth
            required
            sx={{ mt: 4 }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Enter your Company Amount"
            onChange={(e) => setUpdateCompanyObj(e.target.value)}
            value={"This is fixed for now, please change it accordingly"}
            fullWidth
            required
            sx={{ mt: 4 }}
          />

          <Button
            variant="outlined"
            type="submit"
            onClick={handleUpdateSubmit}
            sx={{ alignSelf: "flex-end", mt: 4 }}
          >
            update
          </Button>
        </div>
      )}
    </div>
  );
};

export default UpdateCompanyPage;
