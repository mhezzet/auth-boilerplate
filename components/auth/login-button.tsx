"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ILoginButton extends ButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton: React.FC<ILoginButton> = ({ children, asChild, mode = "redirect", ...props }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};
