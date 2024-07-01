import { Outlet } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

export default function Layout() {
  return (
    <>
      <Head>
        <title>Fisand home page</title>
      </Head>
      <Outlet />
    </>
  )
}
