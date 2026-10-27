export const cookieOptions = {
	httpOnly: true,
	maxAge: 60 * 60 * 24,
	sameSite: "strict",
	secure: process.env.NODE_ENV === "production",
};
