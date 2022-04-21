const { KEY } = require("../../utils/constants")
import tokenActions from '../../actions/token/token'

exports.getToken = (ctx) => {
    ctx.body = tokenActions.createToken(ctx)
    return ctx
}