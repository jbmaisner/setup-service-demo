import {} from "vue";
import BaseSetupService from "@/setup/BaseSetupService";
import BasePhotographyCardSetupService from "../BasePhotographyCardSetupService";

type Props = SetupProps<typeof LandscapeCardSetupService.props>;

export default class LandscapeCardSetupService extends BasePhotographyCardSetupService<Props> {
  // Declare here the props of your component to access them in the class
  static props = {
    ...BasePhotographyCardSetupService.props, // Inherit props from parent class
    title: {
      type: String,
      required: true as const,
    },
  };

  // Native getters are equivalent to computed
  get formattedTitle() {
    return `Photography of ${this.props.title.toLowerCase()}`;
  }

  constructor(props?: Props) {
    super(props);

    // Additional actions if needed
    console.log(`Log from LandscapeCard constructor`);
  }
}
