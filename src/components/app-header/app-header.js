import AppNavigation from '../app-navigation/app-navigation';

import './app-header.scss';

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <AppNavigation></AppNavigation>
            </div>
        </header>
    )
}

export default AppHeader;