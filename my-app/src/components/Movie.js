import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function Movie({id, coverImg, title, rating, genres, synopsis}) {
    return <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt="cover omitted"/>
      </Link>
      <h2>{title}</h2>
      <p>({rating}/10)</p>
      <ul>
        {genres.map(g=><li key={g}>{g}</li>)}
      </ul>
      <p>{synopsis.length < 235 ? synopsis : `${synopsis.slice(0,235)}`}</p>
      <hr/>
      </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    synopsis: PropTypes.string.isRequired,
    
}

export default Movie;