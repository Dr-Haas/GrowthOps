import Footer2 from "../../src/layout/footer/Footer2";
import Header from "../../src/layout/header/Header";
import RtlLayout from "../../src/layout/rtl/Layout";
import IndexPage from "../../src/pages/IndexPage";

const Index = () => {
  return (
    <RtlLayout noFooter noHeader>
      <Header />
      <IndexPage />
      <Footer2 />
    </RtlLayout>
  );
};
export default Index;
