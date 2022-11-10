import React, {useContext,useEffect,  useState} from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvide';
import Review from './Review';
import useTitle from './../../hooks/useTitle';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState([]);
    useTitle("Review")


    useEffect(() => {

        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))

    }, [user?.email])

    const handleDelete = id => {
        console.log(id)

        const proceed = window.confirm("Are you sure you want to delete this review ?")
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted succesfully')
                    const remaing = reviews.filter(review => review._id !== id);
                    setReviews(remaing)
                }
            })
        }
    }

    return (
        <div className='p-5 min-h-screen md:p-9 grid grid-cols-1 md:grid-cols-2 gap-10'>
          {
            reviews.map(review => <Review
            key={reviews._id}
            review={review}
            handleDelete={handleDelete}
            ></Review>)
          }
        </div>
    );
};

export default MyReviews;