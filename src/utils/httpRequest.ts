export function successRequest(status: number) {
	return status >= 200 && 400 > status;
}
