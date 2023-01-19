import BaseSetupService from "@/setup/BaseSetupService";

type Props = SetupProps<typeof BasePhotographyCardSetupService.props>;

export default abstract class BasePhotographyCardSetupService<
  P = {}
> extends BaseSetupService<Props & P> {
  static props = {
    img: {
      type: String,
      default: undefined,
    },
  };

  constructor(props?: Props & P) {
    super(props);
  }
}
