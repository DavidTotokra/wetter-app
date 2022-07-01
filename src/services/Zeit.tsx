export const zufallNum = function(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  export const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
  export const waitUntil = async (f: () => boolean) => {
    let counter = 0;
    while (!f() || counter < 2) {
      if (!f()) {
        await sleep(100);
        counter = 0;
      } else {
        await sleep(100);
        counter++;
      }
    }
    return f();
  };
  
  export function getOrtZeit(timezone: string) {
    return new Date().toLocaleDateString('de-DE', {
      timeZone: 'UTC',
      hour: "2-digit",
      hour12: true,
      hourCycle: 'h23',

      
    }).split(', ')[1];
  }