export const templateSystem = (data: any, template: string): string => {
  const re = /{{([^}}]+)?}}/g;
  let match;
  let result = template;
  while ((match = re.exec(template))) {
    if (data[match[1]]) {
      result = result.replace(match[0], data[match[1]]);
    } else {
      result = result.replace(match[0], "");
    }
  }
  return result;
};
