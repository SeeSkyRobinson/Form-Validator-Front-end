

export default function Results(props) {

    const results = props.results


    let filteredNames = []
    if (results) {
        filteredNames = Object.values(results.names).filter(name => name.includes('invalid'))
    }
    let filteredDates = []
    if (results) {
        filteredDates = Object.values(results.dates).filter(name => name.includes('invalid'))
    }

    return (
        <section>
            <h3>
                {   
                //hard coded
                }
            File Detected: Titles Registry Form 1 Transfer
            </h3>
            <h4>
                Failed tests:
            </h4>
                {results && filteredNames.map(ele => 
                    <p>{ele}</p>
                )}
                {results && filteredDates.map(ele => 
                    <p>{ele}</p>
                )}
        </section>
    )
}
