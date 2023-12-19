export const AuthMock = {
	JWTAccessTokenGuard: jest.fn().mockImplementation(() => ({
		canActivate: jest.fn().mockReturnValue(true),
	})),
	JWTRefreshTokenGuard: jest.fn().mockImplementation(() => ({
		canActivate: jest.fn().mockReturnValue(true),
	})),
	LocalAuthGuard: jest.fn().mockImplementation(() => ({
		canActivate: jest.fn().mockReturnValue(true),
	})),
	JwtAccessTokenStrategy: jest.fn().mockImplementation(() => ({
		validate: jest.fn().mockReturnValue(true),
	})),
	JwtRefreshTokenStrategy: jest.fn().mockImplementation(() => ({
		validate: jest.fn().mockReturnValue(true),
	})),
	LocalStrategy: jest.fn().mockImplementation(() => ({
		validate: jest.fn().mockReturnValue(true),
	})),
};
