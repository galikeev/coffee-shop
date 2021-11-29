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
                    <a style={colorLink} href="3">
                        <img src={colorLogo} alt="logo" />
                        <div>Coffee house</div>
                    </a>
                </li>
                <li className="navigation__links">
                    <a style={colorLink} href="1">Our coffee</a>
                </li>
                <li className="navigation__links">
                    <a style={colorLink} href="2">For your pleasure</a>
                </li>
            </ul>
        </nav>
    )
}

export default AppNavigation;