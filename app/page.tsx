import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import IndexPage from '@/components/metaData/Head';
import Main from '@/components/ui/Main';

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}
