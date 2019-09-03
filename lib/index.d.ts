import * as React from 'react';
export declare type TabItemType<PropsType> = {
    RenderContent: React.ComponentType<PropsType & any>;
};
export declare type TabsDefinitionType<CustomData, PropsType> = {
    tabs: (TabItemType<React.PropsWithChildren<PropsType>> & CustomData)[];
};
export declare function defineTabs<CustomData = {}>(): <PropsType>(tabs: [TabItemType<PropsType> & CustomData, TabItemType<PropsType> & CustomData, ...(TabItemType<PropsType> & CustomData)[]]) => TabsDefinitionType<CustomData, PropsType>;
export declare type DynamicTabsDefinition<CustomData = {}> = {
    render(): React.ReactNode;
} & CustomData;
export declare function defineDynamicTabs<CustomData = {}>(): (args: DynamicTabsDefinition<CustomData>[]) => DynamicTabsDefinition<CustomData>[];
export declare function renderDynamicTabContent<CustomData = {}>(): (dynamicTabsDefinition: DynamicTabsDefinition<CustomData>[], tabController: ITabController<CustomData>) => React.ReactNode;
export interface ITabController<CustomData> {
    current?: number;
    setCurrent(current: number): void;
    onTabsChange(oldTabs: TabsDefinitionType<CustomData, any>, newTabs: TabsDefinitionType<CustomData, any>): void;
}
export declare class DefaultTabController<CustomData> implements ITabController<CustomData> {
    current?: number;
    constructor(current?: number);
    onTabsChange(oldTabs: TabsDefinitionType<CustomData, any>, newTabs: TabsDefinitionType<CustomData, any>): void;
    setCurrent(current: number): void;
}
export declare function renderContent<CustomData>(): <PropsType>(tabs: TabsDefinitionType<CustomData, PropsType>, tabController: ITabController<CustomData>, props: PropsType) => JSX.Element | null;
export declare function renderNav<CustomData>(): <PropsType>(tabController: ITabController<CustomData>, tabs: TabsDefinitionType<CustomData, PropsType>, Renderer: React.ComponentType<{
    tab: TabItemType<any> & CustomData;
    nth: number;
    tabController: ITabController<CustomData>;
}>) => JSX.Element[];
export declare function renderDynamicTabNav<CustomData>(): (tabController: ITabController<CustomData>, tabs: DynamicTabsDefinition<CustomData>[], Renderer: React.ComponentType<{
    tab: DynamicTabsDefinition<CustomData>;
    nth: number;
    tabController: ITabController<CustomData>;
}>) => JSX.Element[];
export declare function createTabAPI<CustomData = {}>(): {
    defineTabs: <PropsType>(tabs: [TabItemType<PropsType> & CustomData, TabItemType<PropsType> & CustomData, ...(TabItemType<PropsType> & CustomData)[]]) => TabsDefinitionType<CustomData, PropsType>;
    renderContent: <PropsType>(tabs: TabsDefinitionType<CustomData, PropsType>, tabController: ITabController<CustomData>, props: PropsType) => JSX.Element | null;
    defineDynamicTabs: (args: DynamicTabsDefinition<CustomData>[]) => DynamicTabsDefinition<CustomData>[];
    renderDynamicTabContent: (dynamicTabsDefinition: DynamicTabsDefinition<CustomData>[], tabController: ITabController<CustomData>) => React.ReactNode;
    renderDynamicTabNav: (tabController: ITabController<CustomData>, tabs: DynamicTabsDefinition<CustomData>[], Renderer: React.ComponentType<{
        tab: DynamicTabsDefinition<CustomData>;
        nth: number;
        tabController: ITabController<CustomData>;
    }>) => JSX.Element[];
    getDefaultTabController(current?: number | undefined): DefaultTabController<CustomData>;
    renderNav: <PropsType>(tabController: ITabController<CustomData>, tabs: TabsDefinitionType<CustomData, PropsType>, Renderer: React.ComponentType<{
        tab: TabItemType<any> & CustomData;
        nth: number;
        tabController: ITabController<CustomData>;
    }>) => JSX.Element[];
};
export declare type UnpackTabsDefinition<T extends TabsDefinitionType<any, any>> = T extends TabsDefinitionType<infer CustomData, infer PropsType> ? {
    CustomData: CustomData;
    PropsType: PropsType;
} : never;
