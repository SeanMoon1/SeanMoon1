### Setup Guide

npx create-react-app "dirname" --template typescript
cd dir you made
npm i chance luxon @fontsource/material-icons
npm i -D @types/chance @types/luxon
npm i -D postcss autoprefixer tailwindcss@3.4.17
npm i -D daisyui@4.12.12
npm i -D @tailwindcss/line-clamp

npm install -D tailwindcss@3.4.17 postcss autoprefixer @tailwindcss/postcss daisyui@4.12.12 @tailwindcss/line-clamp

tailwind css 미적용시 적용방법
index.css 파일에 들어가
@tailwind base;
@tailwind components;
@tailwind utilities;
추가하기

index.tsx 파일에 들어가
import "@fontsource/material-icons";
추가하기

postcss.config.js 파일 생성
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
};

tailwind.config.js 파일 생성
/_ @type {import('tailwindcss').Config} _/
module.exports = {
content: ["./src/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {},
},
plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};


### github setting
mkdir my-first-repo
cd my-first-repo
git init
git config --global user.name "학생이름"
git config --global user.email "학생이메일@example.com"
touch index.html

오류가 생길시 생성된 .git 폴더를 날리고 재생성하면 된다.

echo "<h1>Hello Git</h1>" > index.html
git status
git add index.html
git commit -m "처음 커밋"
git log --oneline
