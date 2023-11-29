import './newsCards.scss';

import NewsCard from '../newsCard/NewsCard';

import img from '../../imgs/news1.png';

const NewsCards = () => {
	return (
		<div className="news-cards news-cards_mt-50">

			<NewsCard img={img} title={'Spider-Man: No Way Home Rilis Trailer Terbaru.'} date={'08 Nov 2021'}/>		
			<NewsCard img={img} title={'Spider-Man: No Way Home Rilis Trailer Terbaru.'} date={'08 Nov 2021'}/>
			<NewsCard img={img} title={'Spider-Man: No Way Home Rilis Trailer Terbaru.'} date={'08 Nov 2021'}/>

		</div>
	);
}

export default NewsCards;