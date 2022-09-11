import React from "react";
interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <main className="pb-20 pt-10 pl-5 pr-5 bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
      <div className="flex justify-center">
        <div className="text-left md:max-w-2xl sm:max-w-2xl">{children}</div>
      </div>
    </main>
  );
}
