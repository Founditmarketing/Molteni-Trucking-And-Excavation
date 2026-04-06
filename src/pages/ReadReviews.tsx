import React from 'react';
import { Section, Button, Eyebrow } from '@/src/components/UI';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS, BUSINESS_INFO } from '@/src/constants';

export const ReadReviews = () => {
  const reviews = [
    { 
      name: 'Hopkins County Landowner', 
      service: 'Excavation & Pond Construction',
      text: 'Aldo and his crew did an outstanding job clearing our land and building our pond. They showed up when they said they would, did exactly what they promised, and the quality was better than I expected. Already recommended them to three neighbors.' 
    },
    { 
      name: 'Franklin County Customer', 
      service: 'Rock & Gravel Delivery',
      text: 'Best experience I have had hiring a local contractor. Aldo came out personally, walked the site with me, and gave me a straight honest quote. The rock delivery was on time and exactly what we needed. No surprises at the end.' 
    },
    { 
      name: 'Morris County Resident', 
      service: 'Excavation',
      text: 'If you need dirt work done in Northeast Texas, call Molteni first. We have used bigger companies before and they do not hold a candle to the personal service and quality Aldo brings to every job site.' 
    },
    { 
      name: 'Sulphur Springs Homeowner', 
      service: 'Sand Delivery',
      text: 'Ordered sand for a drainage project on our property. The driver was professional, placed it exactly where I needed it, and the price was fair. Will use them again for our driveway gravel this fall.' 
    },
    { 
      name: 'Hopkins County Ranch Owner', 
      service: 'Pond Construction',
      text: 'Had a pond built last year and it turned out exactly how we envisioned. Aldo walked the property with us twice before any equipment moved, made sure we understood the plan, and executed it cleanly.' 
    },
    { 
      name: 'Mt. Vernon Area Customer', 
      service: 'Land Clearing',
      text: 'Called about a land clearing project and had a quote in two days. Work was done on schedule, site was cleaned up when they left, and Aldo checked in with us at the end to make sure we were satisfied.' 
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-dark-bg flex items-center overflow-hidden py-32">
        <div className="animated-grid absolute inset-0 opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center pt-12">
          <Eyebrow>What Our Customers Say</Eyebrow>
          <h1 className="text-6xl md:text-8xl text-white mb-8">Real Work. <br />Real Neighbors.</h1>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={28} className="fill-primary-teal text-primary-teal" />)}
            </div>
            <p className="text-white/50 font-condensed text-sm uppercase tracking-widest">Rated by customers across Northeast Texas</p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white/5 border border-primary-teal/20 p-8 relative group hover:bg-white/10 hover:-translate-y-1 transition-all">
              <Quote className="absolute top-4 right-4 text-primary-teal/10 w-16 h-16" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-primary-teal text-primary-teal" />)}
              </div>
              <p className="text-white/80 italic mb-8 leading-relaxed text-[0.97rem]">"{review.text}"</p>
              <div className="space-y-1">
                <div className="font-condensed text-sm font-bold uppercase tracking-widest text-primary-teal">
                  {review.name}
                </div>
                <div className="bg-primary-teal/20 text-primary-teal text-[10px] font-bold uppercase tracking-widest px-2 py-1 inline-block">
                  {review.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pull Quotes */}
      <Section className="bg-off-white">
        <div className="space-y-16">
          {[
            { q: 'Speed & Reliability', text: 'They showed up when they said they would and did exactly what they promised.', author: 'Franklin County Customer' },
            { q: 'Quality of Work', text: 'The quality was better than I expected. The pond held water from the first rain.', author: 'Hopkins County Ranch Owner' },
            { q: 'Personal Service', text: 'Aldo came out personally, walked the site with me, and gave me a straight honest quote.', author: 'Mt. Vernon Area Customer' }
          ].map(quote => (
            <div key={quote.q} className="max-w-4xl mx-auto text-center space-y-6">
              <Quote size={48} className="mx-auto text-primary-teal/20" />
              <p className="text-3xl md:text-4xl font-body font-light italic leading-tight">"{quote.text}"</p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-primary-teal" />
                <span className="font-condensed font-bold uppercase tracking-widest text-sm">{quote.author}</span>
                <div className="h-px w-12 bg-primary-teal" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Work Photos */}
      <Section>
        <div className="text-center mb-16">
          <Eyebrow>See the Work Behind the Reviews</Eyebrow>
          <h2 className="text-5xl md:text-6xl">Projects We Are Proud Of.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: ASSETS.gallery.A, label: 'Pond Excavation — Hopkins County' },
            { img: ASSETS.gallery.C, label: 'Land Clearing — Franklin County' },
            { img: ASSETS.gallery.D, label: 'Site Grading — Mt. Vernon' },
            { img: ASSETS.gallery.G, label: 'Material Delivery — Sulphur Springs' }
          ].map(item => (
            <div key={item.label} className="space-y-4">
              <img src={item.img} className="w-full h-64 object-cover" />
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-mid-grey">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary-teal py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl text-white">Had a Good Experience?</h2>
          <p className="text-white/80">Your feedback helps neighbors find trusted local contractors and helps our crew feel appreciated.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/leave-review">
              <Button variant="dark">Leave a Review</Button>
            </Link>
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-teal">Rate on Facebook</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
