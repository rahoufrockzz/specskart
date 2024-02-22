import { useEffect, useState } from 'react';
import LoaderMain from '../../Components/UI/Loader/LoaderMain/LoaderMain';

import HeaderSection from '../../Components/LandingPage/HeaderSection/HeaderSection';
import RecommendedProduct from '../../Components/LandingPage/RecommendedProduct/RecommendedProduct';
import BestProduct from '../../Components/LandingPage/BestProduct/BestProducts';

import useScrollToTop from '../../Hooks/useScrollToTop';

const Landing = () => {
    useScrollToTop();

    const [loading, setLoading] = useState(false);

    const loadingHandler = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1700);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        loadingHandler();
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <LoaderMain />
                </>
            ) : (
                <div className="flex flex-1 flex-col bg-gray-50 transition-all duration-100 ease-in-out">
                    <div className="w-full px-8 pb-10">
                        <HeaderSection />
                        <BestProduct />
                        <RecommendedProduct />
                    </div>
                </div>
            )}
        </>
    );
};

export default Landing;
