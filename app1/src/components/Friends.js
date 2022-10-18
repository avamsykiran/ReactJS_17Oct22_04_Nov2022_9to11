import { Component } from 'react';

class Friends extends Component {
    constructor(){
        super();
        this.state = {
            friends: ["Vamsy","Sagar","Srinu","Suseela","Gowri","Deepa"]
        };
    }

    render(){
        return (
            <section>
                <h4>Friends</h4>
                <ol>
                    {this.state.friends.map(f => <li>{f}</li>)}
                </ol>
            </section>
        );
    }
}

export default Friends;