import React, { Component } from 'react';
import { fetchSchool } from '../../services/api';
import { postReview } from '../../services/api';
import Header from './Header';
import Review from './Review';
import ReviewForm from './ReviewForm';
import styles from '../../mystyle.module.css';



class School extends Component {

    state = { 
        school: {},
        reviews: [],
        review: {}
     }

     componentDidMount() {
        fetchSchool(this.props.match.params.slug).then(resp => {
            this.setState({school: resp.data})
            this.setState({reviews: resp.included})
        });
    }

     handleChange = (e) => {
        e.preventDefault()
        let review = this.state.review;
        review[e.target.name] = e.target.value;
        this.setState({review})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const school_id = this.state.school.id
         postReview(this.state.review.title, this.state.review.description, this.state.review.score ,school_id).then(resp => {
             const newReview = resp.data
           this.setState({...this.state.reviews, newReview})
        })
        this.setState({
            review: {description: "", title: "", score: ""}})
            window.location.reload();
    }


    ratingChanged = (newRating) => {
        let review = {...this.state.review}
        review.score = newRating;
        this.setState({review})
      };


    render() { 

        const reviews = this.state.reviews.map((review, index) => {
            return (
            <Review key={index} attributes={review.attributes} />
            )
        })
   
        return ( 
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <div className={styles.main}>
                   {this.state.school.attributes ? <Header attributes= {this.state.school.attributes} reviews= {this.state.reviews}/> : "loading ..." }
                   {reviews}
                   </div>
                </div>
                <div className={styles.column_2}>
                {this.state.school.attributes ? <ReviewForm 
                handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit} 
                attributes= {this.state.school.attributes} review={this.state.review} 
                ratingChanged ={this.ratingChanged} /> : "loading ..." }
                </div> 
            </div>
         );
    }
}
 
export default School;


