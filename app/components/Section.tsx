import MotionWrapper from "./MotionWrapper";

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: Props) {
  return (
    <section id={id} className="h-screen flex justify-center items-center">
      <MotionWrapper>{children}</MotionWrapper>
    </section>
  );
}
