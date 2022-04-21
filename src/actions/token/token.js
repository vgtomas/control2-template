import uuid from '../../utils/uuid'
import constants from '../../utils/constants'
exports.createToken = (data) => {
    console.log(data);
    console.log(constants);
    if (0 < data.id < 10000 & data.secret === SECRET & data.key === KEY) {
        return "token: " + uuid
    } else {
        return "message: parametros invalidos"
    }
}