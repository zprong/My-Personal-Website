import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start items-center sm:items-start">
        <article className="flex gap-4 flex-col">
          <header>
            <div className="flex flex-wrap gap-3">
              <div className="px-2 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-lg w-fit uppercase font-bold">
                Growth Engineer
              </div>
              <div className="px-2 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-lg w-fit uppercase font-bold">
                Web Engineer
              </div>
              <div className="px-2 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-lg w-fit uppercase font-bold">
                Tech Lead
              </div>
            </div>
            <h1 className="text-6xl font-bold">Zachary Prong</h1>
          </header>
          <section>
            <p>I&apos;m an engineer that loves to collaborate and build products that positively impact people&apos;s daily lives.</p>
            <p>Learn more about me <a href="/about-me" className="text-amber-500 hover:underline hover:underline-offset-4">here</a>.</p>
          </section>
          <div className="flex gap-4">
            <a
              href="/api/download"
              className="inline-flex items-center justify-center px-6 py-3 
                border border-amber-200 dark:border-neutral-700 rounded-lg 
                bg-amber-200 dark:bg-amber-600 
                hover:bg-amber-100 dark:hover:bg-amber-500 
                transition-colors font-medium"
              role="button"
            >
              Download Resume
            </a>
            <Link href="/contact" className="inline-flex items-center px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
              Contact Me
            </Link>
          </div>
        </article>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap justify-start">
        Check out my:
        <div className="flex gap-4">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/zachary-prong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="LinkedIn icon"
              className="dark:invert"
              width={24}
              height={24}
            />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/zprong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github-mark.svg"
              alt="Github icon"
              className="dark:invert"
              width={24}
              height={24}
            />
          </a>
        </div>
      </footer >
    </div >
  );
}
