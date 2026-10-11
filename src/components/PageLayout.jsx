import SectionTitle from './SectionTitle';

const PageLayout = ({ eyebrow, title, description, children }) => {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-5xl px-6 py-12 md:px-8 md:py-16">
      <SectionTitle as="h1" eyebrow={eyebrow} title={title} subtitle={description} />
      {children}
    </main>
  );
};

export default PageLayout;
