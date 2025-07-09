import type {ChangeEvent} from 'react'

export default function FileInput() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i) // or  file = files[i];
        console.log(`file[${i}]: `, file)
      }
    }
  }
  return (
    <div>
      <p>FileInput</p>
      {/*multiple accept 이후에 동시에 선택 가능한 파일 유형을 지정하면 된다. 전체 파일의 경우엔  *만 입력하면 된다.*/}
      <input type="file" onChange={onChange} multiple accept="image/*" />
    </div>
  )
}
