export const getPx = (num: number) => `${num}px`;
export const getClassName = (base: string | string[], option: Record<string, boolean>) => {
  const baseClassName = Array.isArray(base) ? base.join(' ') : base;
  const optionClassName = Object.keys(option).reduce((prev, key) => {
    if (option[key]) {
      return prev + ' ' + key;
    }
    return prev;
  }, '');
  return baseClassName + (optionClassName.length > 0 ? ' ' : '') + optionClassName;
};
