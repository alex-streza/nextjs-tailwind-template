import NavBar from "@components/navigation";
import { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <NavBar />
      <div className="mt-20 py-5 text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
