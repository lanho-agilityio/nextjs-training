import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard_LAYOUT'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>DASHBOARD_LAYOUT</div>
      {children}
    </div>
  );
}
