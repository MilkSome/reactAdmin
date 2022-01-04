import React, { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticatedApp = () => {
  const [isRgister, setIsRgister] = useState(false);

  return (
    <div>
      {isRgister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRgister(!isRgister)}>
        切换 {isRgister ? "登录" : "注册"}
      </button>
    </div>
  );
};
