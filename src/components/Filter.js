import { Button, Form } from "react-bootstrap";

import '../App.css'
import Rating from "./Rating";
import { useState } from "react";


const Filter = () => {
const [rate,setRate] =useState(3)
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
         
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
         
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
         
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={rate}
          onClick={(i)=> setRate(i)}
          
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button>
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
