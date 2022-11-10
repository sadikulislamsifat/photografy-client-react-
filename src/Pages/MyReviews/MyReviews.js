import React, {useContext,useEffect,  useState} from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvide';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState({});


    useEffect(() => {

        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))

    }, [user?.email])

    return (
        <div>
            <h1>you have {reviews.length} </h1>
        </div>
    );
};

export default MyReviews;