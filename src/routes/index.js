import Router from 'koa-router'
import getHealth from './health/health'
import huevoFrito from './token/token'

const router = new Router()

router.get('/:id/:secret/:key', function(req, res) {
        huevoFrito.getToken(req.params);
    })
    //router.get('/api/token/:id', huevoFrito.getToken(id))
export default router