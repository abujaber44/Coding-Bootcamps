import React, { Component } from 'react';
import SchoolCard from './SchoolCard';
import styles from '../../mystyle.module.css'
import { connect } from 'react-redux'
import { loadSchools } from '../../Redux/actions/actions'



class Schools extends Component {
    

    componentDidMount() {
        this.props.dispatch(loadSchools())
    }


    render() { 

        const schools = this.props.schools[0] && this.props.schools[0].map(school => {
            return (
            <SchoolCard key={school.attributes.name} attributes={school.attributes} /> 
            ) 
        }) 


        return ( 
            <div className={styles.schools}>
                <div className={styles.header}>
                    <h1>Coding Bootcamps Reviews</h1>
                    <div className={styles.subheader}> Honest School Reviews</div>
                </div>
               <div className={styles.grid}>
                   {schools}
               </div> 
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return { schools: state.schools}
}
 
export default connect(mapStateToProps)(Schools);

