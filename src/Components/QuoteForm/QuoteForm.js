import React from 'react';
import constants from "../../constants";
import {Form, FormGroup, Input, Label} from "reactstrap";
import Button from "../UI/Button/Button";


const QuoteForm = ({selectValue, inputChange, inputValue, contentValue, submit}) => {
	let option = constants.categories.map(category => {
		return (
			<option key={category.id} value={category.id}>
				{category.title}
			</option>
		)
	});
	return (
		<Form onSubmit={submit}>
			<FormGroup>
				<Label htmlFor="category">Category</Label>
				<Input type="select" onChange={inputChange} name="category" value={selectValue}>
					{option}
				</Input>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="author">Author</Label>
				<Input value={inputValue} name="author" onChange={inputChange} type="text" className="form-control"/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="content">Quote</Label>
				<textarea value={contentValue} name="content" onChange={inputChange} className="form-control"/>
			</FormGroup>
			<Button type="submit" color="info">Add</Button>
		</Form>
	)
};

export default QuoteForm;