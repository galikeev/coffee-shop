import CoffeeGoodsItem from "../cofee-goods-item/coffee-goods-item";

import './coffee-goods.scss';

const CoffeeGoods = ({dataCoffee}) => {
    const elements = dataCoffee.map(elem => {
        const {id, ...elemProps} = elem;
        return (
            <CoffeeGoodsItem
                key={id}
                {...elemProps}/>
        );
    });

    return (
        <div className="goods">
            {elements}
        </div>
    );
}

export default CoffeeGoods;