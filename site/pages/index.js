import Footer from "../src/layout/footer/Footer";
import Header from "../src/layout/header/Header";
import Layout from "../src/layout/Layout";
import IndexPage from "../src/pages/IndexPage";

const Index = () => {
  return (
    <Layout noFooter noHeader>
      <Header dark/>
      <IndexPage />
      <Footer />
    </Layout>
  );
};
export default Index;
