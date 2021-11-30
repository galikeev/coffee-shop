import './app-search.scss';

const SearchPanel = () => {
    return (
        <div className="search">
            <h4 className="search__title">Lookiing for</h4>
            <input 
                type="text"
                className="search__input"
                placeholder="start typing here..."/>
        </div>
    );
};

export default SearchPanel;