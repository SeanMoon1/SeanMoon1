import type {MongoDB} from '../mongodb'
import {stringToObjectId} from '../mongodb'
import {Router} from 'express'
import * as U from '../utils'

export const authRouter = (...args: any[]) => {
    const db: MongoDB = args[0]
    const user = db.collection('user')
    const router = Router()

    return router.post('/signup', async (req, res) => {
        const {body} = req

        try {
            const exists = await user.findOne({email: body.email})

            if (exists) {
                res.json ({ok:false, errorMessage: '이미 가입한 회원입니다.'})
            } else {
                const {email, password} = body
                const hashed = await U.hashPasswordP(password)
                const newBody = {email, password: hashed}
                const {insertedId} = await user.insertOne(newBody)
                // userId 필드명으로 통일
                const jwt = await U.jwtSignP({userId: insertedId.toString()})

                res.json({ok: true, body: jwt})
            }
        } catch (e) {
            if(e instanceof Error) res.json({ok: false, errorMessage: e.message})
        }
    })
    .post('/login', async (req, res) => {
        const {body} = req
        const {email, password} = body

        try {
            // 이메일로 사용자 찾기
            const result = await user.findOne({email})
            if (!result) {
                res.json({ok: false, errorMessage: '등록되지 않은 사용자 입니다.'})
                return
            }

            // 비밀번호 검증
            const same = await U.comparePasswordP(password, result.password)
            if (false === same) {
                res.json({ok: false, errorMessage: '비밀번호가 틀립니다'})
                return
            }

            // 로그인 성공 시 새로운 JWT 토큰 생성 및 반환
            const jwt = await U.jwtSignP({userId: result._id.toString()})
            res.json({ok: true, body: jwt})
        } catch(e) {
            if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
        }
    })
}