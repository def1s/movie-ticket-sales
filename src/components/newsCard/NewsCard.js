import './newsCard.scss';

const NewsCard = ({img, title, date}) => {
	return (
		<div className="news-card">

			<img src={img} alt="" className="news-card__cover"></img>

			<div className="news-card__title">
				{title}
			</div>

			<div className="news-card__date">
				{date}
			</div>

		</div>
	);
}

export default NewsCard;