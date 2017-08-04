import {Toast} from 'antd-mobile';

import constant from './constant';

function request(config) {
    fetch(constant.host + config.url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Project': 'chuangshi',
            'app_id': 'c1af3f1ae00e4e0da9b20f5bd41b4279',
            'token': 'gygLszl85cPD1c1AlprNZ/yZdlQtt3pF+BdCDPMzM9fPGHmzIsQ6dIzlS2wsn8lJfebepk0PIxJGZXWWcSiCPRE3uCVSOrsqQynDzzuuCH8=',
            'platform': 'IOS',
            'version': '1.0.0'
        },
        body: JSON.stringify(config.data)
    })
    .then((response) => response.json())
    .then((response) => {
        if (response.code === 200) {
            config.success(response.data);
        } else {
            Toast.fail(response.message, 1);
        }

        config.complete();
    })
    .catch((error) => {
        console.log(error);
    });
}

module.exports = {
    request: request
};
