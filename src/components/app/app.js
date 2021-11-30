import AppHeader from '../app-header/app-header';
import AppPromo from '../app-promo/app-promo';
import AboutCoffee from '../about-coffee/about-coffee';
import BestCoffeeList from '../best-coffee/best-coffee';
import AppFooter from '../app-footer/app-footer';

import './app.scss';

const App = () => {

    return (
        <div className="app">
            <div className="wrapper">
                <AppHeader/>
                <AppPromo/>
            </div>
            <AboutCoffee/>
            <BestCoffeeList/>
            <AppFooter/>
        </div>
    )

}

export default App;