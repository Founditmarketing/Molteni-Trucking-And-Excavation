import React from 'react';
import { Section, Button, Eyebrow } from '@/src/components/UI';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS, BUSINESS_INFO } from '@/src/constants';

export const ReadReviews = () => {
  const reviews = [
    { 
      name: 'Dwight Patton', 
      service: 'Road & Site Preparation',
      text: 'If you are fortunate enough to have Aldo Molteni and his crew work on your project, you are blessed. I cannot give high enough praise for the work he did at my place. He and his crew put in a road on a 17 acre parcel and created a barndominium pad for me in preparation for a concrete slab. My sister who is always focused on the way things look said "this road is beautiful" and I absolutely agree. Character, service, earth sculpting skill, are all attributes Aldo and his team have. If you\'re in East Texas and need any kind of earth moving service Aldo and his team are the guys to go to!' 
    },
    { 
      name: 'Tara O\'Bryan', 
      service: 'Excavation & Dirt Work',
      text: 'My husband and I can not be more pleased with the work this company did at our place. The honesty, work ethic, and attention to detail is very refreshing. The price is very fair also. There is no question who we will call on any work we need in the future. Thanks Aldo and crew!' 
    },
    { 
      name: 'Seain Barrett', 
      service: 'House Pads, Ponds & Drives',
      text: 'Great family owned company around for house pads, ponds, grading and much more. I have them work on two pad and my drives now.' 
    },
    { 
      name: 'Ben Brown', 
      service: 'Pond Excavation',
      text: 'Helpful company. They have really helped a lot digging out my pond! Reasonable prices!' 
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
            { q: 'Honest & Fair', text: 'The honesty, work ethic, and attention to detail is very refreshing. The price is very fair also.', author: 'Tara O\'Bryan — Google Review' },
            { q: 'Second to None', text: 'Character, service, earth sculpting skill, are all attributes Aldo and his team have.', author: 'Dwight Patton — Google Review' },
            { q: 'Local & Trusted', text: 'Great family owned company around for house pads, ponds, grading and much more.', author: 'Seain Barrett — Google Review' }
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
