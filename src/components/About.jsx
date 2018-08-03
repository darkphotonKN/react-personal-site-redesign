import React, { Component } from 'react';

class About extends Component {

    render() { 
        return ( 
            <div className={'row about section ' + (this.props.sections[2].active ? 'is-active' : null)}>
                <div className="col-6">
                    <h1>About</h1>
                    I'm a Software Engineering graduate who earned a passion for coding and web development ever since I saw some code online
                    during the first year of university. I changed my degree from Electrical Engineering into Software Engineering because
                    of this and managed to finish with a MEng degree with honors. I am hard working, dedicated and always looking to learn more
                    in the area of programming and the current web technologies.<br/><br/>
                    My best strengths in this field are using javascript and frameworks to manipulate the DOM and design responsive
                    sites / web applications; using java and python; and also knowledge in security for computers which I took an advanced course for in my final year of studies.
                </div>
                <div className="col"></div>
            </div>
            
        );
    }
}
 
export default About;