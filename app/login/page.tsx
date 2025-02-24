"use client";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import React from "react";
import { Form } from "@heroui/form";
import { stat } from "fs";
import { emote } from "@/config/emote-svg";
export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
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
  const [submitted, setSubmitted] = React.useState<Record<
    string,
    FormDataEntryValue
  > | null>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data);
  };
  const updateStatus = (key: string | number, value: any) => {
    setState((prevState: any) => ({
      ...prevState,
      [key]: { ...prevState[key], status: value },
    }));
  };

  return (
    <div className="w-full grid grid-rows-2  grid-flow-col">
      <Card className="rounded-none rounded-l-lg p-2 w-[500px]">
        <CardHeader>สมัครสมาชิก</CardHeader>

        <CardBody>
          <Form className="w-full justify-items-start" onSubmit={onSubmit}>
            <Input
              isRequired
              errorMessage={
                <div className="text-start w-full">
                  ต้องเป็นตัวอักษร (a-z) และตัวเลข (0-9) เท่านั้น
                  ห้ามมีอักขระพิเศษและช่องว่าง
                </div>
              }
              isInvalid={!state.validateUsername.status && username !== ""}
              label="Username"
              startContent={emote.username}
              labelPlacement="outside"
              name="username"
              value={username}
              placeholder="กรอกชื่อผู้ใช้ของคุณ"
              onValueChange={(value) => (
                setUsername(value),
                updateStatus(
                  "validateUsername",
                  state.validateUsername.regex.test(value)
                )
              )}
            />
            <Input
              isRequired
              errorMessage={
                <div className="text-start w-full">
                  ต้องมีตัวอักษร (a-z), ตัวเลข (0-9),
                  และอักขระพิเศษอย่างน้อยหนึ่งตัว
                </div>
              }
              isInvalid={!state.validatePassword.status && password !== ""}
              label="Password"
              startContent={emote.password}
              labelPlacement="outside"
              name="password"
              value={password}
              type="password"
              placeholder="กรอกรหัสผ่านของคุณ"
              onValueChange={(value) => (
                setPassword(value),
                updateStatus(
                  "validatePassword",
                  state.validatePassword.regex.test(value)
                )
              )}
            />
            <Input
              isRequired
              errorMessage={
                <div className="text-start w-full">
                  ต้องมีตัวอักษร + @ + domain + .com หรือ .net เป็นต้น
                  ห้ามมีอักขระพิเศษที่ไม่ถูกต้อง
                </div>
              }
              isInvalid={!state.validateEmail.status && email !== ""}
              label="Email"
              startContent={emote.email}
              labelPlacement="outside"
              name="email"
              value={email}
              placeholder="กรอกอีเมลของคุณ"
              onValueChange={(value) => (
                setEmail(value),
                updateStatus(
                  "validateEmail",
                  state.validateEmail.regex.test(value)
                )
              )}
            />
          </Form>
        </CardBody>
      </Card>
      <Card className="rounded-none rounded-l-lg p-2 w-[500px] hidden" >
        <CardHeader>สมัครสมาชิก</CardHeader>

        <CardBody>
          <Form className="w-full justify-items-start" onSubmit={onSubmit}>
            <Input
              isRequired
              errorMessage={
                <div className="text-start w-full">
                  ต้องเป็นตัวอักษร (a-z) และตัวเลข (0-9) เท่านั้น
                  ห้ามมีอักขระพิเศษและช่องว่าง
                </div>
              }
              isInvalid={!state.validateUsername.status && username !== ""}
              label="Username"
              startContent={emote.username}
              labelPlacement="outside"
              name="username"
              value={username}
              placeholder="กรอกชื่อผู้ใช้ของคุณ"
              onValueChange={(value) => (
                setUsername(value),
                updateStatus(
                  "validateUsername",
                  state.validateUsername.regex.test(value)
                )
              )}
            />
            <Input
              isRequired
              errorMessage={
                <div className="text-start w-full">
                  ต้องมีตัวอักษร (a-z), ตัวเลข (0-9),
                  และอักขระพิเศษอย่างน้อยหนึ่งตัว
                </div>
              }
              isInvalid={!state.validatePassword.status && password !== ""}
              label="Password"
              startContent={emote.password}
              labelPlacement="outside"
              name="password"
              value={password}
              type="password"
              placeholder="กรอกรหัสผ่านของคุณ"
              onValueChange={(value) => (
                setPassword(value),
                updateStatus(
                  "validatePassword",
                  state.validatePassword.regex.test(value)
                )
              )}
            />
            <Input
              isRequired
              errorMessage={
                <div className="text-start w-full">
                  ต้องมีตัวอักษร + @ + domain + .com หรือ .net เป็นต้น
                  ห้ามมีอักขระพิเศษที่ไม่ถูกต้อง
                </div>
              }
              isInvalid={!state.validateEmail.status && email !== ""}
              label="Email"
              startContent={emote.email}
              labelPlacement="outside"
              name="email"
              value={email}
              placeholder="กรอกอีเมลของคุณ"
              onValueChange={(value) => (
                setEmail(value),
                updateStatus(
                  "validateEmail",
                  state.validateEmail.regex.test(value)
                )
              )}
            />
          </Form>
        </CardBody>
      </Card>
      <div className="col-span-4">
        <Button className="mt-6" color="primary" type="submit">
          สมัครสมาชิก
        </Button>
        <Button className="mx-2" color="primary" variant="light">
          มีสมาชิกอยู่แล้ว
        </Button>
      </div>
      <Card className="w-full rounded-none rounded-r-lg flex flex-col justify-center items-center text-center p-6 bg-gray-50">
        <CardHeader className="text-2xl font-bold">ยินดีต้อนรับ</CardHeader>
        <CardBody>
          <p className="text-gray-600">
            สำรวจความต้องการพัฒนาทักษะแรงงาน เพื่ออนาคตที่ดีกว่า
          </p>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
