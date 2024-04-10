import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./CouponByIdPage.css";
import CouponCard from "../components/CouponCard";

const CouponByIdPage = () => {
  const [couponId, setCouponId] = useState(0);

  const [coupon, setCoupon] = useState({
    redeemCode: "abcde-abcde-abcde-abcde",
    companyId: "1",
    expiryDate: "2017",
    denomination: "2000",
    id: "112",
  });

  const handleSubmit = () => {
    console.log("search coupons from company page");
    // axios.get(""+companyId).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
  };

  return (
    <div className="search-coupon-by-company-parent">
      <div className="search-company-form">
        <h2>Search Coupon</h2>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Enter your Coupon Id"
          onChange={(e) => setCouponId(e.target.value)}
          value={couponId}
          fullWidth
          required
          sx={{ mt: 4, mb: 4 }}
        />

        <Button
          variant="outlined"
          type="submit"
          onClick={handleSubmit}
          sx={{ alignSelf: "flex-end" }}
        >
          Search
        </Button>
      </div>

      <div className="coupon-container">
        <div className="coupon-holder">
          <CouponCard
            denomination={coupon.denomination}
            expiryDate={coupon.expiryDate}
            redeemCode={coupon.redeemCode}
          />
        </div>
      </div>
    </div>
  );
};

export default CouponByIdPage;
