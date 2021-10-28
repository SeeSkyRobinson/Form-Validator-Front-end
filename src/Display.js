import './Display.css'


import Upload from './Upload.js'
import Results from './Results.js'
import Sample from './Sample.js'


import { useState } from 'react'

// import { useContext } from 'react'
// import { FormContext } from './FormContext.js'


// import axios from "axios";



export default function Display() {

    const [results, setResults] = useState(null)
    const [fileTypeErrorMessage, setFileTypeErrorMessage] = useState(null)
    const [isFileUploaded, setIsFileUploaded] = useState(false)

    function updateResult(data) {
        setResults(data)
    }
    
    function updateIsFileUploaded(data) {
        setIsFileUploaded(data)
    }

    return (
        <section>
            <div> 
                {!isFileUploaded && 
                    <Upload 
                        updateResult={updateResult} 
                        updateIsFileUploaded={updateIsFileUploaded} 
                    />
                }
            </div>
            <div>
                {isFileUploaded &&
                    <section className="results-sample-wrapper">
                        <Results results={results} />
                        <Sample results={results} />
                    </section>
                }
            </div>
        </section>
    )
}