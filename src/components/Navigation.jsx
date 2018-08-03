
import React from 'react';
import { NavLink as ReactRouterLink} from 'react-router-dom';

import Radium from 'radium';



const Navigation = ({sections, activateSection}) => {
    const NavLink = Radium(ReactRouterLink); // work around to make Radium work for NavLink

    const navStyles = {
        color: '#A5B1C2', 
        textDecoration: 'none',
        ':hover': {
            color: '#B29D74',
            transform: 'scale(1.2)'
        } 
    }
    
    return ( 
        <nav className="main-nav">
            <h2 className="nav-title display-4">Menu</h2>
            <ul className="nav-list">

                {sections.map(section => 
                    <li 
                        style={navStyles}
                        key={section.id} 
                        onClick={() => 
                            activateSection(section)} 
                            className={section.active === true ? 'nav-item is-active' : 'nav-item'}>
                        <NavLink to={'/' + section.name} style={navStyles} activeStyle={{ color: '#D9E9FF'}}>
                            { section.name !== 'thesite' ? section.name : 'the site' }
                            {/* testing { console.log(section.name + ' is now active: ' + section.active)} */}
                        </NavLink>
                    </li>) 
                }
                
            </ul>
        </nav>
    );
    
}
 

 
export default Radium(Navigation);