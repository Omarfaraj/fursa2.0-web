import Footer from './Footer';
import MetaTags from './Metatags';

const Layout = ({ children }) => {
  return (
    <>
      <MetaTags/>
      {/* <SideBar /> */}
      <main className='container'>{children}</main>
      {/*<Footer />*/}
    </>
  )
}

export default Layout
