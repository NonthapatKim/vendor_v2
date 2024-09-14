// ใน Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <img src="/bg-b.png" className="bg-pattern-left" alt="Pattern Left" />
      <img src="/bg-b.png" className="bg-pattern-right" alt="Pattern Right" />
      <div className="layout-container">
        {children}
      </div>
    </>
  );
};

export default Layout;
