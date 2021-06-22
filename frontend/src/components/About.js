import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from '../mystyle.module.css'


class About extends Component {


    render() { 
        return ( 
        
          <div className={styles.about}>
            <div className={styles.schools_link}>
                <Link to= "/"> View all Schools </Link>
            </div>
            <img src={"https://images.idgesg.net/images/article/2017/09/programmer-100735074-large.jpg"} alt={"About"}/>
            <h1>
                Welcome to Coding Bootcamps Reviews
            </h1>
            <p>
                Coding bootcamps that equip participants with in-demand skills are well worth the investment of time, energy, and financial resources. There are many options available to choose from and <Link to= "/"> Coding Bootcamps Reviews </Link> help students to enroll in the right bootcamp to become successful web developers.
            </p>
          </div>

        );
    }
}
 
export default About;