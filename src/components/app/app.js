import MainPage from '../pages/main-page';
import SecondPage from '../pages/second-page';
import CoffeePage from '../pages/coffee-page';

import './app.scss';
import {AromisticoCoffee} from '../../assets/images';
import { BigCoffeeImg } from '../../assets/images';

const App = () => {

    const dataCoffee = [
        {
            img: AromisticoCoffee,
            bigImg: BigCoffeeImg, 
            name: 'AROMISTICO Coffee 1 kg', 
            country: 'Brazil', price: 6.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            alt: 'AROMISTICO Coffee', 
            id: 1
        },
        {
            img: AromisticoCoffee,
            bigImg: BigCoffeeImg,
            name: 'PRESTO Coffee 1 kg', 
            country: 'Kenya', price: 7.99, 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            alt: 'PRESTO Coffee', 
            id: 2
        },
        {
            img: AromisticoCoffee,
            bigImg: BigCoffeeImg,
            name: 'SOLIMO Coffee 1 kg', 
            country: 'Columbia', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 3.99, 
            alt: 'SOLIMO Coffee', 
            id: 3
        },
        {
            img: AromisticoCoffee, 
            bigImg: BigCoffeeImg,
            name: 'AROMISTICO Coffee 5 kg', 
            country: 'Brazil', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 9.99, 
            alt: 'AROMISTICO Coffee', 
            id: 4
        },
        {
            img: AromisticoCoffee, 
            bigImg: BigCoffeeImg,
            name: 'AROMISTICO Coffee 7 kg', 
            country: 'Columbia', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 10.99, 
            alt: 'AROMISTICO Coffee', 
            id: 5
        },
        {
            img: AromisticoCoffee, 
            bigImg: BigCoffeeImg,
            name: 'SOLIMO Coffee 2 kg', 
            country: 'Brazil', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 3.99, 
            alt: 'SOLIMO Coffee', 
            id: 6
        },
    ];

    return (
        <div className="app">
            <MainPage/>
            <SecondPage dataCoffee={dataCoffee}/>
            <CoffeePage dataCoffee={dataCoffee}/>
        </div>
    )

}

export default App;