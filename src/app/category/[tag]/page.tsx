import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// APIs
import { queryAllPosts } from '@/services';

// Constants
import { ROUTES } from '@/constants';

// Components
import { Heading, FailToLoad, PostTableSkeleton } from '@/components';

// Models
import { SearchParams } from '@/models';

const PostTable = dynamic(() => import('../../../components/PostTable'), {
  loading: () => <PostTableSkeleton />,
});

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = params.tag;

  return {
    title: `Category: ${tag}`,
    description: `See all posts about ${tag}`,
    keywords: ['posts', tag],
    openGraph: {
      type: 'website',
      title: `Category: ${tag}`,
      description: `See all posts about ${tag}`,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { tag: string };
  searchParams: SearchParams;
}) {
  const postsResult = await queryAllPosts({ tag: params.tag, ...searchParams });
  const { total: totalPosts, errorMessage } = postsResult;

  if (errorMessage) {
    return <FailToLoad error={errorMessage} />;
  }

  return (
    <main>
      <Heading title={decodeURIComponent(params.tag)} description={`${totalPosts} Articles`} />
      <PostTable queryParams={{ tag: params.tag }} isFiltered={false} validateTags={[ROUTES.CATEGORY(params.tag)]} />
    </main>
  );
}
