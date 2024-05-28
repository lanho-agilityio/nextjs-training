import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// Components
import { Heading } from '@/components';

const SignUpForm = dynamic(() => import('../../components/SignUpForm'));

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Create your account',
};

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
        <SignUpForm />
      </Box>
    </main>
  );
}
