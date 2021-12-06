import CoffeeGoodsItem from "../cofee-goods-item/coffee-goods-item";

import './coffee-goods.scss';

const CoffeeGoods = ({dataCoffee, onCoffeeSelected, onToggleDescr}) => {
    const elements = dataCoffee.map(elem => {
        const {id, ...elemProps} = elem;
        return (
            <CoffeeGoodsItem
                onCoffeeSelected={() => onCoffeeSelected(id)}
                key={id}
                {...elemProps}
                onToggleDescr={onToggleDescr}/>
        );
    });

    return (
        <div className="goods">
            {elements}
        </div>
    );
}

export default CoffeeGoods;