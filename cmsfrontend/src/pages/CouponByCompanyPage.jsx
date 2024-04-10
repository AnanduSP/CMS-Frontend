import React, { useState,useContext } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../App";
import { TableBody, TableContainer, TextField, Button } from "@mui/material";
import "./CouponByCompanyPage.css";
import axios from "axios";
import CouponCard from "../components/CouponCard";

const CouponByCompanyPage = () => {
  const [couponArr, setCouponArr] = useState([
    {
      redeemCode: "abcde-abcde-abcde-abcde",
      companyId: "1",
      expiryDate: "2018",
      denomination: "2000",
      id: "112",
    },
    {
      redeemCode: "abcde-abcde-abcde-abcde",
      companyId: "1",
      expiryDate: "2017",
      denomination: "2000",
      id: "w21",
    },
    {
      redeemCode: "abcde-abcde-abcde-abcde",
      companyId: "1",
      expiryDate: "2017",
      denomination: "2000",
      id: "w21",
    },
    {
      code: "abcde-abcde-abcde-abcde",
      companyId: "1",
      expDate: "2017",
      denomination: "2000",
      id: "w21",
    },
  ]);
  const [companyName,setCompanyName]=useState("");
  const [token,setToken]=useContext(UserContext);
  
  const updateCoupons=()=>{
    console.log(token);
    axios.get(`http://localhost:8080/auth/validate?token=${token}`).then((response)=>{
      setCompanyName(response.data)
      console.log(response.data);
    });
    axios.get(`http://localhost:8081/CouponManagementSystem/api/coupons/view_coupon/${companyName}`).then((response)=>{
      setCouponArr(response.data.couponsDTOS);
      console.log(couponArr);
    });
  };

  

  const [companyId, setCompanyId] = useState(0);

  const handleSubmit = () => {
    console.log("search coupons from company page");
    updateCoupons();


    // axios.get(""+companyId).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
  };

  return (
    <div className="search-coupon-by-company-parent">
      <div className="search-company-form">
        <h2>Search Company</h2>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Enter your Company Id"
          onChange={(e) => setCompanyId(e.target.value)}
          value={companyId}
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

      <div className="coupon-container" >
        {couponArr.map((coupon) => {
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

      {/* <TableContainer sx={{ marginTop: "2rem" }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Coupon ID</StyledTableCell>
              <StyledTableCell align="left">Redeem Code</StyledTableCell>
              <StyledTableCell align="left">Denomination</StyledTableCell>
              <StyledTableCell align="left">Expiry Date</StyledTableCell>
              <StyledTableCell align="left">Company ID</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {couponArr.map((coupon) => (
              <StyledTableRow key={coupon.id}>
                <StyledTableCell align="left">{coupon.id}</StyledTableCell>
                <StyledTableCell align="left">
                  {coupon.redeemCode}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {coupon.denomination}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {coupon.expiryDate}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {coupon.companyId}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
};

export default CouponByCompanyPage;
