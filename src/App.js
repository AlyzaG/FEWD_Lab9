import './App.css';
import React from 'react';
import picture from './cody-nottingham-cL8zDxCNjt8-unsplash.jpg';
import 'bulma/css/bulma.css'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 0};
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(event) {
        this.setState({value: this.state.value+1});
    }
    render (){
        return(
            <div>
                <navbar>
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <h2>NYC</h2>
                        </a>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                        </a>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary" href={"https://www.google.com/maps/place/New+York,+%C3%89tat+de+New+York,+%C3%89tats-Unis/@40.6971494,-74.2598655,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728"}>
                                        <strong>Map</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </navbar>

                <div className="columns">
                    <div className="column is-1">

                    </div>
                    <div className="column is-7">
                        <h3 className="title is-3">Welcome to New York City</h3>
                        <img className="photo" src={picture} alt={"nyc"}/>
                    </div>
                    <div className="column is-3">
                        <button className="button is-primary" onClick={this.buttonClicked}>
                            Click me
                        </button>
                        <p>{this.state.value}</p>
                        <p>France gifted the Statue of Liberty to the United States in 1886 for its centennial celebration.
                            The statue was shipped as 350 pieces in 214 crates and took 4 months to assemble at its current
                            home on Ellis Island.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
