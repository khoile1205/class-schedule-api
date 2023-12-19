import { Role } from "@/common/enums";

export {};
declare global {
	export interface JWTPayload {
		username: string;
		role: Role;
		id: string;
	}
}
