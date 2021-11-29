import {Logo} from '../../assets/images';

import './app-navigation.scss';

const AppNavigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__menu">
                <li className="navigation__links">
                    <a href="3"><img src={Logo} alt="logo" />
                        <div>Coffee house</div>
                    </a>
                </li>
                <li className="navigation__links">
                    <a href="1">Our coffee</a>
                </li>
                <li className="navigation__links">
                    <a href="2">For your pleasure</a>
                </li>
            </ul>
        </nav>
    )
}

export default AppNavigation;