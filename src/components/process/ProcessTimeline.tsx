import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProcessIntro from './ProcessIntro';
import { ArrowRight } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: "Client Engagement & Requirement Gathering",
    description: "Our IT consultants collaborate with your team to fully understand your unique needs, current challenges, and business objectives. This in-depth discovery phase ensures we capture all your requirements accurately.",
  },
  {
    number: "02",
    title: "Planning & Agreement",
    description: "We develop a comprehensive strategy tailored to your specific requirements, including technology selection, timeline, resource allocation, and clear deliverables.",
  },
  {
    number: "03",
    title: "Design Phase",
    description: "Our expert designers create detailed visual and architectural blueprints for your solution, focusing on user experience, scalability, and alignment with your brand identity.",
  },
  {
    number: "04",
    title: "Client Review and UAT",
    description: "We present our designs and prototypes for your feedback, conducting collaborative sessions to ensure the proposed solution matches your expectations.",
  },
  {
    number: "05",
    title: "Development Phase",
    description: "Our development team transforms approved designs into fully functional solutions using industry best practices, with regular check-ins to demonstrate progress.",
  },
  {
    number: "06",
    title: "Quality Assurance and Testing",
    description: "We conduct rigorous testing procedures to ensure your solution functions flawlessly across all scenarios, devices, and user roles.",
  },
  {
    number: "07",
    title: "Deployment",
    description: "We execute a carefully planned deployment strategy to launch your solution with minimal disruption to your operations, ensuring smooth transition.",
  },
  {
    number: "08",
    title: "Ongoing Support & Maintenance",
    description: "Our relationship continues beyond deployment with dedicated support, regular updates, and continuous optimization to ensure your solution evolves.",
  }
];

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredStep === null) {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [hoveredStep]);

  const calculatePosition = (index: number, totalSteps: number) => {
    const angle = (index * 360) / totalSteps - 90;
    const radius = 250;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, angle };
  };

  const calculateControlPoint = (startAngle: number, endAngle: number) => {
    const midAngle = (startAngle + endAngle) / 2;
    const controlRadius = 150;
    const x = Math.cos((midAngle * Math.PI) / 180) * controlRadius;
    const y = Math.sin((midAngle * Math.PI) / 180) * controlRadius;
    return { x, y };
  };

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section id="process" className="py-20 bg-gray-50 relative overflow-hidden">
      <ProcessIntro />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="relative mx-auto" style={{ height: '800px', maxWidth: '1000px' }}>
          {/* Description panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-2xl text-center z-20 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-xl border border-primary-100">
                <h3 className="text-2xl font-bold text-primary-600 mb-3">
                  {processSteps[currentStep].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {processSteps[currentStep].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-24" style={{ height: '600px' }}>
            {/* Center circle with static phase number */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div
                className="w-40 h-40 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full 
                         flex items-center justify-center text-white font-bold text-2xl shadow-xl
                         border-4 border-white"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    className="text-center px-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-sm font-medium mb-1">Phase</div>
                    <div className="text-3xl font-bold">{processSteps[currentStep].number}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Process steps */}
            {processSteps.map((step, index) => {
              const pos = calculatePosition(index, processSteps.length);
              const isActive = index === currentStep;
              const nextIndex = (index + 1) % processSteps.length;
              const nextPos = calculatePosition(nextIndex, processSteps.length);
              const control = calculateControlPoint(pos.angle, nextPos.angle);
              
              return (
                <React.Fragment key={step.number}>
                  <motion.div
                    className="absolute left-1/2 top-1/2"
                    style={{
                      x: pos.x - 60,
                      y: pos.y - 60,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`w-[120px] h-[120px] rounded-full shadow-lg flex items-center justify-center
                               cursor-pointer relative transition-all duration-500 ${
                                 isActive ? 'bg-primary-600 text-white scale-110' : 'bg-white text-gray-800'
                               }`}
                      animate={{ 
                        scale: isActive ? 1.1 : 1,
                        boxShadow: isActive ? '0 10px 30px rgba(var(--color-primary), 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                      onHoverStart={() => setHoveredStep(index)}
                      onHoverEnd={() => setHoveredStep(null)}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center p-4">
                        <div className={`text-3xl font-bold ${isActive ? 'text-white' : 'text-primary-600'}`}>
                          {step.number}
                        </div>
                        <div className={`text-xs mt-1 font-medium ${isActive ? 'text-white' : 'text-gray-600'}`}>
                          {step.title.split(' ')[0]}
                        </div>
                      </div>

                      {/* Animated arrow */}
                      {isActive && (
                        <motion.div
                          className="absolute -right-6 top-1/2 -translate-y-1/2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-8 h-8 text-primary-400" />
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Curved connecting lines */}
                  <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    width="1000"
                    height="1000"
                    style={{ pointerEvents: 'none' }}
                  >
                    <motion.path
                      d={`M ${pos.x + 500} ${pos.y + 500} Q ${control.x + 500} ${control.y + 500} ${nextPos.x + 500} ${nextPos.y + 500}`}
                      fill="none"
                      strokeWidth="3"
                      stroke={isActive ? 'rgb(var(--color-primary))' : 'rgba(var(--color-primary), 0.2)'}
                      strokeDasharray="6 6"
                    />
                  </svg>
                </React.Fragment>
              );
            })}

            {/* Progress indicator */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-primary-600"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;