import './news.scss';

import Preface from '../preface/Preface';
import NewsCards from '../news-cards/News-cards';

const News = ({modificators}) => {
	return (
		<section class={`news ${modificators}`}>
			<div class="container">

				<Preface 
					title='TIX ID News' 
					descr={'Berita tentang dunia perfilman terbaru untuk anda!'} 
					link={null}
				/>
				
				<NewsCards/>

			</div>
		</section>
	);
}

export default News;