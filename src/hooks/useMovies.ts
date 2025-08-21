import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface MoviesResult {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name?: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const useMoviesList = () => {
  const [moviesList, setMoviesList] = useState<MoviesResult[]>();
  const fetchMoviesList = async () => {
    try {
      const res = await apiClient.get("/discover/movie");
      console.log(res.data.results);
      setMoviesList(res.data.results);
    } catch (error) {
      console.error("Failed to fetch movies list:", error);
    }
  };
  useEffect(() => {
    fetchMoviesList();
  }, []);

  return { moviesList };
};

export default useMoviesList;
