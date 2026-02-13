import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { Activity, Zap, Utensils } from 'lucide-react';

export const Tools: React.FC = () => {
  // BMI State
  const [bmiWeight, setBmiWeight] = useState<number | ''>('');
  const [bmiHeight, setBmiHeight] = useState<number | ''>('');
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  // Calorie State
  const [tdeeWeight, setTdeeWeight] = useState<number | ''>('');
  const [tdeeHeight, setTdeeHeight] = useState<number | ''>('');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.2);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateBMI = () => {
    if (bmiWeight && bmiHeight) {
      const hM = Number(bmiHeight) / 100;
      const bmi = Number(bmiWeight) / (hM * hM);
      setBmiResult(Number(bmi.toFixed(1)));
    }
  };

  const calculateCalories = () => {
    if (tdeeWeight && tdeeHeight && age) {
      // Mifflin-St Jeor Equation
      let bmr = (10 * Number(tdeeWeight)) + (6.25 * Number(tdeeHeight)) - (5 * Number(age));
      bmr = gender === 'male' ? bmr + 5 : bmr - 161;
      setCalories(Math.round(bmr * activity));
    }
  };

  return (
    <div className="pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase mb-4 drop-shadow-lg">
              Fitness <span className="text-neon-orange">Intelligence</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Knowledge is power. Use our premium tools to track your metrics and optimize your nutrition.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* BMI Calculator */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity size={120} className="text-neon-blue" />
              </div>
              
              <h3 className="font-heading text-3xl font-bold text-white uppercase mb-6 flex items-center gap-3 relative z-10">
                <span className="w-1 h-8 bg-neon-blue inline-block shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
                BMI Calculator
              </h3>
              
              <div className="space-y-6 relative z-10">
                <p className="text-gray-400 text-sm">
                  Calculate your Body Mass Index (BMI) to check if you're in a healthy weight range.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Weight (kg)</label>
                    <input 
                      type="number" 
                      value={bmiWeight} 
                      onChange={(e) => setBmiWeight(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white p-4 focus:border-neon-blue focus:bg-white/10 outline-none transition-all font-heading text-xl" 
                      placeholder="70"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Height (cm)</label>
                    <input 
                      type="number" 
                      value={bmiHeight} 
                      onChange={(e) => setBmiHeight(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white p-4 focus:border-neon-blue focus:bg-white/10 outline-none transition-all font-heading text-xl" 
                      placeholder="175"
                    />
                  </div>
                </div>
                
                <Button fullWidth onClick={calculateBMI} variant="primary">Calculate BMI</Button>

                {bmiResult && (
                  <div className="mt-8 p-6 bg-white/5 border border-neon-blue/30 rounded-2xl text-center animate-pulse duration-1000">
                    <span className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Your BMI Score</span>
                    <span className="block text-6xl font-heading font-black text-neon-blue mb-2 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">{bmiResult}</span>
                    <div className="inline-block px-4 py-1 bg-neon-blue/10 rounded-full border border-neon-blue/20">
                      <span className="text-sm font-bold text-neon-blue uppercase">
                        {bmiResult < 18.5 ? 'Underweight' : bmiResult < 25 ? 'Normal Weight' : bmiResult < 30 ? 'Overweight' : 'Obese'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Calorie Calculator */}
          <ScrollReveal delay={200}>
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Utensils size={120} className="text-neon-orange" />
              </div>

              <h3 className="font-heading text-3xl font-bold text-white uppercase mb-6 flex items-center gap-3 relative z-10">
                <span className="w-1 h-8 bg-neon-orange inline-block shadow-[0_0_10px_rgba(255,158,128,0.8)]"></span>
                TDEE Calculator
              </h3>

              <div className="space-y-6 relative z-10">
                <p className="text-gray-400 text-sm">
                  Estimate your Total Daily Energy Expenditure (TDEE) to plan your nutrition for maintenance, cutting, or bulking.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   <button 
                    onClick={() => setGender('male')}
                    className={`p-3 text-sm font-bold uppercase border rounded-xl transition-all ${gender === 'male' ? 'bg-neon-orange text-black border-neon-orange shadow-[0_0_15px_rgba(255,158,128,0.4)]' : 'bg-transparent border-white/20 text-gray-400 hover:border-white'}`}
                   >Male</button>
                   <button 
                    onClick={() => setGender('female')}
                    className={`p-3 text-sm font-bold uppercase border rounded-xl transition-all ${gender === 'female' ? 'bg-neon-orange text-black border-neon-orange shadow-[0_0_15px_rgba(255,158,128,0.4)]' : 'bg-transparent border-white/20 text-gray-400 hover:border-white'}`}
                   >Female</button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Age</label>
                    <input 
                      type="number" 
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white p-4 focus:border-neon-orange focus:bg-white/10 outline-none transition-all font-heading text-xl" 
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Activity Level</label>
                    <div className="relative">
                      <select 
                        value={activity} 
                        onChange={(e) => setActivity(Number(e.target.value))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl text-white p-4 focus:border-neon-orange focus:bg-white/10 outline-none transition-all appearance-none"
                      >
                        <option value={1.2}>Sedentary (Office Job)</option>
                        <option value={1.375}>Light Exercise (1-2 days/wk)</option>
                        <option value={1.55}>Moderate Exercise (3-5 days/wk)</option>
                        <option value={1.725}>Heavy Exercise (6-7 days/wk)</option>
                        <option value={1.9}>Athlete (2x per day)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Weight (kg)</label>
                    <input 
                      type="number" 
                      value={tdeeWeight} 
                      onChange={(e) => setTdeeWeight(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white p-4 focus:border-neon-orange focus:bg-white/10 outline-none transition-all font-heading text-xl" 
                      placeholder="70"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Height (cm)</label>
                    <input 
                      type="number" 
                      value={tdeeHeight} 
                      onChange={(e) => setTdeeHeight(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white p-4 focus:border-neon-orange focus:bg-white/10 outline-none transition-all font-heading text-xl" 
                      placeholder="175"
                    />
                  </div>
                </div>

                <Button fullWidth onClick={calculateCalories} variant="secondary">Calculate TDEE</Button>

                {calories && (
                  <div className="mt-8 animate-pulse duration-1000">
                    <div className="p-6 bg-white/5 border border-neon-orange/30 rounded-2xl text-center mb-4">
                      <span className="block text-gray-400 text-xs uppercase tracking-widest mb-1">Maintenance Calories</span>
                      <span className="block text-6xl font-heading font-black text-neon-orange drop-shadow-[0_0_15px_rgba(255,158,128,0.5)]">{calories} <span className="text-lg text-gray-500 font-normal">kcal</span></span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                       <div className="bg-black/50 border border-white/10 rounded-xl p-3 text-center">
                          <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Protein (30%)</span>
                          <span className="block font-bold text-white text-lg">{Math.round(calories * 0.3 / 4)}g</span>
                       </div>
                       <div className="bg-black/50 border border-white/10 rounded-xl p-3 text-center">
                          <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Carbs (40%)</span>
                          <span className="block font-bold text-white text-lg">{Math.round(calories * 0.4 / 4)}g</span>
                       </div>
                       <div className="bg-black/50 border border-white/10 rounded-xl p-3 text-center">
                          <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Fats (30%)</span>
                          <span className="block font-bold text-white text-lg">{Math.round(calories * 0.3 / 9)}g</span>
                       </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

        </div>
        
        {/* Pro Tip */}
        <ScrollReveal delay={300}>
          <div className="mt-16 glass-panel rounded-3xl p-8 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 border-l-4 border-l-neon-blue">
             <div className="bg-black/50 p-4 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <Zap className="text-neon-blue w-8 h-8" />
             </div>
             <div>
               <h4 className="font-heading font-bold text-white uppercase text-xl mb-2">Nutrition Strategy</h4>
               <p className="text-gray-300 leading-relaxed max-w-3xl">
                 Your TDEE is just a starting point. To lose fat, subtract <span className="text-white font-bold">300-500 calories</span>. 
                 To build muscle, add <span className="text-white font-bold">200-300 calories</span>. 
                 Prioritize protein intake (1.6g - 2.2g per kg of bodyweight) to preserve lean muscle mass during your transformation.
               </p>
             </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};