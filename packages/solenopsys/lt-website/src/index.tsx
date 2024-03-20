
import { lazy, render } from "@solenopsys/converged-renderer";
import { lazyLoadComponentFromModule } from "./layout/dynamic"


const CONST = {
    "tabs": [
        {
            "id": "/solenopsys",
            "title": "Solenopsys"
        },
        {
            "id": "/robotization",
            "title": "Robotization"
        },

    ]
}



const UiButton = lazyLoadComponentFromModule('UiButton', '/packages/solenopsys/ui-controls');




//<Site logo={conf.logo} navigate={conf.navigate} routes={routes}/>
export const createLayout = (tagId: string, loadModule: (name: string) => {}, conf: any, routes: any) => {
      console.log("CONF",tagId)
    // @ts-ignore
    render(() => { return (UiButton && <UiButton  ></UiButton>) }, document.getElementById(tagId))
}

document.documentElement.style.setProperty(`--control-color`, "blue");
document.documentElement.style.setProperty(`--main-bg-color`, "white");


