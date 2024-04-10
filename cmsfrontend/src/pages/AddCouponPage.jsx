import React, { useState,useContext } from "react";
import { TextField, Button } from "@mui/material";
import "./AddCouponPage.css";
import axios from "axios";
import { UserContext } from "../App";
import CouponCard from "../components/CouponCard";

const AddCouponPage = () => {

    const [amount, setAmount] = useState();

  const [coupons, setCoupons] = useState([]);
  const [companyName,setCompanyName]=useState("");
  const [token,setToken]=useContext(UserContext);
  

  const handleSubmit = () => {
    console.log("simulating sending coupon id : ");
    console.log(amount);
    axios.get(`http://localhost:8080/auth/validate?token=${token}`).then((response)=>{
      setCompanyName(response.data)
      console.log(response.data);
    });
    axios.post("http://localhost:8081/CouponManagementSystem/api/coupons/generate",{"name":companyName,"amount":amount}).then((response)=>{
      setCoupons(response.data.couponsDTOS);
    });
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

      <div className="coupon-container" >
        {coupons.map((coupon) => {
          return (
            <div className="coupon-holder">
              <CouponCard
                id={coupon.id}
                denomination={coupon.denomination}
                expiryDate={coupon.expDate}
                redeemCode={coupon.code}
              />
            </div>
          );
        })}
      </div>
    </div>

    )
}

export default AddCouponPage
