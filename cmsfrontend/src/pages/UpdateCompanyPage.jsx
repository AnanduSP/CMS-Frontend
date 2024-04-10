import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./UpdateCompanyPage.css";
import CouponCard from "../components/CouponCard";
const UpdateCompanyPage = () => {
  const [companyId, setCompanyId] = useState();
  const [isValid, setIsValid] = useState(false);

  const isDisabled = true;
  // const [updatedCompanyName, setUpdatedCompanyName] = useState();
  // const [updatedCompanyId, setUpdatedCompanyId] = useState();
  // const [updatedCompanyAmount, setUpdatedCompanyAmount] = useState();

  const [updateCompanyObj, setUpdateCompanyObj] = useState({
  
    updatedCompanyId:"",
    updatedCompanyName:"",
    updatedCompanyAmount:''

  });


  const handleSubmit = () => {
    console.log("should return companyId to update from search bar");
    console.log(companyId);
    setIsValid(!isValid);
    // axios.get(""+companyId).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
  };

  const handleUpdateSubmit = () => {
    console.log("Printing values to updated : ");
    console.log(updateCompanyObj);
    //connect 
    // axios.get(""+companyId).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
  };
  return (
    <div className="update-parent">
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
      
            // onChange={(e) => setUpdateCompanyObj((curr) => { return { ...curr, updatedCompanyId: e.target.value }; })}
            value={companyId} 
            disabled={isDisabled}
            fullWidth
            required
            sx={{ mt: 4 }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Enter your Company Name"
            // onChange={(e) => setUpdateCompanyObj((curr)=>{return {...curr,updatedCompanyName:e.target.value}})}
            // value={"new name"}
            onChange={(e) => setUpdateCompanyObj((curr) => { return { ...curr, updatedCompanyName: e.target.value }; })}
            value={updateCompanyObj.updatedCompanyName}
            fullWidth
            required
            sx={{ mt: 4 }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Enter your Company Amount"
            // onChange={(e) => setUpdateCompanyObj((curr)=>{return {...curr,updatedCompanyAmount:e.target.value}})}
            // value={"new amount"}
            onChange={(e) => setUpdateCompanyObj((curr) => { return { ...curr, updatedCompanyAmount: e.target.value }; })}
            value={updateCompanyObj.updatedCompanyAmount}
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
