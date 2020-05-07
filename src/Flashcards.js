import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import Flashcard from './Flashcard';
import './Flashcards.css';

class Flashcards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // terms : this.props.terms,
            // terms : [],
            activeIndex : 0,
            animating : false
        };

        this.handleAnimating = this.handleAnimating.bind(this);
    };

    // getTerms = () => {
    //     const url = process.env.REACT_APP_API_URL;
    //     fetch(`${url}`)
    //         .then(response => response.json())
    //         .then(data => this.setState({ terms : data }))
    //         .catch(err => err);
    // };

    updateActiveIndex = () => {

    }

    handleAnimating = (bool) => {
        this.setState({ animating : bool })
    }

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.terms.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex : nextIndex });
    };

    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === this.props.terms.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex : nextIndex });
    };

    goToIndex = (newIndex) => {
        if (this.state.animating) return;
        this.setState({ activeIndex : newIndex });
      };

    updateTerm = (id) => {

    };

    deleteTerm = (id) => {
        let result = window.confirm("Are you sure you want to delete this entry?");
        if (result) {
            const url = process.env.REACT_APP_DB_URL;
            fetch(`${url}/${id}`, { method : "DELETE" })
                .then(response => response.json)
                .then(console.log(`Deleted ID: ${id}`))
                .then(this.props.refresh)
                .catch(err => err);
        };
    };

    // componentDidMount = () => {
    //     this.getTerms();
    // }

    render() {
        // const cardCarousel = () => {
        //     for (let i = 0; i < this.props.terms.length - 1; i++) {
        //         if (i === 0) {
        //             return(
        //             <li data-target="cardCarousel" data-slide-to={i} class="active"/>
        //             )
        //         } else {
        //             return(
        //             <li data-target="cardCarousel" data-slide-to={i}/>
        //             )
        //         }
        //     }
        // }
        // console.log(this.props.terms);
        return(
            <>
                {this.props.terms.length ? <Carousel 
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                    className="carousel">
                    <CarouselIndicators 
                        items={this.props.terms} 
                        activeIndex={this.state.activeIndex}
                        onClickHandler={this.goToIndex}/>
                    <Flashcard 
                        handleAnimating={this.handleAnimating}
                        terms={this.props.terms} 
                        updateTerm={this.updateTerm} 
                        deleteTerm={this.deleteTerm}/>
                    <CarouselControl 
                        direction="prev" 
                        directionText="Previous" 
                        onClickHandler={this.previous} />
                    <CarouselControl 
                        direction="next" 
                        directionText="Next" 
                        onClickHandler={this.next}/>
                </Carousel>
    : ''}
                <div className="buttons">
                    <input type="button" className="nextButton" value="Next"/>
                    <input type="button" className="addButton" value="Add a Term"/>
                </div>
            </>
        )
    }
}

export default Flashcards;