import BaseSetupService from "@/setup/BaseSetupService";

type Props = SetupProps<typeof TruckCardSetupService.props>;

export default class TruckCardSetupService extends BaseSetupService<Props> {
  static props = {
    id: {
      type: Number,
      required: true as const,
    },
  };

  get idString() {
    return this.props.id.toString();
  }

  constructor(props?: Props) {
    super(props);
  }
}
