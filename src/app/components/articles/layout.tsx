import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl">My Static Markdown Blog</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2024 My Blog
      </footer>
    </div>
  );
};

export default Layout;
