import MovieSelection from '../../components/movieSelection/MovieSelection';
import Advertisement from '../../components/advertisement/Advertisement';
import News from '../../components/news/News';
import ComingSoon from '../../components/comingSoon/ComingSoon';
import Footer from '../../components/footer/Footer';

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