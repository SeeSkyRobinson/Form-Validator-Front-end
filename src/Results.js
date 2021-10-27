import axios from "axios";
import { Component } from "react";



export default class Results extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        axios.get('/api/results')
        .then(res => {
            console.log(res.data);
            // this.setState({
            //     results: res.data
            // })
        })
    }

    render() {
        const results = this.state.results
        return (
            <section>
                <h2>results go here:</h2>
                {results.map(result => <div>ya</div>)}
            </section>
    
        )
    }
}