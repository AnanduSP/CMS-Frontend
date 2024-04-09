import React from "react";
import "./CouponCard.css";

const CouponCard = (props) => {
  return (
    <div className="coupon">
      <div className="left">
        <div>Enjoy Your Gift</div>
      </div>
      <div className="center">
        <div>
          <h2>Coupon</h2>
          <div>{props.redeemCode}</div>

          <small>Valid until {props.expiryDate}</small>
        </div>
      </div>

      <div className="right">
        <div>{props.denomination}₹</div>
      </div>
    </div>
  );
};

export default CouponCard;
