import React, { Component } from 'react';

class Resume extends Component {

    state = {
        resumePage: 1
    }

    handlePageFlip = pageState => {
        if(pageState === 1) {
            this.setState({ resumePage: 2 }); 
        } else this.setState( { resumePage: 1 });
    }

    // renders the right resume page depending on the current page state 
    renderPage = page => {
        return page === 1 ? <img src={require('../images/CV1.png')} alt="" className="resume-p1"/> : <img src={require('../images/CV2.png')} alt="" className="resume-p2"/>
    }

    render() { 
        return ( 
            <div className="row section">
                <div className="col-6 resume">
                    <h1>Resume</h1>
                    { this.renderPage(this.state.resumePage) }
                    <button 
                        onClick={() => this.handlePageFlip(this.state.resumePage)} 
                        className="btn-resume">
                        { this.state.resumePage === 1 ? 'Next Page' : 'Previous Page' }
                    </button>
                </div>
                <div className="col"></div>
            </div>
        );
    }
}
 
export default Resume;