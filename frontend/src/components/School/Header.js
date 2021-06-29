import React, { Component } from 'react'
import styles from '../../mystyle.module.css'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

class Header extends Component {
    

    render() { 

        const {name, image_url, avg_score} = this.props.attributes
        const totalReviews = this.props.reviews.length
        
    
        return (
            <div className={styles.header_wrapper}>
                <div className={styles.schools_link}>
                    <Link to= "/"> View all Schools </Link>
                </div>
                <h1> <img src={image_url} alt={name} /> {name} </h1>
                <div>
                    <div className= {styles.total_reviews}> {totalReviews} Reviews</div>
                    <div className= {styles.total_out_of}> 
                        <ReactStars
                            count={5}
                            value={avg_score}
                            size={30}
                            edit={false}
                            activeColor="#ffd700"
                            isHalf={true}
                        />
                    </div>
                    <div className= {styles.total_out_of}> {avg_score} out of 5 stars </div>
                </div>
            </div>
         );
    }
}
 
export default Header;


