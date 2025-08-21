declare module "nosleep.js" {
  class NoSleep {
    constructor();
    public disable(): undefined;
    public enable(): undefined;
  }

  export = NoSleep;
}
declare module "url:*.mp3" {
  const src: string;
  export default src;
}