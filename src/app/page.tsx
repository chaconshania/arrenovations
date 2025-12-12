"use client";

import Grid from "@/components/grid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function Home() {
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: whyUsProgress } = useScroll({
    target: whyUsRef,
    offset: ["start end", "end start"]
  });

  const servicesFillLine1 = useTransform(servicesProgress, [0.1, 0.6], ["0%", "100%"]);
  const servicesFillLine2 = useTransform(servicesProgress, [0.3, 0.8], ["0%", "100%"]);
  const whyUsFillLine1 = useTransform(whyUsProgress, [0.1, 0.6], ["0%", "100%"]);
  const whyUsFillLine2 = useTransform(whyUsProgress, [0.3, 0.8], ["0%", "100%"]);

  const blogPosts = [
    {
      imageUrl: "https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070",
      title: "5 Signs Your Roof Needs Immediate Attention",
      description: "Learn how to spot the warning signs of roof damage before it becomes a costly problem.",
      link: "/blog/roof-warning-signs"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1569898773055-2f2b6e97e1ed?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1035",
      title: "Gutter Maintenance Tips for CT Homeowners",
      description: "Keep your gutters flowing smoothly with these seasonal maintenance tips tailored for Connecticut weather.",
      link: "/blog/gutter-maintenance"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1612451850869-87c3c039c72e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=985",
      title: "Choosing the Right Siding for Your Home",
      description: "A comprehensive guide to selecting siding materials that match your style and withstand CT&apos;s climate.",
      link: "/blog/choosing-siding"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop",
      title: "Storm Damage? Here is What to Do Next",
      description: "Step-by-step guide for handling emergency roof repairs and working with insurance after severe weather.",
      link: "/blog/storm-damage-guide"
    }
  ];

  const cardsPerView = isMobile ? 1 : 3;
  const maxSlides = Math.ceil(blogPosts.length / cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  // Contact form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-4 space-y-20">
      <section
        className="relative h-[80vh] flex items-end justify-start overflow-hidden rounded-2xl"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero/cover_image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: isMobile ? "scroll" : "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 py-8 md:px-4 lg:px-2 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 items-end">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
             CT Homes Deserve Better. <br /> We Build Them<span className="text-[#FF6900]"> That Way.</span>
            </h1>
            <p className="text-md lg:text-lg text-gray-200">
              Expert roofing, gutters, and exterior renovations from a local crew that treats your home like our own.
            </p>
          </div>
        </div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-2">
            <div>
              <h2 className="text-md text-[#FF6900] font-bold  ">
                SERVICES
              </h2>
              <h2 ref={servicesRef} className="text-4xl font-bold pt-2 leading-tight">
                <motion.span
                  className="block"
                  style={{
                    backgroundImage: useTransform(
                      servicesFillLine1,
                      (value) => `linear-gradient(to right, #000000 ${value}, #D1D5DB ${value})`
                    ),
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Top notch roofing services,
                </motion.span>
                <motion.span
                  className="block"
                  style={{
                    backgroundImage: useTransform(
                      servicesFillLine2,
                      (value) => `linear-gradient(to right, #000000 ${value}, #D1D5DB ${value})`
                    ),
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  trusted by many in CT
                </motion.span>
              </h2>
            </div>
            <div className="pt-3 lg:pt-0">
              <p className="text-md md:text-lg mb-4 ">
               For over a decade, A&R Renovations has been the trusted name for roof repair, gutter installation, siding, and emergency fixes across Connecticut. We&apos;re not the biggest company out there—and that&apos;s exactly how our customers like it. <br /> <br />
              Every project gets our full attention, from the first call to the final cleanup. Whether you&apos;re dealing with storm damage, planning a full exterior refresh, or just need gutters that actually work, we show up on time, do it right, and stand behind our work.
              </p>
            </div>
          </div>
          
        </motion.div>
     
      </section>
      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
          <Card 
            imageUrl="https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
            title="Roofing Services"
            description="Whether it&apos;s a small leak or a full replacement, we handle every roofing project with the same care and expertise. Quality materials, clean work sites, and warranties you can count on."
            link="/roofing"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1569898773055-2f2b6e97e1ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035"
            title="Gutter Installation"
            description="Seamless gutters designed to protect your foundation, siding, and landscaping. Stop worrying about clogs, leaks, and water damage."
            link="/gutters"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1612451850869-87c3c039c72e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=985"
            title="Siding Services"
            description="Transform your home&apos;s curb appeal and energy efficiency with new siding. We work with vinyl, fiber cement, and wood—installed to last."
            link="/renovations"
          />
           <Card 
            imageUrl="https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="24/7 Emergency Repairs"
            description="When disaster strikes, we respond fast. Emergency tarping, leak repairs, and insurance claim support when you need it most."
            link="/roofing"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Skylights & Ventilation"
            description="Bring light in and keep moisture out. We install energy-efficient skylights and ridge vents that help your roof breathe — literally."
            link="/skylights-ventilation"
          />
          <Card 
            imageUrl="https://images.unsplash.com/photo-1685537711146-d6c29e41eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Chimney Flashings & Waterproofing"
            description="Protect one of the most leak-prone areas of your roof. We repair damaged flashing, seal gaps, and apply durable waterproofing to keep your home dry and secure through every season."
            link="/chimney-flashings"
          />
        </div>
        </section>
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-md text-[#FF6900] font-bold  ">
               WHY US?
          </h2>
          <h2 ref={whyUsRef} className="text-4xl pt-2 font-bold mb-4 leading-tight">
            <motion.span
              className="block"
              style={{
                backgroundImage: useTransform(
                  whyUsFillLine1,
                  (value) => `linear-gradient(to right, #000000 ${value}, #D1D5DB ${value})`
                ),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Why CT homeowners choose
            </motion.span>
            <motion.span
              className="block"
              style={{
                backgroundImage: useTransform(
                  whyUsFillLine2,
                  (value) => `linear-gradient(to right, #000000 ${value}, #D1D5DB ${value})`
                ),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              A&R Renovations?
            </motion.span>
          </h2>
        
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-md md:text-lg mb-4 ">
            Our team brings precision, honesty, and a neighborly attitude to every job we take on. We&apos;re family-owned and locally trusted for roofing, gutters, and siding upgrades that actually last and for clear communication every step of the way.
          </p>
          <p className="text-md md:text-lg mb-4 "> We&apos;re licensed and insured, and we always put safety first on every project. Because we&apos;re local, you get quick responses and service that feels personal. We don&apos;t believe in pushy sales tactics. We just give honest recommendations about what you actually need. Every project also comes with a free detailed estimate and clear photos so you always know what&apos;s going on.</p>
        </motion.div>

      </section>

      {/* Blog Carousel Section */}
      <section className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-md text-[#FF6900] font-bold">BLOG</h2>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold pt-2 leading-tight">
              Latest Tips & Insights
            </h2>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-2"
            animate={{ x: `${-currentSlide * (isMobile ? 100 : 100)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {blogPosts.map((post, index) => (
              <div key={index} className="min-w-[calc(100%-0.5rem)] md:min-w-[calc(33.333%-0.5rem)]">
                <Card
                  imageUrl={post.imageUrl}
                  title={post.title}
                  description={post.description}
                  link={post.link}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gray-100 mb-10">
        <div className="max-w-7xl mx-auto py-12 md:px-2 px-2 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-md text-[#FF6900] font-bold">GET IN TOUCH</h2>
              <h2 className="text-4xl md:text-5xl font-bold pt-2 mb-6 leading-tight">
                Ready to <span className="text-[#FF6900]">Transform</span> Your Home?
              </h2>
              <p className="text-md md:text-lg mb-6 text-gray-700">
                Fill out the form and we&apos;ll get back to you within 24 hours. <br/> Or call us directly at <span className="font-bold text-[#FF6900]">(203) 943-8650</span>
              </p>
             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="roofing">Roofing</option>
                      <option value="gutters">Gutters</option>
                      <option value="siding">Siding</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF6900] hover:bg-[#FF6900]/90 text-white py-6 text-lg rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
     
    </div>
  );
}
