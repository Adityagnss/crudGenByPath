import { StartFunc as StartFuncNav } from "./Nav.js";

const StartFunc = () => {
    let ButtonClickId = "HomeId";

    let jVarLocalCreateFolderButtonId = document.getElementById(ButtonClickId);

    if (jVarLocalCreateFolderButtonId === null === false) {
        jVarLocalCreateFolderButtonId.addEventListener("click", StartFuncNav);
    };
};
export { StartFunc };