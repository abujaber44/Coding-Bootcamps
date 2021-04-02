import React, { Component } from 'react'
import styles from '../../mystyle.module.css'
import ReactStars from "react-rating-stars-component";

class ReviewForm extends Component {

    render() { 

        return (
           <div className={styles.form_wrapper}>
               <form onSubmit={this.props.handleSubmit}>
                   <div className={styles.headline}> Share Your Review About {this.props.attributes.name}</div>
                   <div className={styles.field}>
                       <input onChange={this.props.handleChange} value={this.props.review.title} type="text" name="title" placeholder="Review Title"/>
                   </div>
                   <div className={styles.field}>
                       <textarea onChange={this.props.handleChange} value={this.props.review.description} type="text" name="description" placeholder="Review Description"/>
                   </div>
                   <div className={styles.field}>
                       <div className={styles.rating_container}>
                           <div className={styles.rating_title}> Rate This School </div>
                            <div className={styles.rating_box}>
                           <ReactStars
                            count={5}
                            onChange={this.props.ratingChanged}
                            size={40}
                            activeColor="#ffd700"
                            />
                           </div>
                       </div>
                   </div>
                   <button className= {styles.submit_btn} type="submit"> Submit </button>
               </form>
           </div> 
          );
    }
}
 
export default ReviewForm;