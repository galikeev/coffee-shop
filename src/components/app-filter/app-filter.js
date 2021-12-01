import './app-filter.scss';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'brazil', label: 'Brazil'},
        {name: 'kenya', label: 'Kenya'},
        {name: 'columbia', label: 'Columbia'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'filter__btn filter__btn_gr' : 'filter__btn';
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
            <h4 className="filter__title">Or filter</h4>
            {buttons}
        </div>
    );
};

export default AppFilter;