export const successRequest = (status: number) => {
	return status >= 200 && 400 > status;
};

export const isEmptyArray = (value: any[]) => {
	return Array.isArray(value) === false || value.length === 0;
};
