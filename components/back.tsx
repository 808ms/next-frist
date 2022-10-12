import React from "react";
interface ContentProps {
children: React.ReactNode;
}

export default function Back({ children }: ContentProps) {
return (
    <main className=" bg-[url('/images/img-6.jpg')] min-h-screen bg-no-repeat bg-cover w-full">
    <div className="flex justify-center">
        <div className="text-left md:max-w-2xl sm:max-w-2xl text-gray-200">{children}</div>
    </div>
    </main>
);
}
