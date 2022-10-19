import { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super();
        this.state={
            userName:'Vamsy Kiran Aripaka'
        }
    }

    updateData = event => {
        let modifiedValue = event.target.value;
        this.setState({userName:modifiedValue});
    }

    render(){
        return (
            <div className='container-fluid p-4'>
                <h3>Hello {this.state.userName}! You are welcome!</h3>
                <form className='col-sm-4 mt-2'>
                    <label>Your Name Please:
                        <input type="text" value={this.state.userName} className="form-control" onChange={this.updateData}/>
                    </label>
                </form>
            </div>
        );
    }
}

export default Welcome;