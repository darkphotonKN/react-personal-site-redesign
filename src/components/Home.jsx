import React, { Component } from 'react';

class Home extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className={'row home section ' + (this.props.sections[0].active ? 'is-active' : null)}>
                    <div className="col-12"><h1>Home</h1></div>
                </div>
                <div className={'row home section ' + (this.props.sections[0].active ? 'is-active' : null)}>
                    <div className="col-6"><p>Welcome to the homepage!</p></div>
                    <div className="col">
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;