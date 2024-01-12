export default (product) => ({
	id: product._id,
	title: product.title,
	description: product.description,
	status: product.status,
});
