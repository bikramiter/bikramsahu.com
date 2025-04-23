import "grecaptcha";

export {};

declare global {
  interface Window {
    grecaptcha: typeof grecaptcha;
  }
}
