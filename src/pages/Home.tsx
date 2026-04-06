import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS, BUSINESS_INFO } from '@/src/constants';
import { Section, Button, Eyebrow, StatCounter } from '@/src/components/UI';
import { ArrowRight, Star, Quote, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  ASSETS.gallery.A,
  ASSETS.gallery.B,
  ASSETS.gallery.C,
  ASSETS.gallery.D,
  ASSETS.gallery.E,
  ASSETS.gallery.F,
  ASSETS.gallery.G,
];

export const Home = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null), []);
  const nextImage = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % galleryImages.length : null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, prevImage, nextImage]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-dark-bg overflow-hidden flex items-center">
        {/* Background Video & Overlays */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/88 via-dark-bg/65 to-dark-bg/82" />
          <div className="animated-grid absolute inset-0 opacity-50" />
          <div className="teal-glow absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-48 pb-64">
          <div className="lg:col-span-8 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-[clamp(4.5rem,10vw,9rem)] leading-[0.92] text-white uppercase"
            >
              Built on <br />
              <span className="text-stroke-teal">TEXAS</span> <br />
              Ground.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-white/70 text-lg md:text-xl max-w-lg font-light"
            >
              Family-owned excavation, sand, gravel and dirt work done right — the first time. From ponds to land clearing, Molteni handles it start to finish.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="primary">Call Now — Free Quote</Button>
              </a>
              <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Our Services
              </Button>
            </motion.div>
          </div>

          {/* Stats Column */}
          <div className="hidden lg:col-span-4 lg:flex flex-col space-y-12 items-end">
            {[
              { num: '5', label: 'County Service Area' },
              { num: '100%', label: 'Family Owned' },
              { num: 'NE TX', label: 'Based Locally' }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (i * 0.1) }}
                className="text-right border-r-4 border-primary-teal pr-6"
              >
                <div className="font-display text-5xl text-white">{stat.num}</div>
                <div className="font-condensed text-xs text-primary-teal uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ticker Strip */}
        <div className="absolute bottom-12 left-0 w-full h-12 bg-primary-teal overflow-hidden flex items-center">
          <div className="flex whitespace-nowrap animate-[ticker_28s_linear_infinite]">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center">
                {BUSINESS_INFO.services.map((service) => (
                  <span key={service} className="font-condensed text-white text-sm font-bold uppercase tracking-widest mx-8 flex items-center gap-8">
                    {service} <span className="text-white/50">◆</span>
                  </span>
                ))}
                <span className="font-condensed text-white text-sm font-bold uppercase tracking-widest mx-8 flex items-center gap-8">
                  Free On-Site Consultation <span className="text-white/50">◆</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="font-condensed text-[0.75rem] text-white/50 uppercase tracking-[0.2em] mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-primary-teal animate-scroll-drip" />
          </div>
        </div>

        {/* Diagonal Cut */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white diagonal-cut-top translate-y-1" />
      </section>

      {/* Stats Bar */}
      <section className="bg-near-black py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatCounter end={5} label="Counties Served" />
          <StatCounter end={100} suffix="%" label="Family Owned & Operated" />
          <StatCounter end={100} suffix="%" label="Free On-Site Quotes" />
        </div>
      </section>

      {/* About Section */}
      <Section id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-44 h-44 border-4 border-primary-teal -z-10" />
            <img 
              src={ASSETS.gallery.I} 
              alt="About Molteni" 
              className="w-full h-[500px] object-cover shadow-2xl"
            />
            <div className="absolute bottom-8 left-8 bg-primary-teal p-8 shadow-xl text-white">
              <div className="font-display text-3xl leading-tight">NE Texas</div>
              <div className="font-condensed text-xs uppercase tracking-widest">Local Crew. Local Roots.</div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="text-5xl md:text-6xl mb-6">Small Outfit. <br />Big Commitment.</h2>
              <div className="space-y-4 text-mid-grey leading-relaxed">
                <p>Aldo Molteni Trucking and Excavation Inc. is a family-owned operation built on the values of hard work, integrity, and local accountability.</p>
                <p>We don't just move dirt; we build the foundations for your property's future. Whether it's a new pond for your ranch or clearing land for a home site, we treat every project as if it were our own land.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Quality First', 'On Time', 'Free Quote', 'Local Roots'].map(val => (
                <div key={val} className="bg-off-white p-4 border-l-4 border-primary-teal">
                  <span className="font-condensed font-bold uppercase tracking-wider text-sm">{val}</span>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button variant="dark">Get a Free Consultation</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" dark className="pb-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display text-[20vw] text-primary-teal/5 leading-none select-none">MOLTENI</span>
        </div>
        
        <div className="text-center mb-16">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="text-5xl md:text-6xl">Two Services. One Call.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {[
            { 
              id: '01', 
              title: 'Excavation & Dirt Work', 
              img: ASSETS.gallery.C, 
              path: '/excavation',
              desc: 'Complete site preparation, pond construction, and land clearing services tailored for Texas terrain.'
            },
            { 
              id: '02', 
              title: 'Sand, Rock & Gravel', 
              img: ASSETS.gallery.F, 
              path: '/rock-delivery',
              desc: 'Reliable material delivery for driveways, drainage, and construction projects across the region.'
            }
          ].map((service) => (
            <Link 
              key={service.id} 
              to={service.path}
              className="group relative h-[500px] overflow-hidden block"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <span className="block font-condensed text-primary-teal text-sm font-bold uppercase tracking-widest mb-2">Service {service.id}</span>
                <h3 className="text-4xl md:text-5xl text-white mb-4">{service.title}</h3>
                <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                  <p className="text-white/70 text-sm mb-6 max-w-md">{service.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-primary-teal font-condensed font-bold uppercase tracking-widest translate-x-0 group-hover:translate-x-2 transition-transform">
                  Get a Quote <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-off-white border-t-8 border-primary-teal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <Eyebrow>Why Molteni</Eyebrow>
            <h2 className="text-5xl md:text-6xl">The Difference Is <br />in the Details.</h2>
            <p className="text-mid-grey mt-6 max-w-lg">We combine heavy-duty equipment with a small-business touch to ensure your project is completed precisely as envisioned.</p>
          </div>
          <div className="lg:text-right flex flex-col lg:items-end justify-center gap-6">
            <div className="font-display text-5xl text-primary-teal">{BUSINESS_INFO.phone}</div>
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="primary">Call for a Free Quote</Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-teal">
          {[
            { title: 'Family Owned', desc: 'Direct accountability from our family to yours.' },
            { title: 'On-Time Delivery', desc: 'We respect your schedule and your deadlines.' },
            { title: 'Hydraulic Systems', desc: 'Advanced equipment for precise material placement.' },
            { title: 'All-Terrain Ready', desc: 'No site is too tough for our specialized fleet.' },
            { title: 'Local Experts', desc: 'We know Northeast Texas soil and terrain.' },
            { title: 'Free Consultation', desc: 'Zero-cost site visits to plan your project right.' },
            { title: 'Start to Finish', desc: 'We manage every phase of the excavation process.' },
            { title: 'Five-Star Rated', desc: 'A reputation built on neighbor-to-neighbor trust.' }
          ].map((feature) => (
            <div key={feature.title} className="bg-white p-8 group relative transition-all hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-primary-teal group-hover:w-full transition-all duration-500" />
              <h4 className="font-condensed font-bold text-lg uppercase tracking-wider mb-4">{feature.title}</h4>
              <p className="text-mid-grey text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <Eyebrow>Our Work</Eyebrow>
            <h2 className="text-5xl md:text-6xl">In the Field.</h2>
          </div>
          <Link to="/contact">
            <Button variant="outline">Start Your Project</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="col-span-2 row-span-1 overflow-hidden group relative h-[300px] cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <img src={galleryImages[0]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery image 1" />
            <div className="absolute inset-0 bg-primary-teal/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-white flex items-center justify-center text-white">
                <Search size={20} />
              </div>
            </div>
          </div>
          {galleryImages.slice(1).map((src, i) => (
            <div
              key={i}
              className="overflow-hidden group relative h-[300px] cursor-pointer"
              onClick={() => openLightbox(i + 1)}
            >
              <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`Gallery image ${i + 2}`} />
              <div className="absolute inset-0 bg-primary-teal/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-white flex items-center justify-center text-white">
                  <Search size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-near-black/97 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={36} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 font-condensed text-white/40 text-sm uppercase tracking-widest">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 text-white/60 hover:text-primary-teal transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={galleryImages[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[85vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-white/60 hover:text-primary-teal transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={48} />
            </button>

            {/* Dot nav */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === lightboxIndex ? 'bg-primary-teal w-6' : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reviews Section */}
      <Section dark className="relative">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 border border-primary-teal rounded-full opacity-20 pointer-events-none" />
        
        <div className="text-center mb-16">
          <Eyebrow>Real Words. Real Neighbors.</Eyebrow>
          <h2 className="text-5xl md:text-6xl">What Our Customers Say.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { name: 'Hopkins County Landowner', text: 'Aldo and his crew did an outstanding job clearing our land and building our pond. They showed up when they said they would and the quality was better than expected.' },
            { name: 'Franklin County Customer', text: 'Best experience I have had hiring a local contractor. Aldo came out personally, walked the site with me, and gave me a straight honest quote.' },
            { name: 'Sulphur Springs Resident', text: 'If you need dirt work done in Northeast Texas, call Molteni first. Personal service and quality Aldo brings to every job site is unmatched.' }
          ].map((review) => (
            <div key={review.name} className="bg-white/5 border border-primary-teal/20 p-8 relative group hover:bg-white/10 hover:-translate-y-1 transition-all">
              <Quote className="absolute top-4 right-4 text-primary-teal/10 w-16 h-16" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-primary-teal text-primary-teal" />)}
              </div>
              <p className="text-white/80 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="font-condensed text-sm font-bold uppercase tracking-widest text-primary-teal">
                {review.name}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Link to="/read-reviews">
            <Button variant="outline">Read All Reviews</Button>
          </Link>
          <Link to="/leave-review">
            <Button variant="primary">Leave a Review</Button>
          </Link>
        </div>
      </Section>

      {/* Coverage Strip */}
      <section className="bg-primary-teal py-16 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl text-white">Serving Northeast <br />Texas & Beyond.</h2>
            <p className="text-white/80 max-w-md">Based in Sulphur Bluff, we provide expert excavation and material delivery across Hopkins, Franklin, and surrounding counties.</p>
            <Link to="/contact">
              <Button variant="dark">Check Your Area</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {['Sulphur Springs', 'Mt. Vernon', 'Sulphur Bluff', 'NE Texas'].map(loc => (
              <div key={loc}>
                <div className="font-display text-3xl text-white">{loc}</div>
                <div className="font-condensed text-xs text-white/60 uppercase tracking-widest">Service Hub</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Section className="bg-off-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <Eyebrow>Ready to Get Started?</Eyebrow>
              <h2 className="text-5xl md:text-6xl mb-6">Let's Walk Your <br />Property Together.</h2>
              <p className="text-mid-grey">Contact us today for a free on-site consultation. Aldo will personally assess your project and provide a straight, honest quote.</p>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Call Us', val: BUSINESS_INFO.phone },
                { label: 'Email Us', val: BUSINESS_INFO.email },
                { label: 'Our Yard', val: BUSINESS_INFO.address }
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-teal flex items-center justify-center text-white shrink-0">
                    <ArrowRight size={18} />
                  </div>
                  <div>
                    <div className="font-condensed text-xs font-bold text-primary-teal uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="font-body text-near-black">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <img src={ASSETS.gallery.I} className="w-full h-64 object-cover grayscale opacity-50" />
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary-teal" />
            <Eyebrow className="mb-8">Send a Message</Eyebrow>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
                <input type="tel" placeholder="Phone" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
              </div>
              <input type="email" placeholder="Email" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
              <select className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none appearance-none">
                <option>Service Needed</option>
                {BUSINESS_INFO.services.map(s => <option key={s}>{s}</option>)}
              </select>
              <textarea placeholder="Message" rows={4} className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none resize-none" />
              <Button variant="primary" className="w-full py-4">Send Message →</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};
