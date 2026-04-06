import React from 'react';
import { ASSETS, BUSINESS_INFO } from '@/src/constants';
import { Section, Button, Eyebrow } from '@/src/components/UI';
import { ArrowRight, Truck, Mountain, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RockDelivery = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] bg-dark-bg flex items-center overflow-hidden py-32">
        <img src={ASSETS.gallery.F} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="animated-grid absolute inset-0 opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12">
          <Eyebrow>Service 02</Eyebrow>
          <h1 className="text-6xl md:text-8xl text-white mb-4">
            Sand, Rock & <br />
            <span className="text-stroke-teal">Gravel</span> <br />
            Delivery.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl font-light mb-12">
            Residential and commercial material delivery throughout Northeast Texas. One call, one crew, done right.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Get a Quote
            </Button>
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="dark">Call {BUSINESS_INFO.phone}</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Materials */}
      <Section>
        <div className="text-center mb-16">
          <Eyebrow>What We Haul</Eyebrow>
          <h2 className="text-5xl md:text-6xl">The Materials You Need Delivered.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: 'Sand', 
              icon: <Layers size={44} />, 
              desc: 'Fill sand, washed sand, and utility grade available. Used for drainage, fill work, leveling, and landscaping.' 
            },
            { 
              title: 'Gravel & Rock', 
              icon: <Mountain size={44} />, 
              desc: 'Crushed limestone, road base, decorative gravel. Used for driveways, drainage beds, and equipment pads.' 
            },
            { 
              title: 'Dirt & Fill', 
              icon: <Truck size={44} />, 
              desc: 'Clean topsoil and fill dirt for grading low spots, covering fill areas, and new construction preparation.' 
            }
          ].map(item => (
            <div key={item.title} className="text-center space-y-6 group">
              <div className="w-20 h-20 mx-auto bg-primary-teal/5 flex items-center justify-center text-primary-teal transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-3xl">{item.title}</h3>
              <p className="text-mid-grey leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who We Deliver To */}
      <Section className="bg-off-white relative">
        <img src={ASSETS.gallery.E} className="absolute inset-0 w-full h-full object-cover opacity-5 grayscale" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-6">
            <h3 className="text-4xl">Residential</h3>
            <p className="text-mid-grey leading-relaxed">
              We serve homeowners, ranchers, and farmers across Northeast Texas. Whether you're adding a driveway, improving property drainage, or starting a landscaping project, we deliver the materials you need directly to your site.
            </p>
          </div>
          <div className="space-y-6 md:border-l border-primary-teal/20 md:pl-16">
            <h3 className="text-4xl">Commercial</h3>
            <p className="text-mid-grey leading-relaxed">
              We work with contractors, home builders, road crews, and municipalities. Our heavy-duty fleet is capable of handling large-scale material hauling for commercial developments and infrastructure projects.
            </p>
          </div>
        </div>
      </Section>

      {/* Estimation Guide */}
      <Section dark>
        <div className="text-center mb-16">
          <Eyebrow>How Much Do You Need</Eyebrow>
          <h2 className="text-5xl md:text-6xl">Estimating Your Load.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {[
            { step: '01', title: 'Measure Area', desc: 'Measure your project area in feet (Length × Width).' },
            { step: '02', title: 'Estimate Depth', desc: 'Decide how many inches deep you need the material to be.' },
            { step: '03', title: 'Calculate Yards', desc: 'Multiply L × W × D (in feet) and divide by 27 for cubic yards.' }
          ].map(step => (
            <div key={step.step} className="bg-white/5 p-8 border-l-4 border-primary-teal">
              <div className="font-display text-4xl text-primary-teal mb-4">{step.step}</div>
              <h4 className="font-condensed font-bold text-lg uppercase tracking-wider mb-2">{step.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto bg-primary-teal/10 border border-primary-teal/30 p-8 text-center">
          <p className="text-white/80 italic">
            "Not sure? Just call us. We can walk through the math with you over the phone and make sure you order the right amount."
          </p>
        </div>
      </Section>

      {/* Coverage Area */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl">We Deliver to <br />Northeast Texas.</h2>
            <p className="text-mid-grey leading-relaxed">
              Based in Sulphur Bluff, our delivery radius covers Hopkins, Franklin, Titus, Lamar, and Red River counties. We are the local choice for reliable material hauling.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {['Sulphur Springs', 'Mt. Vernon', 'Daingerfield', 'Paris'].map(city => (
                <div key={city} className="font-condensed text-xl font-bold text-primary-teal uppercase tracking-wider">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm italic text-mid-grey">Not sure if we reach you? Call and ask.</p>
          </div>
          <div className="relative">
            <img src={ASSETS.gallery.G} className="w-full h-[400px] object-cover shadow-2xl" />
          </div>
        </div>
      </Section>

      {/* The Molteni Difference */}
      <Section className="bg-off-white">
        <div className="space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <img src={ASSETS.gallery.C} className="w-full h-[400px] object-cover" />
            <div className="space-y-6">
              <h3 className="text-4xl">Same-Crew Reliability</h3>
              <p className="text-mid-grey leading-relaxed">
                When you order from Molteni, the people who load it are the people who deliver it. We do not broker jobs to third-party haulers. You get the same accountability on delivery day that you get on the phone.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-4xl">Load Sizing That Fits Your Job</h3>
              <p className="text-mid-grey leading-relaxed">
                Whether you need a single small delivery or multiple loads for a commercial project, we size accordingly. No forcing you to order more than you need, no minimums that blow your budget.
              </p>
            </div>
            <img src={ASSETS.gallery.G} className="w-full h-[400px] object-cover order-1 md:order-2" />
          </div>
        </div>
      </Section>

      {/* Pricing & Quote */}
      <Section dark id="quote-form">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl">Straight Talk on Pricing.</h2>
          <p className="text-white/60 leading-relaxed">
            We do not publish price lists because every job is different. The distance from our yard in Sulphur Bluff to your delivery site, the type of material, and the quantity all affect the final number. What we will always do is give you a real, honest quote fast, with no surprises when the truck shows up.
          </p>
          <div className="font-display text-5xl text-primary-teal">{BUSINESS_INFO.phone}</div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="primary">Call for a Quote</Button>
            </a>
            <Link to="/contact">
              <Button variant="outline">Fill Out the Contact Form</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-16">
          <Eyebrow>Common Questions</Eyebrow>
          <h2 className="text-5xl md:text-6xl">Answers About Delivery.</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'What areas do you deliver to?', a: 'We deliver throughout Northeast Texas. Based in Sulphur Bluff, we regularly serve Hopkins, Franklin, Titus, and surrounding counties. Call us for your specific location.' },
            { q: 'Is there a minimum load size?', a: 'We accommodate both small residential orders and large commercial quantities. Call us and describe your project so we can help you figure out the right amount.' },
            { q: 'Do you also spread and grade after delivery?', a: 'Yes. We offer combined delivery and dirt work packages. If you need material spread, graded, or compacted after delivery, ask about adding that to your order.' },
            { q: 'How far ahead do I need to schedule?', a: 'Availability varies. Call us as early as possible, especially for large orders. We do our best to accommodate time-sensitive jobs.' },
            { q: 'Do you deliver to active construction sites?', a: 'Yes. We work with contractors and builders regularly. We understand job site logistics and will coordinate accordingly.' }
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
    </div>
  );
};
