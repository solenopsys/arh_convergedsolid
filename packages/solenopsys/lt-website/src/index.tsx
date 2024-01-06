import { SiteLayout } from "./layout/layout"
import { render } from "solid-js/web";
import { createSignal, Component, createResource } from "solid-js";

import { UiTreeMenu, UiTabs, UiTopPane } from "@solenopsys/ui-navigate";
import { MdDynamic } from "./layout/mddynamic"
import { Router, Route, A } from "@solidjs/router";


const fetchMenuData = async () =>
    (await fetch(`/dag?key=menu&cid=bafyreicpz3bnf3xqabciyypjssfue54csygb3fn4soz3wbztppvzdfahsy`)).json();


const [menuData] = createResource(fetchMenuData);


const tabs = [{ id: "tab1", title: "Title1" }, { id: "tab2", title: "Title2" }]


const EMPTY: string = "EMPTY"
const MENU: string = "MENU"
const MD: string = "MD"
const TABS: string = "TABS"

const components: { [key: string]: Component } = {}

components[MENU] = () => { return <> {menuData() && <UiTreeMenu style={{ margin: '20px' }} data={menuData()} baseUrl="/article" />}</> }

components[TABS] = () => { return <> {<UiTopPane logo={"/images/logo.svg"} tabsState={tabs} />} </> }

components[MD] = () => {
    return (
        <Router>
            <Route path="/article/:id" component={MdDynamic} />
        </Router>
    )
}


 

export const INIT = () => {
    // @ts-ignore
    render(() => <SiteLayout components={components} top={TABS} central={MD} left={MENU} />, document.getElementById('layout'))
}

