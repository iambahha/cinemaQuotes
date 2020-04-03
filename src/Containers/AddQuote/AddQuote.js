import React, {Component} from 'react';
import axios from 'axios';
import constants from "../../constants";
import QuoteForm from "../../Components/QuoteForm/QuoteForm";
import Spinner from "../../Components/UI/Spinner/Spinner";

class AddQuote extends Component {
	state = {
		quote: {
			category: constants.categories[0].id,
			author: '',
			content: ''
		},
		loading: false,
	};
	AddPostHandler = async (event) => {
		event.preventDefault();
		this.setState({loading: true});
		await axios.post('/cinemaQuotes/quotes.json', this.state.quote);
		this.setState({loading: false});
		this.props.history.push('/');
	};
	inputChangeHandler = event => {
		event.persist();
		this.setState(prevState => {
			const stateCopy = {...prevState.quote};
			stateCopy[event.target.name] = event.target.value;
			return {quote: stateCopy};
		})
	};

	render() {
		const state = this.state.quote;
		let form = <QuoteForm
			submit={this.AddPostHandler}
			selectValue={state.category}
			contentValue={state.content}
			inputValue={state.author}
			inputChange={this.inputChangeHandler}/>;
		if (this.state.loading) {
			form = <Spinner/>;
		}
		return (
			<div>
				{form}
			</div>
		);
	}
}

export default AddQuote;