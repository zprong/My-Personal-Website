export default function About() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Background</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              {/* Add your background story here */}
              I&apos;m a software engineer passionate about building applications that enrich people&apos;s daily lives.
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
                  {/* Add more skills */}
                </ul>
              </div>

              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                <h3 className="font-bold mb-2">Backend</h3>
                <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>SQL</li>
                  {/* Add more skills */}
                </ul>
              </div>

              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                <h3 className="font-bold mb-2">Tools</h3>
                <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  {/* Add more tools */}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Interests</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              {/* Add your interests here */}
              Outside of coding, I enjoy...
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 