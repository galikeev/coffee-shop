import { NavLink } from 'react-router-dom';

import {LogoWhite} from '../../assets/images';
import {LogoBlack} from '../../assets/images';

import './app-navigation.scss';

const AppNavigation = (props) => {
    
    const colorLink = props.footer ? "navigation__links_black" : "navigation__links_white";
    const hideNav = props.footer ? "navigation navigation_close" : "navigation"
    const colorLogo = props.footer ? LogoBlack : LogoWhite;
    const menuPosition = props.footer ? {justifyContent: 'center'} : {justifyContent: 'flex-start'}

    return (
        <nav className={hideNav}>
            <ul className="navigation__menu" style={menuPosition}>
                <NavLink
                    end
                    to="/">
                    <img src={colorLogo} alt="logo" />
                </NavLink>
                <li className="navigation__links">
                    <NavLink 
                        end
                        style={({isActive}) => ({color: isActive ? '#9f0013' : null})}
                        to="/"
                        className={colorLink}>
                        Coffee house
                    </NavLink>
                </li>
                <li className="navigation__links">
                    <NavLink 
                        end
                        style={({isActive}) => ({color: isActive ? '#9f0013' : null})}
                        to="/our-coffee"
                        className={colorLink}>
                            Our coffee
                    </NavLink>
                </li>
                <li className="navigation__links">
                    <NavLink 
                        end 
                        style={({isActive}) => ({color: isActive ? '#9f0013' : null})} 
                        to="/for-your-pleasure"
                        className={colorLink}>
                            For your pleasure
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AppNavigation;