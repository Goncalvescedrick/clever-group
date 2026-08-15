import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Send, MessageCircle } from 'lucide-react';

const serviceOptions = [
  'Conception Graphique',
  'Création de Sites Web & Apps',
  'Marketing Digital',
  'Communication Digitale',
  'Publicité',
  'Événementiel',
  'Pack Accompagnement Startup'
];

export default function Devis() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [] as string[],
    description: '',
    name: '',
    email: '',
    phone: '',
    city: ''
  });

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setStep(4);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-clever-darkblue mb-4">Demander un Devis</h1>
          <p className="text-gray-600 text-lg">
            Parlez-nous de votre projet. Nous vous répondrons dans les plus brefs délais avec une proposition adaptée.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10 flex justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-clever-orange -z-10 -translate-y-1/2 transition-all duration-300 rounded-full"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>
          {[1, 2, 3, 4].map(num => (
            <div 
              key={num} 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors border-4 border-gray-50
                ${step >= num ? 'bg-clever-orange text-white' : 'bg-gray-200 text-gray-500'}`}
            >
              {step > num ? <Check size={18} /> : num}
            </div>
          ))}
        </div>

        {/* Wizard Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-clever-darkblue mb-6">Quels services vous intéressent ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceOptions.map(service => (
                    <label 
                      key={service}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all
                        ${formData.services.includes(service) ? 'border-clever-orange bg-orange-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                    >
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={formData.services.includes(service)}
                        onChange={() => toggleService(service)}
                      />
                      <div className={`w-5 h-5 rounded flex items-center justify-center border
                        ${formData.services.includes(service) ? 'bg-clever-orange border-clever-orange text-white' : 'border-gray-300'}`}>
                        {formData.services.includes(service) && <Check size={14} />}
                      </div>
                      <span className="font-medium text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={nextStep}
                    disabled={formData.services.length === 0}
                    className="bg-clever-darkblue hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 transition-colors"
                  >
                    Suivant <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-clever-darkblue mb-6">Parlez-nous de votre projet</h2>
                <textarea
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  placeholder="Décrivez vos besoins, vos objectifs, les délais souhaités..."
                  className="w-full h-48 p-4 rounded-xl border border-gray-200 focus:border-clever-orange focus:ring-2 focus:ring-orange-100 outline-none resize-none transition-all"
                />
                <div className="mt-8 flex justify-between">
                  <button onClick={prevStep} className="text-gray-500 hover:text-gray-700 font-bold flex items-center gap-2 px-4 py-3">
                    <ArrowLeft size={20} /> Retour
                  </button>
                  <button 
                    onClick={nextStep}
                    disabled={formData.description.trim().length < 10}
                    className="bg-clever-darkblue hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 transition-colors"
                  >
                    Suivant <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.form
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={submitForm}
              >
                <h2 className="text-2xl font-bold text-clever-darkblue mb-6">Vos Coordonnées</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom Complet / Entreprise</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-clever-orange outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:border-clever-orange outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone / WhatsApp</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:border-clever-orange outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ville / Pays</label>
                    <input
                      required
                      type="text"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-clever-orange outline-none"
                      placeholder="Ex: Ouagadougou, Burkina Faso"
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-gray-500 hover:text-gray-700 font-bold flex items-center gap-2 px-4 py-3">
                    <ArrowLeft size={20} /> Retour
                  </button>
                  <button 
                    type="submit"
                    className="bg-clever-orange hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all"
                  >
                    Envoyer ma demande <Send size={18} />
                  </button>
                </div>
              </motion.form>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <Check size={40} />
                </div>
                <h2 className="text-3xl font-bold text-clever-darkblue mb-4">Demande envoyée avec succès !</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                  Merci <strong>{formData.name}</strong> pour votre confiance. Notre équipe a bien reçu votre demande pour <strong>{formData.services.join(', ')}</strong> et vous répondra très rapidement par email ou téléphone.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/22655712221?text=${encodeURIComponent(
                      `Bonjour CLEVER GROUP, je m'appelle ${formData.name}. Je viens de soumettre une demande de devis pour : ${formData.services.join(', ')}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md"
                  >
                    <MessageCircle size={20} />
                    Accélérer ma demande sur WhatsApp
                  </a>
                  <button 
                    onClick={() => navigate('/')}
                    className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold transition-colors"
                  >
                    Retour à l'accueil
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
