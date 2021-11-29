import AppNavigation from "../app-navigation/app-navigation";
import AppCoffeeLogo from "../app-coffee-logo/app-coffee-logo";

import './app-footer.scss';

const AppFooter = () => {
    return (
        <footer className="footer">
            <AppNavigation footer="black"/>
            <AppCoffeeLogo/>
        </footer>
        
    );
};

export default AppFooter;