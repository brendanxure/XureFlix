const Key = "5ceecfb148090e69799a0b5279518399"

export const request = {
    popular : `https://api.themoviedb.org/3/movie/popular?api_key=5ceecfb148090e69799a0b5279518399&language=en-US&page=1`,
    topRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page=1`,
    upcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`,
    latest: `https://api.themoviedb.org/3/movie/latest?api_key=${Key}&language=en-US`,
    nowPlaying : `https://api.themoviedb.org/3/movie/now_playing?api_key=${Key}&language=en-US&page=1`
}
