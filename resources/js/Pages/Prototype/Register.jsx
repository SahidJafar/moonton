import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { Head, Link } from "@inertiajs/react";
export default function Register() {
    return (
        <>
        <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        value="Fullname"
                                        forInput="fullname"
                                    />
                                    <TextInput
                                        id="fullname"
                                        type="text"
                                        name="fullname"
                                        variant="primary"
                                        placeholder="Your Fullname"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        value="Email Address"
                                        forInput="email"
                                    />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        variant="primary"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        value="Password"
                                        forInput="password"
                                    />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        variant="primary"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="submit" variant="primary">
                                    Sign Up
                                </Button>
                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
