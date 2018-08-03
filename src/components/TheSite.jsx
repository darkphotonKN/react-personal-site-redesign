import React, { Component } from 'react';

class TheSite extends Component {

    render() { 
        return ( 
            <div className={'row the-site section ' + (this.props.sections[3].active ? 'is-active' : null)}>
                <div className="col-6">
                    <h1>The Site</h1>
                    <p>This site was created with mainly Javascript (ES5/6), HTML5 and Sass in 
                    order to showcase my projects, cv, and contact information to act as a personal 
                    "hub". Features will continue to be refined, improved, and added so stay tuned!
                    <br/><span>See my Github Page for the source code of this site <a href="https://github.com/darkphotonKN/Main-Site">here</a>.</span></p> 
                </div>
                <div className="col"></div>
            </div>
        );
    }
}
 
export default TheSite;