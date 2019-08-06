import React from 'react';
import ReactDOM from 'react-dom';
// import CommentList from './CommentList';
// import faker from 'faker';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            lat: null,
            err: ''
        }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // console.log(position.coords.latitude)console.log(err)
                this.setState ({
                    lat: position.coords.latitude
                })
            },
            err => {
                // console.log(err)
                this.setState({
                    err: err.message
                })
            }
        );
    }

    componentDidMount(){
        console.log("Rendered")
    }

    componentDidUpdate(){
        console.log("Re rendered")
    }

    render(){

        if(!this.state.err && this.state.lat){
            return(
                <div>
                    Latitide: {this.state.lat}
                </div>
            )
        }

        if(!this.state.lat && this.state.err){
            return(
                <div>
                    Error: {this.state.err}
                </div>
            )
        }

        return(
            <div> Loading... </div>
        )



        // return (
        //     <div>
        //          Latitide: {this.state.lat} <br/>
        //          Error: {this.state.err}
        //     </div>
        // )
    }
}


// const App = () => {
    
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );
    
//     return (
//         <div>
//             <CommentList author= "sam" age="19" avatar={faker.image.avatar()}/> 
//             <CommentList author= "varun" age="21" avatar={faker.image.avatar()}/> 
//         </div>
//     )
// }

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);