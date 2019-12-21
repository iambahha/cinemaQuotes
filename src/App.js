import React from 'react';
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import Navigation from "./Components/UI/Navigation/Navigation";
import AddQuote from "./Containers/AddQuote/AddQuote";
import QuotesList from "./Containers/QuotesList/QuotesList";
import EditQuote from "./Containers/EditQuote/EditQuote";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <div className="container mt-5">
              <Switch >
                  <Route path="/" exact component={QuotesList}/>
                  <Route path="/quotes/add" component={AddQuote}/>
                  <Route path="/quotes-edit/:id" component={EditQuote}/>
                  <Route path="/quotes/:category" component={QuotesList}/>
              </Switch>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
