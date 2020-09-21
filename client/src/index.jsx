import React from "react";
import ReactDOM from 'react-dom';
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Nav from './component/Nav.jsx'

import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
class App extends React.Component { 
    constructor(props){
        super(props)
    }
    render(){
        return <Router>
            <div>
                <Nav /> 
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        </Router>
    }
}

ReactDOM.render(<App/> , document.getElementById('app'))
