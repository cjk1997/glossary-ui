import React, { Component } from 'react';
import Navbar from './Navbar';
import Lists from './Lists';
import Flashcards from './Flashcards';
import './Glossary.css';
import Flashcard from './Flashcard';

class Glossary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terms : [],
        };
    };

    getTerms = () => {
        const url = process.env.REACT_APP_API_URL;
        console.log(url);
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => this.setState({ terms : data }))
            .catch(err => err);
    };

    getTermByID = (id) => {
        const url = process.env.REACT_APP_API_URL;
        fetch(`${url}/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ terms : data }))
            .catch(err => err);
    };

    getTermByValue = (value) => {
        const newValue = value.replace(/ /g, '_');

        const url = process.env.REACT_APP_API_URL;
        fetch(`${url}/term/${newValue}`)
            .then(response => response.json())
            .then(data => this.setState({ terms : data }))
            .catch(err => err);
    };

    componentDidMount = () => {
        this.getTerms();
    };

    render() {
        console.log(this.state.terms);
        return (
            <>
                <div className="mainContainer">
                    <div className="navbar"></div>
                    <div className="bodyContainer">
                        <div className="listContainer"></div>
                        <div className="cardContainer"><Flashcards refresh={this.getTerms} terms={this.state.terms}/></div>
                    </div>
                    <div className="footer"/>
                </div>
            </>
        );
    };





    // render() {
    //     return (
    //         <>
    //             <div className="mainContainer">
    //                 <div className="navbar"><Navbar/></div>
    //                 <div className="bodyContainer">
    //                     <div className="listContainer"><Lists terms={this.state.terms}/></div>
    //                     <div className="flashcards"><Flashcards terms={this.state.terms}/></div>
    //                 </div>
    //                 <div className="footer"/>
    //             </div>
    //         </>
    //     );
    // };
};

export default Glossary;