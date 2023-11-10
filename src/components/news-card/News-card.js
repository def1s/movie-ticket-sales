import './news-card.scss';

const NewsCard = ({img, title, date}) => {
	return (
		<div class="news-card">

			<img src={img} alt="" class="news-card__cover"></img>

			<div class="news-card__title">
				{title}
			</div>

			<div class="news-card__date">
				{date}
			</div>

		</div>
	);
}

export default NewsCard;