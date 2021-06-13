import React, { Component } from 'react';
import { fetchSchool } from '../../services/api';
import { postReview } from '../../services/api';
import Header from './Header';
import Review from './Review';
import ReviewForm from './ReviewForm';
import styles from '../../mystyle.module.css';
import { connect } from 'react-redux'
import { loadSchool } from '../../Redux/actions/actions'
import { createReview } from '../../Redux/actions/actions'




class School extends Component {

    state = { 
        review: {}
     }

    //  componentDidMount() {
    //     fetchSchool(this.props.match.params.slug).then(resp => {
    //         this.setState({school: resp.data})
    //         this.setState({reviews: resp.included})
    //     });
    // }


    componentDidMount() {
        this.props.dispatch(loadSchool(this.props.match.params.slug))
    }

     handleChange = (e) => {
        e.preventDefault()
        let review = this.state.review;
        review[e.target.name] = e.target.value;
        this.setState({review})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const school_id = this.props.school[0].id
         this.props.dispatch(createReview(this.state.review.name, this.state.review.title, this.state.review.description, this.state.review.score ,school_id))
        
        this.setState({
            review: {name: "", description: "", title: "", score: ""}})
            window.location.reload();
    }


    ratingChanged = (newRating) => {
        let review = {...this.state.review}
        review.score = newRating;
        this.setState({review})
      };

     
    render() { 

        const reviews = this.props.reviews[0] && this.props.reviews[0].map((review, index) => {
            return (
            <Review key={index} attributes={review.attributes} />
            )
        })

        return ( 
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <div className={styles.main}>
                   {this.props.school[0]? <Header attributes= {this.props.school[0].attributes} reviews= {this.props.reviews[0]}/> : "loading ..." }
                   {reviews}
                   </div>
                </div>
                <div className={styles.column_2}>
                {this.props.school[0] ? <ReviewForm 
                handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit} 
                attributes= {this.props.school[0].attributes} review={this.state.review} 
                ratingChanged ={this.ratingChanged} /> : "loading ..." }
                </div> 
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return { school: state.school, reviews: state.reviews, review: state.review}
}


export default connect(mapStateToProps)(School);
 
// export default School;


