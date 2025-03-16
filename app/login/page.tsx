"use client";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import React, { useEffect } from "react";
import { Form } from "@heroui/form";
import { emote } from "@/config/emote-svg";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import CryptoJS from "crypto-js";
import { Spinner } from "@heroui/spinner";
import { siteConfig } from "@/config/site";
import {Image} from "@heroui/image";
export default function LoginPage() {
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const [isLoading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(true);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const router = useRouter();
  const [state, setState] = React.useState({
    validateEmail: {
      status: false,
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    validateUsername: {
      status: false,
      regex: /^[a-z0-9]+$/i,
    },
    validatePassword: {
      status: false,
      regex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    },
  });
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const updateStatus = (key: string | number, value: any) => {
    setState((prevState: any) => ({
      ...prevState,
      [key]: { ...prevState[key], status: value },
    }));
  };

  const toggleMode = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsLogin(!isLogin);
      setTimeout(() => {
        setIsAnimating(false);
      }, 250);
    }, 250);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (
      state.validateEmail.status &&
      state.validatePassword.status &&
      state.validateUsername &&
      !isLogin
    ) {
      setLoading(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status == 200) {
        const data = await res.json();
        localStorage.setItem("token", JSON.stringify(data));
        setIsLogin(true);
        addToast({
          title: "สำเร็จ",
          description: "สมัครสมาชิกสำเร็จ",
          color: "success",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
        setLoading(false);
      } else if (res.status === 400) {
        setLoading(false);
        addToast({
          title: "ล้มเหลว",
          description: "ชื่อผู้ใช้ หรือ อีเมลมีผู้ใช้งานแล้ว",
          color: "danger",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
      }
    } else if (
      state.validateEmail.status &&
      state.validatePassword.status &&
      isLogin
    ) {
      setLoading(true);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status == 200) {
        const data = await res.json();

        localStorage.setItem("token", JSON.stringify(data.token));

        const decrypt_token = CryptoJS.AES.decrypt(data.token, "emp").toString(
          CryptoJS.enc.Utf8
        );
        if (JSON.parse(decrypt_token).role == "admin") {
          router.push("/dashboard");
          setLoading(false);
        } else {
          router.push("/");
        }
        // router.push("/")
      } else if (res.status === 400) {
        addToast({
          title: "ล้มเหลว",
          description: "ชื่อผู้ใช้ หรือ อีเมลไม่ถูกต้อง",
          color: "danger",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
        setLoading(false);
      }else {
        addToast({
          title: "ล้มเหลว",
          description: "เซิฟเวอร์มีปัญหา",
          color: "danger",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
        setLoading(false);
      }
    }
  };

  // Define CSS for card swap animation
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .slide-out {
        animation: slideOut 0.3s ease-in-out forwards;
      }
      
      .slide-in {
        animation: slideIn 0.3s ease-in-out forwards;
      }
      
      @keyframes slideOut {
        0% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(-20px); opacity: 0; }
      }
      
      @keyframes slideIn {
        0% { transform: translateX(20px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-[900px] h-[500px] flex justify-center items-center ">
    {/* Left Side - โลโก้หรือข้อความแนะนำ */}
    <div className="w-1/2 flex flex-col justify-center items-center mr-5">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">ยินดีต้อนรับ</h1>
        <p className="text-lg">เข้าสู่ระบบเพื่อใช้งานระบบของเรา</p>
        <div className="mt-8 flex justify-center items-center">
        <Image
          alt="heroui logo"
          className="w-[300px] h-full"
          radius="sm"
          src="logoSurvey.png"
          
        />
        </div>
      </div>
    </div>
    
    {/* Right Side - ฟอร์ม Login / สมัครสมาชิก */}
    <div className="w-1/2 w-full flex justify-center items-center relative">
      {!isLoading ? null : (
        <>
          <div className="w-full h-full absolute blur-xl bg-red-50 bg-opacity-50 z-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <Spinner
              classNames={{ label: "text-foreground mt-4" }}
              label="กำลังเข้าสู่ระบบ"
              variant="simple"
            />
          </div>
        </>
      )}
  
      <div className="mt-15 w-full max-w-[500px] relative">
        <h1 className={`text-start mb-3 text-xl font-bold ${isAnimating ? "slide-out" : "slide-in"}`}>
          {siteConfig.name}
        </h1>
        <Form onSubmit={onSubmit} className="w-full">
          <Card className={`w-full bg-transparent backdrop-blur-md  rounded-lg p-6 w-full ${isAnimating ? "slide-out" : "slide-in"}`}>
            <CardHeader className="border-b pb-4">
              <h2 className="text-xl font-bold mx-3">
                {isLogin ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
              </h2>
            </CardHeader>
            <CardBody className="py-6">
              <div className="space-y-10">
                {/* Username */}
                <div className={`transition-all duration-300 ${!isLogin ? "opacity-100" : "opacity-0"}`}>
                  {!isLogin && (
                    <Input
                      isRequired
                      errorMessage="ต้องเป็นตัวอักษร (a-z) และตัวเลข (0-9) เท่านั้น"
                      isInvalid={!state.validateUsername.status && username !== ""}
                      label="Username"
                      startContent={emote.username}
                      labelPlacement="outside"
                      name="username"
                      value={username}
                      placeholder="กรอกชื่อผู้ใช้ของคุณ"
                      className="my-5"
                      onValueChange={(value) => {
                        setUsername(value);
                        updateStatus("validateUsername", state.validateUsername.regex.test(value));
                      }}
                    />
                  )}
                </div>
  
                {/* Email */}
                <Input
                  isRequired
                  errorMessage="ต้องมีตัวอักษร + @ + domain + .com หรือ .net เป็นต้น"
                  isInvalid={!state.validateEmail.status && email !== ""}
                  label="Email"
                  startContent={emote.email}
                  labelPlacement="outside"
                  name="email"
                  value={email}
                  className="my-5"
                  placeholder="กรอกอีเมลของคุณ"
                  onValueChange={(value) => {
                    setEmail(value);
                    updateStatus("validateEmail", state.validateEmail.regex.test(value));
                  }}
                />
  
                {/* Password */}
                <Input
                  isRequired
                  errorMessage="ต้องมีตัวอักษร (a-z), ตัวเลข (0-9), และอักขระพิเศษอย่างน้อยหนึ่งตัว"
                  isInvalid={!state.validatePassword.status && password !== ""}
                  label="Password"
                  startContent={emote.password}
                  labelPlacement="outside"
                  className="my-5"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="กรอกรหัสผ่านของคุณ"
                  onValueChange={(value) => {
                    setPassword(value);
                    updateStatus("validatePassword", state.validatePassword.regex.test(value));
                  }}
                />
  
                {/* Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-2">
                  <Button className="shadow-md" color="primary" type="submit">
                    {isLogin ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
                  </Button>
                  <Button color="primary" variant="light" onPress={toggleMode} type="button">
                    {isLogin ? "สมัครสมาชิก" : "มีสมาชิกอยู่แล้ว"}
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Form>
      </div>
    </div>
  </div>
  
  );
}
