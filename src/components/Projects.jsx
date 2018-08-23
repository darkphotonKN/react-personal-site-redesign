import React, { Component } from 'react';

class Projects extends Component {

    render() { 
        return ( 
            <div className="row section">
                <div className="col-6 project"><h1>Projects</h1>
                    <div className="project-block">
                        <h2>Taipei Weather App</h2>
                        <a href="https://github.com/darkphotonKN/TaipeiWeatherApp"><div className="proj-img-1"></div></a>
                    </div>
                    <div className="project-block">
                        <h2>My Landing Page (Previous)</h2>
                        <a href="https://github.com/darkphotonKN/Main-Site"><div className="proj-img-2"></div></a>
                    </div>
                    <div className="project-block">
                        <h2>Conway's Game of Life App (React)</h2>
                        <a href="https://github.com/darkphotonKN/conways-game-of-life-react"><div className="proj-img-3"></div></a>
                    </div>
                    <div className="project-block">
                        <h2>Evershine Impex Ltd. Company Site</h2>
                        <a href="https://github.com/darkphotonKN/Mohan-Company-Site"><div className="proj-img-4"></div></a>
                    </div>
                    <div className="project-block">
                        <h2>Reddit Search App</h2>
                        <a href="https://github.com/darkphotonKN/RedditAPISearchApp"><div className="proj-img-5"></div></a>
                    </div>
                    <div className="project-block">
                        <h2>Movie Database App (React)</h2>
                        <a href="https://github.com/darkphotonKN/react-movie-rental-webapp/tree/master/src"><div className="proj-img-6"></div></a>
                    </div>
                </div>

                <div className="col"></div>
            </div>
        );
    }
}
 
export default Projects;