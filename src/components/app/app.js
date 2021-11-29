import AppHeader from '../app-header/app-header';
import AppAbout from '../app-about/app-about';

import './app.scss';

const App = () => {

    return (
        <div className="app">
            <AppHeader/>
            <AppAbout/>
        </div>
    )

}

export default App;