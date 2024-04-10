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
      className={`overflow-x-hidden overflow-y-visible ${className} scroller-container`}
    >
      <div
        className="overflow-y-visible inline-flex gap-10 animate-scroller scroller h-fit"
        style={{
          animationDuration: `${childrenArray.length * 2}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default Scroller;
