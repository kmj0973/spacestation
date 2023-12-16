import jwt from "jsonwebtoken";
import "dotenv/config";
import { CustomError } from "../middleware/errorHandler.js";
import UserModel from "../user/user.model.js";

// 사용자 관련 서비스 로직
export const userService = {
  async searchUsers(snsId: string) {
    return await UserModel.find({ snsId: snsId });
  },
  async signUp(snsId: string) {
    const user = {
      snsId,
      nickname: "",
      profileImgUrl: "/profile_default_image.jpeg",
    };

    if (!user.nickname) user.nickname = generateNickname();

    return await UserModel.create(user);
  },
  async signIn(snsId: string) {
    return await UserModel.findOne({ snsId: snsId });
  },
  async withdrawUser(userId: string) {
    return await UserModel.findOneAndUpdate(
      { id: userId },
      { deletedAt: new Date() },
      { new: true },
    );
  },
};

const kakaoGetUserInfoURL = "https://kapi.kakao.com/v2/user/me";
const kakaoGetTokenURL = "https://kauth.kakao.com/oauth/token";

// 인증 관련 서비스 로직
export const authService = {
  // 인가 코드 검증하는 함수
  async validateKakaoOAuthCode(code: string) {
    if (typeof code === "undefined") {
      throw new CustomError({
        status: 400,
        message: "Authorized Code가 존재하지 않습니다.",
      });
    }
    return code;
  },
  // 인가 코드를 사용하여 카카오 액세스 토큰을 발급받아 리턴하는 함수
  async getKakaoAccessToken(code: string): Promise<{ accessToken: string }> {
    const REST_API_KEY: string | undefined = process.env
      .KAKAO_REST_API_KEY as string;
    const BACKEND_URL: string | undefined = process.env.BACKEND_URL as string;

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const data = {
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: `${BACKEND_URL}/api/auth/oauth`,
      code: code,
    };

    try {
      const response = await fetch(kakaoGetTokenURL, {
        method: "POST",
        headers: headers,
        body: new URLSearchParams(data),
      });
      const result = await response.json();
      return { accessToken: result.access_token };
    } catch (error) {
      throw new CustomError({
        status: 500,
        message: "엑세스 토큰 발급에 실패했습니다.",
      });
    }
  },
  // 발급된 액세스 토큰으로 유저 정보를 반환하는 함수
  async getUserInfo(accessToken: string): Promise<any> {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: "Bearer " + accessToken,
    };

    try {
      const response = await fetch(kakaoGetUserInfoURL, { headers });
      const result = await response.json();
      return result;
    } catch (error) {
      throw new CustomError({
        status: 500,
        message: "카카오 회원 정보 조회에 실패했습니다.",
      });
    }
  },
  // JWT 토큰 생성하고 반환하는 함수
  generateJWT(userId: string, nickname: string): string {
    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // 현재시간 + @, e.g. 60*60 = 1시간 후 만료
    const payload = {
      user_id: userId,
      nickname: nickname,
      exp: expirationTime,
    };

    const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
    const token = jwt.sign(payload, secretKey);

    return token;
  },
  async handleAuthUser(userInfo: { id: string }, api: string) {
    const data = {
      snsId: userInfo.id,
    };
    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/${api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!result) {
      throw new CustomError({
        status: 500,
        message:
          api && "join"
            ? "회원 가입에 실패했습니다."
            : "로그인에 실패했습니다.",
      });
    }
    return result;
  },
};

// 랜덤 닉네임을 생성하는 함수
function generateNickname() {
  const adjectives = [
    "재빠른",
    "빙빙도는",
    "멋진",
    "신비로운",
    "열정적인",
    "배고픈",
    "빛나는",
    "안쓰러운",
  ];
  const nouns = [
    "도르마무",
    "고양이",
    "사자",
    "호랑이",
    "강산",
    "현지",
    "명준",
    "소현",
    "슬빈",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective}${randomNoun}`;
}
