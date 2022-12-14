import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import NewsLatter from '../NewsLatter/NewsLatter';
import Photography from '../Photography/Photography';
import Services from '../Services/Services';
import useTitle from './../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Photography></Photography>
            <Blog></Blog>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;