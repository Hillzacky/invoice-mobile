import Head from 'next/head'
import Navbar from '@app/components/navbar'
import '../../public/assets/css/style.css'

export default function Header(args) {
    return (
      <>
        <Head>
          <title>{args.title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          //##<link rel="stylesheet" href="/assets/css/style.css" />
        </Head>
        <Navbar />
      </>
    )
  }
