import type { Props as ComponentProps } from './StepOne';

interface NavProps extends ComponentProps {
  id: number;
}

export default function StepsNav({
  onClickBack,
  onClickForward,
  id,
}: NavProps) {
  const disabledClass = 'btn btn-disabled min-h-0 h-auto p-2';
  const enabledClass = 'btn min-h-0 h-auto p-2';
  const isBackDisabled = id > 1 ? false : true;
  const isForwardDisabled = id < 3 ? false : true;

  return (
    <div className="flex flex-nowrap items-center justify-between mb-auto">
      <button
        disabled={isBackDisabled}
        className={isBackDisabled ? disabledClass : enabledClass}
        onClick={onClickBack}
      >
        Voltar
      </button>
      <button
        disabled={isForwardDisabled}
        className={isForwardDisabled ? disabledClass : enabledClass}
        onClick={onClickForward}
      >
        Próximo
      </button>
    </div>
  );
}
