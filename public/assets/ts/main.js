var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
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
} from "./utils.js";
class CreditasChallenge {
  static initialize() {
    this.registerEvents();
  }
  static submitFinalForm(values) {
    const match = (matchString) => (value) => value.field === matchString;
    const IOF = parseFloat((638 / 100).toPrecision(3));
    const INTEREST_RATE = parseFloat((234 / 100).toPrecision(3));
    const TIME = values.find(match("parcelas")).value / 1000;
    const prazo = values[0].value;
    const VEHICLE_LOAN_AMOUNT = values.find(match("valor-emprestimo")).value;
    const VLA = VEHICLE_LOAN_AMOUNT.replace(/\./g, "");
    const valorTotalAPagar =
      (IOF / 100 + INTEREST_RATE / 100 + prazo / 1000 + 1) * VLA;
    const valorDaParcela = valorTotalAPagar / prazo;
    const verifyValueTotalAPagar =
      formatNumbers(removeDot(valorTotalAPagar)) == null
        ? formatNumbers(valorTotalAPagar.toString())
        : formatNumbers(removeDot(valorTotalAPagar));
    const verifyValorDaParcela =
      formatNumbers(removeDot(valorDaParcela)) == null
        ? formatNumbers(valorDaParcela.toString())
        : formatNumbers(removeDot(valorDaParcela));
    const quotaSpan = document.querySelector(".quota span");
    quotaSpan.innerHTML = verifyValorDaParcela.toString();
    const amountContainer = document.querySelector(".amount_container p");
    amountContainer.innerHTML = verifyValueTotalAPagar.toString();
  }
  static Send(values) {
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
    var divGarantia = domHtml(".span-garantia");
    var divEmprestimo = domHtml(".span-emprestimo");
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
    var divGarantia = domHtml(".span-garantia");
    var divEmprestimo = domHtml(".span-emprestimo");
    removeChilds(divGarantia);
    removeChilds(divEmprestimo);
    divGarantia.appendChild(garantiaFirst);
    divGarantia.appendChild(garantiaLast);
    divEmprestimo.appendChild(emprestimoFirst);
    divEmprestimo.appendChild(emprestimoLast);
  }
  static passInputVeiculo(event) {
    var garantia = domHtml("#garantia");
    var valorGarantia = domHtml("#valor-garantia");
    var valorGarantiaRange = domHtml("#valor-garantia-range");
    var valorEmprestimo = domHtml("#valor-emprestimo");
    var valorEmprestimoRange = domHtml("#valor-emprestimo-range");
    var porcentagem = ((80 * event) / 100).toString();
    var transformString = porcentagem.toString();
    valorEmprestimoRange.max = porcentagem;
    updateInputeValues(transformString, valorEmprestimo);
    updateInputeValues(event, valorGarantia);
    FCValue("emprestimo", "3.000");
    FCValueRange("emprestimo", "3.000", porcentagem);
  }
  static passInputImovel(event) {
    var garantia = domHtml("#garantia");
    var valorGarantia = domHtml("#valor-garantia");
    var valorGarantiaRange = domHtml("#valor-garantia-range");
    var valorEmprestimo = domHtml("#valor-emprestimo");
    var valorEmprestimoRange = domHtml("#valor-emprestimo-range");
    var porcentagem = ((80 * event) / 100).toString();
    var transformString = porcentagem.toString();
    valorEmprestimoRange.max = porcentagem;
    updateInputeValues(transformString, valorEmprestimo);
    updateInputeValues(event, valorGarantia);
    FCValue("emprestimo", "30.000");
    FCValueRange("emprestimo", "30.000", porcentagem);
  }
  static registerEvents() {
    var form = domHtml(".form");
    var parcelas = domHtml("#parcelas");
    var garantia = domHtml("#garantia");
    var valorGarantia = domHtml("#valor-garantia");
    var valorGarantiaRange = domHtml("#valor-garantia-range");
    var valorEmprestimo = domHtml("#valor-emprestimo");
    var valorEmprestimoRange = domHtml("#valor-emprestimo-range");
    form.addEventListener("submit", function (event) {
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
      if (event.target.value === "veiculo") {
        CreditasChallenge.veiculo();
        removeChilds(parcelas);
        const option = setOptionsValues("24", "36", "48");
        parcelas.insertAdjacentHTML("afterbegin", option);
      } else if (event.target.value === "imovel") {
        CreditasChallenge.imovel();
        removeChilds(parcelas);
        const option = setOptionsValues("120", "180", "240");
        parcelas.insertAdjacentHTML("afterbegin", option);
      }
    });
    valorGarantiaRange.addEventListener("change", function (event) {
      return __awaiter(this, void 0, void 0, function* () {
        if (garantia.value === "veiculo") {
          CreditasChallenge.passInputVeiculo(event.target.value);
        } else {
          CreditasChallenge.passInputImovel(event.target.value);
        }
      });
    });
    valorEmprestimoRange.addEventListener("change", function (event) {
      const newValorEmprestimo = document.querySelector("#valor-emprestimo");
      updateInputeValues(event.target.value, newValorEmprestimo);
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  CreditasChallenge.initialize();
});
