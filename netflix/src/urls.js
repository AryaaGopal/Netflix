import { API_KEY } from "./Constants/Constant"

export const action =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const originals =`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`