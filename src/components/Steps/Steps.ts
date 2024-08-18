import type { Props as ComponentProps } from './StepOne';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

export interface StepObj {
  id: number;
  title: string;
  component: ({
    onClickBack,
    onClickForward,
  }: ComponentProps) => React.JSX.Element;
}

const steps: Array<StepObj> = [
  {
    id: 1,
    title: 'Contato',
    component: StepOne,
  },
  {
    id: 2,
    title: 'Avaliação',
    component: StepTwo,
  },
  {
    id: 3,
    title: 'Defesa',
    component: StepThree,
  },
];

export default steps;
