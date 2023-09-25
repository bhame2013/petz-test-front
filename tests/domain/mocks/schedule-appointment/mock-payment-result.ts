import { LoadPayment } from "src/domain/usecases";

export const mockRemoteLoadPaymentResultModel = (): LoadPayment.Model => ({
  numberPatients: 1,
  tax: "3%",
  total: "R$ 72,10",
  subtotal: "R$ 70,00",
  taxValue: "R$ 2,10",
  taxLimit: "30%",
  unitaryPrice: "R$ 70,00",
  taxTotal: "3%",
});
