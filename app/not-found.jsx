import { Errormessage } from "@/components/error-message";

export const metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {

  return (
    <div className="h-full mt-[-64px] w-full">
      <Errormessage />
    </div>
  )
}