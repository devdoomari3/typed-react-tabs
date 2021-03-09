"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDynamicTabContent = exports.defineDynamicTabs = void 0;
function defineDynamicTabs() {
    return function __defineDynamicTabs(args) {
        return args;
    };
}
exports.defineDynamicTabs = defineDynamicTabs;
function renderDynamicTabContent() {
    return function __renderDynamicTabContent(dynamicTabsDefinition, tabController) {
        var currentTabDef = dynamicTabsDefinition[tabController.current];
        return currentTabDef && currentTabDef.render();
    };
}
exports.renderDynamicTabContent = renderDynamicTabContent;
