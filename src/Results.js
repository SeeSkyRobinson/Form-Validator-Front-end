// import axios from "axios";
// import { Component } from "react";


// import { useContext } from 'react'
// import { FormContext } from './FormContext.js'


export default function Results(props) {

    const results = props.results



    return (
        <section>
            <h3>
                {//hard coded
                }
            File Detected: Titles Registry Form 1 Transfer

            </h3>

            <h3>
                names
            </h3>
                {results && Object.entries(results.names).map(ele => 
                    <p>{ele}</p>
                )}
            <h3>
                dates
            </h3>
            {results && Object.entries(results.dates).map(ele => 
                    <p>{ele}</p>
                )}
        </section>
    )
}
