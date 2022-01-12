import AppCoffeeLogo from '../app-coffee-logo/app-coffee-logo';

import './coffee-item-layout.scss';
import '../../styles/titles.scss';

const CoffeeItemLayout = ({dataCoffee, coffeeId, onToggleDescr}) => {

    const element = dataCoffee.find(item => item.id === coffeeId);
    
    const {bigImg, country, description, price, alt} = element;

    return (
        <div className="coffee">
            <div className="coffee__img">
                <img src={bigImg} alt={alt} />
            </div>
            <div className="coffee__wrapper">
                <h3 className="coffee__title fz_24">About it</h3>
                <AppCoffeeLogo/>
                <div className="coffee__country fz_14">Country: <span>{country}</span></div>
                <div className="coffee__descr fz_14">Description: <span>{description}</span></div>
                <div className="coffee__price fz_14">Price: <span>{price}$</span></div>
            </div>
            <button className="coffee__btn fz_13" onClick={onToggleDescr}>Back</button>
        </div>
    );
};

export default CoffeeItemLayout;