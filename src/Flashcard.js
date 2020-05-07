import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Flashcard.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

class Flashcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped : false
        };

        this.handleFlip = this.handleFlip.bind(this);
    };

    handleFlip = () => {
        this.setState({ isFlipped : true });
    };

    render() {
        const renderCards = this.props.terms.map((term) => {
            const renderRelated = term.related_terms.map((related, index) => {
                return (
                    <li key={index}>
                        <a href="#">{related.relatedTerm}</a>
                    </li>
                );
            });
            return(
                <CarouselItem 
                    onExiting={() => this.props.handleAnimating(true)}
                    onExited={() => this.props.handleAnimating(false)}
                    key={term._id}>
                    <img className="cardBackground" src={'https://www.iconspng.com/uploads/index-card/index-card.png'} alt="cardBackground"/>
                    <CarouselCaption captionText={"Hello"} captionHeader={"Howdy"}/>
                    {/* <CarouselCaption>
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                            <div className="cardFront">

                                <div className="termFront">{term.term}</div>
                                <div className="pronunciationFront">{term.pronunciation}</div>
                                <div className="posFront">{term.part_of_speech}</div>
                                <input type="button" className="flipButton" onClick={this.handleFlip}/>
                            </div>
                            <div className="cardBack">
                                <div className="termBack">{term.term}</div>
                                <div className="pronunciationBack">{term.pronunciation}</div>
                                <div className="posBack">{term.part_of_speech}</div>
                                <div className="definition">{term.definition}</div>
                                <div className="relatedTerms">See also: 
                                    <ul>
                                        {renderRelated}
                                    </ul>
                                </div>
                                <input type="button" className="deleteButton" onClick={this.props.deleteTerm} value="Delete"/>
                            </div>
                        </ReactCardFlip>
                    </CarouselCaption> */}
                </CarouselItem>
            );
        });

        return(
            <>
                {renderCards}
            </>
        )
    }
};

export default Flashcard;