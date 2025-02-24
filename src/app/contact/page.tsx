'use client';

import { useState } from "react";

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="space-y-6">
          <p className="text-neutral-700 dark:text-neutral-300">
            Feel free to reach out if you&apos;d like to connect or discuss potential opportunities.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 
                  border border-neutral-200 dark:border-neutral-700
                  focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 
                  border border-neutral-200 dark:border-neutral-700
                  focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 
                  border border-neutral-200 dark:border-neutral-700
                  focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 rounded-lg">
                {error || 'Failed to send message'}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-6 py-3 bg-amber-200 dark:bg-neutral-800 rounded-lg 
                hover:bg-amber-300 dark:hover:bg-neutral-700 
                transition-colors font-medium
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              You can also reach me directly at:{' '}
              <a
                href="mailto:prongzachary@gmail.com"
                className="text-amber-600 dark:text-amber-400 hover:underline"
              >
                prongzachary@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 