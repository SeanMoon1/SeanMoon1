# 1. HTML 시멘틱 태그 역할
# 2. DOM 이란?

# HTML 시멘틱 태그와 DOM에 대한 간단한 설명을 출력하는 프로그램
print("HTML 시멘틱 태그와 DOM에 대한 간단한 설명을 출력하는 프로그램")
for i in range(3):
    print("\n HTML 시멘틱 태그와 DOM에 대해 알아보겠습니다.")
    print("1. HTML 시멘틱 태그")
    print("2. DOM (Document Object Model)")
    choice = int(input("\n 알고싶은 분야를 선택해주세요 (1 또는 2): "))
    
    if choice == 1:
        print("1. HTML 시멘틱 태그는 웹 페이지의 구조와 의미를 명확하게 나타내는 태그입니다.")
        print("2. 예를 들어, <header>, <nav>, <article>, <section>, <footer> 등의 태그가 있습니다.")
        print("3. 이러한 태그들은 웹 페이지의 콘텐츠를 더 잘 이해할 수 있도록 도와줍니다.")
        print("4. HTML 시멘틱 태그를 사용하면 검색 엔진 최적화(SEO)에 도움이 되고, 접근성을 향상시킬 수 있습니다.")
        
    elif choice == 2:
        print("1. DOM은 문서 객체 모델(Document Object Model)의 약자로, HTML 문서를 프로그래밍적으로 조작할 수 있는 인터페이스입니다.")
        print("2. DOM은 HTML 문서를 트리 구조로 표현하며, 각 요소는 객체로 취급됩니다.")
        print("3. JavaScript를 사용하여 DOM을 조작함으로써 웹 페이지의 콘텐츠와 스타일을 동적으로 변경할 수 있습니다.")
        print("4. DOM은 웹 개발에서 중요한 역할을 하며, 이벤트 처리, 요소 추가/삭제, 스타일 변경 등을 가능하게 합니다.")
        break
    else:
        print("잘못된 입력입니다. 다시 시도해주세요.")
print("HTML 시멘틱 태그와 DOM에 대한 설명을 출력하는 프로그램이 종료되었습니다.")
print("프로그램을 종료합니다. 감사합니다!")
