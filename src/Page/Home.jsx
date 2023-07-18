

import requests from "../Requests/Request";
import Main from "../component/Main"
import Row from "../component/Row";

const Home = () => {
    return(
        <div>
            <Main genre="popular"/>
            <Row title="Popular" fetchURL={requests.requestPopular} rowID='1' genre="popular" />
            <Row title="Upcoming" fetchURL={requests.requestUpcoming} rowID='2' genre="upcoming" />
            <Row title="Trending" fetchURL={requests.requestTrending} rowID='3' genre="trending" />
            <Row title="Now-playing" fetchURL={requests.requestNowPlaying} rowID='4' genre="now-playing" />
            <Row title="Toprated" fetchURL={requests.requestTopRated} rowID='5' genre="top-rated" />
        </div>
    )
}
export default Home;