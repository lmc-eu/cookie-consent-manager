export const addSeparators = (strings, and) =>
  strings.reduce((accumulator, string, i) => {
    if (i === 0) {
      return `${accumulator}${string}`;
    }

    if (i === strings.length - 1) {
      return `${accumulator} ${and} ${string}`;
    }

    return `${accumulator}, ${string}`;
  });

export const plural = (count, singular, plural) => (count === 1 ? singular : plural);
