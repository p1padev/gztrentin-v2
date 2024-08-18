export default function StepCard({ children }: React.PropsWithChildren) {
  return (
    <div className="flex-1 h-full w-full flex flex-col max-w-4xl">
      {children}
    </div>
  );
}
