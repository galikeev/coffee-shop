import { Link } from 'react-router-dom';

import { PromoIcon } from '../../assets/images';
import './promo-block.scss';
import '../../styles/titles.scss';

const AppPromo = () => {
    return (
        <main className="promo">
            <h1 className="promo__title fz_40">Everything You Love About Coffee</h1>
            <div className="promo__block">
                <span></span>
                <div className="promo__icon">
                    <img src={PromoIcon} alt="icon" />
                </div>
                <span></span>
            </div>
            <h2 className="promo__subtitle fz_24">We makes every day full of energy and taste</h2>
            <h2 className="promo__subtitle fz_24">Want to try our beans?</h2>
            <Link to="our-coffee" className="promo__button fz_14">More</Link>
        </main>
    );
};

export default AppPromo