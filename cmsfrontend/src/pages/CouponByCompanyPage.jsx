import React, { useState } from 'react'
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableBody, TableContainer, TextField,Button } from '@mui/material';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
})
);
const CouponByCompanyPage = () => {

  const [couponArr, setCouponArr] = useState([
    {
      
      redeemCode: 'qdfvmnbv',
      companyId: '1',
      expiryDate: '2017',
      denomination: '2000',
      id: '112'
    },
    {
     
      redeemCode: 'qdfvmnbv',
      companyId: '1',
      expiryDate: '2017',
      denomination: '2000',
      id: 'w21'
    }
  ]);

  const [companyId, setCompanyId] = useState(0);


  const handleSubmit = () => {
    console.log('handle');
    // axios.get(""+companyId).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});

  }

  return <div>


    <TextField
      type="text"
      variant="outlined"
      color="secondary"
      label="Company Id"
      onChange={(e) => setCompanyId(e.target.value)}
      value={companyId}
      fullWidth
      required
      sx={{ mt: 4, mb: 4 }}
    />

    <Button variant="contained" type="submit" onClick={handleSubmit}
      sx={{ mb: 4 }}>
      Register
    </Button>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Coupon ID</StyledTableCell>
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
              <StyledTableCell align='left'>{coupon.redeemCode}</StyledTableCell>
              <StyledTableCell align="left">{coupon.denomination}</StyledTableCell>
              <StyledTableCell align="left">{coupon.expiryDate}</StyledTableCell>
              <StyledTableCell align="left">{coupon.companyId}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
};

export default CouponByCompanyPage;
