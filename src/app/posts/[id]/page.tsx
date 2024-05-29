import { Metadata } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Box } from '@mui/material';

// APIs
import { queryPostDetail } from '@/services';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { AuthorCard, Heading, Link, Paragraph, Category, FailToLoad } from '@/components';

const PostCardDescription = dynamic(() => import('../../../components/PostCard/PostCardDescription'), { ssr: false });

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  const response = await queryPostDetail(id);

  if (response.data) {
    const { title } = response.data;
    return {
      title: `Post: ${title}`,
      description: `View detail about ${title}`,
    };
  }
  return {
    title: `PostId: ${id}`,
    description: `View detail about post with id ${id}`,
  };
}

export default async function DetailPostPage({ params }: { params: { id: string } }) {
  const { data, errorMessage } = await queryPostDetail(params.id);

  if (!data) {
    notFound();
  }

  const { title, tag, user, imageBase64, content, updatedAt, id } = data;

  if (errorMessage) {
    return <FailToLoad error={errorMessage} />;
  }

  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '762px',
          }}
        >
          <Category tag={tag} />
          <Heading title={title} />
          <PostCardDescription postId={id} author={user} updatedAt={updatedAt} isDetailed={true} />
        </Box>
        {imageBase64 && (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '1024px',
              height: { xs: '240px', sm: '432px', md: '576px' },
            }}
          >
            <Image
              alt={title}
              src={imageBase64}
              fill
              style={{ borderRadius: '6px' }}
              sizes="(max-width: 984px) 30vw, 33vw"
            />
          </Box>
        )}
        <Paragraph content={content} />
        <Link aria-label="Archive" href={ROUTES.ARCHIVE} _style={{ color: COLORS.POST_LINK }}>
          ← View all post
        </Link>
        <AuthorCard author={user} />
      </Box>
    </main>
  );
}
