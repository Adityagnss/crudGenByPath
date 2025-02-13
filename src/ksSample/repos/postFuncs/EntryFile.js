import {
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal,
    PostUploadFunc as PostUploadFuncDal, PostGetSelectColumnsFunc as PostGetSelectColumnsFuncDal,
    PostUploadFromModalFunc as PostUploadFromModalFuncDal
} from '../../dals/postFuncs/EntryFile.js';

import {
    PostFunc as PostFuncDalsForSequelize
} from '../../dalsForSequelize/postFuncs/EntryFile.js';

import configJson from '../../../Config.json' assert { type: 'json' };

let PostFunc = (inModalObject) => {
    if (configJson.isSequelize) {
        return PostFuncDalsForSequelize(inModalObject);
    };

    return PostFuncDal({ inBodyKeys: inModalObject });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostFromModalFuncDal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFuncDal({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFromModalFuncDal({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return PostGetSelectColumnsFuncDal({ LocalBodyAsModal });
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc
};