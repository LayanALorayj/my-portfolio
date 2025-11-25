import MotionWrapper from "./MotionWrapper";

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: Props) {
  return (
    <section id={id} className="min-h-screen flex justify-center items-center py-12">
      <MotionWrapper>{children}</MotionWrapper>
    </section>
  );
}