import React, { useEffect, useState } from 'react';
import {
  BarChart3,
  Calendar,
  ClipboardList,
  CreditCard,
  DollarSign,
  FileText,
  Layout,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  Settings,
  Users,
  Menu,
  X,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Star
} from 'lucide-react';
import FacebookPixel from './FacebookPixel';
import MicrosoftClarity from './components/MicrosoftClarity';
import { trackPixelEvent } from './utils/pixel';

const scrollbarStyles = `
  /* Webkit browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(10px);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, 
      rgba(99, 102, 241, 0.8),
      rgba(139, 92, 246, 0.8),
      rgba(99, 102, 241, 0.8)
    );
    border-radius: 6px;
    border: 3px solid rgba(15, 23, 42, 0.9);
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg,
      rgba(79, 70, 229, 1),
      rgba(124, 58, 237, 1),
      rgba(79, 70, 229, 1)
    );
  }

  ::-webkit-scrollbar-corner {
    background: rgba(15, 23, 42, 0.9);
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(99, 102, 241, 0.8) rgba(15, 23, 42, 0.9);
  }
`;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const link = e.currentTarget as HTMLAnchorElement;
        const href = link.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            // Close mobile menu if open
            setIsMenuOpen(false);
            // Scroll to target with offset for fixed header
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  const features = [
    { icon: <Layout className="w-6 h-6" />, title: 'Instructions Page', description: 'Simple, step-by-step guide for getting started' },
    { icon: <Settings className="w-6 h-6" />, title: 'Setup Page', description: 'Personalize settings for your business needs' },
    { icon: <LayoutDashboard className="w-6 h-6" />, title: 'Dashboard', description: 'Visualize business insights and track performance' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Calendar', description: 'Easy scheduling and appointment management' },
    { icon: <Users className="w-6 h-6" />, title: 'Client Management', description: 'Store detailed client records for quick access' },
    { icon: <MessageSquare className="w-6 h-6" />, title: 'Communication Log', description: 'Track and log client communication effortlessly' },
    { icon: <ClipboardList className="w-6 h-6" />, title: 'Task-Project Tracker', description: 'Organize tasks and projects efficiently' },
    { icon: <FileText className="w-6 h-6" />, title: 'Invoices', description: 'Generate professional invoices directly' },
    { icon: <CreditCard className="w-6 h-6" />, title: 'Print Invoice', description: 'Direct print option for invoices' },
    { icon: <DollarSign className="w-6 h-6" />, title: 'Income Entry', description: 'Simple and accurate income tracking' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Expense Entry', description: 'Log and categorize business expenses' },
    { icon: <PieChart className="w-6 h-6" />, title: 'Monthly View', description: 'Visualize monthly income/expense reports' }
  ];

  const testimonials = [
    {
      name: 'Ruchi Sahu',
      role: 'Small Business Owner',
      image: 'https://i.pinimg.com/236x/df/3f/08/df3f0830c7e1e203c74917deea197b3d.jpg',
      quote: 'This tracker transformed how I manage my service business. Everything I need is in one place!'
    },
    {
      name: 'Harsh Raj',
      role: 'Freelance Consultant',
      image: 'https://i.pinimg.com/236x/2c/1e/51/2c1e51fbb2ce4e5ec1d1e8ea93bb4788.jpg',
      quote: "The all-in-one solution I've been searching for. Incredibly intuitive and powerful!"
    },
    {
      name: 'Nikita Sharma',
      role: 'Agency Director',
      image: 'https://img.freepik.com/premium-photo/silhouette-woman-posing-before-colorful-beach-sunset_1358627-12177.jpg',
      quote: "Outstanding features and premium support. It's completely streamlined our operations."
    },
    {
      name: 'Rohan Mishra',
      role: 'Financial Advisor',
      image: 'https://cdn.pixabay.com/photo/2023/02/19/08/39/man-7799486_640.jpg',
      quote: 'The financial tracking features are exceptional. Makes tax season a breeze!'
    },
    {
      name: 'Radika Gupta',
      role: 'Marketing Consultant',
      image: 'https://i.pinimg.com/736x/a7/62/98/a7629832801fc735f40340672ac430df.jpg',
      quote: 'The client management system has helped me grow my business by 40% this year.'
    },
    {
      name: 'Rajiv Kumar',
      role: 'IT Services Provider',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjsZGZKPgSTZHRlLd2SXpJUBr7wAbZc9gKg&s',
      quote: 'Fantastic tool for tracking multiple projects and client communications simultaneously.'
    },
    {
      name: 'Muskan Garg',
      role: 'Interior Designer',
      image: 'https://i.pinimg.com/736x/41/9c/8d/419c8d2af72e6b82beb4551a9af1c7c9.jpg',
      quote: 'The invoice generation and tracking features save me hours every week!'
    },
    {
      name: 'Vikash Sharma',
      role: 'Business Coach',
      image: 'https://cdn.pixabay.com/photo/2021/12/28/04/38/cute-6898591_960_720.jpg',
      quote: "I recommend this tool to all my clients. It's perfect for scaling service businesses."
    },
    {
      name: 'Mahi Singh',
      role: 'Event Planner',
      image: 'https://i.pinimg.com/originals/f5/6d/2f/f56d2f3bddfaddcb68523e3592257d44.jpg',
      quote: 'The calendar and task management features are game-changers for event coordination.'
    }
  ];

  const galleryImages = [
    {
      src: "https://i.etsystatic.com/40473668/r/il/9d8b42/5706211721/il_1588xN.5706211721_cfsp.jpg",
      alt: "Business Solution 1",
      title: "All In One Solution"
    },
    {
      src: "https://i.etsystatic.com/40473668/r/il/df41bf/5658156062/il_1588xN.5658156062_m3ns.jpg",
      alt: "Dashboard Insights",
      title: "Business Analytics Dashboard"
    },
    {
      src: "https://i.etsystatic.com/40473668/r/il/6f0a2d/5706211549/il_1588xN.5706211549_1tso.jpg",
      alt: "Dashboard Insights",
      title: "CALENDAR INSIGHTS"
    },
    {
      src: "https://i.etsystatic.com/40473668/r/il/98a7a6/5658155044/il_1588xN.5658155044_8ryp.jpg",
      alt: "Dashboard Insights",
      title: "CLIENT COMMUNICATION"
    },
    {
      src: "https://i.etsystatic.com/40473668/r/il/d827e1/5658155168/il_1588xN.5658155168_ngmr.jpg",
      alt: "Dashboard Insights",
      title: "TASKS & INVOICES"
    },
    {
      src: "https://i.etsystatic.com/40473668/r/il/5916f1/5706211929/il_1588xN.5706211929_pc86.jpg",
      alt: "Dashboard Insights",
      title: "EFFICIENT BOOKKEEPING TOOLS"
    },
    {
      src: "https://i.etsystatic.com/40473668/r/il/1848ea/5658156064/il_1588xN.5658156064_9wbz.jpg",
      alt: "Dashboard Insights",
      title: "MASTER YOUR FINANCES"
    },
    {
      src: "https://i.etsystatic.com/40473668/r/il/5f51ac/6003686902/il_1588xN.6003686902_c6pt.jpg",
      alt: "Dashboard Insights",
      title: "A to Z SERVICE BUSINESS MANAGER"
    }
    // Add remaining images here...
  ];

  return (
    <>
      <FacebookPixel />
      <MicrosoftClarity />
      <style>{scrollbarStyles}</style>
      <div className="min-h-screen bg-dark text-white">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-premium' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <LayoutDashboard className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-400 to-violet-400 text-transparent bg-clip-text">BusinessTracker</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-300 hover:text-primary-400 transition-colors">Testimonials</a>
                <a href="#pricing" className="text-gray-300 hover:text-primary-400 transition-colors">Pricing</a>
                <a 
                  href="https://payments.cashfree.com/forms/service-business"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-primary-600 to-violet-600 text-white px-6 py-2 rounded-full hover:from-primary-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-glow"
                >
                  Get Started
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-primary-400 focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden glass-effect border-t border-white/10">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Features</a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Testimonials</a>
                <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Pricing</a>
                <a
                  href="https://payments.cashfree.com/forms/service-business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 block text-center bg-gradient-to-r from-primary-600 to-violet-600 text-white px-6 py-2 rounded-full hover:from-primary-700 hover:to-violet-700"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 hero-gradient">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center glass-effect rounded-full px-4 py-1 mb-6">
              <Sparkles className="h-4 w-4 text-primary-400 mr-2" />
              <span className="text-primary-400 text-sm font-medium">Premium Solution</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-primary-200 to-violet-200 text-transparent bg-clip-text">
              Transform Your Service Business with the Ultimate All-in-One Tracker
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            🚀 Effortlessly organize, take control of your finances, and manage clients like a pro—all with the power of Google Sheets & Excel! 💼
            </p>

            {/* Added image */}
            <img 
              src="https://figmaui4free.com/wp-content/uploads/2022/06/Saas-B2B-Dashboard-Design-1.png"
              alt="Product showcase" 
              className="max-w-2xl w-full mx-auto mb-8 rounded-2xl 
                border-[3px] border-white/10 
                shadow-[0_0_30px_rgba(79,70,229,0.15)] 
                hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] 
                hover:border-primary-400/30 
                transition-all duration-500 
                transform hover:scale-[1.02]
                bg-gradient-to-r from-primary-600/10 to-violet-600/10 p-1"
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://payments.cashfree.com/forms/service-business"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixelEvent('InitiateCheckout')}
                className="bg-gradient-to-r from-primary-600 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-medium 
                  hover:from-primary-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-glow 
                  inline-flex items-center justify-center group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="glass-effect text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all border border-white/20">
                Instant Access
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-violet-200 text-transparent bg-clip-text">
                16 Essential Features for Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your service business efficiently in one powerful platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card-gradient p-6 rounded-2xl shadow-premium hover:shadow-glow transition-all transform hover:-translate-y-1 border border-white/10"
                >
                  {/* Updated icon container for mobile centering */}
                  <div className="flex md:block justify-center">
                    <div className="bg-gradient-to-br from-primary-500/20 to-violet-500/20 rounded-lg p-3 inline-block mb-4">
                      {React.cloneElement(feature.icon, { className: "w-6 h-6 text-primary-400" })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center md:text-left">{feature.title}</h3>
                  <p className="text-gray-300 text-center md:text-left">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 px-4 bg-dark relative overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-violet-600/5 to-dark" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
          
          <div className="max-w-7xl mx-auto relative">
            {/* Enhanced header section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center glass-effect rounded-full px-6 py-2 mb-8 border border-white/10 shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-400 mr-2 animate-pulse" />
                <span className="text-primary-400 text-base font-medium">Interactive Gallery</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-violet-200 text-transparent bg-clip-text animate-gradient">
                Our Tool Preview
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Experience the power of our comprehensive business management solution through these interactive previews
              </p>
            </div>

            {/* Updated grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative transform transition-all duration-700 hover:-translate-y-2 hover:rotate-1 cursor-pointer"
                  onClick={() => window.open(image.src, '_blank')}
                >
                  <div className="relative bg-dark-800/90 p-3 rounded-2xl backdrop-blur-sm 
                    shadow-[0_8px_32px_rgba(79,70,229,0.15)]
                    group-hover:shadow-[0_20px_80px_rgba(79,70,229,0.3)]
                    transition-all duration-700 border border-white/10 group-hover:border-white/20">
                    
                    {/* Image container */}
                    <div className="animated-border">
                      <div className="overflow-hidden rounded-xl aspect-[4/3]">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain sm:object-cover transition-all duration-700 
                            p-2 sm:p-0"
                        />
                      </div>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute inset-0 rounded-2xl flex items-center justify-center
                      bg-gradient-to-b from-transparent via-dark-900/60 to-dark-900/95
                      opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="text-center p-6">
                        <span className="inline-flex items-center text-white text-lg font-medium px-6 py-3 rounded-full 
                          bg-gradient-to-r from-primary-600/90 to-violet-600/90 backdrop-blur-md
                          shadow-[0_8px_32px_rgba(79,70,229,0.3)] border border-white/10">
                          {image.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-4 hero-gradient">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-violet-200 text-transparent bg-clip-text">
                Loved by Business Owners
              </h2>
              <p className="text-xl text-gray-300">
                See what our customers have to say about their experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-effect p-8 rounded-2xl shadow-premium hover:shadow-glow transition-all transform hover:-translate-y-1 hover:scale-[1.02] duration-500"
                >
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full ring-2 ring-primary-400 object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = 'https://i.ibb.co/M8Gkp9V/default-avatar.jpg'; // Fallback image
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-primary-400 rounded-full p-1">
                        <Star className="w-3 h-3 text-dark fill-current" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-4 text-primary-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-dark relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-violet-600/5 to-dark" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center glass-effect rounded-full px-6 py-2 mb-8 border border-white/10 shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-400 mr-2 animate-pulse" />
                <span className="text-primary-400 text-base font-medium">Premium Package</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-violet-200 text-transparent bg-clip-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get access to all premium features at an unbeatable price
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="glass-effect rounded-3xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-500 hover:shadow-glow">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Premium Package</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-400 text-2xl mr-2">₹</span>
                    <span className="text-6xl font-bold bg-gradient-to-r from-white via-primary-200 to-violet-200 text-transparent bg-clip-text">499</span>
                    <span className="text-gray-400 ml-2 text-lg">/lifetime</span>
                  </div>
                  <p className="text-primary-400">One-time payment, lifetime access</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "All 16+ Premium Features",
                    "Unlimited Client Management",
                    "Advanced Financial Tracking",
                    "Premium Dashboard Access",
                    "Detailed Analytics & Reports",
                    "Invoice Generation & Management",
                    "Task & Project Management",
                    "Calendar & Scheduling Tools",
                    "Communication Log System",
                    "Free Lifetime Updates",
                    "Priority Customer Support",
                    "Secure Data Backup"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href="https://payments.cashfree.com/forms/service-business"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackPixelEvent('InitiateCheckout')}
                    className="w-full bg-gradient-to-r from-primary-600 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-medium 
                      hover:from-primary-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-glow 
                      flex items-center justify-center group">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="mt-4 text-gray-400 text-sm">
                    30-day money-back guarantee • Secure payment
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
                <p className="text-gray-300">Your data is protected with enterprise-grade security</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Get help whenever you need it with our dedicated support</p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Regular Updates</h3>
                <p className="text-gray-300">Enjoy continuous improvements and new features</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-violet-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of successful business owners who have streamlined their operations.
            </p>
            <a
              href="https://payments.cashfree.com/forms/service-business"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixelEvent('InitiateCheckout')}
              className="glass-effect text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all transform hover:scale-105 shadow-glow inline-flex items-center"
            >
              Get Started Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section> */}

        {/* Footer */}
        <footer className="bg-dark-900/50 text-gray-300 py-12 px-4 glass-effect">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <LayoutDashboard className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-400 to-violet-400 text-transparent bg-clip-text">BusinessTracker</span>
              </div>
              <p className="text-gray-400">
                Transform your service business with our all-in-one solution.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-primary-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary-400 transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-primary-400 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg glass-effect border border-white/20 focus:outline-none focus:border-primary-500 bg-dark-800/50"
                />
                <button className="w-full bg-gradient-to-r from-primary-600 to-violet-600 text-white px-4 py-2 rounded-lg hover:from-primary-700 hover:to-violet-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 BusinessTracker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
