import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  {
    title: "Knowledge Maps",
    description:
      "Organize product briefs, research, and meeting notes in one connected graph that evolves with your team.",
  },
  {
    title: "Momentum Tracking",
    description:
      "Surface weekly highlights, blockers, and upcoming launches with zero manual formatting.",
  },
  {
    title: "Pulse Reports",
    description:
      "Auto-generate executive-ready recaps that capture the signal, not the noise, every Friday morning.",
  },
];

const timeline = [
  {
    title: "Capture",
    summary:
      "Import docs, recordings, and snippets from the tools you already use—Slack, Figma, Notion, and more.",
  },
  {
    title: "Curate",
    summary:
      "Tag insights, connect related work, and spin up workspaces that keep stakeholders aligned.",
  },
  {
    title: "Communicate",
    summary:
      "Publish living updates that balance context and brevity so decisions move faster.",
  },
];

const testimonials = [
  {
    quote:
      "KK Workspace gives us a single source of truth for go-to-market plans. Our weekly reviews dropped from 90 minutes to 25.",
    name: "Zoë Ramirez",
    role: "VP Product, LumaGrid",
  },
  {
    quote:
      "I forward the pulse report every Friday. Leadership stays in sync, and my team gets their Fridays back.",
    name: "Marco Bennett",
    role: "Head of Ops, Fleetly",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_rgba(15,23,42,0))]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
          <nav className="flex items-center justify-between text-sm text-slate-300">
            <Link href="#" className="flex items-center gap-3 text-slate-100">
              <Image
                src="/kk-mark.svg"
                alt="KK Workspace"
                width={36}
                height={36}
                priority
              />
              <span className="text-base font-semibold tracking-wide">KK Workspace</span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link href="#features" className="transition hover:text-sky-300">
                Features
              </Link>
              <Link href="#workflow" className="transition hover:text-sky-300">
                Workflow
              </Link>
              <Link href="#testimonials" className="transition hover:text-sky-300">
                Customers
              </Link>
              <Link href="#pricing" className="transition hover:text-sky-300">
                Pricing
              </Link>
            </div>
            <Link
              href="#request-demo"
              className="hidden rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-sky-400 hover:bg-sky-400/10 md:block"
            >
              Request Demo
            </Link>
          </nav>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end">
            <div className="flex flex-1 flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-sky-300">
                Curate Knowledge Faster
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                The command center for teams who learn weekly and ship constantly.
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                KK Workspace keeps research, strategy, and delivery aligned. Consolidate threads, synthesize insights, and broadcast outcomes—without adding another status meeting.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#request-demo"
                  className="flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Launch a shared hub
                </Link>
                <Link
                  href="#explore"
                  className="flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
                >
                  Explore playbook
                </Link>
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
                <div>
                  <dt className="text-slate-400">Teams onboarded</dt>
                  <dd className="mt-1 text-2xl font-semibold text-slate-50">420+</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Avg. time saved</dt>
                  <dd className="mt-1 text-2xl font-semibold text-slate-50">7.5 hrs/week</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Integrations</dt>
                  <dd className="mt-1 text-2xl font-semibold text-slate-50">30+</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Customer NPS</dt>
                  <dd className="mt-1 text-2xl font-semibold text-slate-50">68</dd>
                </div>
              </dl>
            </div>
            <div className="relative flex flex-1 justify-center">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-sky-400/20 blur-3xl" />
              <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h2 className="text-lg font-semibold text-slate-100">Weekly Narrative</h2>
                <p className="mt-2 text-sm text-slate-300">
                  &ldquo;Shipment velocity is on track. Beta cohort feedback highlights onboarding friction&mdash;the activation squad is already iterating on a clearer progress checklist.&rdquo;
                </p>
                <div className="mt-6 grid gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Focus Signals
                    </p>
                    <ul className="mt-2 space-y-1 text-slate-200">
                      <li>- 92% adoption across pilot orgs</li>
                      <li>- 14 new insights tagged this week</li>
                      <li>- Onboarding friction score down 18%</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Next Up</p>
                    <p className="mt-2 text-slate-200">
                      Launch the Onboarding Clarity review with GTM, Ops, and Support on Tuesday.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 sm:px-10 lg:px-12" id="explore">
        <section id="features" className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-semibold text-slate-100">Everything in motion, narratively clear.</h2>
            <p className="mt-4 max-w-3xl text-base text-slate-300">
              The KK Workspace trims redundant docs and meetings. Capture insight at the source, connect it to goals, and automate comms so everyone stays aligned.
            </p>
          </div>
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-sky-400 hover:bg-sky-400/10"
            >
              <h3 className="text-xl font-semibold text-slate-50">{area.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{area.description}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 opacity-0 transition group-hover:opacity-100">
                Learn more
                <span aria-hidden>&rarr;</span>
              </div>
            </article>
          ))}
        </section>

        <section
          id="workflow"
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          <div className="border-b border-white/10 px-8 py-10">
            <h2 className="text-3xl font-semibold text-slate-50">A workflow that respects context.</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              From capturing raw notes to celebrating the launch, KK keeps every stakeholder on the same page with frictionless handoffs.
            </p>
          </div>
          <ol className="grid gap-0 divide-y divide-white/5 text-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {timeline.map((item, index) => (
              <li key={item.title} className="px-8 py-10">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Step {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="testimonials" className="grid gap-12 lg:grid-cols-[2fr,1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-50">Teams rely on KK for momentum.</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Whether you are spinning up a new product line or keeping a mature program on pace, the narrative stays cohesive and measurable.
            </p>
            <div className="mt-10 grid gap-6">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200"
                >
                  <p className="leading-6">“{testimonial.quote}”</p>
                  <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {testimonial.name} · {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-100">Signals Dashboard</h3>
              <p className="mt-3 text-sm text-slate-300">
                Monitor rollout health in real-time—usage, sentiment, and blockers feed into one live board.
              </p>
            </div>
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="text-slate-400">Weekly trend</dt>
                <dd className="mt-1 flex items-baseline gap-2 text-2xl font-semibold text-sky-300">
                  +18%
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                    Participation
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Insights processed</dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-100">268</dd>
              </div>
              <div>
                <dt className="text-slate-400">Launch forecast confidence</dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-100">92%</dd>
              </div>
            </dl>
            <Link
              href="#request-demo"
              className="inline-flex items-center justify-center rounded-full border border-sky-400 bg-sky-400/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300 transition hover:bg-sky-400/20"
            >
              View interactive board
            </Link>
          </div>
        </section>

        <section
          id="pricing"
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10"
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-slate-100">Simple plans that scale with momentum.</h2>
              <p className="mt-4 text-base text-slate-300">
                Start free with two workstreams. Upgrade for unlimited initiatives, advanced permissions, and custom data residency.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
              <div className="flex items-baseline gap-2 text-3xl font-semibold text-slate-50">
                $18
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">per seat / month</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Unlimited knowledge maps and pulse reports</li>
                <li>• AI summaries tuned to your org language</li>
                <li>• SSO, SCIM, and audit trails included</li>
              </ul>
              <Link
                href="#request-demo"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-sky-300"
              >
                Start pilot
              </Link>
            </div>
          </div>
        </section>

        <section
          id="request-demo"
          className="rounded-3xl border border-white/10 bg-white/5 p-10 text-sm text-slate-200"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">Bring KK Workspace to your team.</h2>
              <p className="mt-3 max-w-xl text-slate-300">
                Share a few details and we’ll craft a tailored rollout plan in under 48 hours.
              </p>
            </div>
            <form className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Work email</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Team size</span>
                <select
                  className="appearance-none rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">What should we accelerate?</span>
                <textarea
                  rows={3}
                  placeholder="Share upcoming launches or goals..."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-sky-300"
              >
                Request roll-out plan
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 sm:px-10 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Link href="#" className="flex items-center gap-3 text-slate-200">
              <Image src="/kk-mark.svg" alt="KK Workspace" width={28} height={28} />
              <span className="font-semibold">KK Workspace</span>
            </Link>
            <div className="flex gap-4 text-xs uppercase tracking-[0.3em]">
              <Link href="#" className="transition hover:text-sky-300">
                Privacy
              </Link>
              <Link href="#" className="transition hover:text-sky-300">
                Terms
              </Link>
              <Link href="#" className="transition hover:text-sky-300">
                Status
              </Link>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} KK Systems. Momentum for the builders, clarity for leadership.
          </p>
        </div>
      </footer>
    </div>
  );
}
