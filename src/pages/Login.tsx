import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Mail, Lock, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else if (data.session) {
      navigate('/dashboard');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full forensic-panel p-8 md:p-10 border border-border bg-background"
      >
        <div className="text-center mb-8 border-b border-border pb-6">
          <Shield className="w-8 h-8 text-text mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-text uppercase tracking-wide">Analyst Login</h2>
          <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-text-secondary">
            SECURE SOC AUTHENTICATION
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="p-3 bg-danger/10 border border-danger/30 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-danger shrink-0 mt-0.5" />
              <p className="text-xs font-mono text-danger uppercase">{error}</p>
            </div>
          )}

          <div className="space-y-4">
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-surface border-border text-accent focus:ring-accent"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs font-mono text-text-secondary uppercase">
                Remember session
              </label>
            </div>

            <div className="text-[10px] font-mono uppercase">
              <a href="#" className="font-bold text-accent hover:text-text transition-colors">
                Reset Password
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-text text-xs font-mono font-bold uppercase tracking-widest text-background bg-text hover:bg-background hover:text-text transition-colors disabled:opacity-50"
            >
              {loading ? 'AUTHENTICATING...' : 'AUTHORIZE ACCESS'}
            </button>
          </div>
        </form>
        
        <p className="text-center text-[10px] font-mono uppercase text-text-secondary mt-8 border-t border-border pt-6">
          No active credentials?{' '}
          <Link to="/register" className="font-bold text-accent hover:text-text transition-colors">
            Request Access
          </Link>
        </p>
      </motion.div>
    </div>
  );
};
