import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [session, loading] = useSession()
  console.log('session', session)
  return (
    <>
      {loading && <div>loading...</div>}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email}
          <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </>
  )
}
