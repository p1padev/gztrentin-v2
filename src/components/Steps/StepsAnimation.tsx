import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import StepOne from './StepOne';
import steps from './Steps';
import StepNav from './StepsNav-2';

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
        <StepNav
          steps={steps}
          selectedTabID={selectedTabID}
          setSelectedTabID={setSelectedTabID}
          onClickBack={onClickBack}
          onClickForward={onClickForward}
        />
        <div className="flex flex-col bg-white p-4 md:py-4 md:px-8 w-full flex-1 max-w-[900px] min-h-[450px] md:min-h-[340px]">
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
