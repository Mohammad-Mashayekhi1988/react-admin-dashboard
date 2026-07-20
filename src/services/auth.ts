export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  userName: string;
}

export async function login(
  data: LoginRequest
): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        data.email === "mm.mashayekhi1988@gmail.com" &&
        data.password === "12345678"
      ) {
        resolve({
          token: "123456789",
          userName: "Mohammad",
        });
      } else {
        reject(new Error("ایمیل یا رمز عبور اشتباه است"));
      }
    }, 1000);
  });
}