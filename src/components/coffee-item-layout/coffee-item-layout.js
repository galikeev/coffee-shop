import AppCoffeeLogo from '../app-coffee-logo/app-coffee-logo';

import './coffee-item-layout.scss';

const CoffeeItemLayout = ({dataCoffee, coffeeId, onToggleDescr}) => {

    const element = dataCoffee.find(item => item.id === coffeeId);
    
    const {bigImg, country, description, price, alt} = element;

    return (
        <div className="coffee">
            <div className="coffee__img">
                <img src={bigImg} alt={alt} />
            </div>
            <div className="coffee__wrapper">
                <h3 className="coffee__title">About it</h3>
                <AppCoffeeLogo/>
                <div className="coffee__country">Country: <span>{country}</span></div>
                <div className="coffee__descr">Description: <span>{description}</span></div>
                <div className="coffee__price">Price: <span>{price}$</span></div>
            </div>
            <button className="coffee__btn" onClick={onToggleDescr}>Back</button>
        </div>
    );
};

export default CoffeeItemLayout;