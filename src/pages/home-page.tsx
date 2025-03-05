import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <section className="fixed top-24 inset-x-4 h-16 py-24 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">_Ordearly is awesome</h1>
        <p className="text-2xl text-muted-foreground">
          App to help you manage your orders and customers aaand suppliers
          easily!
        </p>
      </section>

      <div className="relative top-64 inset-x-4 h-16 py-24  flex gap-6 items-center justify-center">
        <Button variant="secondary">Learn More</Button>
        <Button>Get Started</Button>
      </div>
    </>
  );
}
