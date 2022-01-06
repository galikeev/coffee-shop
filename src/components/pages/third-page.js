import { useState } from 'react';

import SecondHeader from '../second-header/second-header';
import AppAboutProduct from '../app-about-product/app-about-product';
import CoffeeGoods from '../coffee-goods/coffee-goods';
import CoffeeItemLayout from '../coffee-item-layout/coffee-item-layout';
import AppFooter from '../app-footer/app-footer';

const ThirdPage = (props) => {

    const [coffeeSelected, setCoffeeSelected] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const onCoffeeSelected = (id) => {
        setCoffeeSelected(id);
    }

    const onToggleDescr = () => {
        setIsShow(isShow => !isShow)
    }

    const content = (
        <>
            <AppAboutProduct/>
            <CoffeeGoods
                dataCoffee={props.dataCoffee}
                onCoffeeSelected={onCoffeeSelected}
                onToggleDescr={onToggleDescr}/>
        </>
    )

    return (
        <>
            <SecondHeader/>
                {!isShow && content}
                {isShow && <CoffeeItemLayout
                    dataCoffee={props.dataCoffee}
                    coffeeId={coffeeSelected}
                    onToggleDescr={onToggleDescr}/>}
            <AppFooter/>
        </>
    );
};

export default ThirdPage;