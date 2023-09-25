import { usePayment } from "src/presentation/hooks/schedule-appointment";
import { Button, Error, LoaderCircle } from "src/presentation/components";

import * as S from "./styles";

export function Total() {
  const { data, isFetching } = usePayment();

  const renderValue = (value: string | number | undefined) => {
    return isFetching ? <LoaderCircle size={20} color="red" /> : value
  }

  return (
    <Error name="total">
      <S.Total>
        <ul>
          <li className="font-14-regular">
            <span>Número de pokémons a serem atendidos:</span>
            <span>{renderValue(data?.numberPatients)}</span>
          </li>

          <li className="font-14-regular">
            <span>Atendimento unitário por pokémon: </span>

            <span>{renderValue(data?.unitaryPrice)}</span>
          </li>

          <li className="font-14-regular">
            <span>Subtotal:</span>
            <span>{renderValue(data?.subtotal)}</span>
          </li>

          <li className="font-14-regular">
            <span>Taxa geracional*:</span>
            <span>{renderValue(data?.taxValue)}</span>
          </li>
        </ul>

        <p className="warning">
          *adicionamos uma taxa de {data?.tax}, multiplicado pelo número da
          geração mais alta do time, com limite de até {data?.taxLimit}
        </p>

        <div className="bottom">
          <span className="total-text font-24-semibold">
            Valor Total: {renderValue(data?.total)}
          </span>

          <Button type="submit" text="Concluir Agendamento" disabled={isFetching} />
        </div>
      </S.Total>
    </Error>
  );
}
