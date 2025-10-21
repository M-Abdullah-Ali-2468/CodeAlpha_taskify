import React from "react";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col">
        <header className="border-b p-4">
            <h1 className="text-2xl font-bold">Taskify</h1>
        </header>
        <main className="flex-grow flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Outlet>
                    
                </Outlet>
            </div>
        </main> 
    </div>
  );
}