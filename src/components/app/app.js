import {Component} from 'react';

// import MainHeader from '../main-header/main-header';
// import AboutCoffee from '../about-coffee/about-coffee';
// import BestCoffeeList from '../best-coffee/best-coffee';
import AppFooter from '../app-footer/app-footer';

import SecondHeader from '../second-header/second-header';
import AppAboutProduct from '../app-about-product/app-about-product';
import SearchFilter from '../search-filter/search-filter';
import CoffeeGoods from '../coffee-goods/coffee-goods';

import './app.scss';
import {AromisticoCoffee} from '../../assets/images';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCoffee: [
                {img: AromisticoCoffee, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, alt: 'AROMISTICO Coffee', id: 1},
                {img: AromisticoCoffee, name: 'PRESTO Coffee 1 kg', country: 'Kenya', price: 7.99, alt: 'PRESTO Coffee', id: 2},
                {img: AromisticoCoffee, name: 'SOLIMO Coffee 1 kg', country: 'Columbia', price: 3.99, alt: 'SOLIMO Coffee', id: 3},
                {img: AromisticoCoffee, name: 'AROMISTICO Coffee 5 kg', country: 'Brazil', price: 9.99, alt: 'AROMISTICO Coffee', id: 4},
                {img: AromisticoCoffee, name: 'AROMISTICO Coffee 7 kg', country: 'Columbia', price: 10.99, alt: 'AROMISTICO Coffee', id: 5},
                {img: AromisticoCoffee, name: 'SOLIMO Coffee 2 kg', country: 'Brazil', price: 3.99, alt: 'SOLIMO Coffee', id: 6},
            ],
            term: '',
            filter: 'all'
        }
    }

    searchEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }

    filterPost = (items, filter) => {
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

    onFilterSelect = (filter) => {
        this.setState({filter: filter});
    }

    render() {
        const {dataCoffee, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmployees(dataCoffee, term), filter);

        return (
            <div className="app">
                {/* <MainHeader/>
                <AboutCoffee/>
                <BestCoffeeList/>
                <AppFooter/> */}
                <SecondHeader second/>
                <AppAboutProduct bearns/>
                <SearchFilter
                    onUpdateSearch={this.onUpdateSearch}
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                <CoffeeGoods
                    data={visibleData}/>
                <AppFooter/>
            </div>
        )
    }

}

export default App;