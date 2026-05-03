import { bridgeMock } from "./bridge-mock";

export const getCommonHeaders = () => {
  return {
    ...bridgeMock.getHeaders(),
  };
};
