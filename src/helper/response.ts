function success(data: any) {
    let resData = {
        status: 'ok',
        message: 'success',
        data: null
    };

    if (typeof data !== 'undefined') {
        resData.data = data;
    }

    return resData;
}

function failed(message: string, data: any) {
    let resData = {
        status: 'failed',
        message,
        data: null
    };

    if (typeof data !== 'undefined') {
        resData.data = null
    }

    return resData;
}

export default { success, failed }
