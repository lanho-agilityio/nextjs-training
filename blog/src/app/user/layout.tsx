import type { Metadata } from 'next';
import AuthGuard from '@/components/AuthGuard';

export const metadata: Metadata = {
  title: 'Upsert',
  description: 'UPSERT_LAYOUT'
};

export default function UpsertLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AuthGuard>{children}</AuthGuard>
    </div>
  );
}
