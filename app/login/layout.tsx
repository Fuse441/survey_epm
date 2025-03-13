export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full ">
      <div className="inline-block text-center justify-center">{children}</div>
    </section>
  );
}
