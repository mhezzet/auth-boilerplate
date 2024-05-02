import { LoginForm } from "@/components/auth/login-form";
import { db } from "@/lib/db";
import { NextPage } from "next";

const LoginPage: NextPage = ({}) => {
  return <LoginForm />;
};

export default LoginPage;
