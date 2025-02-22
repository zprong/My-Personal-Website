import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex gap-4 flex-col">
            <div className="px-2 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-lg w-fit uppercase font-bold">
              Software Engineer
            </div>
            <h1 className="text-6xl font-bold">Zachary Prong</h1>
            <p>I'm an engineer blahblahblah insert description here</p>
            <div className="flex gap-4">
              {/* TODO: Add resume download */}
              <button
                className="px-4 py-2 bg-amber-200 dark:bg-neutral-800 rounded-lg hover:bg-amber-300 dark:hover:bg-neutral-700 transition-colors"
              >
                Download Resume
              </button>
              <a href="/contact" className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap justify-start">
          Check out my:
          <div className="flex gap-4">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/linkedin.svg"
                alt="LinkedIn icon"
                width={24}
                height={24}
              />
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/github-mark.svg"
                alt="Github icon"
                width={24}
                height={24}
              />
            </a>
          </div>
        </footer >
      </div >
    </>
  );
}
