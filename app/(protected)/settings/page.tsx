"use client";
import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { NextPage } from "next";

const SettingsPage: NextPage = ({}) => {
  const user = useCurrentUser();

  return (
    <div className="bg-white p-20 rounded-xl">
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Button onClick={() => logout()}>Sign out</Button>
    </div>
  );
};

export default SettingsPage;
