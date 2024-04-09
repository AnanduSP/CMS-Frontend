import React, { useState } from "react";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
// import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from '@mui/material/TableContainer';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableBody, TableContainer, TextField, Button } from "@mui/material";
import "./CouponByCompanyPage.css";
import CouponCard from "../components/CouponCard";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const CouponByCompanyPage = () => {
  const [couponArr, setCouponArr] = useState([
    {
      redeemCode: "abcde-abcde-abcde-abcde",
      companyId: "1",
      expiryDate: "2017",
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
      redeemCode: "abcde-abcde-abcde-abcde",
      companyId: "1",
      expiryDate: "2017",
      denomination: "2000",
      id: "w21",
    },
  ]);

  const [companyId, setCompanyId] = useState(0);

  const handleSubmit = () => {
    console.log("handle");
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

      <div className="coupon-container">
        {couponArr.map((coupon) => {
          return (
            <div className="coupon-holder">
              <CouponCard
                denomination={coupon.denomination}
                expiryDate={coupon.expiryDate}
                redeemCode={coupon.redeemCode}
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
