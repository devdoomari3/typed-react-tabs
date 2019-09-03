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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: move to separate repo...
var mobx_1 = require("mobx");
var React = __importStar(require("react"));
function defineTabs() {
    return function __defineTabs(tabs) {
        return {
            tabs: tabs,
        };
    };
}
exports.defineTabs = defineTabs;
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
var DefaultTabController = /** @class */ (function () {
    function DefaultTabController(current) {
        this.current = current;
    }
    DefaultTabController.prototype.onTabsChange = function (oldTabs, newTabs) {
        if (this.current && this.current >= newTabs.tabs.length) {
            this.current = newTabs.tabs.length - 1;
        }
    };
    DefaultTabController.prototype.setCurrent = function (current) {
        this.current = current;
    };
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Number)
    ], DefaultTabController.prototype, "current", void 0);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], DefaultTabController.prototype, "onTabsChange", null);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], DefaultTabController.prototype, "setCurrent", null);
    return DefaultTabController;
}());
exports.DefaultTabController = DefaultTabController;
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
        defineTabs: defineTabs(),
        renderContent: renderContent(),
        defineDynamicTabs: defineDynamicTabs(),
        renderDynamicTabContent: renderDynamicTabContent(),
        renderDynamicTabNav: renderDynamicTabNav(),
        getDefaultTabController: function (current) { return new DefaultTabController(current); },
        renderNav: renderNav(),
    };
}
exports.createTabAPI = createTabAPI;
