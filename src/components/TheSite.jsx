import React, { Component } from 'react';

class TheSite extends Component {

    render() { 
        return ( 
            <div className='row the-site section'>
                <div className="col-6">
                    <h1>The Site</h1>
                    <p className={"section-p " + (this.props.sectionActive ? 'is-active' : null)}>
                    This site was created with mainly Javascript (ES6), HTML5, Sass and using the React Framework
                    in order to act as a personal hub and showcase my projects, cv, and contact information. Features 
                    will continue to be refined, improved, and added so stay tuned!
                    <br/><span>See my Github Page for the source code of this site <a href="https://github.com/darkphotonKN/react-personal-site-redesign">here</a>.</span></p> 
                </div>
                <div className="col"></div>
            </div>
        );
    }
}
 
export default TheSite;