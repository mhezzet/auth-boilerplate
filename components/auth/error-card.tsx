import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { AuthCardHeader } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { CardContainer } from "./card-container";

interface IErrorCard {}

export const ErrorCard: React.FC<IErrorCard> = ({}) => {
  return (
    <CardContainer
      headerLabel="Oops something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="text-center">⚠️</div>
    </CardContainer>
  );
};
