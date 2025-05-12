import { ComponentProps, ReactNode, useId, createContext } from "react";

import { Chip, ChipProps } from "@/components/ui";
import { useContext, useCSSVariable, useMediaQuery } from "@/hooks";
import cn from "@/utils/cn";

type SectionCtx = {
  titleId: string;
  titleClassName: string;
};

const SectionContext = createContext<SectionCtx | undefined>(undefined);

export type SectionProps = ComponentProps<"section">;
type SubTitleProps = ChipProps;

type TitleProps = Omit<ComponentProps<"h2">, "children"> & {
  children: ((props: SectionCtx) => ReactNode) | ReactNode;
};

type ContentProps = Omit<ComponentProps<"div">, "children"> & {
  children: ((props: { contentClassName: string }) => ReactNode) | ReactNode;
};

function Root({ className, ...props }: SectionProps) {
  const titleId = useId();
  const titleClassName = "text-title w-full lg:w-3/4 xl:w-1/2";

  return (
    <SectionContext.Provider value={{ titleId, titleClassName }}>
      <section
        {...props}
        aria-labelledby={titleId}
        className={cn("col-content py-20", className)}
      />
    </SectionContext.Provider>
  );
}

function SubTitle(props: SubTitleProps) {
  const md = useCSSVariable("--breakpoint-md");
  const isBelowMd = useMediaQuery(`(width < ${md})`);

  return (
    <Chip
      aria-hidden
      bordered
      size={isBelowMd ? "small" : "medium"}
      {...props}
      className={cn("text-font mb-2.5", props.className)}
    />
  );
}

function Title({ children, className, ...props }: TitleProps) {
  const { titleId, titleClassName } = useContext(SectionContext);

  if (typeof children === "function") {
    return children({ titleId, titleClassName });
  }

  return (
    <h2
      {...props}
      id={titleId}
      className={cn("title-font mb-2.5", titleClassName, className)}
    >
      {children}
    </h2>
  );
}

function Content({ children, className, ...props }: ContentProps) {
  const contentClassName = "mt-10 md:mt-14";

  if (typeof children === "function") {
    return children({ contentClassName });
  }

  return (
    <div {...props} className={cn(contentClassName, className)}>
      {children}
    </div>
  );
}

const Section = {
  SubTitle,
  Title,
  Content,
  Root,
};

export default Section;
