import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GuestLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                        <Link href={'/'} className="flex items-center gap-2 font-bold">
                            {process.env['NEXT_PUBLIC_APP_NAME']}
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">
                            {children}
                        </div>
                    </div>
                </div>
                <div className="relative hidden bg-muted lg:block">
                    <Image
                        width={800}
                        height={800}
                        src={'/assets/login_image_placeholder.png'}
                        alt="Image"
                        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </>
    )
}
