import * as React from 'react';
import { DynamicTabsDefinition } from './DynamicTabs';
import { TabsDefinitionType, TabItemType } from './TabDefinitions';
import { ITabController, DefaultTabController } from './TabController';
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
    renderContent: <PropsType_1>(tabs: TabsDefinitionType<CustomData, PropsType_1>, tabController: ITabController<CustomData>, props: PropsType_1) => JSX.Element | null;
    defineDynamicTabs: (args: DynamicTabsDefinition<CustomData>[]) => DynamicTabsDefinition<CustomData>[];
    renderDynamicTabContent: (dynamicTabsDefinition: DynamicTabsDefinition<CustomData>[], tabController: ITabController<CustomData>) => React.ReactNode;
    renderDynamicTabNav: (tabController: ITabController<CustomData>, tabs: DynamicTabsDefinition<CustomData>[], Renderer: React.ComponentType<{
        tab: DynamicTabsDefinition<CustomData>;
        nth: number;
        tabController: ITabController<CustomData>;
    }>) => JSX.Element[];
    getDefaultTabController(current?: number | undefined): DefaultTabController<CustomData>;
    renderNav: <PropsType_2>(tabController: ITabController<CustomData>, tabs: TabsDefinitionType<CustomData, PropsType_2>, Renderer: React.ComponentType<{
        tab: TabItemType<any> & CustomData;
        nth: number;
        tabController: ITabController<CustomData>;
    }>) => JSX.Element[];
};
