'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import FlexBox from './components/FlexBox';
import TextField from './components/TextField';
import Image from 'next/image';
// import Button from 'components/Button';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default function Home() {
  const { user, error, isLoading } = useUser();
  // const router = useRouter();

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const request = new Request(
  //     'https://devecom-80zu255o.b4a.run/auth/signup',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         email: '2motor@gmail.com',
  //         name: {
  //           firstName: 'Tata',
  //           lastName: 'Motors',
  //         },
  //         password: 'Motors@123',
  //       }),
  //       headers: {
  //         'X-Parse-Application-Id': 'BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f', // This is the fake app's application id
  //         'X-Parse-REST-API-Key': 'swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w', // This is the fake app's readonly master key
  //         'X-Parse-Revocable-Session': '1',
  //       },
  //     }
  //   );
  //   const response1 = await fetch(request);
  //   console.log(response1.status, 'response1');
  // };

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
      <TextField as="h1">Coming Soon </TextField>
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
      {/*

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
      */}
    </FlexBox>
  );
}
