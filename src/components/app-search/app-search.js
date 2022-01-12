import { useState } from 'react';

import './app-search.scss';
import '../../styles/titles.scss';

const SearchPanel = (props) => {

    const [term, setTerm] = useState('');

    const onUpdateSearchLocal = (e) => {
        const termEl = e.target.value;
        setTerm(termEl);
        props.onUpdateSearch(termEl);
    }

    return (
        <div className="search">
            <h4 className="search__title fz_14">Lookiing for</h4>
            <input 
                type="text"
                className="search__input"
                placeholder="start typing here..."
                value={term}
                onChange={onUpdateSearchLocal}/>
        </div>
    );
};

export default SearchPanel;