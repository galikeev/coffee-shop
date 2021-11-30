import './app-filter.scss';

const AppFilter = () => {
    return (
        <div className="filter">
            <h4 className="filter__title">Or filter</h4>
            <button className="filter__btn filter__btn_gr">Brazil</button>
            <button className="filter__btn">Kenya</button>
            <button className="filter__btn">Columbia</button>
        </div>
    );
};

export default AppFilter;