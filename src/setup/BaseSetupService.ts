import { onBeforeMount, onMounted, onUnmounted, reactive } from "vue";

/**
 * Use the BaseSetupService for properties or methods
 * that should be available in every components
 */

/**
 * Just an example of a globalState that can be place anywhere in your code
 */
const globalState = reactive({
  increment: 0,
  incrementReadonly: 0,
});

export default abstract class BaseSetupService<P> {
  props = {} as P;
  /**
   * Use the BaseSetupService to access the router instance anywhere
   *
   * router = routerInstance;
   * get route() {
   *   return this.router.currentRoute.value;
   * }
   */

  /**
   * Use the globalState here as 'protected' or 'private'
   * to prevent intellisense pollution in the <template>
   */
  protected globalState = globalState;

  /**
   * Control the "readonly-ness" of your properties
   */
  get incrementReadonly() {
    return this.globalState.incrementReadonly;
  }

  /**
   * Control which properties are settable
   */
  get increment() {
    return this.globalState.increment;
  }
  set increment(val) {
    /**
     * Perform additional actions in the setter if you need to.
     * It can replace a watcher
     */
    console.log(
      `globalState.increment has been updated through the setter`,
      val
    );

    /**
     * Another advantage is that you can skip this additional action
     * if you set directly the value in the state in an other method
     * this.globalState.increment = ...
     */

    this.globalState.increment = val;
  }

  constructor(props?: P) {
    this.props = props ?? ({} as P);

    onBeforeMount(() => {
      this.onBeforeMount();
    });

    onMounted(() => {
      this.onMounted();
    });

    onUnmounted(() => {
      this.onUnmounted();
    });
  }

  protected async onBeforeMount() {}
  protected onMounted() {}
  protected onUnmounted() {}
}
