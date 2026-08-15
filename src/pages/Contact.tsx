import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-clever-darkblue mb-4">Contactez-nous</h1>
          <p className="text-gray-600 text-lg">
            Une question ? Un projet ? N'hésitez pas à nous écrire ou à venir nous rencontrer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start gap-6">
              <div className="bg-orange-50 p-4 rounded-xl text-clever-orange">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-clever-darkblue mb-2">Notre Agence</h3>
                <p className="text-gray-600">Ouagadougou, Tampouy secteur 16<br />Burkina Faso</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start gap-6">
              <div className="bg-orange-50 p-4 rounded-xl text-clever-orange">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-clever-darkblue mb-2">Téléphone & WhatsApp</h3>
                <p className="text-gray-600">+226 55 71 22 21<br />+226 51 18 24 83</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start gap-6">
              <div className="bg-orange-50 p-4 rounded-xl text-clever-orange">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-clever-darkblue mb-2">Email</h3>
                <p className="text-gray-600">clevergroup925@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start gap-6">
              <div className="bg-orange-50 p-4 rounded-xl text-clever-orange">
                <Clock size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-clever-darkblue mb-2">Heures d'ouverture</h3>
                <p className="text-gray-600">Lundi - Vendredi : 08h00 - 18h00<br />Samedi : 09h00 - 14h00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-center">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="text-2xl font-bold text-clever-darkblue mb-3">Message bien reçu !</h2>
                <p className="text-gray-600 mb-6">
                  Merci <strong>{formData.name}</strong>, votre message a été transmis avec succès à notre équipe. Nous vous répondrons dans les plus brefs délais à l'adresse <strong>{formData.email}</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/22655712221?text=${encodeURIComponent(
                      `Bonjour CLEVER GROUP, je suis ${formData.name}. Sujet: ${formData.subject} - Message: ${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-sm"
                  >
                    <MessageCircle size={18} /> Continuer sur WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-clever-darkblue mb-6">Envoyez-nous un message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-clever-orange focus:ring-2 focus:ring-orange-100 outline-none bg-gray-50 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-clever-orange focus:ring-2 focus:ring-orange-100 outline-none bg-gray-50 transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <input
                      id="contact-subject"
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-clever-orange focus:ring-2 focus:ring-orange-100 outline-none bg-gray-50 transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-clever-orange focus:ring-2 focus:ring-orange-100 outline-none bg-gray-50 resize-none transition-all"
                      placeholder="Comment pouvons-nous vous aider ?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-clever-darkblue hover:bg-blue-900 text-white py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Envoyer le message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
