import StepCard from './StepCard';

export default function StepOne() {
  return (
    <StepCard>
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <p className="text-justify py-4 text-base md:text-xl font-regular">
          Após a aprovação do orçamento,{' '}
          <span className="font-semibold">
            você pode ter total confiança em minha experiência e
            comprometimento.
          </span>
        </p>
        <p className="text-justify py-4 text-base md:text-xl font-regular">
          {' '}
          Estou pronto para criar a estratégia mais eficaz para resolver sua
          situação, garantindo que você tenha o{' '}
          <span className="bg-success font-semibold px-2">
            melhor suporte jurídico possível.
          </span>
        </p>
      </div>
    </StepCard>
  );
}
