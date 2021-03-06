import DeviceStorage from './DeviceStorage';

const DeviceId = "450aa";

const GetHeader = async () => {
    const header = {

    }
    return header
}

const PostHeader = async () => {
    const header = {

    }
    return header
}

const serialize = function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

const Api = {
    getData: async (url) => {
        return fetch(url, {
            method: 'GET',
            // headers: await GetHeader()
        })
            .then((res) => res.json())
            .catch((err) => {
                console.log("console catch", err);
            });
    },

    postData: async (url, body) => {
        return fetch(url, {
            method: 'POST',
            // headers: await PostHeader(),
            body: serialize(body)
        })
            .then((res) => res.json())
            .catch((err) => {
                console.log("console catch", err);
            });
    },
};

export default Api;