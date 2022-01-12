import {SolimoCoffee} from '../../assets/images';
import {PrestoCoffee} from '../../assets/images';
import {AromisticoCoffee} from '../../assets/images';
import './best-coffee.scss';
import '../../styles/titles.scss';

const BestCoffeeList = () => {

    const coffeeData = [
        {img: SolimoCoffee, name: 'Solimo Coffee Beans 2 kg', price: 10.73, alt: 'solimo coffee', id: 1},
        {img: PrestoCoffee, name: 'Presto Coffee Beans 1 kg', price: 15.99, alt: 'presto coffee', id: 2},
        {img: AromisticoCoffee, name: 'AROMISTICO Coffee 1 kg', price: 6.99, alt: 'aromistico coffee', id: 3},
    ]

    const coffee = coffeeData.map(({img, name, price, alt, id}) => {
        return (
            <div className="best__block" key={id}>
                <img src={img} alt={alt} />
                <h3 className="best__name fz_14">{name}</h3>
                <div className="best__price fz_14">{price}$</div>
            </div>
        );
    });

    return (
        <section className="best">
            <h2 className="best__title fz_24">Our best</h2>
            <div className="best__wrapper">
                {coffee}
            </div>
        </section>
    );
}

export default BestCoffeeList;