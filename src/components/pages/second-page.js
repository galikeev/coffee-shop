import { useState } from 'react';

import SecondHeader from '../second-header/second-header';
import AppAboutProduct from '../app-about-product/app-about-product';
import SearchFilter from '../search-filter/search-filter';
import CoffeeGoods from '../coffee-goods/coffee-goods';
import CoffeeItemLayout from '../coffee-item-layout/coffee-item-layout';
import AppFooter from '../app-footer/app-footer';

const SecondPage = (props) => {

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [coffeeSelected, setCoffeeSelected] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const onCoffeeSelected = (id) => {
        setCoffeeSelected(id);
    }

    const onToggleDescr = () => {
        setIsShow(isShow => !isShow)
    }

    const searchEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const filterPost = (items, filter) => {
        switch (filter) {
            case 'brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const {dataCoffee} = props;
    const visibleData = filterPost(searchEmployees(dataCoffee, term), filter);

    const content = (
        <>
            <AppAboutProduct bearns/>
            <SearchFilter
                onUpdateSearch={onUpdateSearch}
                filter={filter}
                onFilterSelect={onFilterSelect}/>
            <CoffeeGoods
                dataCoffee={visibleData}
                onCoffeeSelected={onCoffeeSelected}
                onToggleDescr={onToggleDescr}/>
        </>
    )

    return (
        <>
            <SecondHeader second/>
                {!isShow && content}
                {isShow && <CoffeeItemLayout
                    dataCoffee={visibleData}
                    coffeeId={coffeeSelected}
                    onToggleDescr={onToggleDescr}/>}
            <AppFooter/>
        </>
    );
}

export default SecondPage;