interface Window {
  modals: HTMLDivElement
  overlay: HTMLDivElement
}
declare module "*.css";
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}