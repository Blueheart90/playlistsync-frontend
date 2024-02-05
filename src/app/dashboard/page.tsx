'use client'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  console.log(session)
  console.log(session?.user?.accessToken)

  const getCats = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/protected`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.accessToken}`
        }
      }
    )
    const data = await res.json()
    console.log(data)
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={getCats} className=" px-2 py-4 bg-white text-black">
        Get Cats
      </button>
      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  )
}
export default Dashboard
