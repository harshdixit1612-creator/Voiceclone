import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Mail, Lock, User, AlertTriangle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!termsAccepted) {
      setError('You must accept the Terms and Privacy Policy');
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      // Optional: automatically navigate after a delay, or let the user click login
      setTimeout(() => navigate('/login'), 3000);
    }
    
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full forensic-panel p-8 text-center border-success/30 bg-success/5">
          <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
          <h2 className="text-xl font-serif text-text mb-2 uppercase tracking-wide">Registration Successful</h2>
          <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-6">
            Please check your email for a verification link, or proceed to login if auto-confirmation is enabled.
          </p>
          <Link 
            to="/login"
            className="block w-full px-6 py-3 bg-text text-background font-mono font-bold text-xs uppercase tracking-widest hover:bg-background hover:text-text border border-text transition-colors"
          >
            PROCEED TO LOGIN
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full forensic-panel p-8 md:p-10 border border-border bg-background"
      >
        <div className="text-center mb-8 border-b border-border pb-6">
          <Shield className="w-8 h-8 text-text mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-text uppercase tracking-wide">Request Access</h2>
          <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-text-secondary">
            SECURE ANALYST REGISTRATION
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleRegister}>
          {error && (
            <div className="p-3 bg-danger/10 border border-danger/30 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-danger shrink-0 mt-0.5" />
              <p className="text-xs font-mono text-danger uppercase">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-text-muted" />
                </div>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-border bg-surface text-text font-mono text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-2">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-text-muted" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-border bg-surface text-text font-mono text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-all"
                  placeholder="analyst@voiceguard.org"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-text-muted" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-border bg-surface text-text font-mono text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-text-muted" />
                </div>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-border bg-surface text-text font-mono text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start mt-4">
            <input
              id="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-1 h-4 w-4 bg-surface border-border text-accent focus:ring-accent"
            />
            <label htmlFor="terms" className="ml-3 block text-[10px] font-mono text-text-secondary uppercase">
              I accept the Data Processing Agreement and Privacy Protocol for handling sensitive voice biometrics.
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-text text-xs font-mono font-bold uppercase tracking-widest text-background bg-text hover:bg-background hover:text-text transition-colors disabled:opacity-50"
            >
              {loading ? 'INITIALIZING...' : 'REQUEST ACCESS'}
            </button>
          </div>
        </form>
        
        <p className="text-center text-[10px] font-mono uppercase text-text-secondary mt-8 border-t border-border pt-6">
          Already authorized?{' '}
          <Link to="/login" className="font-bold text-accent hover:text-text transition-colors">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};
