import Head from 'next/head'
import { getStortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

export async function getStaticProps() {
  const allPostsData = getStortedPostsData()
  return { props: { allPostsData } }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <Navbar />
      <div className="container mx-auto my-4">
        <section className="text-gray-700">
          <p>Hi, I'm Toru.</p>
        </section>
        <Menu />
        <Gosso />
        <section>
          <div
            class="relative block  bg-red-900 text-white w-16
             transform -translate-x-14 hover:translate-x-0 transition"
          >
            <div className="absolute top-0 right-0">●</div>
            <div>foo</div>
            <div>bar</div>
          </div>
        </section>
        <section className="my-4 font-light">
          <h2 className="font-normal text-xl font-semibold">Blogs</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="my-4">
                <Link href={`/posts/${id}`}>
                  <a className="hover:underline">{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

const Navbar = () => (
  <div className="flex mx-0 my-0 px-4 py-4 font-sans text-2xl text-gray-800 border-b">
    Toru Furukawa
  </div>
)

const Menu = () => {
  const [classes, setClasses] = useState('block bg-gray-100 p-2 w-16')
  return (
    <section>
      <div
        class={classes}
        onClick={() => {
          setClasses(classes + ' w-32 transition')
        }}
      >
        Click
      </div>
    </section>
  )
}

const Gosso = () => {
  const [isOpen, open] = useState(false)
  return (
    <div className="block my-2">
      <button
        onClick={() => {
          open(!isOpen)
        }}
      >
        ●
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div>content</div>
      </Transition>
    </div>
  )
}
