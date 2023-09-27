import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upsert',
  description: 'UPSERT_LAYOUT'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>UPSERT_LAYOUT</div>
      {children}
    </div>
  );
}
