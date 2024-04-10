import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";
import "./AddCouponPage.css";
import CouponCard from "../components/CouponCard";

const AddCouponPage = () => {

    const [amount, setAmount] = useState();

  const [coupon, setCoupon] = useState({
    redeemCode: "abcde-abcde-abcde-abcde",
    companyId: "1",
    expiryDate: "2017",
    denomination: "2000",
    id: "112",
  });

  const handleSubmit = () => {
    console.log("simulating sending coupon id : ");
    console.log(amount);
    // axios.get(""+companyId).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
  };

  return (
    <div className="search-coupon-by-company-parent">
      <div className="search-company-form">
        <h2>Generate Coupon</h2>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Enter your Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
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
          Generate Coupons
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

    )
}

export default AddCouponPage
