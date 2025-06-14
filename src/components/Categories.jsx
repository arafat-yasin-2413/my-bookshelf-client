import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';
import LoaderSpinner from './LoaderSpinner';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const {loading,setLoading} = use(AuthContext);

    useEffect(()=>{
        setLoading(true)
        fetch(`${import.meta.env.VITE_API_URL}/categories`)
        .then(res=>res.json())
        .then(data => {
            setCategories(data);
            setLoading(false);
            // console.log(data);
            
        })
        .catch(error=>{
            toast.error('Failed to fetch categories : ',error);
            setLoading(false);
        })
    },[])

    return (
        <div>

            <h2>Showing All categories</h2>

            {
                loading ? (<LoaderSpinner></LoaderSpinner>) : 
                

                (categories.length > 0) && (
                    categories.map((category, idx)=>(
                        <h5 key={idx}>{category}</h5>
                    ))
                )
            }
        
            
        </div>
    );
};

export default Categories;