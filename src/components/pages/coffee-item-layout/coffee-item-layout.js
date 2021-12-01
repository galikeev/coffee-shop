import './coffee-item-layout.scss';

const CoffeeItemLayout = ({bigImg, country, description, price, alt}) => {
    return (
        <div className="coffee">
            <div className="coffee__img">
                <img src={bigImg} alt={alt} />
            </div>
        </div>
    );
};

export default CoffeeItemLayout;