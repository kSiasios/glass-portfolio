import { ReactNode } from "react";

interface SkillContainerProps {
  children?: ReactNode;
}

const SkillContainer = (props: SkillContainerProps) => {
  return (
    <div className="w-28 h-28 flex items-center justify-center">
      {props.children}
    </div>
  );
};

export default SkillContainer;
