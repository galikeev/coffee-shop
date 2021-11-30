import AppHeader from '../app-header/app-header';

import './second-header.scss';

const SecondHeader = () => {
    return (
        <div className="second-header">
            <AppHeader/>
            <h2 className="second-header__title">Our Coffee</h2>
        </div>
    );
};

export default SecondHeader;