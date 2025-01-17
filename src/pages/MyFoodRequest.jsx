import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RequestedFood from "../components/RequestedFood";
import { authContext } from "../authprovider/AuthProvider";
import axios from "axios";

const MyFoodRequest = () => {
    const { user } = useContext(authContext)

    const [myFoodRequest, setMyFoodRequest] = useState([])

    useEffect(() => {
        axios.get(`https://back-end-part-a11.vercel.app/food-request?email=${user.email}`, {
        // axios.get(`http://localhost:5500/food-request?email=${user.email}`, {
            withCredentials: true
        })
            .then(res => setMyFoodRequest(res.data))
            .catch(err=>console.log(err))
        
    }, [user])

    return (
        <div>
            {
                myFoodRequest?.map((request, index) => <RequestedFood key={request._id} data={request} index={index}></RequestedFood>)
            }
        </div>
    );
};

export default MyFoodRequest;