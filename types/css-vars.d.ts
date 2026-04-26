// Allow inline style={{ "--bg": "..." }} CSS custom properties.
// Without this, TS strict mode rejects them: "does not exist in type Properties".
import "react";
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
