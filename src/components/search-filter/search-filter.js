import SearchPanel from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';

import './search-filter.scss';

const SearchFilter = ({onUpdateSearch, filter, onFilterSelect}) => {
    return (
        <div className="search-filter">
            <SearchPanel onUpdateSearch={onUpdateSearch}/>
            <AppFilter
                filter={filter}
                onFilterSelect={onFilterSelect}/>
        </div>
    );
};

export default SearchFilter;