import { Suspense } from 'react';
import { Box } from '@mui/material';

// Components
import { Heading, SignUpForm } from '@/components';

export default function SignUpPage() {
  return (
    <main>
      <Heading title="Sign up" description="Create your account here." />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '40px',
        }}
      >
        <Suspense fallback={<>Loading</>}>
          <SignUpForm />
        </Suspense>
      </Box>
    </main>
  );
}
