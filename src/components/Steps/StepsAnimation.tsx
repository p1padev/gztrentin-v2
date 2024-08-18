import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import StepOne from './StepOne';
import steps from './Steps';

export default function StepsAnimation() {
  const [selectedTabID, setSelectedTabID] = useState<number>(1);

  const SelectedComponent =
    steps.find((step) => step.id === (selectedTabID ?? 1))?.component ??
    StepOne;

  const onClickBack = () => {
    if (selectedTabID > 1) {
      setSelectedTabID(selectedTabID - 1);
    }
  };

  const onClickForward = () => {
    if (selectedTabID < 3) {
      setSelectedTabID(selectedTabID + 1);
    }
  };

  return (
    <section className="py-8 px-4 w-full">
      <div className="lg:container flex flex-col items-center">
        <h2 className="mb-6 text-center text text-xl font-semibold lg:text-3xl">
          Como funciona
        </h2>
        <div className="bg-primary-content w-fit rounded-md p-3 mb-4 shadow-md">
          <ol
            className="steps gap-x-3"
            aria-label="Barra de navegação da seção."
          >
            {steps.map((step) => (
              <li
                key={step.id}
                className={
                  selectedTabID === step.id
                    ? 'step step-primary relative'
                    : 'step relative'
                }
                role="listitem"
                aria-live="polite"
              >
                <button
                  onClick={() => {
                    setSelectedTabID(step.id);
                  }}
                  className="before:content-[''] before:absolute before:h-full before:w-full before:left-0 before:top-0 z-20"
                >
                  <span className="sr-only">
                    {selectedTabID === step.id
                      ? 'Você está vendo o conteúdo de:'
                      : ''}
                  </span>
                  {step.title}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col bg-white p-4 min-h-[550px] md:py-4 md:px-8 sm:min-h-[500px] md:min-h-[375px] w-full flex-1 max-w-[900px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={
                selectedTabID
                  ? steps.find((e) => selectedTabID === e.id)?.title
                  : 'empty'
              }
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col h-full w-full"
            >
              <SelectedComponent
                onClickBack={onClickBack}
                onClickForward={onClickForward}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
