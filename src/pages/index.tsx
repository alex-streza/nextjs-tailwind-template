import { useRouter } from "next/router";
import { Meta } from "@layouts/Meta";
import React from "react";
import TextInput from "@components/inputs/TextInput";
import { Main } from "@layouts/Main";
import Button from "@components/button";

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    ></Main>
  );
};

export default Index;
