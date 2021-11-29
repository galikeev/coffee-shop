import AppNavigation from '../app-navigation/app-navigation';

import './app-header.scss';
import { HeaderIcon } from '../../assets/images';

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <AppNavigation></AppNavigation>
            </div>
            <h1 className="header__title">Everything You Love About Coffee</h1>
            <div className="header__block">
                <span></span>
                <div className="header__icon">
                    <img src={HeaderIcon} alt="icon" />
                </div>
                <span></span>
            </div>
            <h2 className="header__subtitle">We makes every day full of energy and taste</h2>
            <h2 className="header__subtitle">Want to try our beans?</h2>
            <button className="header__button">More</button>
        </header>
    )
}

export default AppHeader;