import * as React from 'react'
import {
  DynamicTabsDefinition,
  defineDynamicTabs,
  renderDynamicTabContent,
} from './DynamicTabs'
import {
  TabsDefinitionType,
  TabItemType,
  defineTabs,
} from './TabDefinitions'
import {
  ITabController,
  DefaultTabController,
} from './TabController'


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
    getDefaultTabController (current?: number) {
      return new DefaultTabController<CustomData>(current)
    },
    renderNav: renderNav<CustomData>(),
  }
}

