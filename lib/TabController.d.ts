import { TabsDefinitionType } from './TabDefinitions';
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
