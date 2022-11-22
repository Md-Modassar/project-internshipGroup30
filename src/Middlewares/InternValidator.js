//===============================>> String VAlidation <<==================================>>>
const isValid = function (value) {
    return (typeof value === "string" &&  value.trim().length > 0 && value.match(/^(?![0-9]*$)[a-zA-Z0-9]+$/))
};     
//================================>> Email VAlidation <<===================================>>>

const isValidEmail = function (email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
//===============================>> Mobile VAlidation <<====================================>>>

const isValidMobile = function (mobile) {
    return /^([+]\d{2})?\d{10}$/.test(mobile);
}

//=============================== Exporta functions =====================================>>>

module.exports = { isValidEmail, isValid, isValidMobile }
