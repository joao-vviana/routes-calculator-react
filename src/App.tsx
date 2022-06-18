import { BrowserRouter } from 'react-router-dom'
import Routers from './config/Routers';
import Menu from './components/Menu';

export default function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routers/>
        </BrowserRouter>
    );
};