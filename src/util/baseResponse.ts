import { HttpStatus } from "@nestjs/common";

interface Response {
	status: number;
	data: any;
	message: string;
}

export default function baseResponse({
	status = HttpStatus.OK,
	data = [],
	message = "OK",
}: Response) {
	return {
		status,
		data,
		message,
	};
}
