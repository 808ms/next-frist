import React from 'react';
interface ContentProps {
    children: React.ReactNode;
    } 
    
export default function Content({children}: ContentProps) {
    return (
        <main className="mb-20 mt-10 ml-5 mr-5">
            <div className="flex justify-center">
                <div className="text-left md:max-w-2xl sm:max-w-2xl">
                    {children}
                </div>
            </div>
        </main>
    )
    }