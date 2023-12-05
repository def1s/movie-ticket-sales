import MovieSelection from '../../components/movieComponents/movieSelection/MovieSelection';
import Advertisement from '../../components/advertisement/Advertisement';
import News from '../../components/newsComponents/news/News';
import ComingSoon from '../../components/comingSoon/ComingSoon';

const MainPage = () => {
	return (
		<>

			<MovieSelection/>

			<Advertisement modificators={'advertisement_mt-90'}/>

			<News modificators={'news_mt-180'}/>

			<ComingSoon/>

		</>
	);
}

export default MainPage;