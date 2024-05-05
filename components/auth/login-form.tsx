"use client";
import { login } from "@/actions/login";
import { CardContainer } from "@/components/auth/card-container";
import { FormErrors } from "@/components/form-errors";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface ILoginForm {}

export const LoginForm: React.FC<ILoginForm> = ({}) => {
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const searchParams = useSearchParams();
  const urlLinAccountError =
    searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider!" : "";

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    shouldUnregister: false,
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setErrorMessage("");
    setSuccessMessage("");

    startTransition(async () => {
      const { error, success, twoFactor, email, password } = await login(values);

      if (error) {
        form.reset();
        setErrorMessage(error);
      }

      if (success) {
        form.reset();
        setSuccessMessage(success);
      }

      if (email) {
        form.setValue("email", email);
      }

      if (password) {
        form.setValue("password", password);
      }

      if (twoFactor) {
        setShowTwoFactor(true);
      }
    });
  };

  return (
    <CardContainer
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="123456" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  disabled={isPending}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="john.doe@example.com" type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  disabled={isPending}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="******" type="password" />
                      </FormControl>
                      <Button variant="link" asChild size="sm" className="px-0 font-normal">
                        <Link href="/auth/reset">Forgot password?</Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <FormErrors message={errorMessage || urlLinAccountError} />
            <FormSuccess message={successMessage} />
            <Button disabled={isPending} type="submit" className="w-full">
              {showTwoFactor ? "Confirm" : "Login"}
            </Button>
          </div>
        </form>
      </Form>
    </CardContainer>
  );
};
