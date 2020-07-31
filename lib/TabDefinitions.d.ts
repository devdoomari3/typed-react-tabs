/// <reference types="react" />
export declare type TabItemType<PropsType> = {
    RenderContent: React.ComponentType<PropsType & any>;
};
export declare type TabsDefinitionType<CustomData, PropsType> = {
    tabs: (TabItemType<React.PropsWithChildren<PropsType>> & CustomData)[];
};
export declare type UnpackTabsDefinition<T extends TabsDefinitionType<any, any>> = T extends TabsDefinitionType<infer CustomData, infer PropsType> ? {
    CustomData: CustomData;
    PropsType: PropsType;
} : never;
export declare function defineTabs<CustomData = {}>(): <PropsType>(tabs: [TabItemType<PropsType> & CustomData, TabItemType<PropsType> & CustomData, ...(TabItemType<PropsType> & CustomData)[]]) => TabsDefinitionType<CustomData, PropsType>;
