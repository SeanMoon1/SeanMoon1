export default function ProfileCard() {
  return (
    <div className="justify-center max-w-sm p-6 mx-auto mt-10 text-center bg-white border rounded-lg shadow item-center">
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hyundai.com%2Fkr%2Fko%2Fe%2Fall-vehicles&psig=AOvVaw1dumPO9jdamno3zkZLQKpn&ust=1752669903681000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDP5Knyvo4DFQAAAAAdAAAAABAE"
        className="mx-auto mb-4 rounded-full"
      />
      <h2 className="text-xl font-semibold">홍길동</h2>
      <p className="text-gray-500">Frontend Devloper</p>
      <p className="mt-2 text-sm text-gray-700">
        React와 Tailwind를 배우는 중입니다.
      </p>
    </div>
  );
}
