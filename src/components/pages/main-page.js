import MainHeader from '../main-header/main-header';
import AboutCoffee from '../about-coffee/about-coffee';
import BestCoffeeList from '../best-coffee/best-coffee';
import AppFooter from '../app-footer/app-footer';

const MainPage = () => {
    return (
        <>
            <MainHeader/>
            <AboutCoffee/>
            <BestCoffeeList/>
            <AppFooter/>
        </>
    );
}
export default MainPage;