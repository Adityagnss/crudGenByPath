import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    let LocalFoam = document.getElementById("FormId");
    let LocalNerFormData = new FormData(LocalFoam);

    jVarLocalBodyKeys.Name = LocalNerFormData.get("UserName");
    console.log("v:", jVarLocalBodyKeys);

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

export { StartFunc }