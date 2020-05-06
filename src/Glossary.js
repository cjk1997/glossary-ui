import React, { Component } from 'react';

class Glossary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terms : [],
        };
    };

    getTerms = () => {
        const url = process.env.REACT_APP_API_URL;
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
        return (
            <>
                <div className="bodyContainer">
                    <div className="navbar"><Navbar/></div>
                    <div className="flashcards"><Flashcards/></div>
                    <div className="listContainer"><Lists/></div>
                    <div className="footer"/>
                </div>
            </>
        );
    };
};

export default Glossary;