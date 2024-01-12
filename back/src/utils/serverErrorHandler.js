export default (response, errorObject, errorMessage) => {
	console.log(errorObject);

	if (errorObject.name === 'ValidationError') {
		const errorKeys = Object.keys(errorObject.errors);

		if (errorKeys.length > 0) {
			const firstErrorMessage = errorObject.errors[errorKeys[0]].message;

			return response.status(400).send({
				error: firstErrorMessage,
			});
		}
	}

	response.status(500).send({
		error: errorMessage,
	});
};
