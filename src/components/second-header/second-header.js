import AppHeader from '../app-header/app-header';

import './second-header.scss';
import '../../styles/titles.scss';

const SecondHeader = (props) => {
    const clazz = props.second ? 'second-header our-coffee' : 'second-header pleasure';
    const text = props.second ? 'Our Coffee' : 'For Your Pleaure';

    return (
        <div className={clazz}>
            <AppHeader/>
            <h2 className="second-header__title fz_40">{text}</h2>
        </div>
    );
};

export default SecondHeader;