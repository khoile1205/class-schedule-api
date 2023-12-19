import { Role } from "@prisma/client";

export {};
declare global {
	export interface JWTPayload {
		username: string;
		role: Role;
		id: string;
	}
}
