import AppHeader from '../app-header/app-header';

import './second-header.scss';

const SecondHeader = (props) => {
    const clazz = props.second ? 'second-header our-coffee' : 'second-header pleasure'

    return (
        <div className={clazz}>
            <AppHeader/>
            <h2 className="second-header__title">Our Coffee</h2>
        </div>
    );
};

export default SecondHeader;