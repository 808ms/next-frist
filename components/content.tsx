import React from "react";
interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <main className="pl-5 pr-5 bg-[url('/images/img-home.jpg')] min-h-screen bg-no-repeat bg-cover">
      <div className="flex justify-center">
        <div className="text-left md:max-w-2xl sm:max-w-2xl text-gray-200">{children}</div>
      </div>
      {/* <div className="pl-5 pr-5 bg-[url('/images/img-6.jpg')] min-h-screen bg-no-repeat bg-cover">

      </div> */}
    </main>
  );
}
