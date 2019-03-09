const RegExr = {
    mobilevalidate: (text) => {
        const reg = /^[0]?[789]\d{9}$/;
        if (reg.test(text) === false) {
            return false
        } else {
            return true
        }
    },

    emailValidate: (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            return false;
        }
        else {
            return true
        }
    },

    acronym: (str) => {
        var matches = str.match(/\b(\w)/g); // ['J','S','O','N']
        var acronym = matches.join(''); // JSON
        return acronym
    }
}

export default RegExp;
