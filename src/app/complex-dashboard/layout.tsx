import React from 'react';

type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
};

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: Props) {
  return (
    <div>
      {/* Main content area */}
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        {/* Sidebar for users and revenue */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        
        {/* Notifications section */}
        <div style={{ flex:1,display:'flex',}}>
          {notifications}
        </div>
      </div>
    </div>
  );
}
