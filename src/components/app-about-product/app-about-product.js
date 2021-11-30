import AppCoffeeLogo from '../app-coffee-logo/app-coffee-logo';

import { CupCoffeePhoto } from '../../assets/images';
import { GirlCoffeePhoto } from '../../assets/images';

import './app-about-product.scss';

const AppAboutProduct = (props) => {

    const img = props.bearns ? GirlCoffeePhoto : CupCoffeePhoto;
    const title = props.bearns ? 'About our beans' : 'About our goods';

    return (
        <section className="product">
            <div className="product__wrapper">
                <div className="product__photo">
                    <img src={img} alt="coffee" />
                </div>
                <div className="product__block">
                    <h3 className="product__title">{title}</h3>
                    <AppCoffeeLogo/>
                    <p className="product__descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br /> <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
            </div>
            <div className="product__line"></div>
        </section>
    );
};

export default AppAboutProduct;