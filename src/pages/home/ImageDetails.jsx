import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ImageDetails = () => {

    const { id } = useParams();
    const [imageDetails, setImageDetails] = useState(null);

    const fetchImageDetails = async () => {
        try {
            const url = `http://localhost:5000/api/images/${id}`;
            const result = await fetch(url);
            const { data } = await result.json();
            console.log(data);
            setImageDetails(data);
        } catch (err) {
            alert('Internal Server Error, Please try again')
        }
    }
    useEffect(() => {
        fetchImageDetails();
    }, [id]);

  return (
    <div>
        <div className='d-flex flex-column align-items-center w-50 m-auto mt-5'>
            <Link to="/">Back To Gallary</Link>
            <h1 className='mb-4'>{imageDetails?.originalName}</h1>
            <img
                src={imageDetails?.imageURL}
                alt={imageDetails?.originalName}
                className="img-fluid"
            />
            <p><strong>Image Type : </strong> {imageDetails?.mimeType}</p>
            <p><strong>Image Size : </strong> {imageDetails?.size} bytes</p>

        </div>
    </div>
  )
}

export default ImageDetails