import React from 'react';
import { ASSETS, BUSINESS_INFO } from '@/src/constants';
import { Section, Button, Eyebrow, StatCounter } from '@/src/components/UI';

export const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-dark-bg flex items-center overflow-hidden py-32">
        <img src={ASSETS.gallery.I} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" />
        <div className="animated-grid absolute inset-0 opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12">
          <Eyebrow>Who We Are</Eyebrow>
          <h1 className="text-6xl md:text-8xl text-white mb-8">About Us</h1>
          <p className="text-white/70 text-xl max-w-2xl font-light">
            Family Owned Northeast Texas Sand, Gravel, Dirt Work and Excavation Company.
          </p>
          <div className="mt-12">
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="primary">Call Now — Free Quote</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl">Built Different. <br />Because We Are Family.</h2>
            <div className="space-y-6 text-mid-grey leading-relaxed">
              <p>Aldo Molteni Trucking and Excavation Inc. is deliberately small compared to large contractors. This smallness is the point — it means personal accountability on every job.</p>
              <p>With years of experience serving Sulphur Springs and the surrounding areas, we have built a reputation for being the crew that shows up on time and does the job right the first time.</p>
              <p>We invite you to give us a call, walk the property with us, and get a real straight quote with no surprises. We take our customers' needs as our own.</p>
            </div>
            <div className="border-l-8 border-primary-teal pl-8 py-4 bg-off-white italic text-xl font-body text-near-black">
              "We take our customers' needs as our own."
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-44 h-44 border-4 border-primary-teal -z-10" />
            <img src={ASSETS.gallery.C} alt="Molteni Story" className="w-full h-[600px] object-cover shadow-2xl" />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-off-white">
        <div className="text-center mb-16">
          <Eyebrow>Our Foundation</Eyebrow>
          <h2 className="text-5xl md:text-6xl">Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: '01', title: 'Integrity', desc: 'We do what we say, every time. No vague promises, just honest work.' },
            { num: '02', title: 'Quality', desc: 'Every grade, every load, meets our standard before we leave the site.' },
            { num: '03', title: 'Community', desc: 'We live in Northeast Texas. We know your neighbors, we know your land.' }
          ].map(val => (
            <div key={val.num} className="bg-white p-10 relative group hover:-translate-y-2 transition-all shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="font-display text-6xl text-primary-teal/20 mb-6">{val.num}</div>
              <h3 className="text-3xl mb-4">{val.title}</h3>
              <p className="text-mid-grey leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meet Aldo */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img src={ASSETS.gallery.G} alt="Aldo Molteni" className="w-full h-[500px] object-cover grayscale" />
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl">Meet Aldo Molteni</h2>
            <p className="text-white/70 leading-relaxed">
              Aldo's personal involvement is at the heart of every project. With Northeast Texas roots and decades of hands-on experience operating heavy equipment, he brings a level of expertise that ensures every job—from pond construction to land clearing—is executed with precision.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Pond & Lake Construction', 'Land Clearing & Brush Removal', 'Grading & Foundation Work', 'Equipment Hauling & Operation'].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 bg-primary-teal" />
                  <span className="font-condensed uppercase tracking-wider text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 space-y-6">
              <div className="font-display text-5xl text-primary-teal">{BUSINESS_INFO.phone}</div>
              <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="primary">Call Aldo Directly</Button>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <section className="bg-primary-teal py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          <StatCounter end={20} suffix="+" label="Years of Experience" />
          <StatCounter end={500} suffix="+" label="Projects Completed" />
          <StatCounter end={3} label="Counties of Coverage" />
          <StatCounter end={100} suffix="%" label="Free On-Site Consultation" />
        </div>
      </section>

      {/* Equipment */}
      <Section className="bg-off-white">
        <div className="text-center mb-16">
          <Eyebrow>Our Fleet</Eyebrow>
          <h2 className="text-5xl md:text-6xl">Built for Texas Terrain.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {[
            { title: 'Hydraulic Dump System', desc: 'Heavy-duty capability for precise material placement and efficient site work.' },
            { title: 'All-Terrain Traction', desc: 'Specialized equipment designed to handle the unique soil conditions of NE Texas.' },
            { title: 'Full Excavator Fleet', desc: 'Versatile machinery for everything from deep pond digging to fine site grading.' }
          ].map(item => (
            <div key={item.title} className="space-y-4">
              <div className="w-12 h-12 bg-primary-teal/10 flex items-center justify-center text-primary-teal">
                <div className="w-6 h-6 border-2 border-primary-teal" />
              </div>
              <h4 className="font-condensed font-bold text-xl uppercase tracking-wider">{item.title}</h4>
              <p className="text-mid-grey text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <img src={ASSETS.gallery.H} className="w-full h-[400px] object-cover grayscale opacity-40" />
      </Section>

      {/* Final CTA */}
      <Section dark className="relative">
        <div className="teal-glow absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full blur-[100px]" />
        <div className="text-center space-y-8 relative z-10">
          <h2 className="text-5xl md:text-7xl">Let Us Walk Your <br />Property Together.</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Schedule a free on-site consultation. No obligation, no pressure, just a real conversation about what your land needs.
          </p>
          <div className="font-display text-5xl text-primary-teal">{BUSINESS_INFO.phone}</div>
          <div className="flex justify-center">
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="primary">Contact Us</Button>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};
