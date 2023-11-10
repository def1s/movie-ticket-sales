import './news-cards.scss';

import NewsCard from '../news-card/News-card';

import img from '../../imgs/news1.png';

const NewsCards = () => {
	return (
		<div class="news-cards news-cards_mt-50">

			<NewsCard img={img} title={'Spider-Man: No Way Home Rilis Trailer Terbaru.'} date={'08 Nov 2021'}/>		
			<NewsCard img={img} title={'Spider-Man: No Way Home Rilis Trailer Terbaru.'} date={'08 Nov 2021'}/>
			<NewsCard img={img} title={'Spider-Man: No Way Home Rilis Trailer Terbaru.'} date={'08 Nov 2021'}/>

		</div>
	);
}

export default NewsCards;