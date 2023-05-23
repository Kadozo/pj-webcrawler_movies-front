import { useEffect, useState } from "react"
import Carousel from "../../components/carousel/Carousel";
import Card from "../../components/Card/Card";

export const Movies = (props) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const sendRequest = async () => {
        setLoading(true);
        const r = await (await fetch('http://ec2-15-229-9-6.sa-east-1.compute.amazonaws.com:3333/watchable?type=movies')).json()
        setMovies(r.watchables)
        setLoading(false);
    }

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <div>
            <Carousel data={movies.map((movie) => movie.img)} loading={loading} />
            {movies.map((movie) => (
                <Card
                    img={movie?.img}
                    title={movie?.title}
                    end_year={movie.end_year}
                    start_year={movie.start_year}
                    genres={movie?.genres}
                    imdb_rating={movie?.imdb_rating}
                    descripion={movie?.descripion}
                />
            ))}
        </div>
    );
}