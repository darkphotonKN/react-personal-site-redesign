
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({sections, activateSection}) => {
    return ( 
        <nav className="main-nav">
            <h2 className="nav-title display-4">Menu</h2>
            <ul className="nav-list">

                {sections.map(section => 
                    <li 
                        key={section.id} 
                        onClick={() => 
                            activateSection(section)} 
                            className={section.active === true ? 'nav-item is-active' : 'nav-item'}>
                        <NavLink to={'/' + section.name} style={{ color: '#A5B1C2', textDecoration: 'none' }} activeStyle={{ color: '#D9E9FF'}}>
                            { section.name !== 'thesite' ? section.name : 'the site' }
                            {/* testing { console.log(section.name + ' is now active: ' + section.active)} */}
                        </NavLink>
                    </li>) 
                }
                
            </ul>
        </nav>
    );
    
}
 

 
export default Navigation;