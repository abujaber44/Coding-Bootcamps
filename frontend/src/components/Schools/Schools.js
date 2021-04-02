import React, { Component } from 'react';
import { fetchSchools } from '../../services/api';
import SchoolCard from './SchoolCard';
import styles from '../../mystyle.module.css'



class Schools extends Component {
    
    state = { 
        schools: []
         }
    

    componentDidMount() {
        fetchSchools().then(resp => {
            this.setState({schools: resp.data})
        })
    }

    render() { 
        const schools = this.state.schools.map(school => {
            return (
            <SchoolCard key={school.attributes.name} attributes={school.attributes}/>
            )
        })

        return ( 
            <div className={styles.schools}>
                <div className={styles.header}>
                    <h1>School Reviews</h1>
                    <div className={styles.subheader}> Honest School Reviews</div>
                </div>

               <div className={styles.grid}>
                   {schools}
               </div> 
            </div>
         );
    }
}
 
export default Schools;