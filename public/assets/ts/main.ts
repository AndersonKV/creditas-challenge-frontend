import {
  checkFormValidity,
  domHtml,
  setSpan,
  FCValue,
  FCValueRange,
  getFormValues,
  updateInputeValues,
  removeChilds,
  setOptionsValues,
  formatNumbers,
  removeDot,
} from "./utils";

class CreditasChallenge {
  static initialize() {
    this.registerEvents();
  }
  static submitFinalForm(values: any) {
    const match = (matchString: any) => (value: any) =>
      value.field === matchString;

    const IOF = parseFloat((638 / 100).toPrecision(3));
    const INTEREST_RATE = parseFloat((234 / 100).toPrecision(3));

    const TIME = values.find(match("parcelas")).value / 1000;
    const prazo = values[0].value;
    const VEHICLE_LOAN_AMOUNT = values.find(match("valor-emprestimo")).value;
    const VLA = VEHICLE_LOAN_AMOUNT.replace(/\./g, "");
    const valorTotalAPagar: any =
      (IOF / 100 + INTEREST_RATE / 100 + prazo / 1000 + 1) * VLA;

    const valorDaParcela: any = valorTotalAPagar / prazo;
    const verifyValueTotalAPagar =
      formatNumbers(removeDot(valorTotalAPagar)) == null
        ? formatNumbers(valorTotalAPagar.toString())
        : formatNumbers(removeDot(valorTotalAPagar));

    const verifyValorDaParcela =
      formatNumbers(removeDot(valorDaParcela)) == null
        ? formatNumbers(valorDaParcela.toString())
        : formatNumbers(removeDot(valorDaParcela));

    const quotaSpan = document.querySelector(".quota span") as HTMLElement;
    quotaSpan.innerHTML = verifyValorDaParcela!.toString();

    const amountContainer = document.querySelector(
      ".amount_container p"
    ) as HTMLElement;
    amountContainer.innerHTML = verifyValueTotalAPagar!.toString();
  }

  static Send(values: any) {
    (function (values) {
      return new Promise(function (resolve, reject) {
        try {
          resolve(CreditasChallenge.submitFinalForm(values));
        } catch (error) {
          reject(error);
        }
      });
    })(values);
  }
  static veiculo() {
    //**************SETA OS VALORES DO SPAN */
    var garantiaFirst = setSpan("garantia", "first", "5.000");
    var garantiaLast = setSpan("garantia", "last", "3.000.000");
    var emprestimoFirst = setSpan("emprestimo", "first", "3.000");
    var emprestimoLast = setSpan("emprestimo", "last", "100.000");

    /******************SETA OS VALORES DOS INPUT*/
    var garantiaValue = FCValue("garantia", "5.000");
    var garantiaRange = FCValueRange("garantia", "5000", "3000000");
    var emprestimoValue = FCValue("emprestimo", "3.000");
    var emprestimoRange = FCValueRange("emprestimo", "3000", "100000");
    //DIV SPANS
    var divGarantia = domHtml(".span-garantia") as HTMLFormElement;
    var divEmprestimo = domHtml(".span-emprestimo") as HTMLFormElement;

    removeChilds(divGarantia);
    removeChilds(divEmprestimo);

    divGarantia.appendChild(garantiaFirst);
    divGarantia.appendChild(garantiaLast);

    divEmprestimo.appendChild(emprestimoFirst);
    divEmprestimo.appendChild(emprestimoLast);
  }
  static imovel() {
    //**************SETA OS VALORES DO SPAN */
    var garantiaFirst = setSpan("garantia", "first", "50.000");
    var garantiaLast = setSpan("garantia", "last", "100.000.000");
    var emprestimoFirst = setSpan("emprestimo", "first", "30.000");
    var emprestimoLast = setSpan("emprestimo", "last", "4.500.000");

    /******************SETA OS VALORES DOS INPUT*/
    var emprestimoValue = FCValue("emprestimo", "30.000");
    var emprestimoRange = FCValueRange("emprestimo", "30000", "4500000");
    var garantiaValue = FCValue("garantia", "50.000");
    var garantiaRange = FCValueRange("garantia", "50000", "100000000");

    //DIV SPANS
    var divGarantia = domHtml(".span-garantia") as HTMLFormElement;
    var divEmprestimo = domHtml(".span-emprestimo") as HTMLFormElement;

    removeChilds(divGarantia);
    removeChilds(divEmprestimo);

    divGarantia.appendChild(garantiaFirst);
    divGarantia.appendChild(garantiaLast);

    divEmprestimo.appendChild(emprestimoFirst);
    divEmprestimo.appendChild(emprestimoLast);
  }

  static passInputVeiculo(event: any) {
    var garantia = domHtml("#garantia") as HTMLSelectElement;
    var valorGarantia = domHtml("#valor-garantia") as HTMLFormElement;
    var valorGarantiaRange = domHtml(
      "#valor-garantia-range"
    ) as HTMLInputElement;
    var valorEmprestimo = domHtml("#valor-emprestimo") as HTMLFormElement;
    var valorEmprestimoRange = domHtml(
      "#valor-emprestimo-range"
    ) as HTMLFormElement;

    var porcentagem = ((80 * event) / 100).toString();
    var transformString = porcentagem.toString();

    valorEmprestimoRange!.max = porcentagem;

    updateInputeValues(transformString, valorEmprestimo);
    updateInputeValues(event, valorGarantia);
    FCValue("emprestimo", "3.000");
    FCValueRange("emprestimo", "3.000", porcentagem);
  }
  static passInputImovel(event: any) {
    var garantia = domHtml("#garantia") as HTMLSelectElement;
    var valorGarantia = domHtml("#valor-garantia") as HTMLFormElement;
    var valorGarantiaRange = domHtml(
      "#valor-garantia-range"
    ) as HTMLInputElement;
    var valorEmprestimo = domHtml("#valor-emprestimo") as HTMLFormElement;
    var valorEmprestimoRange = domHtml(
      "#valor-emprestimo-range"
    ) as HTMLFormElement;

    var porcentagem = ((80 * event) / 100).toString();
    var transformString = porcentagem.toString();

    valorEmprestimoRange.max = porcentagem;

    updateInputeValues(transformString, valorEmprestimo);
    updateInputeValues(event, valorGarantia);
    FCValue("emprestimo", "30.000");
    FCValueRange("emprestimo", "30.000", porcentagem);
  }

  static registerEvents() {
    var form = domHtml(".form") as HTMLFormElement;
    var parcelas = domHtml("#parcelas") as HTMLFormElement;
    var garantia = domHtml("#garantia") as HTMLInputElement;
    var valorGarantia = domHtml("#valor-garantia") as HTMLInputElement;
    var valorGarantiaRange = domHtml(
      "#valor-garantia-range"
    ) as HTMLFormElement;
    var valorEmprestimo = domHtml("#valor-emprestimo");
    var valorEmprestimoRange = domHtml(
      "#valor-emprestimo-range"
    ) as HTMLInputElement;

    form.addEventListener("submit", function (event: Event) {
      event.preventDefault();

      if (checkFormValidity(form)) {
        try {
          CreditasChallenge.Send(getFormValues(form));
        } catch (err) {
          return alert(Error);
        }
      }
    });

    parcelas.addEventListener("change", function (event) {});

    garantia.addEventListener("change", function (event) {
      if ((<HTMLInputElement>event.target).value === "veiculo") {
        CreditasChallenge.veiculo();

        removeChilds(parcelas);

        const option = setOptionsValues("24", "36", "48");

        parcelas.insertAdjacentHTML("afterbegin", option);
      } else if ((<HTMLInputElement>event.target).value === "imovel") {
        CreditasChallenge.imovel();

        removeChilds(parcelas);

        const option = setOptionsValues("120", "180", "240");

        parcelas.insertAdjacentHTML("afterbegin", option);
      }
    });

    valorGarantiaRange.addEventListener("change", async function (event) {
      if (garantia.value === "veiculo") {
        CreditasChallenge.passInputVeiculo(
          (<HTMLInputElement>event.target).value
        );
      } else {
        CreditasChallenge.passInputImovel(
          (<HTMLInputElement>event.target).value
        );
      }
    });

    valorEmprestimoRange.addEventListener("change", function (event) {
      const newValorEmprestimo = document.querySelector(
        "#valor-emprestimo"
      ) as HTMLFormElement;

      updateInputeValues(
        (<HTMLInputElement>event.target).value,
        newValorEmprestimo
      );
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  CreditasChallenge.initialize();
});
