import React from 'react';
import { Section, Button, Eyebrow } from '@/src/components/UI';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, ASSETS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-dark-bg flex items-center overflow-hidden py-32">
        <div className="animated-grid absolute inset-0 opacity-40" />
        <div className="teal-glow absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12">
          <h1 className="text-6xl md:text-9xl text-white mb-8">
            Let's Get <br />
            To Work.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl font-light mb-12">
            Whether you need a quote, have a question, or want to walk your property — Aldo picks up the phone.
          </p>
          <div className="space-y-8">
            <div className="font-display text-5xl md:text-7xl text-primary-teal">{BUSINESS_INFO.phone}</div>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="primary">Call Now</Button>
              </a>
              <Button variant="outline" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Send a Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Strip */}
      <Section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 border-x border-primary-teal/10">
          {[
            { icon: <Phone />, label: 'Phone', val: BUSINESS_INFO.phone, link: `tel:${BUSINESS_INFO.phone}`, btn: 'Call Now' },
            { icon: <Mail />, label: 'Email', val: BUSINESS_INFO.email, link: `mailto:${BUSINESS_INFO.email}`, btn: 'Send Email' },
            { icon: <MapPin />, label: 'Address', val: BUSINESS_INFO.address, link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`, btn: 'Get Directions' }
          ].map((item, i) => (
            <div key={item.label} className={cn(
              "p-12 space-y-6 flex flex-col items-center text-center",
              i !== 2 && "md:border-r border-primary-teal/10"
            )}>
              <div className="w-16 h-16 bg-primary-teal/5 flex items-center justify-center text-primary-teal">
                {item.icon}
              </div>
              <div>
                <div className="font-condensed text-xs font-bold text-primary-teal uppercase tracking-widest mb-2">{item.label}</div>
                <div className="font-body text-near-black font-medium">{item.val}</div>
              </div>
              <a href={item.link} className="w-full">
                <Button variant="outline" className="w-full">{item.btn}</Button>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Form Section */}
      <Section id="contact-form" className="bg-off-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <Eyebrow>Ready to Start?</Eyebrow>
              <h2 className="text-5xl md:text-6xl mb-8">Tell Us About Your Project.</h2>
              <div className="bg-white p-8 border-l-8 border-primary-teal shadow-lg">
                <p className="text-mid-grey leading-relaxed">
                  Every project starts with a free on-site consultation — we come to you, walk the property, and give you a straight quote at zero cost.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                'Calls answered same day',
                'Emails replied within 24 hours',
                'Free site visit within the week'
              ].map(promise => (
                <div key={promise} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-primary-teal flex items-center justify-center text-white">
                    <ArrowRight size={14} />
                  </div>
                  <span className="font-condensed font-bold uppercase tracking-wider text-sm">{promise}</span>
                </div>
              ))}
            </div>

            <img src={ASSETS.gallery.I} className="w-full h-80 object-cover shadow-2xl" />
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary-teal" />
            <Eyebrow className="mb-8">Send Your Request</Eyebrow>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
                <input type="tel" placeholder="Phone" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
                <select className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none appearance-none">
                  <option>Best Time to Call</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Anytime</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none appearance-none">
                  <option>Service Needed</option>
                  {BUSINESS_INFO.services.map(s => <option key={s}>{s}</option>)}
                  <option>Not Sure Yet</option>
                  <option>Other</option>
                </select>
                <input type="text" placeholder="Project Location or City" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
              </div>
              <textarea placeholder="Project Description" rows={6} className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none resize-none" />
              <select className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none appearance-none">
                <option>How Did You Hear About Us?</option>
                <option>Facebook</option>
                <option>Google</option>
                <option>Friend or Neighbor</option>
                <option>Drove By</option>
                <option>Other</option>
              </select>
              <Button variant="primary" className="w-full py-4">Send My Request</Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Map */}
      <section className="bg-dark-bg py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-6xl text-white">Find Us in Sulphur Bluff.</h2>
          <div className="relative h-[400px] w-full bg-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854165.2584612259!2d-96.21796454797247!3d33.25122533319408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864a407298420c17%3A0xbee30ae1f675fd0c!2sALDO%20MOLTENI%20TRUCKING!5e0!3m2!1sen!2sus!4v1775511068993!5m2!1sen!2sus"
              className="w-full h-full border-none grayscale opacity-80"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-8 left-8 bg-primary-teal p-8 shadow-2xl text-white max-w-xs">
              <h4 className="font-display text-2xl mb-4">Service Area</h4>
              <p className="text-sm opacity-80 leading-relaxed">
                Hopkins, Franklin, Titus, Lamar, and Red River counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <Section className="bg-off-white text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="w-16 h-16 bg-primary-teal/10 flex items-center justify-center text-primary-teal mx-auto">
            <Clock size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl">Ready When You Are.</h2>
          <p className="text-mid-grey text-lg leading-relaxed">
            Aldo answers his own phone. Call to check availability and schedule a free on-site visit — he'll give you a straight answer, fast.
          </p>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-block">
            <div className="font-display text-4xl md:text-5xl text-primary-teal">{BUSINESS_INFO.phone}</div>
          </a>
          <p className="text-mid-grey italic text-sm">For urgent jobs, call directly — we do our best to accommodate time-sensitive projects.</p>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-primary-teal py-16 px-6 text-center">
        <h2 className="text-4xl md:text-6xl text-white mb-6">Still Have Questions?</h2>
        <div className="font-display text-5xl text-white mb-4">{BUSINESS_INFO.phone}</div>
        <p className="text-white/70">Or fill out the form above and we will get back to you today.</p>
      </section>
    </div>
  );
};
