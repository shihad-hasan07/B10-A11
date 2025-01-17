import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderDetails from '../components/SliderDetails';
// import FeaturedFoods from "../components/FeaturedFoods";
import { useLoaderData } from "react-router-dom";
import slider1 from '../assets/orange.jpg'
import slider2 from '../assets/guava.jpg'
import slider3 from '../assets/lichi.jpg'
import slider4 from '../assets/mango.jpg'
import Food from "../components/Food";

const Home = () => {
    const movie = useLoaderData();
    const sortedFoods = [...movie].sort((a, b) => b.FoodQuantity - a.FoodQuantity);
    const featuredFoods = sortedFoods.slice(0, 6);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <>
            <div>

                <Slider {...settings} className='mb-20'>
                    <SliderDetails name='Orange' details="The orange, also called sweet orange to distinguish it from the bitter orange (Citrus  aurantium), is the fruit of a tree in the family Rutaceae." img={slider1}></SliderDetails>

                    <SliderDetails name='Guava' details='Guava is a common tropical fruit cultivated in many tropical and subtropical regions. The common guava Psidium guajava is a small tree in the myrtle family (Myrtaceae), native to Mexico, Central America, the Caribbean and northern South America.' img={slider2}></SliderDetails>

                    <SliderDetails name='Lichi' details='A tall evergreen tree, it bears small fleshy sweet fruits. The outside of the fruit is a pink-red, rough-textured soft shell.' img={slider3}></SliderDetails>

                    <SliderDetails name='Mango' details='Mango is an edible stone fruit produced by the tropical tree Mangifera indica. It originated from the region between northwestern Myanmar, Bangladesh, and northeastern India' img={slider4}></SliderDetails>
                </Slider>
            </div>

            <div className="container mx-auto">
                <p className="text-4xl mb-7">Featured foods</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                    {
                        featuredFoods?.map(feature => <Food key={feature._id} food={feature}></Food>)
                    }
                </div>

                {/* extra two section  */}

            </div>
        </>
    );
};

export default Home;