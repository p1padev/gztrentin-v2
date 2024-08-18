import { TelephoneIcon } from '../TelephoneIcon';
import StepCard from './StepCard';
import StepsNav from './StepsNav';

export interface Props {
  onClickBack: () => void;
  onClickForward: () => void;
}

export default function StepOne(props: Props) {
  return (
    <StepCard>
      <StepsNav {...props} id={1} />
      <p className="text-center font-medium pt-3 text-sm md:py-4 md:text-base mb-auto">
        Para entrar em contato comigo e falar do seu caso você pode:
      </p>
      <div className="flex w-full flex-col md:flex-row pt-4">
        <div className="basis-1/2 card bg-base-200 rounded-box flex flex-col flex-grow items-center justify-center gap-2 p-2 md:gap-4 md:p-4">
          <h4 className="font-bold">Me ligar</h4>
          <div className="w-full">
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-8 rounded-full">
                  <img alt="Avatar de usuário" src="/images/AvatarIcon.svg" />
                </div>
              </div>
              <div className="chat-header text-xs md:text-sm">Cliente</div>
              <div className="chat-bubble chat-bubble-success text-sm font-medium min-h-[1.75rem] md:min-h-[2.75rem]">
                <span className="inline-block w-[26px] relative top-0.5">
                  <TelephoneIcon />
                </span>
                Ligação de voz
              </div>
            </div>
          </div>
          <p className="text-center">
            Especialmente em caso de{' '}
            <span className="text-red-500 font-semibold">urgência</span>
          </p>
        </div>
        <div className="divider md:divider-horizontal font-bold">ou</div>
        <div className="basis-1/2 card bg-base-200 rounded-box flex flex-col flex-grow items-center justify-start gap-2 p-2 md:gap-4 md:p-4">
          <h4 className="font-bold">Me mandar uma mensagem</h4>
          <div className="w-full">
            <div className="chat chat-end">
              <div className="chat-image avatar w-7 md:w-8">
                <div className="w-8 rounded-full">
                  <img alt="Avatar de usuário" src="/images/AvatarIcon.svg" />
                </div>
              </div>
              <div className="chat-header text-xs md:text-sm">Cliente</div>
              <div className="chat-bubble chat-bubble-success text-sm font-medium min-h-[1.75rem] md:min-h-[2.75rem]">
                Olá Gustavo. Preciso de um advogado criminal...
              </div>
            </div>
          </div>
        </div>
      </div>
    </StepCard>
  );
}
