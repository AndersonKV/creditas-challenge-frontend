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
export const checkFormValidity = function (formElement) {
  return formElement.checkValidity();
};
export const domHtml = function (htmlForm) {
  return document.querySelector(htmlForm);
};
export const setSpan = function (param, param2, value) {
  const dom = document.querySelector(
    ".span-" + param + " span:" + param2 + "-child"
  );
  dom.innerHTML = value;
  return dom;
};
export const FCValue = function (query, reset) {
  return (document.querySelector("#valor-" + query).value = reset);
};
export const FCValueRange = function (query, min, max) {
  return __awaiter(this, void 0, void 0, function* () {
    const dom = document.querySelector("#valor-" + query + "-range");
    dom.min = min;
    dom.max = max;
    dom.value = min;
    return dom;
  });
};
export const getFormValues = function (formElement) {
  return Object.values(formElement.elements)
    .filter((element) => ["SELECT", "INPUT"].includes(element.nodeName))
    .map((element) => ({
      field: element.name,
      value: element.value,
    }));
};
export const updateInputeValues = (len, element) => {
  switch (len.length) {
    case 4:
      element.value = `${len.slice(0, 1)}.${len.slice(1, 4)}`;
      break;
    case 5:
      element.value = `${len.slice(0, 2)}.${len.slice(2, 5)}`;
      break;
    case 6:
      element.value = `${len.slice(0, 3)}.${len.slice(3, 6)}`;
      break;
    case 7:
      element.value = `${len.slice(0, 1)}.${len.slice(1, 4)}.${len.slice(
        4,
        7
      )}`;
      break;
    case 8:
      element.value = `${len.slice(0, 2)}.${len.slice(2, 5)}.${len.slice(
        5,
        8
      )}`;
      break;
    case 9:
      element.value = `${len.slice(0, 3)}.${len.slice(3, 6)}.${len.slice(
        6,
        9
      )}`;
      break;
    default:
      return null;
  }
};
export const formatNumbers = (len) => {
  switch (len.length) {
    case 3:
      return `${len.slice(0, 4)}`;
      break;
    case 4:
      return `${len.slice(0, 1)}.${len.slice(1, 4)}`;
      break;
    case 5:
      return `${len.slice(0, 2)}.${len.slice(2, 5)}`;
      break;
    case 6:
      return `${len.slice(0, 3)}.${len.slice(3, 6)}`;
      break;
    case 7:
      return `${len.slice(0, 1)}.${len.slice(1, 4)}.${len.slice(4, 7)}`;
      break;
    case 8:
      return `${len.slice(0, 2)}.${len.slice(2, 5)}.${len.slice(5, 8)}`;
      break;
    case 9:
      return `${len.slice(0, 3)}.${len.slice(3, 6)}.${len.slice(6, 9)}`;
      break;
    case 10:
      return `${len.slice(0, 4)}.${len.slice(4, 7)}.${len.slice(7, 10)}`;
    case 18:
      return `${len.slice(0, 1)}.${len.slice(1, 4)}.${len.slice(4, 7)}`;
      break;
    default:
      return null;
  }
};
export const removeDot = function (param) {
  return param.toString().substring(0, param.toString().indexOf("."));
};
export const removeChilds = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
export const setOptionsValues = function (v1, v2, v3) {
  const option = `<option value="${v1}">${v1}</option>
                  <option value="${v2}">${v2}</option>
                  <option value="${v3}">${v3}</option>`;
  return option;
};
