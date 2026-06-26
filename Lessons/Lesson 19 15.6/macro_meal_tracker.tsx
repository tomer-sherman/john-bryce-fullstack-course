import React, { useState, useEffect } from 'react';
import { Activity, Utensils, Target, Plus, Trash2, Scale, Sparkles, Loader2, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Lock, Edit2, Check, X, LineChart } from 'lucide-react';

// --- Date Helper Functions ---
const getTodayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const getYesterdayStr = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const formatDateStr = (dateObj) => {
  return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
};

const isReadOnlyDate = (dateStr) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selected = new Date(dateStr);
  selected.setHours(0, 0, 0, 0);
  const diffTime = today - selected;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 3;
};

const isFutureDate = (dateStr) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selected = new Date(dateStr);
  selected.setHours(0, 0, 0, 0);
  return selected > today;
};

const isTooOldDate = (dateStr) => {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  oneYearAgo.setHours(0, 0, 0, 0);
  const selected = new Date(dateStr);
  selected.setHours(0, 0, 0, 0);
  return selected < oneYearAgo;
};

// --- Target Calculation Engine ---
const calculateDailyTargets = (dateStr, profileSnapshot, workoutBurn, goalPlan) => {
  const d = new Date(dateStr);
  const start = new Date(goalPlan.startDate);
  const end = goalPlan.endDate ? new Date(goalPlan.endDate) : null;
  d.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  if (end) end.setHours(0, 0, 0, 0);

  let modifier = 0; // Default to maintenance
  let isActivePhase = false;

  if (d >= start && (!end || d <= end)) {
    isActivePhase = true;
    if (goalPlan.type !== 'Maintenance') {
      let val = 0;
      if (goalPlan.intensity === 'Mild') val = 250;
      if (goalPlan.intensity === 'Moderate') val = 500;
      if (goalPlan.intensity === 'Extreme') val = 750;
      modifier = goalPlan.type === 'Cut' ? -val : val;
    }
  }

  const cals = profileSnapshot.bmr + Number(workoutBurn) + modifier;
  const pro = Math.round(profileSnapshot.weight * 1.9);
  const fat = Math.round(profileSnapshot.weight * 0.85);
  const carb = Math.round((cals - (pro * 4) - (fat * 9)) / 4);

  return { cals, pro, fat, carb, modifier, isActivePhase };
};

export default function App() {
  const todayStr = getTodayStr();
  const yesterdayStr = getYesterdayStr();

  // --- Global Profile & Phase State ---
  const [globalProfile, setGlobalProfile] = useState({
    height: 180,
    weight: 89,
    bmr: 2350,
    goalPlan: {
      type: 'Cut',          // 'Maintenance', 'Cut', 'Bulk'
      intensity: 'Moderate', // 'Mild', 'Moderate', 'Extreme'
      startDate: yesterdayStr,
      endDate: ''           // Empty = Ongoing
    }
  });

  // --- View State ---
  const [activeTab, setActiveTab] = useState('tracker'); // 'tracker', 'calendar', or 'graphs'
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [graphTimeframe, setGraphTimeframe] = useState('week');

  // --- Logs State ---
  const [logs, setLogs] = useState({
    [yesterdayStr]: {
      profileSnapshot: { height: 180, weight: 89, bmr: 2350 },
      workout: "30 min Easy Run",
      workoutBurn: 300,
      meals: [
        { id: 101, name: 'Oatmeal & Peanut Butter', calories: 480, protein: 18, carbs: 65, fats: 14 },
        { id: 102, name: 'Chicken breast, Rice & Veggies', calories: 720, protein: 55, carbs: 80, fats: 12 },
        { id: 103, name: 'Greek Yogurt & Berries', calories: 220, protein: 15, carbs: 22, fats: 3 },
        { id: 104, name: 'Protein Shake', calories: 210, protein: 30, carbs: 5, fats: 2 }
      ]
    },
    [todayStr]: {
      profileSnapshot: { height: 180, weight: 89, bmr: 2350 },
      workout: "20 min tempo + Full body",
      workoutBurn: 450,
      meals: [
        { id: 1, name: '6 Chocolate Waffles', calories: 240, protein: 3, carbs: 32, fats: 11 },
        { id: 2, name: 'Pre-Run: Oats, PB, Honey', calories: 575, protein: 23, carbs: 93, fats: 16 },
        { id: 3, name: 'Snack: Ham & Bread', calories: 410, protein: 33, carbs: 50, fats: 15 },
        { id: 4, name: 'Dinner: 300g Pargit, Bread, Salad', calories: 1030, protein: 82, carbs: 86, fats: 30 },
      ]
    }
  });

  // --- Form & UI State ---
  const [newMeal, setNewMeal] = useState({ name: '', calories: '', protein: '', carbs: '', fats: '' });
  const [editingMealId, setEditingMealId] = useState(null);
  const [editingMealData, setEditingMealData] = useState({});
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEstimatingWorkout, setIsEstimatingWorkout] = useState(false);
  const [isEstimatingMeal, setIsEstimatingMeal] = useState(false);
  const [isFetchingInsight, setIsFetchingInsight] = useState(false);
  const [graphInsight, setGraphInsight] = useState('');
  const [aiError, setAiError] = useState('');
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, message: '', onConfirm: null });

  // Clear insight when changing graph timeframe
  useEffect(() => {
    setGraphInsight('');
  }, [graphTimeframe]);

  // --- Resolve currentLog with dynamic fallback ---
  const currentLog = logs[selectedDate] || {
    profileSnapshot: { height: globalProfile.height, weight: globalProfile.weight, bmr: globalProfile.bmr },
    workout: "",
    workoutBurn: 0,
    meals: []
  };
  const isReadOnly = isReadOnlyDate(selectedDate);

  // --- Derived Calculations for Selected Date ---
  const totalCalories = currentLog.meals.reduce((sum, meal) => sum + Number(meal.calories), 0);
  const totalProtein = currentLog.meals.reduce((sum, meal) => sum + Number(meal.protein), 0);
  const totalCarbs = currentLog.meals.reduce((sum, meal) => sum + Number(meal.carbs), 0);
  const totalFats = currentLog.meals.reduce((sum, meal) => sum + Number(meal.fats), 0);

  const activeTargets = calculateDailyTargets(selectedDate, currentLog.profileSnapshot, currentLog.workoutBurn, globalProfile.goalPlan);

  // --- Handlers for Current Log ---
  const updateCurrentLog = (updates) => {
    if (isReadOnly) return;
    setLogs(prev => {
      const existing = prev[selectedDate] || {
        profileSnapshot: { height: globalProfile.height, weight: globalProfile.weight, bmr: globalProfile.bmr },
        workout: "",
        workoutBurn: 0,
        meals: []
      };
      return {
        ...prev,
        [selectedDate]: { ...existing, ...updates }
      };
    });
  };

  const handleProfileUpdate = (key, value) => {
    if (isReadOnly) return;
    const numValue = Number(value);
    
    const updatedProfile = { ...currentLog.profileSnapshot, [key]: numValue };
    updateCurrentLog({ profileSnapshot: updatedProfile });
    
    if (selectedDate === todayStr) {
      setGlobalProfile(prev => ({ ...prev, [key]: numValue }));
    }
  };

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (isReadOnly || !newMeal.name || !newMeal.calories) return;
    
    const newMealObj = {
      id: Date.now(),
      name: newMeal.name,
      calories: Number(newMeal.calories) || 0,
      protein: Number(newMeal.protein) || 0,
      carbs: Number(newMeal.carbs) || 0,
      fats: Number(newMeal.fats) || 0,
    };
    
    updateCurrentLog({ meals: [...currentLog.meals, newMealObj] });
    setNewMeal({ name: '', calories: '', protein: '', carbs: '', fats: '' });
  };

  const handleDeleteMeal = (meal) => {
    if (isReadOnly) return;
    setConfirmDialog({
      isOpen: true,
      message: `Are you sure you want to delete "${meal.name}"?`,
      onConfirm: () => {
        updateCurrentLog({ meals: currentLog.meals.filter(m => m.id !== meal.id) });
        setConfirmDialog({ isOpen: false, message: '', onConfirm: null });
      }
    });
  };

  const handleEditClick = (meal) => {
    if (isReadOnly) return;
    setEditingMealId(meal.id);
    setEditingMealData({ ...meal });
  };

  const handleCancelEdit = () => {
    setEditingMealId(null);
    setEditingMealData({});
  };

  const handleSaveEdit = () => {
    if (isReadOnly || !editingMealData.name) return;

    const updatedMeals = currentLog.meals.map(m =>
      m.id === editingMealId ? {
        ...editingMealData,
        calories: Number(editingMealData.calories) || 0,
        protein: Number(editingMealData.protein) || 0,
        carbs: Number(editingMealData.carbs) || 0,
        fats: Number(editingMealData.fats) || 0,
      } : m
    );

    updateCurrentLog({ meals: updatedMeals });
    setEditingMealId(null);
    setEditingMealData({});
  };

  const handleClearDay = () => {
    if (isReadOnly) return;
    setConfirmDialog({
      isOpen: true,
      message: "Are you sure you want to clear this day's logs?",
      onConfirm: () => {
        updateCurrentLog({ meals: [], workout: "", workoutBurn: 0 });
        setConfirmDialog({ isOpen: false, message: '', onConfirm: null });
      }
    });
  };

  // --- AI Integration ---
  const apiKey = ""; 
  
  const callGemini = async (prompt, schema) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: "You are a highly accurate fitness and nutrition AI. Return only the requested JSON." }] },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema
      }
    };

    const delays = [1000, 2000, 4000, 8000, 16000];
    for (let i = 0; i < 5; i++) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error("API Error");
        const result = await response.json();
        return JSON.parse(result.candidates[0].content.parts[0].text);
      } catch (error) {
        if (i === 4) throw error;
        await new Promise(res => setTimeout(res, delays[i]));
      }
    }
  };

  const estimateWorkoutBurn = async () => {
    if (isReadOnly || !currentLog.workout) return;
    setIsEstimatingWorkout(true);
    setAiError('');
    try {
      const schema = { type: "OBJECT", properties: { burn: { type: "INTEGER" } } };
      const prompt = `User profile: Weight ${currentLog.profileSnapshot.weight}kg, Height ${currentLog.profileSnapshot.height}cm. They completed this workout: "${currentLog.workout}". Estimate the total active calories burned.`;
      const result = await callGemini(prompt, schema);
      if (result && result.burn) {
        updateCurrentLog({ workoutBurn: result.burn });
      }
    } catch (err) {
      setAiError('Failed to estimate workout. Please try again.');
    } finally {
      setIsEstimatingWorkout(false);
    }
  };

  const estimateMealMacros = async () => {
    if (isReadOnly || !newMeal.name) {
      setAiError('Please enter a meal description first.');
      return;
    }
    setIsEstimatingMeal(true);
    setAiError('');
    try {
      const schema = {
        type: "OBJECT",
        properties: {
          calories: { type: "INTEGER" },
          protein: { type: "INTEGER" },
          carbs: { type: "INTEGER" },
          fats: { type: "INTEGER" }
        }
      };
      const prompt = `Estimate the nutritional info for this meal/food: "${newMeal.name}". Provide calories, protein (g), carbs (g), and fats (g).`;
      const result = await callGemini(prompt, schema);
      if (result) {
        setNewMeal(prev => ({
          ...prev,
          calories: result.calories || 0,
          protein: result.protein || 0,
          carbs: result.carbs || 0,
          fats: result.fats || 0
        }));
      }
    } catch (err) {
      setAiError('Failed to estimate meal macros. Please try again.');
    } finally {
      setIsEstimatingMeal(false);
    }
  };

  // --- Components ---
  const ProgressBar = ({ label, current, target, unit, color }) => {
    const percentage = Math.min((current / target) * 100, 100) || 0;
    return (
      <div className="mb-4">
        <div className="flex justify-between text-sm font-medium mb-1">
          <span>{label}</span>
          <span>{current} / {target} {unit}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div 
            className={`h-2.5 rounded-full ${color}`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // --- Calendar Rendering Logic ---
  const renderCalendar = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(year, month, d);
      const dateStr = formatDateStr(dateObj);
      const isFuture = isFutureDate(dateStr);
      const isOld = isTooOldDate(dateStr);
      const isToday = dateStr === todayStr;
      const isSelected = dateStr === selectedDate;
      const hasData = logs[dateStr] && (logs[dateStr].meals.length > 0 || logs[dateStr].workout !== "");
      
      const disabled = isFuture || isOld;
      
      let bgClass = "bg-white hover:bg-slate-100";
      if (isSelected) bgClass = "bg-blue-600 text-white hover:bg-blue-700";
      else if (disabled) bgClass = "bg-slate-50 text-slate-300 cursor-not-allowed";
      else if (isToday) bgClass = "bg-blue-50 text-blue-800 border-blue-200 font-bold border";
      
      days.push(
        <button
          key={dateStr}
          disabled={disabled}
          onClick={() => { setSelectedDate(dateStr); setActiveTab('tracker'); }}
          className={`h-14 md:h-20 rounded-xl flex flex-col items-center justify-center relative transition-all border ${bgClass} ${!isSelected && !disabled ? 'border-slate-200' : 'border-transparent'}`}
        >
          <span className="text-lg">{d}</span>
          {hasData && !isSelected && !disabled && (
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute bottom-2"></div>
          )}
          {hasData && isSelected && (
            <div className="w-1.5 h-1.5 rounded-full bg-white absolute bottom-2"></div>
          )}
        </button>
      );
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => setCalendarMonth(new Date(year, month - 1, 1))}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ChevronLeft size={20} className="text-slate-600" />
          </button>
          <h2 className="text-xl font-bold text-slate-800">
            {monthNames[month]} {year}
          </h2>
          <button 
            onClick={() => setCalendarMonth(new Date(year, month + 1, 1))}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ChevronRight size={20} className="text-slate-600" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days}
        </div>
      </div>
    );
  };

  // --- Graph Rendering Logic ---
  const renderGraphs = () => {
    let daysToShow = 7;
    if (graphTimeframe === '1day') daysToShow = 1;
    if (graphTimeframe === '3days') daysToShow = 3;
    if (graphTimeframe === 'month') daysToShow = 30;
    if (graphTimeframe === 'year') daysToShow = 365;

    const graphData = [];
    const today = new Date();
    today.setHours(12, 0, 0, 0); // Normalize hours to avoid DST date shifts
    
    // Collect historical data
    for (let i = daysToShow - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = formatDateStr(d);
      const log = logs[dateStr];

      let actual = { cals: 0, pro: 0, carb: 0, fat: 0 };
      let hasActualData = false;

      if (log && log.meals && log.meals.length > 0) {
        hasActualData = true;
        actual.cals = log.meals.reduce((sum, m) => sum + Number(m.calories), 0);
        actual.pro = log.meals.reduce((sum, m) => sum + Number(m.protein), 0);
        actual.carb = log.meals.reduce((sum, m) => sum + Number(m.carbs), 0);
        actual.fat = log.meals.reduce((sum, m) => sum + Number(m.fats), 0);
      }

      // Dynamic calculation for this specific date using the global goal plan rules
      const calculatedTargets = calculateDailyTargets(
        dateStr, 
        log ? log.profileSnapshot : globalProfile, 
        log ? log.workoutBurn : 0, 
        globalProfile.goalPlan
      );

      graphData.push({
        date: dateStr,
        label: daysToShow > 30 ? `${d.getMonth() + 1}/${d.getFullYear().toString().slice(2)}` : `${d.getMonth() + 1}/${d.getDate()}`,
        actual,
        target: {
          cals: calculatedTargets.cals,
          pro: calculatedTargets.pro,
          carb: calculatedTargets.carb,
          fat: calculatedTargets.fat
        },
        hasActualData
      });
    }

    const Chart = ({ title, metricKey, actualColorHex, targetColorHex, actualColorClass, targetColorClass }) => {
      const [hoveredIdx, setHoveredIdx] = useState(null);

      const maxVal = Math.max(...graphData.map(d => Math.max(d.actual[metricKey], d.target[metricKey]))) * 1.1 || 100;
      const height = 150;
      const width = 600;
      
      const getX = i => {
        if (graphData.length === 1) return width / 2;
        return (i / Math.max(1, graphData.length - 1)) * width;
      };
      const getY = val => height - (val / maxVal) * height;

      // Target Line
      const targetPoints = graphData.length === 1
        ? `0,${getY(graphData[0].target[metricKey])} ${width},${getY(graphData[0].target[metricKey])}`
        : graphData.map((d, i) => `${getX(i)},${getY(d.target[metricKey])}`).join(' ');

      // Actual Line
      let actualPolylinePoints = "";
      if (graphData.length === 1) {
        if (graphData[0].hasActualData) {
          const y = getY(graphData[0].actual[metricKey]);
          actualPolylinePoints = `0,${y} ${width},${y}`;
        }
      } else {
        actualPolylinePoints = graphData
          .map((d, i) => d.hasActualData ? `${getX(i)},${getY(d.actual[metricKey])}` : null)
          .filter(Boolean)
          .join(' ');
      }

      const labelStep = Math.max(1, Math.floor(graphData.length / 6));

      return (
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">{title}</h3>
            <div className="flex items-center gap-3 text-xs font-medium">
              <div className="flex items-center gap-1"><div className={`w-3 h-1 rounded ${targetColorClass}`}></div> Target</div>
              <div className="flex items-center gap-1"><div className={`w-3 h-1 rounded ${actualColorClass}`}></div> Actual</div>
            </div>
          </div>
          
          <div className="relative w-full overflow-hidden" style={{ height: "180px" }}>
            <svg viewBox={`-40 -10 ${width + 60} ${height + 40}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Grid Lines & Y-axis labels */}
              <line x1="0" y1={height} x2={width} y2={height} stroke="#e2e8f0" strokeWidth="2" />
              <line x1="0" y1={height/2} x2={width} y2={height/2} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="0" x2={width} y2="0" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4,4" />
              
              <text x="-10" y="0" fontSize="12" fill="#94a3b8" textAnchor="end" dominantBaseline="middle">{Math.round(maxVal)}</text>
              <text x="-10" y={height/2} fontSize="12" fill="#94a3b8" textAnchor="end" dominantBaseline="middle">{Math.round(maxVal/2)}</text>
              <text x="-10" y={height} fontSize="12" fill="#94a3b8" textAnchor="end" dominantBaseline="middle">0</text>

              {/* Target Line */}
              <polyline points={targetPoints} fill="none" stroke={targetColorHex} strokeWidth="2" strokeDasharray="6,4" />
              
              {/* Actual Line */}
              <polyline points={actualPolylinePoints} fill="none" stroke={actualColorHex} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Actual Data Points */}
              {graphData.map((d, i) => d.hasActualData && (
                <circle key={i} cx={getX(i)} cy={getY(d.actual[metricKey])} r="4" fill={actualColorHex} stroke="#fff" strokeWidth="2" />
              ))}

              {/* Guidelines and Hover Nodes */}
              {hoveredIdx !== null && (
                <g pointerEvents="none">
                  {/* Vertical Guide Line */}
                  <line x1={getX(hoveredIdx)} y1={0} x2={getX(hoveredIdx)} y2={height} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
                  
                  {/* Target Hover Circle */}
                  <circle cx={getX(hoveredIdx)} cy={getY(graphData[hoveredIdx].target[metricKey])} r="6" fill={targetColorHex} stroke="#fff" strokeWidth="2.5" />
                  
                  {/* Actual Hover Circle */}
                  {graphData[hoveredIdx].hasActualData && (
                    <circle cx={getX(hoveredIdx)} cy={getY(graphData[hoveredIdx].actual[metricKey])} r="6" fill={actualColorHex} stroke="#fff" strokeWidth="2.5" />
                  )}
                  
                  {/* Interactive Tooltip Card */}
                  {(() => {
                    const dataPoint = graphData[hoveredIdx];
                    const xVal = getX(hoveredIdx);
                    const tooltipWidth = 125;
                    const tooltipHeight = 65;
                    
                    const tooltipX = xVal > width / 2 ? xVal - tooltipWidth - 12 : xVal + 12;
                    const tooltipY = Math.max(10, Math.min(height - tooltipHeight, getY(dataPoint.target[metricKey]) - 30));
                    
                    return (
                      <g>
                        <rect x={tooltipX} y={tooltipY} width={tooltipWidth} height={dataPoint.hasActualData ? tooltipHeight : tooltipHeight - 16} rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" opacity="0.96" />
                        <text x={tooltipX + 12} y={tooltipY + 18} fill="#f8fafc" fontSize="11" fontWeight="600">
                          {dataPoint.date === todayStr ? "Today" : dataPoint.label}
                        </text>
                        <text x={tooltipX + 12} y={tooltipY + 34} fill="#94a3b8" fontSize="10">
                          Target: <tspan fill={targetColorHex} fontWeight="bold">{dataPoint.target[metricKey]}</tspan>
                        </text>
                        {dataPoint.hasActualData && (
                          <text x={tooltipX + 12} y={tooltipY + 49} fill="#94a3b8" fontSize="10">
                            Actual: <tspan fill={actualColorHex} fontWeight="bold">{dataPoint.actual[metricKey]}</tspan>
                          </text>
                        )}
                      </g>
                    );
                  })()}
                </g>
              )}

              {/* Invisible Hover Rectangles to capture user scrub moves */}
              {graphData.map((d, i) => {
                const xVal = getX(i);
                const stepWidth = graphData.length === 1 ? width : width / Math.max(1, graphData.length - 1);
                const rectX = graphData.length === 1 ? 0 : xVal - stepWidth / 2;
                return (
                  <rect
                    key={i}
                    x={rectX}
                    y={0}
                    width={stepWidth}
                    height={height}
                    fill="transparent"
                    className="cursor-crosshair"
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseMove={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  />
                );
              })}
              
              {/* X-axis labels */}
              {graphData.map((d, i) => {
                if (i % labelStep === 0 || i === graphData.length - 1) {
                  return <text key={i} x={getX(i)} y={height + 20} fontSize="12" fill="#94a3b8" textAnchor="middle">{d.label}</text>
                }
                return null;
              })}
            </svg>
          </div>
        </div>
      );
    };

    return (
      <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Filter Controls */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-wrap gap-2 justify-center">
          <button onClick={() => setGraphTimeframe('1day')} className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${graphTimeframe === '1day' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>1 Day</button>
          <button onClick={() => setGraphTimeframe('3days')} className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${graphTimeframe === '3days' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>3 Days</button>
          <button onClick={() => setGraphTimeframe('week')} className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${graphTimeframe === 'week' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>7 Days</button>
          <button onClick={() => setGraphTimeframe('month')} className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${graphTimeframe === 'month' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>30 Days</button>
          <button onClick={() => setGraphTimeframe('year')} className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${graphTimeframe === 'year' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>1 Year</button>
        </div>

        {/* AI Insight Section */}
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={async () => {
              setIsFetchingInsight(true);
              setAiError('');
              try {
                let totalActualCals = 0, totalTargetCals = 0;
                let totalActualPro = 0, totalTargetPro = 0;
                let daysWithData = 0;

                graphData.forEach(d => {
                  if(d.hasActualData) {
                    daysWithData++;
                    totalActualCals += d.actual.cals;
                    totalTargetCals += d.target.cals;
                    totalActualPro += d.actual.pro;
                    totalTargetPro += d.target.pro;
                  }
                });

                if (daysWithData === 0) {
                  setGraphInsight("You don't have any logged meals in this timeframe yet. Log some food so I can give you an analysis!");
                  setIsFetchingInsight(false);
                  return;
                }

                const schema = { type: "OBJECT", properties: { insight: { type: "STRING" } } };
                const prompt = `Act as a supportive fitness coach. Analyze the user's nutrition over the selected ${graphTimeframe} timeframe (${daysWithData} days of logged data). Total Target Calories: ${totalTargetCals}, Actual: ${totalActualCals}. Total Target Protein: ${totalTargetPro}g, Actual: ${totalActualPro}g. Provide a short (2-3 sentences) insight on their performance and one practical tip. Keep it encouraging.`;

                const result = await callGemini(prompt, schema);
                if (result && result.insight) {
                  setGraphInsight(result.insight);
                }
              } catch (err) {
                setAiError('Failed to generate insight. Please try again.');
              } finally {
                setIsFetchingInsight(false);
              }
            }}
            disabled={isFetchingInsight}
            className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors disabled:opacity-50 shadow-sm"
          >
            {isFetchingInsight ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
            Get AI Coach Insight
          </button>

          {graphInsight && (
            <div className="bg-gradient-to-br from-indigo-50 to-white text-slate-800 p-5 rounded-xl shadow-sm border border-indigo-100 max-w-2xl w-full animate-in fade-in zoom-in-95 duration-200 text-sm leading-relaxed relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
              <strong className="flex items-center gap-2 mb-2 text-indigo-900 text-base"><Sparkles size={18} className="text-indigo-500"/> Coach's Take</strong>
              <p>{graphInsight}</p>
            </div>
          )}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart title="Calories (kcal)" metricKey="cals" actualColorHex="#10b981" targetColorHex="#a7f3d0" actualColorClass="bg-emerald-500" targetColorClass="bg-emerald-200" />
          <Chart title="Protein (g)" metricKey="pro" actualColorHex="#3b82f6" targetColorHex="#bfdbfe" actualColorClass="bg-blue-500" targetColorClass="bg-blue-200" />
          <Chart title="Carbs (g)" metricKey="carb" actualColorHex="#f59e0b" targetColorHex="#fde68a" actualColorClass="bg-amber-500" targetColorClass="bg-amber-200" />
          <Chart title="Fats (g)" metricKey="fat" actualColorHex="#f43f5e" targetColorHex="#fecdd3" actualColorClass="bg-rose-500" targetColorClass="bg-rose-200" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-2 rounded-xl shadow-sm border border-slate-200">
          <div className="flex flex-wrap gap-2 w-full md:w-auto p-2">
            <button 
              onClick={() => setActiveTab('tracker')}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'tracker' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <Activity size={18} /> Tracker
            </button>
            <button 
              onClick={() => { setActiveTab('calendar'); setCalendarMonth(new Date(selectedDate)); }}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'calendar' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <CalendarIcon size={18} /> Calendar
            </button>
            <button 
              onClick={() => setActiveTab('graphs')}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'graphs' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <LineChart size={18} /> Graphs
            </button>
          </div>
          
          {activeTab === 'tracker' && (
            <div className="px-4 py-2 flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 border-slate-100 mt-2 md:mt-0">
              <span className="font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-md">
                {selectedDate === todayStr ? "Today" : selectedDate}
              </span>
              {isReadOnly && (
                <span className="text-xs flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                  <Lock size={12} /> Read Only
                </span>
              )}
            </div>
          )}
        </div>

        {aiError && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg border border-red-200 text-sm flex items-center justify-between">
            {aiError}
            <button onClick={() => setAiError('')} className="font-bold text-lg">&times;</button>
          </div>
        )}

        {/* --- MAIN VIEWS --- */}
        {activeTab === 'calendar' ? (
          renderCalendar()
        ) : activeTab === 'graphs' ? (
          renderGraphs()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            
            {/* Left Column: Profile & Workout */}
            <div className="space-y-6">
              
              {/* Profile & Goal Plan Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold flex items-center gap-2"><Scale size={18} className="text-indigo-500"/> Daily Profile</h2>
                  {!isReadOnly && (
                    <button onClick={() => setIsEditingProfile(!isEditingProfile)} className="text-xs text-indigo-600 hover:underline">
                      {isEditingProfile ? "Done" : "Edit"}
                    </button>
                  )}
                </div>
                
                {isEditingProfile && !isReadOnly ? (
                  <div className="space-y-5 text-sm">
                    {/* Snapshot Fields */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-500 mb-1 text-xs font-semibold">Weight (kg)</label>
                          <input type="number" value={currentLog.profileSnapshot.weight} onChange={e => handleProfileUpdate('weight', e.target.value)} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                          <label className="block text-slate-500 mb-1 text-xs font-semibold">Base Burn</label>
                          <input type="number" value={currentLog.profileSnapshot.bmr} onChange={e => handleProfileUpdate('bmr', e.target.value)} className="w-full p-2 border rounded" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Global Goal Plan */}
                    <div className="space-y-3 border-t pt-4">
                      <h3 className="font-semibold text-indigo-700 text-xs uppercase tracking-wider">Phase Planning</h3>
                      <div>
                        <label className="block text-slate-500 mb-1 text-xs font-semibold">Goal Type</label>
                        <select 
                          value={globalProfile.goalPlan.type} 
                          onChange={e => setGlobalProfile(prev => ({...prev, goalPlan: {...prev.goalPlan, type: e.target.value}}))}
                          className="w-full p-2 border rounded bg-slate-50"
                        >
                          <option value="Maintenance">Maintenance</option>
                          <option value="Cut">Cut (Deficit)</option>
                          <option value="Bulk">Bulk (Surplus)</option>
                        </select>
                      </div>

                      {globalProfile.goalPlan.type !== 'Maintenance' && (
                        <div>
                          <label className="block text-slate-500 mb-1 text-xs font-semibold">Intensity</label>
                          <select 
                            value={globalProfile.goalPlan.intensity} 
                            onChange={e => setGlobalProfile(prev => ({...prev, goalPlan: {...prev.goalPlan, intensity: e.target.value}}))}
                            className="w-full p-2 border rounded bg-slate-50"
                          >
                            <option value="Mild">Mild (±250 kcal)</option>
                            <option value="Moderate">Moderate (±500 kcal)</option>
                            <option value="Extreme">Extreme (±750 kcal)</option>
                          </select>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-500 mb-1 text-xs font-semibold">Start Date</label>
                          <input 
                            type="date" 
                            value={globalProfile.goalPlan.startDate} 
                            onChange={e => setGlobalProfile(prev => ({...prev, goalPlan: {...prev.goalPlan, startDate: e.target.value}}))}
                            className="w-full p-2 border rounded text-xs bg-slate-50" 
                          />
                        </div>
                        <div>
                          <label className="block text-slate-500 mb-1 text-xs font-semibold">End Date (Optional)</label>
                          <input 
                            type="date" 
                            value={globalProfile.goalPlan.endDate} 
                            onChange={e => setGlobalProfile(prev => ({...prev, goalPlan: {...prev.goalPlan, endDate: e.target.value}}))}
                            className="w-full p-2 border rounded text-xs bg-slate-50" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="space-y-2">
                      <div className="flex justify-between"><span>Weight:</span> <span className="font-medium text-slate-900">{currentLog.profileSnapshot.weight} kg</span></div>
                      <div className="flex justify-between"><span>Height:</span> <span className="font-medium text-slate-900">{currentLog.profileSnapshot.height} cm</span></div>
                      <div className="flex justify-between"><span>Base Burn:</span> <span className="font-medium text-slate-900">{currentLog.profileSnapshot.bmr} kcal</span></div>
                    </div>
                    
                    <div className="border-t pt-3 space-y-2">
                      <div className="font-bold text-slate-700 text-xs uppercase tracking-wider mb-2">Active Phase</div>
                      <div className="flex justify-between">
                        <span>Goal:</span> 
                        <span className="font-medium text-indigo-700">
                          {globalProfile.goalPlan.type} {globalProfile.goalPlan.type !== 'Maintenance' && `(${globalProfile.goalPlan.intensity})`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline:</span> 
                        <span className="font-medium text-slate-900 text-right">
                          {globalProfile.goalPlan.startDate} <br/> to {globalProfile.goalPlan.endDate || 'Ongoing'}
                        </span>
                      </div>
                      {activeTargets.modifier !== 0 && (
                        <div className="flex justify-between text-xs mt-1">
                          <span className="text-slate-400">Target Modifier:</span>
                          <span className={activeTargets.modifier > 0 ? "text-blue-600" : "text-emerald-600"}>
                            {activeTargets.modifier > 0 ? '+' : ''}{activeTargets.modifier} kcal
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Workout Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h2 className="font-semibold flex items-center gap-2 mb-4"><Activity size={18} className="text-rose-500"/> Workout Plan</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Workout Description</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={currentLog.workout} 
                        onChange={e => updateCurrentLog({ workout: e.target.value })} 
                        disabled={isReadOnly}
                        placeholder="e.g. Rest day or Easy Run 30m"
                        className="flex-grow p-2 border rounded text-sm disabled:bg-slate-50 disabled:text-slate-400" 
                      />
                      {!isReadOnly && (
                        <button 
                          onClick={estimateWorkoutBurn}
                          disabled={isEstimatingWorkout || !currentLog.workout}
                          className="bg-indigo-50 text-indigo-600 px-3 py-2 rounded border border-indigo-100 hover:bg-indigo-100 disabled:opacity-50 flex items-center justify-center transition-colors"
                          title="AI Estimate Burn"
                        >
                          {isEstimatingWorkout ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                        </button>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Est. Active Burn (kcal)</label>
                    <input 
                      type="number" 
                      value={currentLog.workoutBurn} 
                      onChange={e => updateCurrentLog({ workoutBurn: Number(e.target.value) })} 
                      disabled={isReadOnly}
                      className="w-full p-2 border rounded text-sm disabled:bg-slate-50 disabled:text-slate-400" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Macro Progress & Meals */}
            <div className="md:col-span-2 space-y-6">
              
              {/* Macro Targets */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold flex items-center gap-2"><Target size={18} className="text-emerald-500"/> Daily Progress</h2>
                  {!isReadOnly && (
                    <button 
                      onClick={handleClearDay}
                      className="text-xs text-slate-500 hover:text-red-500 hover:underline"
                    >
                      Clear Day
                    </button>
                  )}
                </div>
                
                <ProgressBar label="Calories" current={totalCalories} target={activeTargets.cals} unit="kcal" color="bg-emerald-500" />
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  <ProgressBar label="Protein" current={totalProtein} target={activeTargets.pro} unit="g" color="bg-blue-500" />
                  <ProgressBar label="Carbs" current={totalCarbs} target={activeTargets.carb} unit="g" color="bg-amber-500" />
                  <ProgressBar label="Fats" current={totalFats} target={activeTargets.fat} unit="g" color="bg-rose-500" />
                </div>
              </div>

              {/* Meals List */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h2 className="font-semibold flex items-center gap-2 mb-4"><Utensils size={18} className="text-orange-500"/> Logged Meals</h2>
                
                {/* Add Meal Form (Hidden if Read Only) */}
                {!isReadOnly && (
                  <div className="mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="flex gap-2 mb-2">
                      <input required type="text" placeholder="Describe meal (e.g., 200g Pargit & salad)" value={newMeal.name} onChange={e => setNewMeal({...newMeal, name: e.target.value})} className="flex-grow p-2 border rounded text-sm" />
                      <button 
                        type="button"
                        onClick={estimateMealMacros}
                        disabled={isEstimatingMeal || !newMeal.name}
                        className="bg-indigo-50 text-indigo-600 px-3 py-2 rounded border border-indigo-100 hover:bg-indigo-100 disabled:opacity-50 flex items-center justify-center gap-1 transition-colors text-sm font-medium whitespace-nowrap"
                      >
                        {isEstimatingMeal ? <Loader2 size={16} className="animate-spin" /> : <><Sparkles size={16} /> Auto-Fill</>}
                      </button>
                    </div>
                    <form onSubmit={handleAddMeal} className="flex flex-wrap gap-2">
                      <div className="flex-grow flex gap-2">
                        <input required type="number" placeholder="Kcal" value={newMeal.calories} onChange={e => setNewMeal({...newMeal, calories: e.target.value})} className="w-full sm:w-20 p-2 border rounded text-sm" />
                        <input type="number" placeholder="Pro" value={newMeal.protein} onChange={e => setNewMeal({...newMeal, protein: e.target.value})} className="w-full sm:w-20 p-2 border rounded text-sm" />
                        <input type="number" placeholder="Carb" value={newMeal.carbs} onChange={e => setNewMeal({...newMeal, carbs: e.target.value})} className="w-full sm:w-20 p-2 border rounded text-sm" />
                        <input type="number" placeholder="Fat" value={newMeal.fats} onChange={e => setNewMeal({...newMeal, fats: e.target.value})} className="w-full sm:w-20 p-2 border rounded text-sm" />
                      </div>
                      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center transition-colors">
                        <Plus size={20} className="mr-1"/> Add
                      </button>
                    </form>
                  </div>
                )}

                {/* Meals Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                      <tr>
                        <th className="px-4 py-3 font-medium">Meal</th>
                        <th className="px-4 py-3 font-medium text-right">Cals</th>
                        <th className="px-4 py-3 font-medium text-right">Pro</th>
                        <th className="px-4 py-3 font-medium text-right">Carbs</th>
                        <th className="px-4 py-3 font-medium text-right">Fats</th>
                        {!isReadOnly && <th className="px-4 py-3 font-medium text-center"></th>}
                      </tr>
                    </thead>
                    <tbody>
                      {currentLog.meals.length === 0 ? (
                        <tr><td colSpan={isReadOnly ? "5" : "6"} className="text-center py-6 text-slate-400">No meals logged on this date.</td></tr>
                      ) : (
                        currentLog.meals.map(meal => (
                          meal.id === editingMealId ? (
                            <tr key={meal.id} className="border-b last:border-0 bg-blue-50/50">
                              <td className="px-2 py-2">
                                <input type="text" value={editingMealData.name} onChange={e => setEditingMealData({...editingMealData, name: e.target.value})} className="w-full p-1.5 border rounded text-sm" />
                              </td>
                              <td className="px-2 py-2">
                                <input type="number" value={editingMealData.calories} onChange={e => setEditingMealData({...editingMealData, calories: e.target.value})} className="w-full p-1.5 border rounded text-sm text-right" />
                              </td>
                              <td className="px-2 py-2">
                                <input type="number" value={editingMealData.protein} onChange={e => setEditingMealData({...editingMealData, protein: e.target.value})} className="w-full p-1.5 border rounded text-sm text-right" />
                              </td>
                              <td className="px-2 py-2">
                                <input type="number" value={editingMealData.carbs} onChange={e => setEditingMealData({...editingMealData, carbs: e.target.value})} className="w-full p-1.5 border rounded text-sm text-right" />
                              </td>
                              <td className="px-2 py-2">
                                <input type="number" value={editingMealData.fats} onChange={e => setEditingMealData({...editingMealData, fats: e.target.value})} className="w-full p-1.5 border rounded text-sm text-right" />
                              </td>
                              <td className="px-2 py-2 text-center">
                                <div className="flex justify-center gap-2">
                                  <button onClick={handleSaveEdit} className="text-emerald-600 hover:text-emerald-700 transition-colors p-1" title="Save">
                                    <Check size={16} />
                                  </button>
                                  <button onClick={handleCancelEdit} className="text-slate-400 hover:text-red-500 transition-colors p-1" title="Cancel">
                                    <X size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            <tr key={meal.id} className="border-b last:border-0 hover:bg-slate-50 transition-colors">
                              <td className="px-4 py-3 font-medium text-slate-800">{meal.name}</td>
                              <td className="px-4 py-3 text-right text-emerald-600 font-medium">{meal.calories}</td>
                              <td className="px-4 py-3 text-right text-blue-600">{meal.protein}g</td>
                              <td className="px-4 py-3 text-right text-amber-600">{meal.carbs}g</td>
                              <td className="px-4 py-3 text-right text-rose-600">{meal.fats}g</td>
                              {!isReadOnly && (
                                <td className="px-4 py-3 text-center">
                                  <div className="flex justify-center gap-3">
                                    <button onClick={() => handleEditClick(meal)} className="text-slate-400 hover:text-blue-500 transition-colors" title="Edit">
                                      <Edit2 size={16} />
                                    </button>
                                    <button onClick={() => handleDeleteMeal(meal)} className="text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </td>
                              )}
                            </tr>
                          )
                        ))
                      )}
                    </tbody>
                    {currentLog.meals.length > 0 && (
                      <tfoot className="bg-slate-50 font-bold border-t border-slate-200">
                        <tr>
                          <td className="px-4 py-3 text-slate-700">Total</td>
                          <td className="px-4 py-3 text-right text-emerald-700">{totalCalories}</td>
                          <td className="px-4 py-3 text-right text-blue-700">{totalProtein}g</td>
                          <td className="px-4 py-3 text-right text-amber-700">{totalCarbs}g</td>
                          <td className="px-4 py-3 text-right text-rose-700">{totalFats}g</td>
                          {!isReadOnly && <td></td>}
                        </tr>
                      </tfoot>
                    )}
                  </table>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Custom Confirm Modal */}
        {confirmDialog.isOpen && (
          <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full border border-slate-200 animate-in zoom-in-95 duration-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Please Confirm</h3>
              <p className="text-slate-600 mb-6">{confirmDialog.message}</p>
              <div className="flex justify-end gap-3">
                <button 
                  onClick={() => setConfirmDialog({ isOpen: false, message: '', onConfirm: null })} 
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmDialog.onConfirm} 
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium text-sm"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}