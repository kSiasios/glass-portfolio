import { Children, ReactNode } from "react";

interface ScrollerProps {
  children: ReactNode;
  className?: string;
}

const Scroller = ({ children, className }: ScrollerProps) => {
  // console.log(children);

  const childrenArray = [];

  Children.forEach(children, (child, index) => {
    childrenArray.push(child);
  });

  //   let childrenWidth = (112 + 40) * Object.values(children).length;

  return (
    <div
      className={`overflow-x-visible ${className} scroller-container w-full`}
    >
      <div
        className="group inline-flex justify-evenly gap-10 sm:animate-scroller scroller h-fit px-2"
        style={{
          animationDuration: `${childrenArray.length * 4}s`,
        }}
      >
        {children}
        <div className="gap-10 hidden sm:inline-flex">
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Scroller;
