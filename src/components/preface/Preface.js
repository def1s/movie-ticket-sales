import './preface.scss';

const Preface = ({title, descr, link}) => {
	return (
		<div class="preface">

			<div class="preface__descr">
				<h3 class="preface__title">
					{title}
				</h3>

				<div class="preface__info">
					{descr}
				</div>
			</div>

			<a class="preface__proceed" href={link}>Show more...</a>

		</div>
	);
}

export default Preface;