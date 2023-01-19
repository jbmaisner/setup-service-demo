import {} from "vue";
import BasePhotographyCardSetupService from "@/setup/BasePhotographyCardSetupService";

type Props = SetupProps<typeof AnimalCardSetupService.props>;

export default class AnimalCardSetupService extends BasePhotographyCardSetupService<Props> {
  static props = {
    ...BasePhotographyCardSetupService.props,
  };

  protected onMounted() {
    console.log(`Log from the onMounted hook in AnimalCardSetupService.ts`);
  }
}
