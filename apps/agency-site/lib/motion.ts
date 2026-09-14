export const ease = {
  outExpo: [0.16, 1, 0.3, 1],
  swap: [0.25, 1, 0.33, 1],
  arrow: [0.12, 0.75, 0.4, 1],
} as const;

export const dur = { fast: 0.2, base: 0.55, slow: 0.9 } as const;

export const viewportOnce = { once: true, margin: "0px 0px -40px 0px" } as const;
