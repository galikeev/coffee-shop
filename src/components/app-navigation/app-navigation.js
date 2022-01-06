import { NavLink } from 'react-router-dom';

import {LogoWhite} from '../../assets/images';
import {LogoBlack} from '../../assets/images';

import './app-navigation.scss';

const AppNavigation = (props) => {
    
    const colorLink = props.footer ? {color: '#000000'} : {color: '#ffffff'};
    const colorLogo = props.footer ? LogoBlack : LogoWhite;
    const menuPosition = props.footer ? {justifyContent: 'center'} : {justifyContent: 'flex-start'}

    return (
        <nav className='navigation'>
            <ul className="navigation__menu" style={menuPosition}>
                <li className="navigation__links">
                    <NavLink end style={colorLink} to="/">
                        <img src={colorLogo} alt="logo" />
                        Coffee house
                    </NavLink>
                </li>
                <li className="navigation__links">
                    <NavLink end style={colorLink} to="/our-coffee">Our coffee</NavLink>
                </li>
                <li className="navigation__links">
                    <NavLink end style={colorLink} to="/for-your-pleasure">For your pleasure</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AppNavigation;