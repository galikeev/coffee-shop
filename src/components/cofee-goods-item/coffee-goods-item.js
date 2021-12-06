import './coffee-goods-item.scss';

const CoffeeGoodsItem = ({img, name, country, price, alt, onCoffeeSelected, onToggleDescr}) => {
    return (
        <div onClick={() => {onCoffeeSelected(); onToggleDescr()}} className="goods__block">
            <div className="goods__img">
                <img src={img} alt={alt} />
            </div>
            <h4 className="goods__name">{name}</h4>
            <p className="goods__country">{country}</p>
            <div className="goods__price">{price}$</div>
        </div>
    );
};

export default CoffeeGoodsItem;