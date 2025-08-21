// import useMoviesList from "@/hooks/useMovies";
// const MoviesList = () => {
//   const { moviesList } = useMoviesList();
//   console.log(moviesList);
//   return (
//     <div>
//       {moviesList?.map((movie) => (
//         <p>{movie.title}</p>
//       ))}
//     </div>
//   );
// };

// export default MoviesList;


import useMoviesList from "@/hooks/useMovies";
import MovieCard from "@/components/MovieCard"; 

const MoviesList = () => {
  const { moviesList } = useMoviesList();
  
  return (
    <div className=" mx-auto px-10 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-black font-serif">
        Discover Movies
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {moviesList?.map((movie) => (
          <MovieCard key={movie.id} movieResult={movie} />
        ))}
      </div>
      
      {!moviesList && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
};

export default MoviesList;