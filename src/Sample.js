import SampleImg from './sample.png'
import './Sample.css'

export default function Sample(props) {

    //plan divide up the areas that float of over the interactive fields 
    //have an array that represents each area. input into the array which ones to fill in red outline.
    //pin the divs to the image so they scale to fit it using the image as relative and the divs as absolute

    
    
    
    let failedHighlights = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
    let failedTestCount = 0
    let results = props.results
    if (results) {
        // console.log(results.names);
        if (results.names.transferor) {
            if (results.names.transferor.includes('invalid')) {
                failedHighlights[0] = 1
                failedTestCount += 1
            }
        }
        if (results.names.transferee) {
            if (results.names.transferee.includes('invalid')) {
                failedHighlights[1] = 1
                failedTestCount += 1
            }
        }
        if (results.names.witnessA) {
            if (results.names.witnessA.includes('invalid')) {
                failedHighlights[2] = 1
                failedTestCount += 1
            }
        }
        if (results.names.witnessB) {
            if (results.names.witnessB.includes('invalid')) {
                failedHighlights[5] = 1
                failedTestCount += 1
            }
        }
        if (results.names.witnessC) {
            if (results.names.witnessC.includes('invalid')) {
                failedHighlights[8] = 1
                failedTestCount += 1
            }
        }
        if (results.names.witnessD) {
            if (results.names.witnessD.includes('invalid')) {
                failedHighlights[11] = 1
                failedTestCount += 1
            }
        }
        if (results.names.witnessE) {
            if (results.names.witnessE.includes('invalid')) {
                failedHighlights[10] = 1
                failedTestCount += 1
            }
        }
        // console.log(results.dates)
        if (results.dates.dateA) {
            if (results.dates.dateA.includes('invalid')) {
                failedHighlights[3] = 1
                failedTestCount += 1
            }
        }
        if (results.dates.dateB) {
            if (results.dates.dateB.includes('invalid')) {
                failedHighlights[6] = 1
                failedTestCount += 1
            }
        }
        if (results.dates.dateC) {
            if (results.dates.dateC.includes('invalid')) {
                failedHighlights[9] = 1
                failedTestCount += 1
            }
        }
        if (results.dates.dateD) {
            if (results.dates.dateD.includes('invalid')) {
                failedHighlights[12] = 1
                failedTestCount += 1
            }
        }
    }
    let testPassClass = 'fail'
    if (failedTestCount === 0) {
        // console.log('asd')
        testPassClass = 'pass'
    }


    return (
        <div>
            <div className="sample-image-wrapper">
                <img className={testPassClass} src={SampleImg} alt="" />
                <div style={{visibility: failedHighlights[0] ? 'visible' : 'hidden' }} className="zero hover"></div>
                <div style={{visibility: failedHighlights[1] ? 'visible' : 'hidden' }} className="one hover"></div>
                <div style={{visibility: failedHighlights[2] ? 'visible' : 'hidden' }} className="two hover"></div>
                <div style={{visibility: failedHighlights[3] ? 'visible' : 'hidden' }} className="three hover"></div>
                <div style={{visibility: failedHighlights[4] ? 'visible' : 'hidden' }} className="four hover"></div>
                <div style={{visibility: failedHighlights[5] ? 'visible' : 'hidden' }} className="five hover"></div>
                <div style={{visibility: failedHighlights[6] ? 'visible' : 'hidden' }} className="six hover"></div>
                <div style={{visibility: failedHighlights[7] ? 'visible' : 'hidden' }} className="seven hover"></div>
                <div style={{visibility: failedHighlights[8] ? 'visible' : 'hidden' }} className="eight hover"></div>
                <div style={{visibility: failedHighlights[9] ? 'visible' : 'hidden' }} className="nine hover"></div>
                <div style={{visibility: failedHighlights[10] ? 'visible' : 'hidden' }} className="ten hover"></div>
                <div style={{visibility: failedHighlights[11] ? 'visible' : 'hidden' }} className="eleven hover"></div>
                <div style={{visibility: failedHighlights[12] ? 'visible' : 'hidden' }} className="twelve hover"></div>
                <div style={{visibility: failedHighlights[13] ? 'visible' : 'hidden' }} className="thirteen hover"></div>
            </div>
        </div>
    )
}