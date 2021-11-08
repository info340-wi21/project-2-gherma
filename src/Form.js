import React from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

// Renders a form with filter options allowing users to filter plants based on certain criteria

export function Filtering (props) {


  const waterClick = (event) => {
    let filter = event.target.value;
    props.changeForm(filter, "Water Level");
  }

  const lightClick = (event) => {
    let filter = event.target.value;
    props.changeForm(filter, "Light Level");
  }

  const toxClick = (event) => {
    let filter = event.target.value;
    props.changeForm(filter, "Toxicity");
  }

  const diffiClick = (event) => {
    let filter = event.target.value;
    props.changeForm(filter, "Overall Difficulty");
  }
        return (
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-4 collapse show" id="form-feature">
              <div className="card">
                <p id="Filters" className="card-header mb-2">Filter Search: </p>
            <Form>
                <FormGroup className="px-2" row>
                    <Label for="Light Level" className="col-md-5 col-lg-4">Light Level:</Label>
                    <Col className="col-md-7 col-lg-8 mb-2">
                        <Input className="box" type="select" name="Light Level" id="Light Level" onChange={lightClick}>
                            <option value="DEFAULT">Choose Light Level</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup className="px-2" row>
                    <Label for="Water Level" className="col-md-5 col-lg-4">Water Level:</Label>
                    <Col className="col-md-7 col-lg-8 mb-2">
                        <Input className="box" type="select" name="Water Level" id="Water Level" onChange={waterClick}>
                            <option value="DEFAULT">Choose Water Level</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup className="px-2" row>
                    <Label for="Toxicity" className="col-md-5 col-lg-4">Toxicity:</Label>
                    <Col className="col-md-7 col-lg-8 mb-2">
                        <Input className="box" type="select" name="Toxicity" id="Toxicity" onChange={toxClick}>
                            <option value="DEFAULT">Choose Toxicity Level</option>
                            <option value="Non Toxic">Non Toxic</option>
                            <option value="Low">Low</option>
                            <option value="High">High</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup className="px-2" row>
                    <Label for="Difficulty" className="col-md-5 col-lg-4">Difficulty:</Label>
                    <Col className="col-md-7 col-lg-8 mb-2">
                        <Input className="box" type="select" name="Difficulty" id="Difficulty" onChange={diffiClick}>
                            <option value="DEFAULT">Choose Overall Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </Input>
                    </Col>
                </FormGroup>
            </Form>
            </div>
          </div>
        );
    }

export default Filtering;
