import React, { useState } from 'react';
import { Section, Button, Eyebrow } from '@/src/components/UI';
import { Star, CheckCircle2, Facebook, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export const LeaveReview = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const ratingLabels = [
    'We want to do better.',
    'Thank you for the feedback.',
    'Good — tell us more.',
    'Great! We appreciate that.',
    'Outstanding — you made our day!'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-near-black z-[100] flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle2 size={120} className="text-primary-teal mb-8 animate-bounce" />
        <h1 className="text-6xl md:text-8xl text-white mb-4">Thank You!</h1>
        <p className="text-white/60 text-xl max-w-md mb-12">
          Your feedback helps us improve and helps your neighbors find trusted local help. We appreciate you taking the time.
        </p>
        <Link to="/">
          <Button variant="primary" className="px-12 py-4">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-dark-bg flex items-center overflow-hidden py-32">
        <div className="teal-glow absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center pt-12">
          <h1 className="text-6xl md:text-8xl text-white mb-4">Tell Us How We Did.</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Your feedback helps us improve and helps your neighbors in Northeast Texas find trusted local contractors.
          </p>
        </div>
      </section>

      {/* Options */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-12 border-l-8 border-primary-teal shadow-xl space-y-6">
            <Facebook size={48} className="text-[#1877F2]" />
            <h3 className="text-4xl">Review on Facebook</h3>
            <p className="text-mid-grey leading-relaxed">
              Sharing your experience on Facebook helps neighbors in Hopkins and Franklin County find us when they search locally.
            </p>
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="w-full">Review on Facebook</Button>
            </a>
          </div>
          <div className="bg-white p-12 border-l-8 border-primary-teal shadow-xl space-y-6">
            <FileText size={48} className="text-primary-teal" />
            <h3 className="text-4xl">Submit a Testimonial</h3>
            <p className="text-mid-grey leading-relaxed">
              Fill out our quick form below. Your review may be featured on our website to help others understand our quality of work.
            </p>
            <Button variant="outline" className="w-full" onClick={() => document.getElementById('review-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Fill Out Below
            </Button>
          </div>
        </div>
      </Section>

      {/* Star Widget */}
      <Section className="bg-off-white text-center" id="review-form">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl">Rate Your Experience</h2>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                onMouseEnter={() => setHoverRating(s)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(s)}
                className="transition-transform hover:scale-110"
              >
                <Star 
                  size={48} 
                  className={cn(
                    "transition-colors",
                    (hoverRating || rating) >= s ? "fill-primary-teal text-primary-teal" : "text-mid-grey/30"
                  )}
                />
              </button>
            ))}
          </div>
          <div className="h-8">
            {(hoverRating || rating) > 0 && (
              <p className="font-condensed font-bold text-primary-teal uppercase tracking-widest animate-fade-in">
                {ratingLabels[(hoverRating || rating) - 1]}
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-condensed text-xs font-bold uppercase tracking-widest text-primary-teal">Name</label>
                <input required type="text" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
              </div>
              <div className="space-y-2">
                <label className="font-condensed text-xs font-bold uppercase tracking-widest text-primary-teal">Location</label>
                <input type="text" placeholder="e.g. Sulphur Springs, TX" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-condensed text-xs font-bold uppercase tracking-widest text-primary-teal">Service Used</label>
                <select className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none appearance-none">
                  {BUSINESS_INFO.services.map(s => <option key={s}>{s}</option>)}
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-condensed text-xs font-bold uppercase tracking-widest text-primary-teal">Date of Service</label>
                <input type="date" className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-condensed text-xs font-bold uppercase tracking-widest text-primary-teal">Your Review</label>
              <textarea 
                required
                rows={8} 
                placeholder="Tell us about your experience — what we did, how it went, would you recommend us?"
                className="w-full bg-off-white px-6 py-4 border-none focus:ring-2 focus:ring-primary-teal outline-none resize-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <input type="checkbox" id="consent" className="w-5 h-5 accent-primary-teal" />
              <label htmlFor="consent" className="text-sm text-mid-grey">I allow Molteni Trucking to display this review on their website.</label>
            </div>

            <Button variant="primary" className="w-full py-4">Submit My Review</Button>
          </form>
        </div>
      </Section>

      {/* Why It Matters */}
      <Section dark>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl">Your Review Powers Our Business.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Help Neighbors', desc: 'Help others find trusted local help in Northeast Texas.' },
            { title: 'Build Reputation', desc: 'Strengthen our standing as a quality local contractor.' },
            { title: 'Motivate Crew', desc: 'Our team loves hearing that their hard work is appreciated.' }
          ].map(item => (
            <div key={item.title} className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary-teal/20 flex items-center justify-center text-primary-teal">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-condensed font-bold text-lg uppercase tracking-wider">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
