import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/constants';
import { FaEnvelope, FaMapMarkerAlt, FaTimes, FaPaperPlane } from 'react-icons/fa';
import Stepper, { Step } from '@/components/ui/Stepper';
import SpecularButton from '@/components/ui/SpecularButton';
export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSendEmail = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Access key provided by user
    const WEB3FORMS_ACCESS_KEY = "92618f0d-e775-4097-86dd-83ce134551c4"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Contact from Portfolio",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus(null);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
      
      <div className="max-w-[800px] w-full mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Let's build <span className="text-gradient-purple">together.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Currently open to internships, collaborations, and new opportunities in AI & ML engineering.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <SpecularButton 
              onClick={() => setIsModalOpen(true)}
            >
              <FaEnvelope /> Say Hello
            </SpecularButton>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-12">
            <FaMapMarkerAlt /> <span>Based in {personalInfo.location}</span>
          </div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.2  }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-6">
            <a href={personalInfo.socials.github} className="text-white/60 hover:text-white transition-colors text-sm font-medium interactive">GitHub</a>
            <a href={personalInfo.socials.linkedin} className="text-white/60 hover:text-white transition-colors text-sm font-medium interactive">LinkedIn</a>
          </div>
          
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>

      </div>

      {/* Contact Form Modal using Stepper */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] w-full max-w-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Close Button */}
              <SpecularButton 
                onClick={() => setIsModalOpen(false)}
                size="sm"
                className="absolute top-6 right-6 z-50 !p-3"
                radius={999}
              >
                <FaTimes size={20} />
              </SpecularButton>

              <div className="p-8 pb-4">
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-white/50 text-sm">Let's discuss how we can work together.</p>
              </div>

              <div className="px-4 pb-8">
                <Stepper
                  initialStep={1}
                  onFinalStepCompleted={handleSendEmail}
                  backButtonText="Back"
                  nextButtonText="Next"
                >
                  <Step>
                    <div className="flex flex-col gap-4 py-4">
                      <h4 className="text-xl font-semibold text-white mb-2">Step 1: Introduction</h4>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60 font-medium">Your Name</label>
                        <input 
                          type="text"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe"
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60 font-medium">Your Email</label>
                        <input 
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                      </div>
                    </div>
                  </Step>

                  <Step>
                    <div className="flex flex-col gap-4 py-4">
                      <h4 className="text-xl font-semibold text-white mb-2">Step 2: The Details</h4>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60 font-medium">Subject</label>
                        <input 
                          type="text"
                          value={formData.subject}
                          onChange={e => setFormData({...formData, subject: e.target.value})}
                          placeholder="Project Inquiry"
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-white/60 font-medium">Message</label>
                        <textarea 
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                          placeholder="Hi Atharva, I'd like to discuss..."
                          rows={4}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                        />
                      </div>
                    </div>
                  </Step>

                  <Step>
                    <div className="flex flex-col items-center text-center gap-6 py-8">
                      <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)] relative">
                        {isSubmitting ? (
                          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : submitStatus === 'success' ? (
                          <div className="text-3xl text-green-400">✓</div>
                        ) : (
                          <FaPaperPlane className="text-3xl text-purple-400 ml-[-4px]" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          {isSubmitting ? "Sending..." : submitStatus === 'success' ? "Sent Successfully!" : submitStatus === 'error' ? "Something went wrong" : "Ready to send?"}
                        </h4>
                        <p className={`max-w-sm mx-auto ${submitStatus === 'error' ? 'text-red-400' : 'text-white/60'}`}>
                          {isSubmitting 
                            ? "Please wait while we deliver your message." 
                            : submitStatus === 'success'
                              ? "Your message has been sent. I'll get back to you soon!"
                              : submitStatus === 'error'
                                ? "There was an error sending your message. Please try again later."
                                : "Click Complete to send your message directly to my inbox!"}
                        </p>
                      </div>
                    </div>
                  </Step>
                </Stepper>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
