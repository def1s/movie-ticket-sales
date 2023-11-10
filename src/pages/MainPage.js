import MovieSelection from '../components/movie-selection/Movie-selection';
import Advertisement from '../components/advertisement/Advertisement';
import News from '../components/news/News';
import ComingSoon from '../components/coming-soon/Coming-soon';
import Footer from '../components/footer/Footer';

const MainPage = () => {
	return (
		<>

			<MovieSelection/>

			<Advertisement modificators={'advertisement_mt-90'}/>

			<News modificators={'news_mt-180'}/>

			<ComingSoon/>

			<Footer/>

		</>
	);
}

export default MainPage;