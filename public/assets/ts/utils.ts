export const checkFormValidity = function (formElement: HTMLFormElement) {
  return formElement.checkValidity();
};

export const domHtml = function (htmlForm: string) {
  return document.querySelector(htmlForm);
};
export const setSpan = function (param: string, param2: string, value: string) {
  const dom = document.querySelector(
    ".span-" + param + " span:" + param2 + "-child"
  ) as HTMLElement;
  dom.innerHTML = value;
  return dom;
};
export const FCValue = function (query: string, reset: string) {
  return (document.querySelector<HTMLFormElement>(
    "#valor-" + query
  )!.value = reset);
};
export const FCValueRange = async function (
  query: string,
  min: string,
  max: string
) {
  const dom = document.querySelector<HTMLFormElement>(
    "#valor-" + query + "-range"
  );
  dom!.min = min;
  dom!.max = max;
  dom!.value = min;
  return dom;
};

export const getFormValues = function (formElement: HTMLFormElement) {
  return Object.values(formElement.elements)
    .filter((element) => ["SELECT", "INPUT"].includes(element.nodeName))
    .map((element: any) => ({
      field: element.name,
      value: element.value,
    }));
};

export const updateInputeValues = (len: string, element: HTMLFormElement) => {
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
export const formatNumbers = (len: string) => {
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
export const removeDot = function (param: string) {
  return param.toString().substring(0, param.toString().indexOf("."));
};
export const removeChilds = function (element: HTMLFormElement) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
export const setOptionsValues = function (v1: string, v2: string, v3: string) {
  const option = `<option value="${v1}">${v1}</option>
                  <option value="${v2}">${v2}</option>
                  <option value="${v3}">${v3}</option>`;
  return option;
};
