import './preface.scss';

const Preface = ({title, descr, link}) => {
	return (
		<div className="preface">

			<div className="preface__descr">
				<h3 className="preface__title">
					{title}
				</h3>

				<div className="preface__info">
					{descr}
				</div>
			</div>

			<a className="preface__proceed" href={link}>Show more...</a>

		</div>
	);
}

export default Preface;