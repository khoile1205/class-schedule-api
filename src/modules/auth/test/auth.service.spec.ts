import configuration from "@/configuration";
import { UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule, getModelToken } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";
import * as bcrypt from "bcrypt";
import { User, UserEntity } from "../../user/entity";
import { UserService } from "../../user/user.service";
import { UserTokenService } from "../../userToken/user.token.service";
import { AuthService } from "../auth.service";
import { UserRepository } from "../../user/user.repository";
import { UserTokenRepository } from "../../userToken/user.token.repository";
import { UserToken } from "../../userToken/entity";
import { createUserStub } from "@/modules/user/test/stub/user.stub";
import { mockJWTService } from "./mock/jwt.mock";
import { Role } from "@prisma/client";

describe("AuthService", () => {
	let authService: AuthService;
	let userService: UserService;
	let userTokenService: UserTokenService;
	let jwtService: JwtService;
	beforeEach(async () => {
		const moduleRef = await Test.createTestingModule({
			providers: [
				AuthService,
				UserService,
				UserTokenService,
				UserRepository,
				{
					provide: UserTokenRepository,
					useValue: {
						findOne: jest.fn(),
						createUserToken: jest.fn(),
						updateRefreshTokenByUserId: jest.fn(),
					},
				},
				{
					provide: getModelToken(User.name),
					useValue: {},
				},
				{
					provide: getModelToken(UserToken.name),
					useValue: {},
				},
				{
					provide: JwtService,
					useValue: mockJWTService,
				},
			],
		}).compile();
		authService = moduleRef.get<AuthService>(AuthService);
		userService = moduleRef.get<UserService>(UserService);
		userTokenService = moduleRef.get<UserTokenService>(UserTokenService);
		jwtService = moduleRef.get<JwtService>(JwtService);
	});

	describe("authenticateUser", () => {
		it("should return an user", async () => {
			jest.spyOn(userService, "getUserByUsername").mockResolvedValue(createUserStub());
			jest.spyOn(bcrypt, "compare").mockResolvedValue(true as never);

			// Act
			const account = {
				username: "test",
				password: "test",
			};

			const user = await authService.authenticateUser(account);

			expect(user).toEqual(createUserStub());
		});

		it("should throw Unauthorized with password incorrect", async () => {
			// Arrange
			jest.spyOn(userService, "getUserByUsername").mockResolvedValue(createUserStub());
			jest.spyOn(bcrypt, "compare").mockResolvedValue(false as never);

			// Act
			const account = {
				username: "test",
				password: "testaaa",
			};

			await expect(authService.authenticateUser(account)).rejects.toThrow(
				new UnauthorizedException("Wrong password")
			);
		});

		it("should throw Unauthorized with username incorrect", async () => {
			jest.spyOn(userService, "getUserByUsername").mockResolvedValue(null);

			// Act
			const account = {
				username: "testaaa",
				password: "testaaa",
			};
			await expect(authService.authenticateUser(account)).rejects.toThrow(
				new UnauthorizedException("User not found")
			);
		});
	});

	describe("signIn", () => {
		it("should return an object with access token and refresh token", async () => {
			// Arrange

			jest.spyOn(authService, "generateAccessToken").mockReturnValue("mockAccessToken");
			jest.spyOn(authService, "generateRefreshToken").mockReturnValue("mockRefreshToken");
			jest.spyOn(userTokenService, "setCurrentRefreshToken");

			const result = await authService.signIn(createUserStub());
			// Act
			expect(result).toEqual({
				access_token: "mockAccessToken",
				refresh_token: "mockRefreshToken",
			});
		});
	});
	describe("generate access token", () => {
		it("should return an access token", async () => {
			// Arrange

			jest.spyOn(jwtService, "sign").mockReturnValue("mockAccessToken");

			// Act
			const mockPayload = {
				username: "test",
				role: Role.Admin,
				id: "123",
			};

			expect(authService.generateAccessToken(mockPayload)).toEqual("mockAccessToken");
		});
	});
});
