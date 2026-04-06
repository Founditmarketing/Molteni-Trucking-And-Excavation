import React from 'react';
import { ASSETS, BUSINESS_INFO } from '@/src/constants';
import { Section, Button, Eyebrow } from '@/src/components/UI';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Excavation = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] bg-dark-bg flex items-center overflow-hidden py-32">
        <img src={ASSETS.gallery.C} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="animated-grid absolute inset-0 opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12">
          <Eyebrow>Service 01</Eyebrow>
          <h1 className="text-6xl md:text-8xl text-white mb-4">
            Excavation & <br />
            <span className="text-stroke-teal">Dirt Work</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl font-light mb-12">
            From pond construction to land clearing — Molteni handles Northeast Texas excavation start to finish.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Get a Free Quote
            </Button>
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="dark">Call {BUSINESS_INFO.phone}</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl">Complete Excavation Services for Northeast Texas.</h2>
            <p className="text-mid-grey leading-relaxed">
              We provide a full range of dirt work services including residential pond construction, commercial land clearing, foundation preparation, site grading, drainage work, dirt hauling, and brush removal. Our team is equipped to handle projects of any scale with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              'Pond & Lake Excavation', 'Land & Brush Clearing', 
              'Foundation Preparation', 'Dirt Hauling & Disposal', 
              'Grade Work & Drainage', 'Equipment Hauling'
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary-teal/10 flex items-center justify-center text-primary-teal shrink-0">
                  <Check size={14} />
                </div>
                <span className="font-condensed uppercase tracking-wider text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Breakdown */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Pond & Lake Construction', 
              img: ASSETS.gallery.A, 
              desc: 'From site evaluation to digging to final grading, we build ponds that last and enhance your property.' 
            },
            { 
              title: 'Land & Brush Clearing', 
              img: ASSETS.gallery.B, 
              desc: 'Transform dense brush into usable, buildable land with our heavy-duty clearing equipment.' 
            },
            { 
              title: 'Grading & Foundation', 
              img: ASSETS.gallery.D, 
              desc: 'Precise site leveling and drainage slope preparation for residential and commercial structures.' 
            }
          ].map((card, i) => (
            <div key={card.title} className="bg-white/5 border border-primary-teal/20 overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src={card.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 space-y-4">
                <div className="font-display text-4xl text-primary-teal">0{i + 1}</div>
                <h3 className="text-2xl text-white">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary-teal font-condensed font-bold uppercase tracking-widest hover:gap-4 transition-all pt-4">
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* The Process */}
      <Section className="bg-off-white">
        <div className="text-center mb-16">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="text-5xl md:text-6xl">Four Steps from Call to Completion.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-primary-teal/20 -z-10" />
          {[
            { title: 'Free Consultation', desc: 'We come to your property, walk the site with you, and understand your needs.' },
            { title: 'Written Estimate', desc: 'You receive a clear written scope of work and price—no vague verbal quotes.' },
            { title: 'Scheduling', desc: 'We set a date that works for you and begin mobilizing our equipment.' },
            { title: 'Completion', desc: 'The job is finished to your satisfaction and the site is cleaned up.' }
          ].map((step, i) => (
            <div key={step.title} className="space-y-4">
              <div className="font-display text-6xl text-primary-teal">{i + 1}</div>
              <h4 className="font-condensed font-bold text-lg uppercase tracking-wider">{step.title}</h4>
              <p className="text-mid-grey text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Equipment Spotlight */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img src={ASSETS.gallery.H} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-near-black/60" />
        <h2 className="relative z-10 text-4xl md:text-6xl text-white text-center px-6">
          Heavy-Duty. All-Terrain. <br />Built for Your Land.
        </h2>
      </section>

      {/* FAQ */}
      <Section id="faq">
        <div className="text-center mb-16">
          <Eyebrow>Common Questions</Eyebrow>
          <h2 className="text-5xl md:text-6xl">Answers About Our Excavation Work.</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'Do you build ponds from scratch?', a: 'Yes. We handle the complete pond build: site evaluation, excavation, shaping, compaction, and final grading. We have done this across Hopkins, Franklin, and surrounding counties.' },
            { q: 'How do I know how much excavation I need?', a: 'We come to your property and assess it at no charge. We will tell you exactly what is involved before you commit to anything.' },
            { q: 'Do you haul away the material you dig?', a: 'In most cases yes. Discuss your specific needs during the consultation and we will plan accordingly.' },
            { q: 'What areas do you serve?', a: 'We are based in Sulphur Bluff and serve Sulphur Springs, Mt. Vernon, and the broader Northeast Texas area. Call us and we will tell you if we can reach your property.' },
            { q: 'How much does excavation typically cost?', a: 'Every job is different based on size, soil conditions, access, and scope. We give real written estimates, not ballpark guesses.' }
          ].map((faq, i) => (
            <details key={i} className="group bg-off-white">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-condensed font-bold uppercase tracking-wider">{faq.q}</span>
                <div className="w-6 h-6 border border-primary-teal flex items-center justify-center text-primary-teal group-open:rotate-180 transition-transform">
                  <ArrowRight size={14} className="rotate-90" />
                </div>
              </summary>
              <div className="p-6 pt-0 text-mid-grey text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <section id="contact-form" className="bg-primary-teal py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl mb-2">Ready to Start Your Project?</h2>
            <p className="opacity-80">Call us today for a free on-site consultation.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="dark">{BUSINESS_INFO.phone}</Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-teal">Message Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
