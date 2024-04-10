import { TableBody, TableContainer, TextField, Button } from "@mui/material";
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
import axios from "axios";
import "./SearchCompanyPage.css";
import { Label } from "@mui/icons-material";

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

const SearchCompanyPage = () => {
  const [company, setCompany] = useState({
    name: "company1",
    amount: "2000",
    id: "1",
  });

  const [companyId, setCompanyId] = useState();

  const handleSubmit = () => {
    console.log("simulating searching company by companyId :");
    console.log(companyId);
    // axios.get(""+companyId).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
  };

  return (
    <div className="search-company-parent">
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

      <TableContainer sx={{ marginTop: "2rem" }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Company ID</StyledTableCell>
              <StyledTableCell align="left">Company Name</StyledTableCell>
              <StyledTableCell align="left">Amount&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key={company.name}>
              <StyledTableCell align="left">{company.id}</StyledTableCell>
              <StyledTableCell align="left">{company.name}</StyledTableCell>
              <StyledTableCell align="left">{company.amount}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SearchCompanyPage;
