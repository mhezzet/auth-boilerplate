import { db } from "@/lib/db";
import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: NextPage<Props> = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayout;