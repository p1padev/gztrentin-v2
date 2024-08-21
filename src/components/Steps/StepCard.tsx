export default function StepCard({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  styles = styles ?? '';
  const cardStyles =
    'flex-1 h-full w-full flex flex-col max-w-4xl justify-center ' + styles;
  return <div className={cardStyles}>{children}</div>;
}
