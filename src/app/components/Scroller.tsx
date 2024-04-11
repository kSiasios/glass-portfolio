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
    <div className={`overflow-x-hidden  ${className} scroller-container`}>
      <div
        className="group inline-flex gap-10 animate-scroller scroller h-fit"
        style={{
          animationDuration: `${childrenArray.length * 4}s`,
        }}
      >
        {children}
        {/* <div className="inline-flex gap-10 group-hover:hidden group-focus-within:hidden"> */}
        {children}
        {children}
        {children}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Scroller;
