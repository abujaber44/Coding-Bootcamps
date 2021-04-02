import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../mystyle.module.css'
import ReactStars from "react-rating-stars-component";

class SchoolCard extends Component {
    
    state = {  }
    
    render() { 
        return ( 
            <div className={styles.card}>
                <div className={styles.school_logo}>
                    <img src={this.props.attributes.image_url} alt={this.props.attributes.name}/>
                </div>
                <div className={styles.school_name}>{this.props.attributes.name}</div>
                <ReactStars
                            classNames={styles.stars}
                            count={5}
                            value={this.props.attributes.avg_score}
                            size={30}
                            edit={false}
                            activeColor="#ffd700"
                            />
                <div className={styles.school_link}>
                    <Link to={`/schools/${this.props.attributes.slug}`}>View School</Link>
                </div>
            </div>
         );
    }
}
 
export default SchoolCard;