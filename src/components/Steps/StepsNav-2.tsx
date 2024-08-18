import { ArrowLeft } from './Icons/ArrowLeft';
import { ArrowRight } from './Icons/ArrowRight';
import type { Props } from './StepOne';
import type { StepObj } from './Steps';

interface NavProps extends Props {
  steps: StepObj[];
  setSelectedTabID: React.Dispatch<React.SetStateAction<number>>;
  selectedTabID: number;
}

export default function StepNav({
  onClickBack,
  onClickForward,
  setSelectedTabID,
  selectedTabID,
  steps,
}: NavProps) {
  return (
    <div
      className="flex flex-row flex-nowrap items-center mb-4 gap-2 md:gap-10"
      aria-label="Barra de navegação da seção."
    >
      <button
        className="btn btn-circle btn-outline btn-sm"
        onClick={onClickBack}
      >
        <ArrowLeft />
      </button>
      <ol className="bg-primary-content w-fit rounded-md py-3 p-1 md:p-3 shadow-md steps gap-x-3">
        {steps.map((step) => (
          <li
            key={step.id}
            className={
              selectedTabID === step.id
                ? 'step step-primary relative text-sm'
                : 'step relative text-sm'
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
      <button
        className="btn btn-circle btn-outline btn-sm"
        onClick={onClickForward}
      >
        <ArrowRight />
      </button>
    </div>
  );
}
