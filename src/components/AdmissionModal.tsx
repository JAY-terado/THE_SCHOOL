import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { validateName, validatePhone, validateEmail, validateRequired, validateMessage } from '../utils/validation';

const AdmissionModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    grade: '',
    year: '2027–28',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case 'parentName':
        return validateName(value, "Parent's Name");
      case 'phone':
        return validatePhone(value);
      case 'email':
        return validateEmail(value);
      case 'childName':
        return validateName(value, "Child's Name");
      case 'grade':
        return validateRequired(value, 'Applying Grade');
      case 'message':
        return validateMessage(value, 500);
      default:
        return null;
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('tse_admission_modal_dismissed', 'true');
  };

  // Listen for open modal event from RightActionTabs or elsewhere
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-admission-modal', handleOpen);
    return () => window.removeEventListener('open-admission-modal', handleOpen);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('tse_admission_modal_dismissed');
    if (isDismissed) return;

    // Trigger after 20 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let cleanValue = value;

    if (name === 'phone') {
      // Disallow any non-numeric characters and strictly limit to 10 digits max
      cleanValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: cleanValue }));

    // Re-validate field on the fly
    const error = validateField(name, cleanValue);
    setErrors((prev) => ({ ...prev, [name]: error || '' }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error || '' }));
  };

  const isFieldValid = (name: string, value: string) => {
    return value.trim().length > 0 && !errors[name] && validateField(name, value) === null;
  };

  const getFieldClass = (name: string, value: string) => {
    const isError = touched[name] && !!errors[name];
    const isValid = isFieldValid(name, value);

    if (isError) {
      return 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20 text-navy';
    }
    if (isValid) {
      return 'border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-emerald-50/15 text-navy';
    }
    return 'border-stone-200 focus:border-gold focus:ring-2 focus:ring-gold/15 bg-white text-navy';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    const fieldsToValidate = ['parentName', 'phone', 'email', 'childName', 'grade', 'message'];
    fieldsToValidate.forEach((field) => {
      newTouched[field] = true;
      const error = validateField(field, formData[field as keyof typeof formData] || '');
      if (error) {
        newErrors[field] = error;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log('Admission Enquiry Submitted:', formData);
    setIsSubmitted(true);
    sessionStorage.setItem('tse_admission_modal_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Neutral Frosted Glass Backdrop (Clean dark blur, NOT blue) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-md"
          />

          {/* Minimalist Luxury Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#FCFAF7] w-full max-w-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-stone-200/80 overflow-hidden z-10 my-auto"
          >
            {/* Top Gold Accent Line */}
            <div className="h-1 w-full bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <div className="p-6 sm:p-8">
              {!isSubmitted ? (
                <div>
                  {/* Header */}
                  <div className="text-center max-w-md mx-auto mb-6 space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold/10 text-gold-dark text-[10px] font-semibold tracking-wider uppercase">
                      <Sparkles size={11} className="text-gold" />
                      <span>Admissions Open 2027–28</span>
                    </div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                      Enquire for Admission
                    </h3>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Experience Cambridge International excellence at Vasai West. Our admissions desk will connect with you within 24 hours.
                    </p>
                  </div>

                  {/* Form with Real-time & Submit Validation */}
                  <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                    {/* Row 1: Parent Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-stone-700">
                          Parent's Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Full Name"
                          className={`w-full bg-white border px-3.5 py-2.5 text-xs text-navy rounded-lg focus:outline-none transition-all placeholder:text-stone-400 ${getFieldClass(
                            'parentName',
                            formData.parentName
                          )}`}
                        />
                        {touched.parentName && errors.parentName && (
                          <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle size={12} className="shrink-0" />
                            <span>{errors.parentName}</span>
                          </p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-stone-700">
                          Mobile Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          maxLength={10}
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="10-digit mobile number"
                          className={`w-full bg-white border px-3.5 py-2.5 text-xs text-navy rounded-lg focus:outline-none transition-all placeholder:text-stone-400 ${getFieldClass(
                            'phone',
                            formData.phone
                          )}`}
                        />
                        {touched.phone && errors.phone && (
                          <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle size={12} className="shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email Address */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-semibold text-stone-700">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="parent@example.com"
                        className={`w-full bg-white border px-3.5 py-2.5 text-xs text-navy rounded-lg focus:outline-none transition-all placeholder:text-stone-400 ${getFieldClass(
                          'email',
                          formData.email
                        )}`}
                      />
                      {touched.email && errors.email && (
                        <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 3: Child's Name & Grade */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-stone-700">
                          Child's Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="childName"
                          value={formData.childName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Child's Full Name"
                          className={`w-full bg-white border px-3.5 py-2.5 text-xs text-navy rounded-lg focus:outline-none transition-all placeholder:text-stone-400 ${getFieldClass(
                            'childName',
                            formData.childName
                          )}`}
                        />
                        {touched.childName && errors.childName && (
                          <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle size={12} className="shrink-0" />
                            <span>{errors.childName}</span>
                          </p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-stone-700">
                          Applying For Grade <span className="text-rose-500">*</span>
                        </label>
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={`w-full bg-white border px-3.5 py-2.5 text-xs text-navy rounded-lg focus:outline-none transition-all cursor-pointer ${getFieldClass(
                            'grade',
                            formData.grade
                          )}`}
                        >
                          <option value="">Select Grade</option>
                          <option>Playgroup (Age 2+)</option>
                          <option>Nursery (Age 3+)</option>
                          <option>Junior KG (Age 4+)</option>
                          <option>Senior KG (Age 5+)</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1}>Grade {i + 1}</option>
                          ))}
                        </select>
                        {touched.grade && errors.grade && (
                          <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle size={12} className="shrink-0" />
                            <span>{errors.grade}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 4: Optional Remarks */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <label className="block text-[11px] font-semibold text-stone-700">
                          Questions or Remarks <span className="text-stone-400 font-normal">(Optional)</span>
                        </label>
                        <span className="text-[10px] text-stone-400">
                          {formData.message.length}/500
                        </span>
                      </div>
                      <input
                        type="text"
                        name="message"
                        maxLength={500}
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Any queries regarding curriculum, transport, or campus visits..."
                        className={`w-full bg-white border px-3.5 py-2.5 text-xs text-navy rounded-lg focus:outline-none transition-all placeholder:text-stone-400 ${
                          touched.message && errors.message
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20'
                            : formData.message.trim().length > 0
                            ? 'border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-emerald-50/15'
                            : 'border-stone-200 focus:border-gold focus:ring-2 focus:ring-gold/15'
                        }`}
                      />
                      {touched.message && errors.message && (
                        <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-navy hover:bg-navy-dark text-white font-semibold text-xs tracking-wider uppercase py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 mt-4 group"
                    >
                      <span>Submit Admission Enquiry</span>
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Trust Footnote */}
                    <div className="pt-2 flex items-center justify-center gap-3 text-[11px] text-stone-500">
                      <span className="flex items-center gap-1">
                        <ShieldCheck size={12} className="text-teal" /> Confidential
                      </span>
                      <span>•</span>
                      <span>No Obligation</span>
                      <span>•</span>
                      <span>Priority 2027–28</span>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success State */
                <div className="text-center py-8 space-y-4 max-w-sm mx-auto">
                  <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h3 className="font-serif-display text-2xl font-bold text-navy">
                    Enquiry Received
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Thank you for your interest in The School of Excellence. Our admissions team will review your enquiry for <strong className="text-navy">{formData.childName}</strong> and contact you at <strong className="text-navy">{formData.phone}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={handleClose}
                    className="inline-block bg-cream border border-stone-200 text-navy font-semibold text-xs px-6 py-2.5 rounded-lg hover:bg-stone-100 transition-colors mt-2"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionModal;
