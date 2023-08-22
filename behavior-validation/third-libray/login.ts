import { appLogin } from "api";

const state = { tipString: "" };

export function login(username: string, password: string) {
  appLogin(username, password);
}

export function loginV2(username: string, password: string) {
  const isLogin = appLogin(username, password);

  if (isLogin) {
    state.tipString = "login success";
  }
}

export function getTips() {
  return state.tipString;
}
