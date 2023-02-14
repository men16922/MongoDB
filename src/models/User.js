const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    name: {
        first: { type: String, required: true },
        last:  { type: String, required: true }
    },
    age: Number,
    email: String
}, { timestamps: true }) // 데이터를 업데이트 할때마다 updateAt 키 수정

const User = model('user', UserSchema) // users로 컬렉션 생성됨
module.exports = { User }