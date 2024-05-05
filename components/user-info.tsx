import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExtendedUser } from "@/types";
import { Badge } from "@/components/ui/badge";

interface IUserInfo {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo: React.FC<IUserInfo> = ({ label, user }) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader className="text-2xl font-semibold text-center">
        <p>{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-md px-1">{user?.id}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-md px-1">{user?.name}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">ُEmail</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-md px-1">{user?.email}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-md px-1">{user?.role}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "Off"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
