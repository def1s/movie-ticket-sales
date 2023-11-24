import './product-title.scss';

const ProductTitle = ({ title, mods, children }) => {
	return <div class={`product-title ${mods}`}>{children}</div>;
}

export default ProductTitle;