import { Outlet } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

// eslint-disable-next-line import/no-default-export
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
