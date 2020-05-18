import { action, observable } from 'mobx';
import { TabsDefinitionType } from './TabDefinitions';
export interface ITabController<CustomData> {
  current?: number;
  setCurrent(current: number): void;
  onTabsChange(oldTabs: TabsDefinitionType<CustomData, any>, newTabs: TabsDefinitionType<CustomData, any>): void;
}
export class DefaultTabController<CustomData> implements ITabController<CustomData> {
  @observable
  current?: number;
  constructor(current?: number) {
    this.current = current;
  }
  @action
  onTabsChange(oldTabs: TabsDefinitionType<CustomData, any>, newTabs: TabsDefinitionType<CustomData, any>): void {
    if (this.current && this.current >= newTabs.tabs.length) {
      this.current = newTabs.tabs.length - 1;
    }
  }
  @action
  setCurrent(current: number): void {
    this.current = current;
  }
}
