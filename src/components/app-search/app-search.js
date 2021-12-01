import { Component } from 'react';

import './app-search.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchLocal = (e) => {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div className="search">
                <h4 className="search__title">Lookiing for</h4>
                <input 
                    type="text"
                    className="search__input"
                    placeholder="start typing here..."
                    value={this.state.term}
                    onChange={this.onUpdateSearchLocal}/>
            </div>
        );
    }
};

export default SearchPanel;