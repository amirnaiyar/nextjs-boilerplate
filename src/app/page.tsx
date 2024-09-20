'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import FlexBox from './components/FlexBox';
import TextField from './components/TextField';
import Image from 'next/image';
import Button from 'components/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <FlexBox
      height="100vh"
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <TextField as="h1">Coming Soon Cricket Australia</TextField>
      {user && (
        <div>
          <Image
            loader={() => `${user?.picture}`}
            src={`${user?.picture}`}
            width={100}
            height={100}
            alt={user.name || ''}
          />
          <TextField as="h2">{user.name}</TextField>
          <TextField as="p">{user.email}</TextField>
        </div>
      )}
      <FlexBox flexDirection="column">
        {!user ? (
          <Button
            onClick={() => router.push('/api/auth/login')}
            colorVariant="whiteFilled"
            width={'50px'}
            height={'40px'}
            name="Login"
          />
        ) : (
          <Button
            onClick={() => router.push('/api/auth/logout')}
            colorVariant="whiteFilled"
            width={'50px'}
            height={'40px'}
            name="Logout"
          />
        )}
      </FlexBox>
    </FlexBox>
  );
}
