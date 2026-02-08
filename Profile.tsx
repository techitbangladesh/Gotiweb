
import React, { useState } from 'react';
import { Language, TranslationStrings, User } from '../types';
import { UserCircle, Mail, Phone, Calendar, Clock, Edit3, ShieldCheck, Activity, Zap, CheckCircle, Key, ArrowRight } from 'lucide-react';

interface ProfileProps {
  user: User;
  lang: Language;
  t: TranslationStrings;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const Profile: React.FC<ProfileProps> = ({ user, lang, t, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleSave = () => {
    setUser({ ...user, ...formData });
    setIsEditing(false);
  };

  return (
    <section className="py-12 md:py-20 px-5 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="relative">
              <div className="w-20 h-20 bg-red-600/5 rounded-[1.5rem] flex items-center justify-center text-red-600 border border-red-600/10">
                <UserCircle size={40} />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-white dark:border-zinc-900"></div>
            </div>
            <div className="flex-grow space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-red-600 font-english">Verified Fiber User</span>
                <ShieldCheck size={10} className="text-red-600" />
              </div>
              <h2 className={`text-3xl font-black text-zinc-900 dark:text-white ${lang === 'bn' ? 'font-bengali' : 'font-english uppercase tracking-tight'}`}>{user.name}</h2>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-english">Network ID: #GOTI-{Math.floor(Math.random() * 90000 + 10000)}</p>
            </div>
            <button onClick={() => setIsEditing(!isEditing)} className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
              {isEditing ? 'Cancel' : 'Manage Account'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Info */}
          <div className="md:col-span-7 space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 p-8">
               <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest font-english mb-8 flex items-center gap-2">
                 <Activity size={12} className="text-red-600" /> Account Connectivity
               </h3>
               
               {isEditing ? (
                 <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="space-y-1.5">
                      <label className="text-[8px] font-black text-zinc-500 uppercase font-english">Display Name</label>
                      <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-bold outline-none focus:border-red-600" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[8px] font-black text-zinc-500 uppercase font-english">Email Endpoint</label>
                      <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-bold outline-none focus:border-red-600" />
                    </div>
                    <button onClick={handleSave} className="w-full py-4 bg-red-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest mt-2">Save Profile Changes</button>
                 </div>
               ) : (
                 <div className="space-y-4">
                    <div className="flex items-center gap-4 p-5 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-800 group">
                      <div className="w-10 h-10 bg-white dark:bg-zinc-900 rounded-xl flex items-center justify-center text-red-600 shadow-sm transition-transform group-hover:scale-110"><Mail size={16}/></div>
                      <div>
                        <p className="text-[7px] font-black text-zinc-400 uppercase tracking-widest font-english mb-0.5">Primary Email</p>
                        <p className="font-bold text-xs font-english">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-800 group">
                      <div className="w-10 h-10 bg-white dark:bg-zinc-900 rounded-xl flex items-center justify-center text-red-600 shadow-sm transition-transform group-hover:scale-110"><Phone size={16}/></div>
                      <div>
                        <p className="text-[7px] font-black text-zinc-400 uppercase tracking-widest font-english mb-0.5">Mobile Network</p>
                        <p className="font-bold text-xs font-english">{user.phone}</p>
                      </div>
                    </div>
                 </div>
               )}
            </div>
          </div>

          {/* Service Sidebar */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-zinc-900 dark:bg-zinc-900 p-8 rounded-[2rem] text-white border border-zinc-800 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <Zap size={24} className="text-red-600" />
                    <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[7px] font-black text-green-500 uppercase tracking-widest">Active</div>
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest font-english mb-1">Current Service</p>
                    <p className="text-xl font-black font-english tracking-tight">{user.activePackage}</p>
                  </div>
                  <div className="pt-6 border-t border-white/5 space-y-4">
                     <div className="flex items-center justify-between">
                        <span className="text-[8px] font-black text-zinc-500 uppercase font-english">Renewal Date</span>
                        <span className="text-[10px] font-black font-english text-zinc-200">{user.expiryDate}</span>
                     </div>
                     <button className="w-full py-4 bg-red-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Add Data / Renew</button>
                  </div>
               </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-[1.5rem] border border-zinc-100 dark:border-zinc-800 flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-zinc-50 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all"><Key size={14} /></div>
                <span className="text-[9px] font-black uppercase tracking-widest font-english">Security PIN</span>
              </div>
              <span className="text-xs font-black font-english tracking-widest">****</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
