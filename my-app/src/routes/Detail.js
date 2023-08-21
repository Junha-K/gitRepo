import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Detail() {
    const [ loading, setLoading ] = useState(true);
    const [ detail, setDetail] = useState({});
    const { id } = useParams();
    const getDetail = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
    }
    useEffect(()=>{
        getDetail();
    }, []);
    return (loading ?
        <h1>Loading...</h1>
        :
        <div>            
            <img src={detail.medium_cover_image} alt="cover omitted"/>
            <h1>{detail.title_long}</h1>
            <p>({detail.rating}/10)</p>
            <ul>
                {detail.genres.map(g=><li key={g}>{g}</li>)}
            </ul>
            <p>{detail.description_full.length < 235 ? detail.description_full : detail.description_full.slice(0,235)}</p>
            <Link to ={'/'}>
                <button>Back</button>
            </Link>
        </div>
    );
}
export default Detail;