import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MealCard from "./MealCard";

function MealFinder() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);
  const [nullData, setNullData] = useState(null);

  const handleSearch = async () => {
    if(inputText === "" || inputText === null){
        alert("Enter a food name to search")
    }else{
        try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
      );
      const resValue = await response.json();
      if(resValue){
        setNullData(true)
        setData(resValue.meals);
      }if(resValue.meals === null){
        setNullData(false)
      }

      console.log(resValue.meals);
    } catch (err) {
      console.log(err);
    }}
  };

  return (
    <Container
      style={{
        margin: "2% auto",
        display: "grid",
        width: "100%",
        height: "100%",
      }}
    >
    <h1 style={{ margin: "1% auto", color : 'white' }}>Welcome to Meal Finder</h1>
    <h3 style={{ margin: "1% auto", color : 'white' }}>Find the recipe of the meal on your mind with just one click!</h3>
      <Box
        component="form"
        style={{ margin: "2% auto" }}
      >
      <div style={{color : 'white', display: "flex", flexDirection: "row" }}>
        <TextField
          variant="outlined"
          value={inputText}
          required = {true}
          onChange={(e) => {setInputText(e.target.value)}}
          label="Search"
          style={{width : '300px', margin : '1%', background : 'transparent', color : 'white', borderRadius : '2px'}}
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          style={{margin : '1%'}}
        >
          Submit
        </Button>
        </div>
        <div style={{margin : "1% auto", display: "flex", flexWrap : "wrap", flex : '1' }}>
        {nullData === false? <h3>No Data Found</h3> : (data.map((item, index) => {
          return (<MealCard key = {index} value={item} />);
        }))}
        </div>
      </Box>
    </Container>
  );
}

export default MealFinder;
