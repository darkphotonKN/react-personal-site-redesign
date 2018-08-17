
import React from 'react';
import { NavLink as ReactRouterLink} from 'react-router-dom';

import Radium from 'radium';


const Navigation = ({sections, onActivateSection}) => {
    const NavLink = Radium(ReactRouterLink); // work around to make Radium work for NavLink

    const navStyles = {
        color: '#D9F3FF', 
        textDecoration: 'none',
        transition: '200ms ease-in-out',
        // useabe with radium
        ':hover': {
            color: '#B29D74',
            transform: 'scale(1.1)'
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
                        onClick={() => onActivateSection(section)} 
                        className={section.active === true ? 'nav-item is-active' : 'nav-item'}>
                        <NavLink to={ '/' + section.name } style={navStyles} activeStyle={{ color: '#B29674'}}>
                            { section.name !== 'thesite' ? section.name[0].toUpperCase() + section.name.slice(1, section.name.length) : 'The Site' }
                            {/* testing { console.log(section.name + ' is now active: ' + section.active)} */}
                        </NavLink>
                    </li>) 
                }
                
            </ul>
        </nav>
    );
    
}
 

 
export default Radium(Navigation);