import Image from 'next/image';
import { Box } from '@mui/material';

// APIs
import { queryPostDetail } from '@/services';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { AuthorCard, Heading, Link, Paragraph, PostCardDescription, Tag } from '@/components';

// Models
import { Author } from '@/models';

export default async function DetailPostPage({ params }: { params: { id: string } }) {
  const { data } = await queryPostDetail(params.id);

  const { title, tag, user, imageBase64, content, updatedAt } = data;

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
          <Tag tag={tag} />
          <Heading title={title} />
          <PostCardDescription author={user || ({} as Author)} updatedAt={updatedAt} isDetailed={true} />
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
              sizes="(max-width: 768px) 30vw, 33vw"
            />
          </Box>
        )}
        <Paragraph content={content} />
        <Link href={ROUTES.POSTS} _style={{ color: COLORS.POST_LINK }}>
          ← View all post
        </Link>
        <AuthorCard author={user || ({} as Author)} />
      </Box>
    </main>
  );
}
