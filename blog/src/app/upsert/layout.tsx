import type { Metadata } from 'next';
import RouteGuard from '@/components/RouteGuard';

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
      <RouteGuard>
        {children}
      </RouteGuard>
    </div>
  );
}
