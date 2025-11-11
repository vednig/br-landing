import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <span className="text-sm font-semibold">BedRock</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-sm hover:underline">EN</button>
          <Link href="#contact" className="text-sm hover:underline">
            CONTACT US
          </Link>
          <button className="flex flex-col space-y-1">
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
          </button>
        </div>
      </header>

      <main className="relative px-6 pt-12">
        {/* Gradient blob */}
        <div
          className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-blue-400 via-purple-300 to-indigo-200 opacity-70 blur-3xl"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <div className="relative">
          <h1 className="max-w-4xl text-6xl font-light leading-tight tracking-tight text-balance">
            BedRock – The Best
            <br />
            Portable AI Code
            <br />
            Assistant
          </h1>

          <h2 className="mt-6 max-w-2xl text-2xl font-light text-gray-700 text-balance">
            Compatible with All IDEs. Anywhere. Anytime.
          </h2>

          <div className="mt-24 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
            <div className="max-w-md">
              <div className="flex gap-4">
                <Button className="rounded-full px-8 bg-black text-white hover:bg-gray-800">
                  Download BedRock
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-2 px-8 bg-transparent"
                >
                  Try Demo
                </Button>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-gray-600">
                A lightweight, floating window powered by advanced AI — giving
                you intelligent coding help wherever you work. No plugins. No
                setup. Just results.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm">EXPLORE</span>
              <span className="h-px w-12 bg-black"></span>
            </div>
          </div>

          <p className="mt-24 max-w-2xl text-sm leading-relaxed text-gray-600">
            From intelligent code generation to blazing-fast responses, BedRock
            combines flexibility and power into one portable experience.
          </p>
        </div>

        {/* Features Section */}
        <section className="mt-32 border-t border-gray-300 pt-20">
          <h2 className="text-5xl font-light leading-tight tracking-tight text-balance mb-16">
            Why BedRock is the
            <br />
            Top Choice for Developers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Advanced AI Code Assistance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get high-accuracy suggestions, instant explanations, and
                real-time debugging — all powered by top-tier AI models trained
                for code understanding.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Portable Floating Window
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Keep BedRock on any screen or workspace. Use it alongside any
                IDE without switching tabs or disrupting your workflow.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Universal IDE Compatibility
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamlessly integrates with VS Code, JetBrains, Sublime, Atom,
                and more. Truly universal support for all developers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Blazing-Fast Response Times
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Optimized for instant feedback so you can keep coding without
                lag or distraction.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Offline & Hybrid Mode
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Work uninterrupted with BedRock's hybrid AI model — productivity
                continues even when you're offline.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mt-32 border-t border-gray-300 pt-20">
          <h2 className="text-5xl font-light leading-tight tracking-tight text-balance mb-8">
            A Smarter Alternative to
            <br />
            Copilot, Cursor & Codex
          </h2>
          <p className="max-w-2xl text-gray-600 text-sm leading-relaxed">
            Tired of platform lock-ins or rigid integrations? BedRock offers the
            same intelligence — and more — in a truly portable, standalone
            assistant. No subscription traps. No IDE boundaries. Just the best
            AI coding experience available.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mt-32 border-t border-gray-300 pt-20">
          <h2 className="text-4xl font-light leading-tight tracking-tight mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8 max-w-3xl">
            <div>
              <h3 className="font-semibold mb-2">
                Is BedRock compatible with my IDE?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! BedRock works with all major IDEs — including VS Code,
                JetBrains, Sublime, Atom, Notepad++, and more.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                How is BedRock different from GitHub Copilot or Cursor?
              </h3>
              <p className="text-gray-600 text-sm">
                Unlike Copilot or Cursor, BedRock is completely portable and
                IDE-agnostic. It runs in a floating window and can assist you
                across any coding environment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Does BedRock require an internet connection?
              </h3>
              <p className="text-gray-600 text-sm">
                No. BedRock includes offline and hybrid modes so you can stay
                productive anywhere.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is BedRock free to use?</h3>
              <p className="text-gray-600 text-sm">
                Yes! BedRock offers a free version with premium features
                available for professionals and teams.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 border-t border-gray-300 pt-20 pb-20">
          <h2 className="text-5xl font-light leading-tight tracking-tight text-balance mb-8">
            Download BedRock Today
          </h2>
          <p className="max-w-2xl text-gray-600 text-sm leading-relaxed mb-12">
            Join thousands of developers who have switched to BedRock — the most
            flexible and powerful AI coding assistant available. Experience
            smarter, faster, and more creative coding.
          </p>
          <div className="flex gap-4">
            <Button className="rounded-full px-8 bg-black text-white hover:bg-gray-800">
              Download for Free
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 px-8 bg-transparent"
            >
              See BedRock in Action
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 px-6 py-12 mt-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <p className="text-sm text-gray-600">
            © 2025 BedRock Technologies. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link href="#privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
            <Link href="#support" className="hover:underline">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
