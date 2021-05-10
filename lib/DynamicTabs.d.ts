/// <reference types="react" />
import { ITabController } from "./TabController";
export declare type DynamicTabsDefinition<CustomData = {}> = {
    render(): React.ReactNode;
} & CustomData;
export declare function defineDynamicTabs<CustomData = {}>(): (args: DynamicTabsDefinition<CustomData>[]) => DynamicTabsDefinition<CustomData>[];
export declare function renderDynamicTabContent<CustomData = {}>(): (dynamicTabsDefinition: DynamicTabsDefinition<CustomData>[], tabController: ITabController<CustomData>) => React.ReactNode | undefined;
