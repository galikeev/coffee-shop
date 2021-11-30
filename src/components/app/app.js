// import MainHeader from '../main-header/main-header';
// import AboutCoffee from '../about-coffee/about-coffee';
// import BestCoffeeList from '../best-coffee/best-coffee';
// import AppFooter from '../app-footer/app-footer';

import SecondHeader from '../second-header/second-header';
import AppAboutProduct from '../app-about-product/app-about-product';
import SearchFilter from '../search-filter/search-filter';

import './app.scss';

const App = () => {

    return (
        <div className="app">
            {/* <MainHeader/>
            <AboutCoffee/>
            <BestCoffeeList/>
            <AppFooter/> */}
            <SecondHeader second/>
            <AppAboutProduct bearns/>
            <SearchFilter/>
        </div>
    )

}

export default App;