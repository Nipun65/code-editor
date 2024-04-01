import { constants } from ".";

const fetchBgColor = (type: string) => {
  return constants?.ISSUECOLORS[type];
};

export { fetchBgColor };
