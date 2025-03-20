import LoginForm from "@/app/(guest)/_login_form";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: `${process.env['NEXT_PUBLIC_APP_NAME']} | Login`,
    description: "Login page description here...",
};
export default function LoginPage() {
    return (
       <>
           <LoginForm />
       </>
    )
}
