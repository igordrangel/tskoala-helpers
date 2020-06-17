export class DelayHelper {
  public static waitFor(delay: number = 300) {
    return new Promise((resolve) => {
	    setTimeout(() => resolve(true), delay);
    });
  }
}
