import {SolimoCoffee} from '../../assets/images';
import {PrestoCoffee} from '../../assets/images';
import {AromisticoCoffee} from '../../assets/images';
import './best-coffee.scss';

const BestCoffeeList = () => {

    const coffeeData = [
        {img: SolimoCoffee, name: 'Solimo Coffee Beans 2 kg', price: 10.73, alt: 'solimo coffee'},
        {img: PrestoCoffee, name: 'Presto Coffee Beans 1 kg', price: 15.99, alt: 'presto coffee'},
        {img: AromisticoCoffee, name: 'AROMISTICO Coffee 1 kg', price: 6.99, alt: 'aromistico coffee'},
    ]

    const coffee = coffeeData.map(({img, name, price, alt}) => {
        return (
            <div className="coffee__block">
                <img src={img} alt={alt} />
                <h3 className="coffee__name">{name}</h3>
                <div className="coffee__price">{price}$</div>
            </div>
        );
    });

    return (
        <div className="coffee">
            <h2 className="coffee__title">Our best</h2>
            <div className="coffee__wrapper">
                {coffee}
            </div>
        </div>
    );
}

export default BestCoffeeList;