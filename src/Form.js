import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {'Plant Name': '', 'Light Level': 'DEFAULT', 'Water Level': 'DEFAULT', 'Toxicity': 'DEFAULT', 'Difficulty': 'DEFAULT'};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.callback(this.state);
    }

    handleChange = (event) => {
        let elem = event.target;
        let value = elem.value;
        let id = elem.id;

        this.setState(() => {
            if (id === "Plant Name") {
                return {'Plant Name': value};
            } else if (id === "Light Level") {
                return {'Light Level': value};
            } else if (id === "Water Level") {
                return {'Water Level': value};
            } else if (id === "Toxicity") {
                return {Toxicity: value};
            } else if (id === "Difficulty") {
                return {Difficulty: value};
            }
        });
    }

    handleReset = (event) => {
        event.preventDefault();
        this.setState({'Plant Name': '', 'Light Level': 'DEFAULT', 'Water Level': 'DEFAULT', 'Toxicity': 'DEFAULT', 'Difficulty': 'DEFAULT'});
        this.props.reset();
    }

    render() {

        return (
            <Form>
                <FormGroup row>
                    <Label for="Plant Name" className="col-md-5 col-lg-4">Plant Name:</Label>
                    <Col className="col-md-7 col-lg-8">
                        <Input type="text" name="Plant Name" id="Plant Name" placeholder="Enter Name" value={this.state['Plant Name']} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Light Level" className="col-md-5 col-lg-4">Light Level:</Label>
                    <Col className="col-md-7 col-lg-8">
                        <Input type="select" name="Light Level" id="Light Level" value={this.state['Light Level']} onChange={this.handleChange}>
                            <option value="DEFAULT">Choose Light Level</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Water Level" className="col-md-5 col-lg-4">Water Level:</Label>
                    <Col className="col-md-7 col-lg-8">
                        <Input type="select" name="Water Level" id="Water Level" value={this.state['Water Level']} onChange={this.handleChange}>
                            <option value="DEFAULT">Choose Water Level</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Toxicity" className="col-md-5 col-lg-4">Toxicity:</Label>
                    <Col className="col-md-7 col-lg-8">
                        <Input type="select" name="Toxicity" id="Toxicity" value={this.state['Toxicity']} onChange={this.handleChange}>
                            <option value="DEFAULT">Choose Toxicity Level</option>
                            <option value="Non Toxic">Non Toxic</option>
                            <option value="Low">Low</option>
                            <option value="High">High</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Difficulty" className="col-md-5 col-lg-4">Difficulty:</Label>
                    <Col className="col-md-7 col-lg-8">
                        <Input type="select" name="Difficulty" id="Difficulty" value={this.state['Difficulty']} onChange={this.handleChange}>
                            <option value="DEFAULT">Choose Overall Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </Input>
                    </Col>
                </FormGroup>
                <button className="btn" onClick={this.handleSubmit}>Search</button>
                <button className="btn" id="reset-btn" onClick={this.handleReset}>Reset</button>
            </Form>
        );
    }
}

export default SearchForm;
