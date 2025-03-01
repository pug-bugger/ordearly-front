import { BackgroundPattern } from "@/app/background-pattern";
import Nav from "@/components/nav-panel";

import InitPage from "@/pages/init-page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-12">
      <BackgroundPattern />
      <Nav />

      <InitPage />
    </main>
  );
}
