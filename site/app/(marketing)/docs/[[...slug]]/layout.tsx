import { Container } from '@tabler/react';

export const metadata = {
  title: 'Documentation',
  template: '%s - Documentation',
  description: 'Get started with Tabler, the one of world’s most popular framework for building responsive, mobile-first dashboards.',
};

export default function DocsLayout({ children /*, meta = {}, pageProps*/ }) {
  return (
    <div className="border-bottom bg-white">
      <Container>{children}</Container>
    </div>
  );
}
