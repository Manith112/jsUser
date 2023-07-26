import axiosClient from "./axiosClient";
export const category = {
    movie: 'movie',
    tv: 'tv'
}
const tmdbApi = {
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    

}
export default tmdbApi;