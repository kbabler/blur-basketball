import React, { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    mint: '#76C49D',
    purple: '#8860C1',
    lavender: '#C8B9DD',
    dark: '#1a1a1a',
    light: '#f9f9fb'
  };

  const NavLink = ({ href, children, mobile }) => (
    <a 
      href={href} 
      onClick={() => setIsMenuOpen(false)}
      className={`${mobile ? 'block py-4 text-xl' : 'inline-block mx-4'} font-medium hover:text-[#76C49D] transition-colors`}
    >
      {children}
    </a>
  );

  const SectionHeading = ({ children, subtitle, light = false }) => (
    <div className="mb-12 text-center">
      <h2 className={`text-3xl md:text-5xl font-black italic uppercase mb-4 tracking-tighter ${light ? 'text-white' : ''}`} style={{ color: light ? 'white' : colors.purple }}>
        {children}
      </h2>
      {subtitle && <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-gray-200' : 'text-gray-600'}`}>{subtitle}</p>}
      <div className="h-1.5 w-24 mx-auto mt-6 rounded-full" style={{ backgroundColor: colors.mint }}></div>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center font-sans text-gray-900 bg-white selection:bg-[#C8B9DD] overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'} border-b border-gray-100 h-32`}>
        <div className="max-w-5xl mx-auto px-6 h-full">
          <div className="grid grid-cols-3 items-center h-full">
            
            {/* LEFT SIDE: Pushed toward the center */}
            <div className="hidden lg:flex justify-end gap-10">
              <NavLink href="#philosophy">Philosophy</NavLink>
              <NavLink href="#model">The Model</NavLink>
            </div>

            {/* CENTER: The Anchor */}
            <div className="flex justify-center">
              <div className="flex items-center gap-4 group cursor-pointer">
                <img src="/Blur-logo.png" alt="Blur Basketball" className="h-25 w-auto object-contain transition-transform group-hover:scale-110" />
              </div>
            </div>

            {/* RIGHT SIDE: Pushed toward the center */}
            <div className="hidden lg:flex justify-start gap-10 items-center">
              <NavLink href="#handbook">Handbook</NavLink>
              <NavLink href="#coaching">Coaching</NavLink>
              <button className="px-8 py-3 rounded-full font-black italic uppercase tracking-wider text-white transition-all hover:shadow-[0_0_20px_rgba(137,97,196,0.4)] hover:-translate-y-0.5" style={{ backgroundColor: colors.purple }}>
                Register
              </button>
            </div>

            <button className="lg:hidden absolute right-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <Lucide.X size={28} color="#1a1a1a" /> : <Lucide.Menu size={28} color="#1a1a1a" />}
            </button>

          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center text-gray-900 animate-in slide-in-from-top duration-300">
             <button className="absolute top-6 right-6 p-2" onClick={() => setIsMenuOpen(false)}><Lucide.X size={32} /></button>
             <div className="text-center space-y-4">
               <NavLink href="#philosophy" mobile>Our Philosophy</NavLink>
               <NavLink href="#model" mobile>Developmental Model</NavLink>
               <NavLink href="#handbook" mobile>Parent Handbook</NavLink>
               <NavLink href="#coaching" mobile>Coaching Pillars</NavLink>
               <button className="mt-8 px-12 py-4 rounded-full font-black text-white text-xl uppercase italic shadow-xl" style={{ backgroundColor: colors.purple }}>
                  Register Now
               </button>
             </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white pt-32">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] blur-[150px] rounded-full opacity-20 animate-pulse" style={{ backgroundColor: colors.purple }}></div>
           <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] blur-[150px] rounded-full opacity-15" style={{ backgroundColor: colors.mint }}></div>
        </div>
        
        <div className="w-full relative z-10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8 text-center" style={{ color: colors.purple }}>
              A HIGHER STANDARD <br/>
              FOR <span style={{ color: colors.mint }}>YOUTH BASKETBALL</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light max-w-2xl text-center">
              We have evolved with a structured, athletic-department approach. Led by ADs and Head Coaches, Blur provides the organized communication, professional coaching, and developmental roadmap your athlete deserves.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-6 rounded-full font-black text-xl uppercase italic tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: colors.mint, color: colors.dark }}>
                Join the Club
              </button>
              <button className="w-full sm:w-auto px-12 py-6 rounded-full font-black text-xl uppercase italic tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: colors.dark, color: colors.mint }}>
                Season Info
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Lucide.ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* Location Badge Section */}
      <section className="py-8 bg-transparent">
        <div className="w-full flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border" style={{ backgroundColor: colors.dark, borderColor: colors.mint }}>
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: colors.mint }}></span>
            <span className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: colors.mint }}>West Metro Twin Cities • Focused on Development</span>
          </div>
        </div>
      </section>

      {/* The Blur Difference Section */}
      <section id="philosophy" className="py-24 bg-white relative w-full">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading subtitle="We've eliminated the uncertainty of club sports with three core pillars.">
            The Blur Difference
          </SectionHeading>

          <div className="w-full flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 mx-auto">
            {[
              { title: 'Intentional Leadership', desc: 'Managed by Athletics Directors and seasoned coaches who understand the path from youth to high school.', icon: <Lucide.Users /> },
              { title: 'Proprietary Pathing', desc: 'Our Blur Development Model (BDM) ensures every drill, practice, and game is age-appropriate and purposeful.', icon: <Lucide.TrendingUp /> },
              { title: 'Pro-Level Communication', desc: 'No more app fatigue. Clear schedules, direct feedback, and organized operations you can trust.', icon: <Lucide.MessageSquare /> }
            ].map((pillar, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 text-center" style={{ backgroundColor: colors.lavender + '40' }}>
                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg mx-auto" style={{ backgroundColor: colors.purple }}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-black leading-relaxed font-medium" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Blur Development Model (BDM) Section */}
      <section id="model" className="py-24 overflow-hidden w-full" style={{ backgroundColor: colors.lavender + '20' }}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading subtitle="We don't just 'play ball.' We follow a specific, four-stage progression that prioritizes physical literacy and skill consolidation over short-term trophy hunting.">
            The Blur Development Model (BDM)
          </SectionHeading>

          <div className="w-full flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
            {/* Foundations */}
            <div className="rounded-[2.5rem] p-10 shadow-sm border-4 flex flex-col" style={{ backgroundColor: colors.lavender + '40', borderColor: colors.purple }}>
              <div className="text-xs font-black uppercase tracking-widest mb-4 opacity-40">Stage 01</div>
              <h3 className="text-2xl font-black italic uppercase mb-4" style={{ color: colors.purple }}>Foundations</h3>
              <p className="text-sm font-bold text-gray-700 mb-2">Motor Skills & Discovery</p>
              <p className="text-sm text-gray-500 mb-8 font-medium" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>Falling in love with the game through fun, physical literacy, and basic coordination.</p>
              <ul className="space-y-3 mt-auto">
                {['Basic Motor Skills', 'Fun-First Approach', 'Game Discovery'].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <Lucide.CheckCircle2 size={16} style={{ color: colors.mint }} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ascent */}
            <div className="rounded-[2.5rem] p-10 shadow-sm border-4 flex flex-col bg-white" style={{ borderColor: colors.purple }}>
              <div className="text-xs font-black uppercase tracking-widest mb-4 opacity-40">Stage 02</div>
              <h3 className="text-2xl font-black italic uppercase mb-4" style={{ color: colors.purple }}>Ascent</h3>
              <p className="text-sm font-bold text-gray-700 mb-2">Tactical IQ & Skill Consolidation</p>
              <p className="text-sm text-gray-500 mb-8 font-medium" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>Learning how to compete effectively with intentional skill development.</p>
              <ul className="space-y-3 mt-auto">
                {['Tactical Awareness', 'Skill Building', 'Competition Readiness'].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <Lucide.CheckCircle2 size={16} style={{ color: colors.mint }} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance */}
            <div className="rounded-[2.5rem] p-10 shadow-sm border-4 flex flex-col" style={{ backgroundColor: colors.lavender + '40', borderColor: colors.purple }}>
              <div className="text-xs font-black uppercase tracking-widest mb-4 opacity-40">Stage 03</div>
              <h3 className="text-2xl font-black italic uppercase mb-4" style={{ color: colors.purple }}>Performance</h3>
              <p className="text-sm font-bold text-gray-700 mb-2">Role-Specific Mastery</p>
              <p className="text-sm text-gray-500 mb-8 font-medium" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>Bridging skill development and tactics for high school readiness.</p>
              <ul className="space-y-3 mt-auto">
                {['Role Mastery', 'Advanced Training', 'HS Preparation'].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <Lucide.CheckCircle2 size={16} style={{ color: colors.mint }} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Elite */}
            <div className="rounded-[2.5rem] p-10 shadow-xl border-4 flex flex-col scale-105 bg-white" style={{ borderColor: colors.purple }}>
              <div className="text-xs font-black uppercase tracking-widest mb-4 opacity-40">Stage 04</div>
              <h3 className="text-2xl font-black italic uppercase mb-4" style={{ color: colors.purple }}>Elite</h3>
              <p className="text-sm font-bold text-gray-700 mb-2">High-Stakes Execution</p>
              <p className="text-sm text-gray-500 mb-8 font-medium" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>Collegiate-level preparation, exposure, and recruiting assistance.</p>
              <ul className="space-y-3 mt-auto">
                {['College Prep', 'Recruiting Support', 'Elite Exposure'].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <Lucide.CheckCircle2 size={16} style={{ color: colors.purple }} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Coaching Pillars */}
      <section id="coaching" className="py-24 bg-white w-full">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 tracking-tighter" style={{ color: colors.mint }}>The Blur Coaching <span style={{ color: colors.purple }}>Pillars</span></h2>
              <p className="text-xl text-black font-medium" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>Effort and decision-making are the two most ability-independent skills that can be taught. We focus on building an environment that emphasizes these.</p>
           </div>
           <div className="w-full flex justify-center">
             <div className="grid md:grid-cols-3 gap-12 mx-auto">
              {[
                { title: 'The Threshold', text: 'Engagement starts at the door. We greet every player by name, building rapport before the training begins.', icon: <Lucide.DoorOpen /> },
                { title: 'Skill over Scheme', text: 'We prioritize teaching kids HOW to play, not just set plays. Fundamentals are the foundation of IQ.', icon: <Lucide.Brain /> },
                { title: 'Ownership', text: 'We empower players to advocate for themselves and take responsibility for their own development.', icon: <Lucide.Heart /> }
              ].map((p, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center bg-gray-50 text-gray-700 group-hover:bg-[#8860C1] transition-colors duration-500 group-hover:text-white group-hover:rotate-6 shadow-sm">
                    {React.cloneElement(p.icon, { size: 32 })}
                  </div>
                  <h4 className="text-2xl font-black italic uppercase mb-3 tracking-tight" style={{ color: colors.purple }}>{p.title}</h4>
                  <p className="text-black leading-relaxed font-medium" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>{p.text}</p>
                </div>
              ))}
             </div>
           </div>
        </div>
      </section>

      {/* Parent Handbook Section */}
      <section id="handbook" className="py-24" style={{ backgroundColor: colors.light }}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-5 py-2 rounded-full text-white font-black italic uppercase tracking-widest mb-6" style={{ backgroundColor: colors.lavender }}>
                Parent Handbook
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-8 tracking-tighter" style={{ color: colors.purple }}>
                The Blur <br/><span style={{ color: colors.mint }}>Partnership</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 font-medium leading-relaxed" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>
                We believe in a Student-First model. Success is a byproduct of consistent effort and a supportive family environment.
              </p>
              
              <div className="space-y-10">
                {[
                  { icon: <Lucide.Clock />, title: "The 24-Hour Rule", text: "Wait at least 24 hours after a game before contacting a coach to ensure productive dialogue.", color: colors.purple },
                  { icon: <Lucide.ShieldCheck />, title: "What Not to Discuss", text: "Strategy and other athletes are off-limits. We focus on your child's individual growth and discuss playing time with them.", color: colors.mint },
                  { icon: <Lucide.Users />, title: "Empower Your Child", text: "Encourage athletes to advocate for themselves by approaching coaches directly for feedback.", color: colors.purple }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110" style={{ backgroundColor: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black italic uppercase mb-2 tracking-tight" style={{ color: colors.mint }}>{item.title}</h4>
                      <p className="text-gray-600 font-medium leading-relaxed" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <div className="bg-white rounded-[3.5rem] p-12 border border-gray-100 shadow-xl relative overflow-hidden">
                  <h3 className="text-3xl font-black italic uppercase mb-10 text-center tracking-tight">Parent FAQ</h3>
                  <div className="space-y-6">
                    {[
                      { q: "How is playing time earned?", a: "Playing time is earned through learning what is taught and giving 100% effort every single day." },
                      { q: "Where do we practice?", a: "We utilize premier facilities across the West Metro, including Wayzata, Minnetonka, and Hopkins districts." }
                    ].map((faq, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                        <p className="font-black italic uppercase text-sm mb-2 tracking-wider" style={{ color: colors.purple }}>Q: {faq.q}</p>
                        <p className="text-gray-600 font-medium leading-relaxed" style={{ textAlign: 'justify', hyphens: 'auto', width: '100%' }}>{faq.a}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-24 relative overflow-hidden bg-transparent">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto border p-12 md:p-16 rounded-[4rem] shadow-xl" style={{ backgroundColor: colors.dark, borderColor: colors.mint }}>
             <div className="text-center mb-12">
               <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 tracking-tighter text-white">Experience the Higher Standard</h2>
               <p className="text-xl" style={{ color: colors.mint }}>Join our next clinic or evaluation to see how our professionalized coaching and structured curriculum set us apart.</p>
             </div>
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
               <input type="text" placeholder="Athlete Name" className="rounded-2xl p-5 placeholder:text-gray-500 focus:outline-none transition-all" style={{ backgroundColor: 'rgba(118, 196, 157, 0.1)', border: `2px solid ${colors.mint}`, color: colors.mint }} />
               <input type="email" placeholder="Email Address" className="rounded-2xl p-5 placeholder:text-gray-500 focus:outline-none transition-all" style={{ backgroundColor: 'rgba(118, 196, 157, 0.1)', border: `2px solid ${colors.mint}`, color: colors.mint }} />
               <input type="text" placeholder="Current Grade" className="rounded-2xl p-5 placeholder:text-gray-500 focus:outline-none transition-all" style={{ backgroundColor: 'rgba(118, 196, 157, 0.1)', border: `2px solid ${colors.mint}`, color: colors.mint }} />
               <button className="px-8 py-5 rounded-2xl font-black italic uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl" style={{ backgroundColor: colors.mint, color: colors.dark }}>
                  Register Now
               </button>
             </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-start gap-3 mb-8">
                <img src="/Blur-logo.png" alt="Blur Basketball" className="h-25 w-auto object-contain" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
              </div>
              <p className="text-gray-500 font-medium leading-relaxed">
                A higher standard for youth basketball. Structured, professional development led by experienced athletic directors and coaches.
              </p>
            </div>
            
            <div>
              <h4 className="font-black italic uppercase text-xs tracking-[0.2em] text-gray-400 mb-8">BDM Stages</h4>
              <ul className="space-y-4 text-gray-600 font-bold italic uppercase text-sm">
                <li><a href="#model" className="hover:text-[#76C49D] transition-colors">Foundations</a></li>
                <li><a href="#model" className="hover:text-[#76C49D] transition-colors">Ascent</a></li>
                <li><a href="#model" className="hover:text-[#76C49D] transition-colors">Performance</a></li>
                <li><a href="#model" className="hover:text-[#76C49D] transition-colors">Elite</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic uppercase text-xs tracking-[0.2em] text-gray-400 mb-8">Resources</h4>
              <ul className="space-y-4 text-gray-600 font-bold italic uppercase text-sm">
                <li><a href="#" className="hover:text-[#76C49D] transition-colors">Parent Handbook</a></li>
                <li><a href="#" className="hover:text-[#76C49D] transition-colors">Coaching Checklist</a></li>
                <li><a href="#" className="hover:text-[#76C49D] transition-colors">Season Schedule</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic uppercase text-xs tracking-[0.2em] text-gray-400 mb-8">Connect</h4>
              <div className="space-y-4 text-gray-600 font-bold italic uppercase text-sm">
                <p>West Metro, Twin Cities</p>
                <p style={{ color: colors.purple }}>info@polarathleticgroup.com</p>
                <div className="flex gap-4 mt-6">
                   <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer" style={{ '&:hover': { backgroundColor: colors.purple } }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.purple} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}><Lucide.Users size={20}/></div>
                   <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer" style={{ '&:hover': { backgroundColor: colors.mint } }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.mint} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}><Lucide.Trophy size={20}/></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs font-black uppercase tracking-widest text-gray-400">
             <p>Powered by Polar Athletic Group</p>
             <div className="flex gap-8 mt-6 md:mt-0">
                <a href="#" className="hover:text-gray-900">Privacy</a>
                <a href="#" className="hover:text-gray-900">Conduct</a>
                <a href="#" className="hover:text-gray-900">Safesport</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
