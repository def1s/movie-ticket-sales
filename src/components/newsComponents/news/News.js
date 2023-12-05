import './news.scss';

import Preface from '../../preface/Preface';
import NewsCards from '../newsCards/NewsCards';

const News = ({modificators}) => {
	return (
		<section className={`news ${modificators}`}>
			<div className="container">

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