'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Box } from '@mui/material';

// Constants
import { MOCK_POSTS_LIST } from '@/constants';

// Components
import { PostList, Heading, PostFilter, Pagination } from '@/components';

export default function ArchivePage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const updateSearchParams = (params: URLSearchParams) => {
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <main>
      <Heading title="Archive" description="See all posts we have ever written." />
      <Box sx={{ marginTop: '40px' }}>
        <PostFilter searchParams={searchParams} updateSearchParams={updateSearchParams} />
        <PostList posts={MOCK_POSTS_LIST} isArchived={true} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <Pagination hasNext={true} hasPrevious={true}/>
        </Box>
      </Box>
    </main>
  );
}
