import './coffee-goods-item.scss';

const CoffeeGoodsItem = ({img, name, country, price, alt, onCoffeeSelected, onToggleDescr}) => {
    return (
        <div onClick={() => {onCoffeeSelected(); onToggleDescr()}} className="goods__block">
            <div className="goods__img">
                <img src={img} alt={alt} />
            </div>
            <h4 className="goods__name goods_center">{name}</h4>
            <p className="goods__country goods_center">{country}</p>
            <div className="goods__price goods_center">{price}$</div>
        </div>
    );
};

export default CoffeeGoodsItem;