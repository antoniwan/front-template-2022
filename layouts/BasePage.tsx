import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BasePageLayoutStyles = styled.div`
  .viewport {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .site-content {
    flex-grow: 1;
  }

  /* Full width page blocks */
  .full-width-container {
    position: relative;
    padding: 0 max(4vmin, 15px);
  }

  /* Centered content container blocks */
  .fixed-width-container {
    margin: 0 auto;
    max-width: var(--maxwidth, 1200px);
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1536px) {
  }
`;

export default function BasePage({ children }: { children: React.ReactNode }) {
  return (
    <BasePageLayoutStyles>
      <div className="viewport">
        <Header />
        <main className="site-content">{children}</main>
        <Footer />
      </div>
    </BasePageLayoutStyles>
  );
}
