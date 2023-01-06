"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTabAPI = exports.renderDynamicTabNav = exports.renderNav = exports.renderContent = void 0;
var React = __importStar(require("react"));
var DynamicTabs_1 = require("./DynamicTabs");
var TabDefinitions_1 = require("./TabDefinitions");
var TabController_1 = require("./TabController");
function renderContent() {
    return function __renderContent(tabs, tabController, props) {
        var current = tabController.current;
        if (current !== undefined && current !== null && tabs.tabs[current]) {
            var RenderContent = tabs.tabs[current].RenderContent;
            if (RenderContent) {
                return React.createElement(RenderContent, __assign({}, props));
            }
        }
        return null;
    };
}
exports.renderContent = renderContent;
function renderNav() {
    return function __renderNav(tabController, tabs, Renderer) {
        return tabs.tabs.map(function (tabItem, nth) { return (React.createElement(Renderer, { key: nth + "tab", nth: nth, tab: tabItem, tabController: tabController })); });
    };
}
exports.renderNav = renderNav;
function renderDynamicTabNav() {
    return function __renderDynamicTabContent(tabController, tabs, Renderer) {
        return tabs.map(function (tabItem, nth) { return (React.createElement(Renderer, { key: nth + "tab", nth: nth, tab: tabItem, tabController: tabController })); });
    };
}
exports.renderDynamicTabNav = renderDynamicTabNav;
function createTabAPI() {
    return {
        defineTabs: TabDefinitions_1.defineTabs(),
        renderContent: renderContent(),
        defineDynamicTabs: DynamicTabs_1.defineDynamicTabs(),
        renderDynamicTabContent: DynamicTabs_1.renderDynamicTabContent(),
        renderDynamicTabNav: renderDynamicTabNav(),
        getDefaultTabController: function (current) {
            return new TabController_1.DefaultTabController(current);
        },
        renderNav: renderNav(),
    };
}
exports.createTabAPI = createTabAPI;
