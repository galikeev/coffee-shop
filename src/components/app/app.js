import AppHeader from '../app-header/app-header';
import AboutCoffee from '../about-coffee/about-coffee';
import BestCoffeeList from '../best-coffee/best-coffee';
import AppFooter from '../app-footer/app-footer';

import './app.scss';

const App = () => {

    return (
        <div className="app">
            <AppHeader/>
            <AboutCoffee/>
            <BestCoffeeList/>
            <AppFooter/>
        </div>
    )

}

export default App;