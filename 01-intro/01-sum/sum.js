function sum(a, b) {
	if ([a, b].some((item) => typeof item !== 'number' )) {
		throw new TypeError();
	}

	return a + b;
}

module.exports = sum;
