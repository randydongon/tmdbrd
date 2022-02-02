import { useEffect, useState, useCallback } from "react";
//helpers
import { isPersistedState } from "../../helpers";

import API from "../../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter((member) => member.job === "Director");
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sesstionState = isPersistedState(movieId);
    if (sesstionState) {
      setState(sesstionState);
      setLoading(false);
      return;
    }
    fetchData();
  }, [movieId]);

  //write to sesstion sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
