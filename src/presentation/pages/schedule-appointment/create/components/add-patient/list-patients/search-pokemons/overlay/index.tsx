import { IOverlayProps } from "./interfaces";

export function Overlay({ setOverlay }: IOverlayProps) {

  return (
    <div
      style={{
        height: "100vh",
        position: "fixed",
      }}
      className="overlay"
      onClick={() => setOverlay(false)}
    />
  );
}
