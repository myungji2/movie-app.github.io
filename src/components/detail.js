import PropTypes from 'prop-types';

function MovieDetail({ id, coverImage, title, genres ,downloads}) {
    return (
        <div>
            <img src={coverImage} alt="cover_image" />
            <h2>{title}</h2>
            
            
            <ul>
                {genres.map((genres, index) => <li key={index}>{genres}</li>)}
            </ul>
            <h3>Downloads</h3>
            <ul>
                {downloads.map((downloads, index) => <li key={index}>{downloads.url}</li>)}
            
            </ul>
        </div>
    )
}
MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default MovieDetail;