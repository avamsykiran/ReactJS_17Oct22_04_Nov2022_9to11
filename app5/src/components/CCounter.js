import { Component } from "react";

class CCounter extends Component{
    constructor(){
        super();
        this.state = {
            steps:-1,
            rounds:-1
        };
    }

    componentDidMount(){
        this.setState({steps:0,rounds:0});
    }

    stepUp = event => this.setState({steps:this.state.steps+1})

    stepDown = event => this.setState({steps:this.state.steps-1})

    render(){
        let {steps,rounds}= this.state;

        return (
            <div className="col text-center">
                <button className="btn btn-lg btn-primary" onClick={this.stepUp}>Step Up</button>
                <h3>{steps} / {rounds} </h3>
                <button className="btn btn-lg btn-danger" onClick={this.stepDown}>Step Down</button>
            </div>
        );
    }

    componentDidUpdate(){
        if(this.state.steps<0){
            this.setState({steps:0});
        }else if(this.state.steps===10){
            this.setState({steps:0,rounds:this.state.rounds+1});
        }
    }

    
}

export default CCounter;