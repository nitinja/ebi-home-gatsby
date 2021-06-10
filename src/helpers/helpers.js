export const EMAIL_VALIDATION_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function stripHtml(inputString = "") {
  return inputString.replace(/(<([^>]+)>|\n)/gi, "");
}

export function toggleInArray(array, element) {
  if (array.includes(element)) {
    return array.filter((el) => el !== element);
  } else {
    array.push(element);
    return array;
  }
}

/**
 *
 * @param  {...any} classList
 * @returns
 */
export const VfClassNormalize = function VfCssClassNormalize(...classList) {
  return classList
    .flat(3) //flattens nested arrays
    .filter((items) => items) //removes falsy items
    .join(" ");
};
