import React, {useState} from 'react'
import Index from '../components/input/index'

//사진
//이메일 (인증)
//비밀번호
//비밀번호 확인
//이름
//거주지
//전화번호
// 필수는 무엇

export default function Join() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div>
      <div className="content-center mt-56">
        <div className="text-[30px] font-bold text-center text-black">우리지금 만나, 당장 만나</div>
        <form className="p-5 flex flex-col items-center bg-white rounded-lg">
          <div className="flex flex-col  mt-24">
            <Index
              type="email"
              onChange={handleEmailChange}
              placeholder="이메일을 입력하세요"
              valtype="email"
              width={'w-[350px]'}
            />

            <button
              type="button"
              className="items-start bg-[#ffa7a7] text-white w-20 rounded-2xl mt-2 h-10 hover:bg-[#ff6e6e] "
            >
              인증 요청
            </button>
            <Index
              type="password"
              onChange={handlePasswordChange}
              placeholder="비밀번호를 입력하세요"
              valtype="password"
              width={'w-[350px]'}
            />
            <Index
              type="password"
              onChange={handlePasswordChange}
              placeholder="비밀번호 확인"
              valtype="matchPassword"
              width={'w-[350px]'}
            />
            <Index type="name" placeholder="닉네임을 입력해주세요" width={'w-[350px]'} />
            <Index type="phoneNumber" placeholder="전화번호" width={'w-[350px]'} />
          </div>
          <div> 현재위치 추가 </div>
          <button
            type="submit"
            className="mt-20 text-white text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e] "
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  )
}