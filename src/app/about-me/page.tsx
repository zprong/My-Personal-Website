export default function About() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Background</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              I&apos;m a software engineer passionate about building applications that enrich
              people&apos;s daily lives.
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
              <li className="text-neutral-700 dark:text-neutral-300">
                As a growth engineer, I&apos;ve conducted (and shipped!) 40+ A/B tests that have improved user engagement and retention.
              </li>
              <li className="text-neutral-700 dark:text-neutral-300">
                As a web engineer, I&apos;ve shipped features to hundreds of thousands of users with a heavy focus on accessibility, and sped up developer velocity via contributions to our in-house design systems
              </li>
              <li className="text-neutral-700 dark:text-neutral-300">
                As a Tech Lead, I&apos;ve led a team of 5+ engineers to ship many medium-large size projects, written tech docs, led code reviews, and mentored junior engineers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Specializations</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              I specialize in growing products through data-driven decision making. I thrive in environments that enable me to do any of the following:
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
              <li>Conduct lots of A/B tests (both large and small) to improve user engagement and retention</li>
              <li>Work with others: a cross-functional team to brainstorm new features and fellow engineers to bring those features to life</li>
              <li>Take strong ownership in building products from 0 to 1</li>
            </ul>
            <p className="text-neutral-700 dark:text-neutral-300 py-4">
              If you're interested in working with me, <a href="/contact" className="text-amber-500 hover:underline hover:underline-offset-4">send a message my way</a>!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                <h3 className="font-bold mb-2">Frontend</h3>
                <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Next.js</li>
                </ul>
              </div>

              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                <h3 className="font-bold mb-2">Backend</h3>
                <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                </ul>
              </div>

              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                <h3 className="font-bold mb-2">Tools</h3>
                <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
                  <li>Git</li>
                  <li>CI/CD</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 