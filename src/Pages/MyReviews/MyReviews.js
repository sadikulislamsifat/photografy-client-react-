import React, {useContext,useEffect,  useState} from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvide';
import Review from './Review';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState({});


    useEffect(() => {

        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))

    }, [user?.email])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {
            reviews.map(review => <Review
            key={reviews._id}
            review={review}
            ></Review>)
          }
        </div>
    );
};

export default MyReviews;