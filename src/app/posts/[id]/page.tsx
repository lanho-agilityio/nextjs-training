import Image from 'next/image';
import { Box } from '@mui/material';

// Constants
import { COLORS, MOCK_POST, ROUTES } from '@/constants';

// Components
import { AuthorCard, Heading, Link, Paragraph, PostCardDescription, Tag } from '@/components';

export default function DetailPostPage({ params }: { params: { id: string } }) {
  const post = MOCK_POST;

  const { title, tag, author, imageBase64, content, updatedAt } = post;

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
          <Heading title={`${title} - ${params.id}`} />
          <PostCardDescription author={author} updatedAt={updatedAt} isDetailed={true} />
        </Box>
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
        <Paragraph content={content} />
        <Link href={ROUTES.HOME} _style={{ color: COLORS.POST_LINK }}>
          ← View all post
        </Link>
        <AuthorCard author={author} />
      </Box>
    </main>
  );
}
