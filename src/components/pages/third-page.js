import SecondHeader from '../second-header/second-header';
import AppAboutProduct from '../app-about-product/app-about-product';
import CoffeeGoods from '../coffee-goods/coffee-goods';
import AppFooter from '../app-footer/app-footer';

const ThirdPage = (props) => {
    return (
        <>
            <SecondHeader/>
            <AppAboutProduct/>
            <CoffeeGoods
                dataCoffee={props.dataCoffee}/>
            <AppFooter/>
        </>
    );
};

export default ThirdPage;