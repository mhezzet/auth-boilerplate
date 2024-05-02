import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface ISocial {}

export const Social: React.FC<ISocial> = ({}) => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" variant="outline" className="w-full">
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button size="lg" variant="outline" className="w-full">
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
