import MoviesList from "@/components/MoviesList"
import TvShows from "@/components/TvShows"
import { Route, Routes } from "react-router"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element />
        <Route path="movies" element = {<MoviesList />}/>
        <Route path="tvShows" element = {<TvShows />}/>
    </Routes>
  )
}

export default AllRoutes
