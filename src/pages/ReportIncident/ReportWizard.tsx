import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, ArrowRight, UploadCloud, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  { id: 1, label: 'INCIDENT' },
  { id: 2, label: 'HOW IT HAPPENED' },
  { id: 3, label: 'FINANCIAL IMPACT' },
  { id: 4, label: 'VOICE CHARACTERISTICS' },
  { id: 5, label: 'EVIDENCE' },
  { id: 6, label: 'CONSENT & SUBMISSION' }
];

export const ReportWizard = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [publicId, setPublicId] = useState('');

  const [formData, setFormData] = useState({
    // Step 1
    incidentDate: '',
    incidentTime: '',
    state: '',
    city: '',
    incidentType: '',
    channel: '',
    
    // Step 2
    claimedIdentity: '',
    familiarity: '',
    actionRequested: '',
    urgencyUsed: 'No',
    description: '',

    // Step 3
    moneyLost: 'No',
    amount: '',
    currency: 'INR',
    paymentMethod: '',
    transactionTime: '',

    // Step 4
    voiceCharacteristics: [] as string[],
    callDuration: '',
    interactive: 'No',

    // Step 5 (Mocking file for UI)
    evidenceFile: null as File | null,

    // Step 6
    consentAccuracy: false,
    consentInvestigation: false,
    consentResearch: false,
  });

  const updateForm = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleCharacteristicToggle = (char: string) => {
    setFormData(prev => ({
      ...prev,
      voiceCharacteristics: prev.voiceCharacteristics.includes(char)
        ? prev.voiceCharacteristics.filter(c => c !== char)
        : [...prev.voiceCharacteristics, char]
    }));
  };

  const handleNext = () => setStep(s => Math.min(s + 1, 6));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const generatedId = `VG-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      
      // If we had the exact schema configured in Supabase, we would insert here:
      // await supabase.from('complaints').insert({
      //   user_id: user?.id,
      //   public_case_id: generatedId,
      //   ...formData,
      // });

      // Simulating network delay for backend insertion & storage upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setPublicId(generatedId);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-12 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="forensic-panel p-8 text-center border-success/30 bg-success/5">
            <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
            <h2 className="text-xl font-serif text-text mb-2 uppercase tracking-wide">Report Submitted</h2>
            <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-6">Case ID: {publicId}</p>
            <div className="space-y-4">
              <Link 
                to={`/dashboard/reports/${publicId}`}
                className="block w-full px-6 py-3 bg-text text-background font-mono font-bold text-xs uppercase tracking-widest hover:bg-background hover:text-text border border-text transition-colors"
              >
                TRACK CASE STATUS
              </Link>
              <Link 
                to="/dashboard"
                className="block w-full px-6 py-3 bg-background text-text-secondary font-mono text-xs uppercase tracking-widest hover:text-text border border-border hover:border-text transition-colors"
              >
                RETURN TO DASHBOARD
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <ShieldAlert className="w-8 h-8 text-text mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-text mb-2 uppercase tracking-wide">Report Voice Incident</h1>
          <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">
            <strong>Important:</strong> VoiceGuard is a research/hackathon prototype and does not replace official law-enforcement, banking, or cybercrime reporting channels.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative border-b border-border pb-4">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center z-10 w-1/6">
                <span className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-2 text-center hidden md:block ${step >= s.id ? 'text-accent' : 'text-text-muted'}`}>
                  {s.label}
                </span>
                <span className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-2 text-center md:hidden ${step === s.id ? 'text-accent' : 'text-text-muted'}`}>
                  0{s.id}
                </span>
                <div className={`h-1 w-full ${step >= s.id ? 'bg-accent' : 'bg-border'}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="forensic-panel p-6 md:p-12 min-h-[600px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex-grow"
            >
              <h2 className="text-sm font-mono font-bold text-text mb-8 tracking-widest uppercase border-b border-border pb-2">
                0{step} / {steps[step - 1].label}
              </h2>

              {/* STEP 1: INCIDENT */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Incident Date</label>
                      <input type="date" value={formData.incidentDate} onChange={e => updateForm('incidentDate', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Approximate Time</label>
                      <input type="time" value={formData.incidentTime} onChange={e => updateForm('incidentTime', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">State</label>
                      <input type="text" placeholder="e.g. Maharashtra" value={formData.state} onChange={e => updateForm('state', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">City</label>
                      <input type="text" placeholder="e.g. Mumbai" value={formData.city} onChange={e => updateForm('city', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Incident Type</label>
                    <select value={formData.incidentType} onChange={e => updateForm('incidentType', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all appearance-none">
                      <option value="">Select Type...</option>
                      {['AI Voice Impersonation', 'Family / Relative Impersonation', 'Bank / Financial Impersonation', 'Government Official Impersonation', 'Corporate Executive Impersonation', 'Customer Support Impersonation', 'Matrimonial / Relationship Scam', 'Unknown', 'Other'].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Communication Channel</label>
                    <select value={formData.channel} onChange={e => updateForm('channel', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all appearance-none">
                      <option value="">Select Channel...</option>
                      {['Phone Call', 'WhatsApp', 'VoIP', 'Video Call', 'Social Media', 'Other'].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: HOW IT HAPPENED */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Who did the caller claim to be?</label>
                    <input type="text" placeholder="e.g. My boss, John Doe" value={formData.claimedIdentity} onChange={e => updateForm('claimedIdentity', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Voice Familiarity</label>
                    <select value={formData.familiarity} onChange={e => updateForm('familiarity', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all appearance-none">
                      <option value="">Select Familiarity...</option>
                      <option value="I know this person's voice very well">I know this person's voice very well</option>
                      <option value="I have heard this person occasionally">I have heard this person occasionally</option>
                      <option value="I barely know this person's voice">I barely know this person's voice</option>
                      <option value="I did not know the claimed person">I did not know the claimed person</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Requested Action</label>
                    <select value={formData.actionRequested} onChange={e => updateForm('actionRequested', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all appearance-none">
                      <option value="">Select Action...</option>
                      {['Transfer money', 'Share OTP', 'Share password', 'Install application', 'Click link', 'Reveal personal information', 'Make payment', 'Other'].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Was urgency or pressure used?</label>
                    <div className="flex gap-4">
                      {['Yes', 'No'].map(o => (
                        <button key={o} onClick={() => updateForm('urgencyUsed', o)} className={`flex-1 py-3 text-xs font-mono tracking-widest uppercase border ${formData.urgencyUsed === o ? 'bg-text text-background border-text' : 'bg-background text-text-secondary border-border hover:border-text-secondary'}`}>{o}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Description of the Incident</label>
                    <textarea rows={4} value={formData.description} onChange={e => updateForm('description', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all" placeholder="Provide a detailed description..." />
                  </div>
                </div>
              )}

              {/* STEP 3: FINANCIAL IMPACT */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="border border-warning/30 bg-warning/5 p-4 mb-6">
                    <p className="text-xs font-mono text-warning uppercase tracking-widest">
                      <strong>WARNING:</strong> Never submit passwords, OTPs, PINs, CVVs, or complete financial credentials.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Was money lost?</label>
                    <div className="flex gap-4">
                      {['Yes', 'No'].map(o => (
                        <button key={o} onClick={() => updateForm('moneyLost', o)} className={`flex-1 py-3 text-xs font-mono tracking-widest uppercase border ${formData.moneyLost === o ? 'bg-text text-background border-text' : 'bg-background text-text-secondary border-border hover:border-text-secondary'}`}>{o}</button>
                      ))}
                    </div>
                  </div>

                  {formData.moneyLost === 'Yes' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-border bg-surface">
                      <div>
                        <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Amount</label>
                        <div className="flex">
                          <span className="bg-background border border-r-0 border-border px-4 py-3 text-text-secondary font-mono text-xs">{formData.currency}</span>
                          <input type="number" value={formData.amount} onChange={e => updateForm('amount', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all" placeholder="0.00" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Payment Method</label>
                        <select value={formData.paymentMethod} onChange={e => updateForm('paymentMethod', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all appearance-none">
                          <option value="">Select Method...</option>
                          {['Bank Transfer', 'UPI', 'Card', 'Wallet', 'Cash', 'Cryptocurrency', 'Other'].map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Approximate time of transaction</label>
                        <input type="time" value={formData.transactionTime} onChange={e => updateForm('transactionTime', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all" />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: VOICE CHARACTERISTICS */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="mb-6">
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest border-l-2 border-accent pl-4 py-1">
                      Observed characteristics — not proof of synthetic speech. This generates useful research metadata.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-4">Did you notice any of the following?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Unnatural pauses', 'Robotic tone', 'Strange pronunciation', 'Unusual emotional expression',
                        'Repeated phrases', 'Delayed responses', 'Background noise inconsistencies', 'Sudden changes in voice quality',
                        'Unnatural breathing', 'Audio glitches', 'Unusual urgency', 'Nothing unusual', 'Not sure'
                      ].map(char => (
                        <label key={char} className={`flex items-start p-3 border cursor-pointer transition-colors ${formData.voiceCharacteristics.includes(char) ? 'bg-surface border-accent' : 'bg-background border-border hover:border-text-secondary'}`}>
                          <input type="checkbox" className="mt-0.5 mr-3" checked={formData.voiceCharacteristics.includes(char)} onChange={() => handleCharacteristicToggle(char)} />
                          <span className="text-xs font-mono text-text uppercase">{char}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                    <div>
                      <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Approximate call duration</label>
                      <input type="text" placeholder="e.g. 45 seconds, 5 mins" value={formData.callDuration} onChange={e => updateForm('callDuration', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Was the conversation interactive?</label>
                      <select value={formData.interactive} onChange={e => updateForm('interactive', e.target.value)} className="w-full bg-background border border-border px-4 py-3 text-text font-mono text-xs focus:outline-none focus:border-accent transition-all appearance-none">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: EVIDENCE */}
              {step === 5 && (
                <div className="space-y-6 text-center">
                  <h3 className="text-sm font-mono font-bold text-text uppercase tracking-widest mb-2">Upload Supporting Evidence</h3>
                  <p className="text-xs font-mono text-text-secondary mb-8">Audio recording, Call recording, Screenshot, Chat export, Email, or Transaction receipt.</p>
                  
                  <div className="border border-dashed border-border bg-surface p-12 hover:border-accent transition-all cursor-pointer inline-block w-full">
                    <UploadCloud className="w-8 h-8 text-text-muted mx-auto mb-4" />
                    <h3 className="text-sm font-mono text-text mb-2 uppercase tracking-widest">Select File</h3>
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">WAV, MP3, PNG, JPG, PDF (MAX 50MB)</p>
                  </div>

                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mt-4">
                    Stored securely in Supabase Private Storage. Never made publicly accessible.
                  </p>
                </div>
              )}

              {/* STEP 6: CONSENT & SUBMISSION */}
              {step === 6 && (
                <div className="space-y-6">
                  <h3 className="text-sm font-mono font-bold text-text uppercase tracking-widest mb-6">Review & Consent</h3>
                  
                  <div className="space-y-4">
                    <label className={`flex items-start p-4 border cursor-pointer transition-colors ${formData.consentAccuracy ? 'bg-surface border-accent' : 'bg-background border-border hover:border-text-secondary'}`}>
                      <input type="checkbox" className="mt-1 mr-4" checked={formData.consentAccuracy} onChange={e => updateForm('consentAccuracy', e.target.checked)} />
                      <div>
                        <span className="text-xs font-mono font-bold text-text uppercase block mb-1">Incident Accuracy</span>
                        <span className="text-[10px] font-mono text-text-secondary uppercase">I confirm that the information provided is accurate to the best of my knowledge.</span>
                      </div>
                    </label>

                    <label className={`flex items-start p-4 border cursor-pointer transition-colors ${formData.consentInvestigation ? 'bg-surface border-accent' : 'bg-background border-border hover:border-text-secondary'}`}>
                      <input type="checkbox" className="mt-1 mr-4" checked={formData.consentInvestigation} onChange={e => updateForm('consentInvestigation', e.target.checked)} />
                      <div>
                        <span className="text-xs font-mono font-bold text-text uppercase block mb-1">Investigation Consent</span>
                        <span className="text-[10px] font-mono text-text-secondary uppercase">I understand that submitted information may be reviewed for incident investigation and security analysis.</span>
                      </div>
                    </label>

                    <label className={`flex items-start p-4 border cursor-pointer transition-colors ${formData.consentResearch ? 'bg-surface border-accent' : 'bg-background border-border hover:border-text-secondary'}`}>
                      <input type="checkbox" className="mt-1 mr-4" checked={formData.consentResearch} onChange={e => updateForm('consentResearch', e.target.checked)} />
                      <div>
                        <span className="text-xs font-mono font-bold text-text uppercase block mb-1">Research Consent (Optional)</span>
                        <span className="text-[10px] font-mono text-text-secondary uppercase">I consent to my incident data being anonymized and potentially used for cybersecurity research and model improvement.</span>
                      </div>
                    </label>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between pt-8 mt-auto border-t border-border">
            {step > 1 ? (
              <button onClick={handleBack} disabled={isSubmitting} className="px-6 py-3 text-text-secondary hover:text-text font-mono text-xs uppercase tracking-widest transition-colors disabled:opacity-50">
                BACK
              </button>
            ) : <div></div>}
            
            {step < 6 ? (
              <button onClick={handleNext} className="px-6 py-3 bg-background text-text font-mono font-bold text-xs uppercase tracking-widest hover:bg-surface border border-text transition-colors flex items-center space-x-2">
                <span>CONTINUE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                disabled={!formData.consentAccuracy || !formData.consentInvestigation || isSubmitting}
                className="px-6 py-3 bg-text text-background font-mono font-bold text-xs uppercase tracking-widest hover:bg-background hover:text-text border border-text transition-colors flex items-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>SUBMITTING...</span>
                ) : (
                  <>
                    <span>SUBMIT REPORT</span>
                    <CheckCircle className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
