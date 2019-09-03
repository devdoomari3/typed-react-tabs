import { ITabController } from "./TabController";

export type DynamicTabsDefinition<CustomData = {}> = {
  render(): React.ReactNode;
} & CustomData;
export function defineDynamicTabs<CustomData = {}>() {
  return function __defineDynamicTabs(args: DynamicTabsDefinition<CustomData>[]) {
    return args;
  };
}

export function renderDynamicTabContent<CustomData = {}> () {
  return function __renderDynamicTabContent(
    dynamicTabsDefinition: DynamicTabsDefinition<CustomData>[],
    tabController: ITabController<CustomData>,
  ): React.ReactNode | undefined {
    const currentTabDef = dynamicTabsDefinition[tabController.current!]
    return currentTabDef && currentTabDef.render()

  }
}
