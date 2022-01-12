import './app-filter.scss';
import '../../styles/titles.scss';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'brazil', label: 'Brazil'},
        {name: 'kenya', label: 'Kenya'},
        {name: 'columbia', label: 'Columbia'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'filter__btn filter__btn_gr fz_13' : 'filter__btn fz_13';
        return (
            <button
                type="button"
                className={clazz}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="filter">
            <h4 className="filter__title fz_14">Or filter</h4>
            <div className="filter__wrapper">
                {buttons}
            </div>
        </div>
    );
};

export default AppFilter;