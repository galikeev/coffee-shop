import { Component } from 'react';

import SecondHeader from '../second-header/second-header';
import AppAboutProduct from '../app-about-product/app-about-product';
import SearchFilter from '../search-filter/search-filter';
import CoffeeGoods from '../coffee-goods/coffee-goods';
import CoffeeItemLayout from '../coffee-item-layout/coffee-item-layout';
import AppFooter from '../app-footer/app-footer';

class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            filter: 'all',
            coffeeSelected: 0,
            isShow: false
        }
    }

    onCoffeeSelected = (id) => {
        this.setState({
            coffeeSelected: id
        })
    }

    onToggleDescr = () => {
        this.setState(() => ({
            isShow: !this.state.isShow
        }))
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
        const {term, filter} = this.state;
        const {dataCoffee} = this.props;
        const visibleData = this.filterPost(this.searchEmployees(dataCoffee, term), filter);

        const content = (
            <>
                <AppAboutProduct bearns/>
                <SearchFilter
                    onUpdateSearch={this.onUpdateSearch}
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                <CoffeeGoods
                    dataCoffee={visibleData}
                    onCoffeeSelected={this.onCoffeeSelected}
                    onToggleDescr={this.onToggleDescr}/>
            </>
        )

        return (
            <>
                <SecondHeader second/>
                {!this.state.isShow && content}
                {this.state.isShow && <CoffeeItemLayout
                    dataCoffee={visibleData}
                    coffeeId={this.state.coffeeSelected}
                    onToggleDescr={this.onToggleDescr}/>}
                <AppFooter/>
            </>
        );
    }
}

export default SecondPage;