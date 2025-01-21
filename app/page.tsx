import Banner from './components/Banner/Banner';
import Aboutus from './components/Aboutus/Aboutus';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/Buyers';
import Universities from './components/Universities/Universities';
import Testimonials from './components/Testimonials/Testimonials';
import Articles from './components/Articles/Articles';
import Provide from './components/Provide/Provider';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';


export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Provide left={false} />
      <Provide left={true} />
      <Universities />
      <Testimonials />
      <Articles />
      {/* <Buyers /> */}
      {/* <Why /> */}
      {/* <Network /> */}
      {/* <Clientsay /> */}
      {/* <Newsletter /> */}
    </main>
  )
}
