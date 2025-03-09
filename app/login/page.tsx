"use client"
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import React, { useEffect } from "react";
import { Form } from "@heroui/form";
import { emote } from "@/config/emote-svg";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import CryptoJS from 'crypto-js';
export default function LoginPage() {

useEffect(() => {
  localStorage.removeItem("token")

 
}, [])


  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);
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
      }, 300);
    }, 300);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (state.validateEmail.status && state.validatePassword.status && state.validateUsername && !isLogin) {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status == 200) {
        const data = await res.json();
          localStorage.setItem("token",JSON.stringify(data))
          router.push("/")
        
      } else if (res.status === 400) {
        addToast({
          title: "ล้มเหลว",
          description: "ชื่อผู้ใช้ หรือ อีเมลมีผู้ใช้งานแล้ว",
          color: "danger",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
      }
    }else if(state.validateEmail.status && state.validatePassword.status && isLogin){
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status == 200) {
        const data = await res.json();
     
           localStorage.setItem("token",JSON.stringify(data.token))

            const decrypt_token = CryptoJS.AES.decrypt(data.token, 'emp').toString(CryptoJS.enc.Utf8);
            if(JSON.parse(decrypt_token).role == "admin"){
                   router.push("/dashboard")
            }else{
                 router.push("/")
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
      }
    }
  };

  // Define CSS for card swap animation
  React.useEffect(() => {
    const style = document.createElement('style');
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
    <div className="w-[600px] flex justify-center items-center">
      <div className="w-full relative">
        <Form onSubmit={onSubmit} className="w-full">
          <Card 
            className={`rounded-none rounded-l-lg p-2 w-full 
              ${isAnimating ? 'slide-out' : 'slide-in'}`}
          >
            <CardHeader className="border-b pb-4">
              <h2 className="text-xl font-bold">
                {isLogin ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
              </h2>
            </CardHeader>
            <CardBody className="py-6">
              <div className="space-y-10">
                {/* Username field with transition */}
                <div 
                  className={`transition-all duration-300 
                    ${!isLogin ? ' opacity-100' : ' opacity-0'}`}
                >
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
                        updateStatus(
                          "validateUsername",
                          state.validateUsername.regex.test(value)
                        );
                      }}
                    />
                  )}
                </div>

                {/* Email field */}
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
                    updateStatus(
                      "validateEmail",
                      state.validateEmail.regex.test(value)
                    );
                  }}
                />

                {/* Password field */}
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
                    updateStatus(
                      "validatePassword",
                      state.validatePassword.regex.test(value)
                    );
                  }}
                />

                <div className="pt-4 flex flex-col sm:flex-row gap-2">
                  <Button 
                    className="shadow-md"
                    color="primary" 
                    type="submit"
                  >
                    {isLogin ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
                  </Button>
                  <Button
                    color="primary"
                    variant="light"
                    onClick={toggleMode}
                    type="button"
                  >
                    {isLogin ? "ยังไม่มีบัญชี? สมัครสมาชิก" : "มีสมาชิกอยู่แล้ว"}
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Form>
      </div>
    </div>
  );
}