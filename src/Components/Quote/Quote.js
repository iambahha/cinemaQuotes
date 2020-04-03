import React from 'react';
import Button from "../UI/Button/Button";
import {Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";
import './Quote.css'

const Quote = ({author, content, edit, remove}) => {
	return (
		<Card body inverse color="info" className="quote-block">
			<CardHeader>Quote</CardHeader>
			<CardBody>
				<CardTitle>{author}:</CardTitle>
				<CardText>{content}</CardText>
				<Button onClick={edit} type="button" color="secondary">Edit</Button>
				<Button onClick={remove} type="button" color="warning">Delete</Button>
			</CardBody>
		</Card>
	);
};

export default Quote;