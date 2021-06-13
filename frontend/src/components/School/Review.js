import React, { Component } from 'react';
import styles from '../../mystyle.module.css';
import ReactStars from "react-rating-stars-component";

class Review extends Component {
    

    render() { 

        const {name, score, title, description, created_at} = this.props.attributes

        return ( 
            <div className={styles.review_card}> 
                <div className={styles.review_rating_container}>
                    <ReactStars
                        count={5}
                        value={score}
                        size={30}
                        edit={false}
                        activeColor="#ffd700"
                    />
                </div>
                <div className={styles.title}>{title}</div>
                <div className={styles.name}>{name} &nbsp; {created_at}</div>
                <div className={styles.description}>{description}</div>
            </div>
         );
    }
}
 
export default Review;
