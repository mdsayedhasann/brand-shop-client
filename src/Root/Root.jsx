
import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Root = () => {
    return (
        <>
        <div className='max-w-full mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
        </>
    );
};

export default Root;