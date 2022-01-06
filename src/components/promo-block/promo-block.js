import { Link } from 'react-router-dom';

import { PromoIcon } from '../../assets/images';
import './promo-block.scss';

const AppPromo = () => {
    return (
        <main className="promo">
            <h1 className="promo__title">Everything You Love About Coffee</h1>
            <div className="promo__block">
                <span></span>
                <div className="promo__icon">
                    <img src={PromoIcon} alt="icon" />
                </div>
                <span></span>
            </div>
            <h2 className="promo__subtitle">We makes every day full of energy and taste</h2>
            <h2 className="promo__subtitle">Want to try our beans?</h2>
            <Link to="our-coffee" className="promo__button">More</Link>
        </main>
    );
};

export default AppPromo