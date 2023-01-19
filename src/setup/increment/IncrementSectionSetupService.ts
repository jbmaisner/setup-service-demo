import {} from "vue";
import BaseSetupService from "@/setup/BaseSetupService";

type Props = SetupProps<typeof IncrementSectionSetupService.props>;

export default class IncrementSectionSetupService extends BaseSetupService<Props> {
  // Make props undefined as there's not any props
  static props = undefined;

  incrementBy10() {
    this.increment += 10;
  }

  incrementDirectlyInStateBy1() {
    this.globalState.increment++;
  }

  incrementDirectlyInStateBy10() {
    this.globalState.increment += 10;
  }

  incrementTheReadonly() {
    this.globalState.incrementReadonly++;
    this.protectedLog();
  }

  protected protectedLog() {
    console.log(
      `Log from a protected method not accessible in the template part.`
    );
    console.log(
      `You have more control to prevent possible mistakes during the development phase.`
    );
  }
}
