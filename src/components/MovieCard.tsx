// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import type { MoviesResult } from "@/hooks/useMovies";

// interface Props {
//   movieResult: MoviesResult;
// }

// const MovieCard = ({ movieResult }: Props) => {
//   const {
//     title,
//     name,
//     overview,
//     poster_path,
//     backdrop_path,
//     original_language,
//     adult
//   } = movieResult;

//   // TMDB image base URL
//   const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
//   const posterUrl = poster_path ? `${imageBaseUrl}${poster_path}` : null;
//   const backdropUrl = backdrop_path ? `${imageBaseUrl}${backdrop_path}` : null;

//   // Use title for movies, name for TV shows
//   const displayTitle = title || name || "Untitled";

//   return (
//     <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-slate-50 to-white dark:from-slate-400 dark:to-slate-800">
//       {/* Poster Image */}
//       <div className="relative overflow-hidden">
//         {posterUrl ? (
//           <img
//             src={posterUrl}
//             alt={displayTitle}
//             className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//             loading="lazy"
//           />
//         ) : (
//           <div className="w-full h-64 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
//             <div className="text-slate-500 dark:text-slate-400 text-center">
//               <svg className="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
//               </svg>
//               <p className="text-sm font-medium">No Image</p>
//             </div>
//           </div>
//         )}

//         {/* Overlay gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//         {/* Language and Adult badges */}
//         <div className="absolute top-3 right-3 flex gap-2">
//           {original_language && (
//             <Badge variant="secondary" className="text-xs font-semibold uppercase bg-white/90 text-slate-700 backdrop-blur-sm">
//               {original_language}
//             </Badge>
//           )}
//           {adult && (
//             <Badge variant="destructive" className="text-xs font-semibold bg-red-500/90 backdrop-blur-sm">
//               18+
//             </Badge>
//           )}
//         </div>
//       </div>

//       {/* Card Content */}
//       <CardHeader className="pb-3">
//         <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
//           {displayTitle}
//         </CardTitle>
//       </CardHeader>

//       <CardContent className="pt-0">
//         <CardDescription className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
//           {overview || "No overview available."}
//         </CardDescription>
//       </CardContent>

//       {/* Backdrop preview on hover (optional enhancement) */}
//       {backdropUrl && (
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
//           <img
//             src={backdropUrl}
//             alt=""
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </div>
//       )}
//     </Card>
//   );
// };

// export default MovieCard;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MoviesResult } from "@/hooks/useMovies";

interface Props {
  movieResult: MoviesResult;
}

const MovieCard = ({ movieResult }: Props) => {
  const {
    title,
    overview,
    poster_path,
    original_language,
    adult,
    vote_average,
    release_date,
  } = movieResult;

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const posterUrl = poster_path ? `${imageBaseUrl}${poster_path}` : null;
  const releaseYear = release_date
    ? new Date(release_date).getFullYear()
    : null;

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl bg-black">
      {/* Full Image */}
      <div className="relative aspect-[2/3]">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Top badges */}
        <div className="absolute top-3 inset-x-3 flex justify-between">
          {vote_average > 0 && (
            <Badge className="bg-yellow-600 text-black font-semibold">
              ⭐ {vote_average.toFixed(1)}
            </Badge>
          )}

          <div className="flex gap-2">
            <Badge
              variant="secondary"
              className="bg-white/90 text-black text-xs"
            >
              {original_language.toUpperCase()}
            </Badge>
            {adult && (
              <Badge className="bg-red-600 text-white text-xs">18+</Badge>
            )}
          </div>
        </div>

        {/* Bottom content */}
        <CardContent className="absolute bottom-0 inset-x-0 p-4">
          <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
            {title}
          </h3>

          {releaseYear && (
            <p className="text-gray-300 text-sm mb-2">{releaseYear}</p>
          )}

          <p className="text-gray-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {overview}
          </p>
        </CardContent>
      </div>
    </Card>
  );
};

export default MovieCard;
