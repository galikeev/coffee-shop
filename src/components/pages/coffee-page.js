import SecondHeader from '../second-header/second-header';
import AppFooter from '../app-footer/app-footer';
import CoffeeItemLayout from './coffee-item-layout/coffee-item-layout';

const CoffeePage = ({dataCoffee}) => {
    return (
        <>
            <SecondHeader second/>
            <CoffeeItemLayout dataCoffee={dataCoffee}/>
            <AppFooter/>
        </>
    );
};

export default CoffeePage;