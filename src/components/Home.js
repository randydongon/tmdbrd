import React from "react";
// import API from "../API";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
import HeroImage from "./HeroImage";
import NoImage from "../images/no_image.jpg";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import Button from "./Button";

//hooks
import { useHomeFetch } from "./Hooks/useHomeFetch";
import SearchBar from "./SearchBar";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, isLoadMore, setIsLoadMore } =
    useHomeFetch();
  if (loading) return <Spinner />;
  if (error) return <div>Somthing went wrong...</div>;
  return (
    <>
      {!searchTerm && state?.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state?.results[0].backdrop_path}`}
          title={state?.results[0].original_title}
          text={state?.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie, i) => (
          <Thumb
            key={i}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadMore(true)} text="Load more" />
      )}
    </>
  );
};
export default Home;
