import {Component} from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    /*
    increment = event => {
        this.setState({count:this.state.count+1})
    }

    decrement = event => {
        this.setState({count:this.state.count-1})
    } 

    render(){
        return (
            <section>
                <button type="button" onClick={this.decrement}>-</button>
                {this.state.count}
                <button type="button" onClick={this.increment}>+</button>
            </section>
        );
    }
    */

    updateCount = value => {
        this.setState({count:this.state.count+value});
    }

    render(){
        return (
            <section>
                <button type="button" onClick={e => this.updateCount(-1)}>-</button>
                {this.state.count}
                <button type="button" onClick={e => this.updateCount(1)}>+</button>
            </section>
        );
    }
}

export default Counter;