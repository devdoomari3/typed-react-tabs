// TODO: move to separate repo...
import {
  action, observable,
} from 'mobx'
import * as React from 'react'
export type TabItemType<PropsType> = {
  RenderContent: React.ComponentType<PropsType & any>;
}

export type TabsDefinitionType<CustomData, PropsType> = {
  tabs: (TabItemType<React.PropsWithChildren<PropsType>> & CustomData)[];
}

export function defineTabs<CustomData = {}> () {
  return function __defineTabs<PropsType> (
    tabs: [
      (TabItemType<PropsType> & CustomData),
      (TabItemType<PropsType> & CustomData),
      ...ReadonlyArray<(TabItemType<PropsType> & CustomData)>
    ], // tabs: (TabItemType<PropsType> & CustomData)[]
  ): TabsDefinitionType<CustomData, PropsType> {
    return {
      tabs,
    }
  }
}

export type DynamicTabsDefinition<CustomData = {}> = {
  render(): React.ReactNode
} & CustomData
export function defineDynamicTabs<CustomData = {}> () {
  return function __defineDynamicTabs(
    args: DynamicTabsDefinition<CustomData>[],
  ) {
    return args
  }
}

export function renderDynamicTabContent<CustomData = {}> () {
  return function __renderDynamicTabContent(
    dynamicTabsDefinition: DynamicTabsDefinition<CustomData>[],
    tabController: ITabController<CustomData>,
  ): React.ReactNode | undefined {
    const currentTabNth = tabController.current
    if (currentTabNth) {
      return dynamicTabsDefinition[currentTabNth] && 
        dynamicTabsDefinition[currentTabNth].render()
    }
  }
}

export interface ITabController<CustomData> {
  current?: number;
  setCurrent(current: number): void;
  onTabsChange(
    oldTabs: TabsDefinitionType<CustomData, any>,
    newTabs: TabsDefinitionType<CustomData, any>,
  ): void;
}
export class DefaultTabController<CustomData> implements ITabController<CustomData> {
  @observable
  current?: number
  constructor (current?: number) {
    this.current = current
  }

  @action
  onTabsChange (oldTabs: TabsDefinitionType<CustomData, any>, newTabs: TabsDefinitionType<CustomData, any>): void {
    if (this.current && this.current >= newTabs.tabs.length) {
      this.current = newTabs.tabs.length - 1
    }
  }
  @action
  setCurrent (current: number): void {
    this.current = current
  }
}

export function renderContent<CustomData> () {
  return function __renderContent<PropsType> (
    tabs: TabsDefinitionType<CustomData, PropsType>,
    tabController: ITabController<CustomData>,
    props: PropsType,
  ) {
    const current = tabController.current
    if (current !== undefined && current !== null && tabs.tabs[current]) {
      const { RenderContent } = tabs.tabs[current]
      if (RenderContent) {
        return <RenderContent {...props} />
      }
    }

    return null
  }
}

export function renderNav<CustomData> () {
  return function __renderNav<PropsType> (
    tabController: ITabController<CustomData>,
    tabs: TabsDefinitionType<CustomData, PropsType>,
    Renderer: React.ComponentType<{
      tab: TabItemType<any> & CustomData;
      nth: number;
      tabController: ITabController<CustomData>;
    }>) {
      return tabs.tabs.map(
        (tabItem, nth) => (
          <Renderer
            key={`${nth}tab`}
            nth={nth}
            tab={tabItem}
            tabController={tabController}
          />
        ),
      )
    }
}

export function renderDynamicTabNav<CustomData> () {
  return function __renderDynamicTabContent (
    tabController: ITabController<CustomData>,
    tabs: DynamicTabsDefinition<CustomData>[],
    Renderer: React.ComponentType<{
      tab: DynamicTabsDefinition<CustomData>;
      nth: number;
      tabController: ITabController<CustomData>;
    }>
  ) {
    return tabs.map(
      (tabItem, nth) => (
        <Renderer
          key={`${nth}tab`}
          nth={nth}
          tab={tabItem}
          tabController={tabController}
        />
      ),
    )
  }
}

export function createTabAPI<CustomData= {}> () {
  return {
    defineTabs: defineTabs<CustomData>(),
    renderContent: renderContent<CustomData>(),
    defineDynamicTabs: defineDynamicTabs<CustomData>(),
    renderDynamicTabContent: renderDynamicTabContent<CustomData>(),
    renderDynamicTabNav: renderDynamicTabNav<CustomData>(),
    getDefaultTabController (current?: number) { return new DefaultTabController<CustomData>(current) },
    renderNav: renderNav<CustomData>(),
  }
}

export type UnpackTabsDefinition<
  T extends TabsDefinitionType<any, any>
> = T extends TabsDefinitionType<infer CustomData, infer PropsType> ? {
  CustomData: CustomData;
  PropsType: PropsType;
} : never
