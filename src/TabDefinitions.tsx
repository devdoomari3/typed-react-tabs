export type TabItemType<PropsType> = {
  RenderContent: React.ComponentType<PropsType & any>;
};
export type TabsDefinitionType<CustomData, PropsType> = {
  tabs: (TabItemType<React.PropsWithChildren<PropsType>> & CustomData)[];
};

export type UnpackTabsDefinition<
  T extends TabsDefinitionType<any, any>
> = T extends TabsDefinitionType<infer CustomData, infer PropsType> ? {
  CustomData: CustomData;
  PropsType: PropsType;
} : never

export function defineTabs<CustomData = {}>() {
  return function __defineTabs<PropsType>(
    tabs: [
      (TabItemType<PropsType> & CustomData),
      (TabItemType<PropsType> & CustomData),
      ...ReadonlyArray<(TabItemType<PropsType> & CustomData)>,
    ],
  ): TabsDefinitionType<CustomData, PropsType> {
    return {
      tabs,
    };
  };
}
