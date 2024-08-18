import { TelephoneIcon } from '../TelephoneIcon';
import StepCard from './StepCard';
import type { Props } from './StepOne';
import StepsNav from './StepsNav';

export default function StepTwo(props: Props) {
  return (
    <StepCard>
      <StepsNav {...props} id={2} />
      <p className="text-center font-medium pt-3 text-sm md:py-4 md:text-base mb-auto">
        Com o seu contato posso agir imediatamente ou marcar uma reunião (sem
        custos). Você receberá orientações e um orçamento.
      </p>
      <div className="flex w-full flex-col md:flex-row pt-4">
        <div className="basis-1/2 card bg-base-200 rounded-box flex flex-col flex-grow items-center justify-center gap-2 p-2 md:gap-4 md:p-4">
          <div className="w-full">
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-8 rounded-full">
                  <img alt="Avatar de usuário" src="/images/AvatarIcon.svg" />
                </div>
              </div>
              <div className="chat-header text-xs md:text-sm">Cliente</div>
              <div className="chat-bubble chat-bubble-success text-sm font-medium min-h-[1.75rem] md:min-h-[2.75rem]">
                <span className="inline-block w-[26px] relative top-1">
                  <TelephoneIcon />
                </span>
                Ligação de voz
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-9 md:w-10 rounded-full">
                  <img alt="Avatar de Gustavo" src="/images/perfil-32.jpeg" />
                </div>
              </div>
              <div className="chat-header text-xs md:text-sm">
                Gustavo Trentin
              </div>
              <div className="chat-bubble chat-bubble-success text-sm font-medium min-h-[1.75rem] md:min-h-[2.75rem]">
                Estou a caminho da delegacia.
              </div>
            </div>
          </div>
        </div>
        <div className="divider md:divider-horizontal font-bold">ou</div>
        <div className="basis-1/2 card bg-base-200 rounded-box flex flex-col flex-grow items-center justify-center gap-2 p-2 md:gap-4 md:p-4">
          <div className="w-full">
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-8 rounded-full">
                  <img alt="Avatar de usuário" src="/images/AvatarIcon.svg" />
                </div>
              </div>
              <div className="chat-header text-xs md:text-sm">Cliente</div>
              <div className="chat-bubble chat-bubble-success text-sm font-medium min-h-[1.75rem] md:min-h-[2.75rem]">
                Olá Gustavo. Preciso de um advogado criminal...
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-9 md:w-10 rounded-full">
                  <img alt="Avatar de Gustavo" src="/images/perfil-32.jpeg" />
                </div>
              </div>
              <div className="chat-header text-xs md:text-sm">
                Gustavo Trentin
              </div>
              <div className="chat-bubble chat-bubble-success text-sm font-medium ">
                Olá, tudo bem? Você poderia vir ao meu escritório amanhã?
              </div>
            </div>
          </div>
        </div>
      </div>
    </StepCard>
  );
}
