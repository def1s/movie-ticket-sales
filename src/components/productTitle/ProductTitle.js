import './productTitle.scss';

const ProductTitle = ({ title, mods, children }) => {
	return <div className={`product-title ${mods}`}>{children}</div>;
}

export default ProductTitle;