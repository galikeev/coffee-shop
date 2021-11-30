import AppHeader from '../app-header/app-header';
import AppPromo from '../promo-block/promo-block';

import './main-header.scss';

const MainHeader = () => {
    return (
        <div className="main-header">
                <AppHeader/>
                <AppPromo/>
        </div>
    );
};

export default MainHeader;