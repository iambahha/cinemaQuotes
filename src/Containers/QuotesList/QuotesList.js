import React, {Component} from 'react';
import axios from 'axios';
import Quote from "../../Components/Quote/Quote";
import Categories from "../../Components/Categories/Categories";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Button from "../../Components/UI/Button/Button";
import './QuotesList.css'

class QuotesList extends Component {
    state = {
        quotes: [],
        loading : true,
        category : null
    };
    _getAllPosts = async () => {
        let url = '/quotes.json';
        let category = this.props.match.params.category;
        if(category){
            url += '?orderBy="category"&equalTo="'+ category +'"';
        }
        const response = await axios.get(url);
        if (response.data){
            let quotes = Object.keys(response.data).map(key => {
                console.log(response.data[key]);
                return {...response.data[key], id: key}
            });
            this.setState({quotes,loading : false});
        } else {
            this.setState({loading : false})
        }
    };

    async componentDidMount() {
        this._getAllPosts();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.category !== this.state.category){
            this.setState({category : this.props.match.params.category});
            this._getAllPosts();
        }
    }
    addQuote = () => {
        this.props.history.push('/quotes/add');
    };
    quoteDeleteHandler = async id => {
        await axios.delete(`/quotes/${id}.json`);
        let copyQuote = [...this.state.quotes];
        let index = copyQuote.findIndex(quote => id === quote.id);
        copyQuote.splice(index,1);
        this.setState({quotes : copyQuote});
    };
    quoteEditHandler = id => {
        this.props.history.push('/quotes-edit/' + id);
    };

    render() {
        let allQuotes = this.state.quotes.map(quote => {
            return (
                <Quote remove={() => this.quoteDeleteHandler(quote.id)}
                       edit={() => this.quoteEditHandler(quote.id)}
                       key={quote.id} author={quote.author}
                       content={quote.content}/>
            )
        });
        if(this.state.quotes.length === 0){
            allQuotes = <Button onClick={this.addQuote} classNames="btn-add-quotes" color="info" type="button">Add new quotes</Button>
        }
        if(this.state.loading){
            allQuotes = <Spinner/>
        }
        return (
            <div className="container d-flex flex-wrap ">
                <div>
                    <Categories />
                </div>
                <div className="quotes-list">
                  {allQuotes}
                </div>
            </div>
        );
    }
}

export default QuotesList;