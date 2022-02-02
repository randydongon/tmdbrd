import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useParams } from "react-router-dom";
//components
import BreadCrumb from "./BreaCrumb";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
//hooks
import { useMovieFetch } from "./Hooks/useMovieFetch";
//Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={state.original_title} />
      <MovieInfo movie={state} />
      <MovieInfoBar time={state.runtime} budget={state.budget} revenue={state.revenue} />
      <Grid header="Actors">
        {state.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={state.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
