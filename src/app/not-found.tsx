
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full space-y-6 text-center">
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 Page Not Found</h1>
                    <p className="text-gray-500">Sorry, we couldn&#x27;t find the page you&#x27;re looking for.</p>
                </div>
               <Button asChild size="lg">
                   <Link
                       href={'/'}
                       prefetch={false}
                   >
                       Return to website
                   </Link>
               </Button>
            </div>
        </div>
    )
}
