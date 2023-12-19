import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email alreadye exists.'],
        required: [true, 'Email must be required.']
    },

    username: {
        type: String,
        required: [true, 'User name must be required.'],
        // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Username invalid, it should contain 8-20 alphanumeric letters and be unique.']
    },

    image: {
        type: String,
    }
});

const User = models['User'] || model('User', UserSchema);

export default User;

// next js에서는 다르다. next js의 서버는 오로지 call 요청이 있을 때만 실행이된다. 따라서 models 오브젝트를 통해 User 스키마가 이미 있는지 확인하고, 있으면 할당한다.
// 이것은 해당 모델을 재정의 하는 것을 예방해주며, 현재 존재하는 모델을 재사용한다는 것을 확실하게 해준다.
// 왜냐하면 next js의 서버 방식은 매번 싱글타임때 마다 이 경로를 next js의 서버가 매번 호출하기 때문이다?