export const bridgeMock = {
  _headers: {
    // Системные и индентификация приложения
    'X-System-Id': 'SBERPAY_SDK',
    appName: 'CrossoverExample',
    sdkVersion: 'No info',
    'Content-Type': 'application/json',

    // Авторизация и сессия
    Authorization:
      'AJto9Wtj6EnLg24oI8/2If4AAAAAAAAADG0vSRDhRsjYlvlvAIIAyE/BOtANh9D8ZWGhPqb+93hS4jzMkl1oNvoYxMu3F9igqyfId1iI8/rBDUvAgEwJ4v6XER5fzElCErApsNjyLxgkQLpJGZaJmNfn/ODm1C1ikBjcsePDXmaC3vVm4cWCEkg=',
    localSessionId: 'C30239028AE7',
    Cookie: 'X-SP-D-M=M',

    // Информация об устройстве
    OS: '26.3.1',
    deviceName: 'iPhone16ProMax',

    // Трассировка и Sticky (Network)
    'x-pod-sticky': 'e425baa5ac1f1d3917a7aee1358b43f3',
    'x-b3-traceid': 'f347225eb94e40c9956494272f7b4825',
    'x-b3-spanid': '1865ef4106904a53',

    // Временные метки и уникальность запроса (Idempotency)
    RqUID: crypto.randomUUID(),
    UserTm: new Date().toISOString(),
    timestamp: new Date().toLocaleString(),
  } as Record<string, string>,

  _extBranchId: 'mango',
  _pointId: '5a1604b6-6aeb-4258-97d5-c694804e1acf',
  _subId:
    'fec0e432fae8920c421805f3f9e311c7ead511cd0a34cc0cbc064ab81bf875978c42ce2c4d2d6cb4',

  getHeaders(): Record<string, string> {
    return this._headers;
  },

  getHeader(key: string): string {
    return this._headers[key];
  },

  getExtBranchId(): string {
    return this._extBranchId;
  },

  getPointId(): string {
    return this._pointId;
  },

  getSubId(): string {
    return this._subId;
  },
};
