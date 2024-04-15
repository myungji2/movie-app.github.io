import { useParams } from "react-router-dom"
import { useEffect,useState } from 'react';
import MovieDetail from '../components/detail';
function Detail() {

    const { id } = useParams();
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(true);
    async function getMovie() {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setResults(json.data.movie);
        setLoading(false);
        
    }
    
    useEffect(() => {
  
        getMovie();
    }, [])
    console.log(results.id);
        console.log(results.medium_cover_image);
        console.log(results.title);
        console.log(results.torrents);
        console.log(results.genres);


    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie Details</h1>
            </header>
            
            {loading ? <h3>Loading...</h3> : 
                <MovieDetail key={results.id}
                id={results.id}
                coverImage={results.medium_cover_image}
                title={results.title}
                // summary={results.summary}
                genres={results.genres} 
                downloads={results.torrents}/>}

        </div>
    );

}

export default Detail;
