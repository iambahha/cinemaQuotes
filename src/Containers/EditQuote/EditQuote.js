import React, {Component} from 'react';
import axios from 'axios';
import constants from "../../constants";
import QuoteForm from "../../Components/QuoteForm/QuoteForm";

class EditQuote extends Component {
    state = {
        quote : {
            category : constants.categories[0].id,
            author : '',
            content : ''
        }
    };
    async componentDidMount() {
        let id = this.props.match.params.id;
       let response = await axios.get('/cinemaQuotes/quotes/' + id + '.json');
       this.setState({quote : response.data});
    }

    EditQuote = async (event) => {
        let id = this.props.match.params.id;
        event.preventDefault();
        await axios.put('/cinemaQuotes/quotes/' + id + '.json', this.state.quote);
        this.props.history.push('/');
    };
    inputChangeHandler = event => {
        event.persist();
        this.setState(prevState => {
            const stateCopy = {...prevState.quote};
            stateCopy[event.target.name] = event.target.value;
            return {quote : stateCopy};
        })
    };
    render() {
        const state = this.state.quote;
        return (
            <div>
                <QuoteForm
                    submit={this.EditQuote}
                    selectValue={state.category}
                    contentValue={state.content}
                    inputValue={state.author}
                    inputChange={this.inputChangeHandler}/>
            </div>
        );
    }
}

export default EditQuote;