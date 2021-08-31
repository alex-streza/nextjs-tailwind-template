import { Main } from '@layouts/Main';
import { Meta } from '@layouts/Meta';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    />
  );
};

export default Index;
