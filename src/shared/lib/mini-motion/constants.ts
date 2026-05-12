export const TRANSITION_PRESETS = {
  blur: {
    enterClass: 'animate-fade-in',
    exitClass: 'animate-fade-out',
  },
  slide: {
    enterClass: 'animate-push-in-fwd z-20',
    exitClass: 'animate-push-out-fwd z-10',
  },
  'slide-back': {
    enterClass: 'animate-push-in-bk z-20',
    exitClass: 'animate-push-out-bk z-10',
  },
  none: {
    enterClass: '',
    exitClass: '',
  },
} as const;

export const SAFETY_TIMEOUT = 900;
