import {CoffeeIcon} from '../../assets/images';
import './app-coffee-logo.scss';

const AppCoffeeLogo = () => {
    return (
        <div className="logo">
                <span></span>
                <div className="logo__icon">
                    <img src={CoffeeIcon} alt="icon" />
                </div>
                <span></span>
            </div>
    );
}

export default AppCoffeeLogo;