"use client"

import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {

    const { push } = useRouter();

    return (
        <main className="bg-[#f7f9fa] w-full min-h-screen flex justify-center items-center">
            <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary py-12 px-[72px]">
                <Image
                    src="/images/logo-admin.svg"
                    alt="Logo Admin"
                    width={304}
                    height={51}
                    className="mx-auto" />
                <p className="opacity-50 text-sm text-center mb-9"> Enter your credintials to acces the dashboard</p>


                <div className="input-group-admin mb-5">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="please type your email"
                        className="rounded-lg"
                    />
                </div>
                <div className="input-group-admin mb-12">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*****************"
                        className="rounded-lg"
                    />
                </div>
                <Button className="w-full rounded-lg! mb-8" onClick={() => push("/admin/products")}>
                    Sign In
                </Button>
            </div>
        </main >
    )
};

export default LoginPage;