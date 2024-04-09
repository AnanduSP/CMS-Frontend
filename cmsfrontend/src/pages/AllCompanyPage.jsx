import { TableBody, TableContainer } from '@mui/material';
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
// import Container from '@mui/material';
/*
{
    name:
    amount:
    id:
}
*/
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
}));
const AllCompanyPage = () => {

  const [companyArr,setCompanyArr] =useState([
    {
      name:'company1',
      amount:'2000',
      id:'1'
    },
    {
      name:'company1',
      amount:'2000',
      id:'1'
    }
  ]);
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company ID</StyledTableCell>
            <StyledTableCell align="left">Company Name</StyledTableCell>
            <StyledTableCell align="left">Amount&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companyArr.map((company) => (
            <StyledTableRow key={company.name}>
              <StyledTableCell align='left'>{company.id}</StyledTableCell>
              <StyledTableCell align="left">{company.name}</StyledTableCell>
              <StyledTableCell align="left">{company.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default AllCompanyPage