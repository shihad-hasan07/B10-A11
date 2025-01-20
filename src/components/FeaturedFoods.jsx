import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FeaturedFoods = ({ feature }) => {
    const { FoodName, FoodImage, FoodQuantity, PickupLocation, _id } = feature
    return (
        <div>
            <div>
                <img src={FoodImage} alt="img-not-found"
                    className='w-full image-with-alt rounded-t-xl h-56 object-cover' />
            </div>
            <div className=' bg-slate-100 rounded-b-xl p-5'>
                <div className='flex justify-between'>
                    <p className='font-bold text-xl'>{FoodName.toUpperCase()}</p>
                    <p className='flex items-center gap-1 mt-2'><MdOutlineProductionQuantityLimits size={15} />{FoodQuantity}</p>
                </div>
                <p className='flex items-center gap-1'><FaLocationDot size={13} />{PickupLocation}</p>
                <Link to={`/food/${_id}`}><button className='primaryBtn mt-3'>View Details</button></Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;