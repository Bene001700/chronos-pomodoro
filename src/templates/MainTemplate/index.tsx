import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Logo />
      <Menu />

      {children}

      <Footer />
    </>
  );
}
