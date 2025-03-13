export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center gap-4">
      <div className="text-center justify-center w-full">{children}</div>
    </section>
  );
}
