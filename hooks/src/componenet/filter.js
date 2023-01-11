import React from 'react';
import RateMovie from './rate';
import {InputGroup, Form} from 'react-bootstrap';

export default function Filter() {
  return (
    <div className="filterContainer">
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
        <Form.Control
          placeholder="Search By Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <RateMovie />
    </div>
  )
}
