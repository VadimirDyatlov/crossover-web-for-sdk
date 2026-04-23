let resolve!: () => void;
export const mswReadyPromise = new Promise<void>((r) => {
  resolve = r;
});
export const resolveMswReady = () => resolve();
