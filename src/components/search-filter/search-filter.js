import SearchPanel from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';

import './search-filter.scss';

const SearchFilter = () => {
    return (
        <div className="search-filter">
            <SearchPanel/>
            <AppFilter/>
        </div>
    );
};

export default SearchFilter;