# 자료보호와 암호화 기술의 원리

## 해싱/대칭/비대칭 암호화 알고리즘 정리

### 1. 암호화의 기본 개념

#### 1.1 암호화란?
암호화는 정보를 보호하기 위해 평문(Plain Text)을 암호문(Cipher Text)으로 변환하는 과정입니다. 이를 통해 데이터의 기밀성(Confidentiality), 무결성(Integrity), 인증(Authentication)을 보장할 수 있습니다.

#### 1.2 암호화의 목적
- **기밀성**: 허가된 사용자만 데이터에 접근 가능
- **무결성**: 데이터가 전송/저장 중 변경되지 않음을 보장
- **인증**: 데이터의 출처와 사용자 신원을 확인
- **부인방지**: 데이터 전송/수신 사실을 부인할 수 없도록 함

### 2. 해싱(Hashing) 알고리즘

#### 2.1 해싱의 개념
해싱은 임의의 길이의 데이터를 고정된 길이의 데이터로 변환하는 단방향 함수입니다. 원본 데이터를 복원할 수 없는 특징이 있습니다.

#### 2.2 주요 해싱 알고리즘

##### MD5 (Message Digest Algorithm 5)
- **출력 길이**: 128비트 (16바이트)
- **특징**: 빠른 처리 속도, 충돌 취약점 존재
- **용도**: 파일 무결성 검사, 체크섬
- **보안 수준**: 취약 (현재는 권장하지 않음)

```javascript
// MD5 해시 예시
const crypto = require('crypto');
const hash = crypto.createHash('md5').update('Hello World').digest('hex');
// 결과: b10a8db164e0754105b7a99be72e3fe5
```

##### SHA-1 (Secure Hash Algorithm 1)
- **출력 길이**: 160비트 (20바이트)
- **특징**: MD5보다 안전하지만 여전히 취약점 존재
- **용도**: 디지털 서명, SSL 인증서
- **보안 수준**: 취약 (현재는 권장하지 않음)

##### SHA-256 (Secure Hash Algorithm 256)
- **출력 길이**: 256비트 (32바이트)
- **특징**: SHA-2 패밀리의 일부, 매우 안전
- **용도**: 블록체인, 디지털 서명, 비밀번호 저장
- **보안 수준**: 매우 안전 (현재 표준)

```javascript
// SHA-256 해시 예시
const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('Hello World').digest('hex');
// 결과: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
```

##### SHA-512 (Secure Hash Algorithm 512)
- **출력 길이**: 512비트 (64바이트)
- **특징**: SHA-256보다 더 긴 해시값, 높은 보안성
- **용도**: 고보안이 필요한 시스템
- **보안 수준**: 매우 안전

#### 2.3 해싱의 응용
- **비밀번호 저장**: 원본 비밀번호 대신 해시값 저장
- **파일 무결성 검사**: 파일 전송 후 해시값 비교
- **디지털 서명**: 메시지의 무결성 보장
- **블록체인**: 거래 데이터의 해시값을 블록에 저장

### 3. 대칭 암호화(Symmetric Encryption)

#### 3.1 대칭 암호화의 개념
암호화와 복호화에 동일한 키를 사용하는 방식입니다. 빠른 처리 속도가 장점이지만, 키 관리가 어려운 단점이 있습니다.

#### 3.2 주요 대칭 암호화 알고리즘

##### DES (Data Encryption Standard)
- **키 길이**: 56비트 (실제로는 64비트, 패리티 비트 8개 포함)
- **블록 크기**: 64비트
- **특징**: 1977년 표준화, 현재는 취약
- **보안 수준**: 취약 (현재는 사용하지 않음)

##### 3DES (Triple DES)
- **키 길이**: 168비트 (실제로는 112비트의 보안성)
- **블록 크기**: 64비트
- **특징**: DES를 3번 적용하여 보안성 향상
- **보안 수준**: 중간 (점진적으로 AES로 대체)

##### AES (Advanced Encryption Standard)
- **키 길이**: 128, 192, 256비트
- **블록 크기**: 128비트
- **특징**: 현재 가장 널리 사용되는 대칭 암호화 표준
- **보안 수준**: 매우 안전

```javascript
// AES 암호화 예시
const crypto = require('crypto');

function encryptAES(text, key) {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decryptAES(encryptedText, key) {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
```

##### ChaCha20
- **키 길이**: 256비트
- **특징**: 스트림 암호, 모바일 환경에서 효율적
- **용도**: TLS 1.3, 모바일 애플리케이션
- **보안 수준**: 매우 안전

#### 3.3 대칭 암호화의 장단점

**장점:**
- 빠른 암호화/복호화 속도
- 적은 컴퓨팅 리소스 요구
- 대용량 데이터 처리에 적합

**단점:**
- 키 관리의 어려움
- 키 분배 문제
- 키가 노출되면 모든 데이터가 위험

### 4. 비대칭 암호화(Asymmetric Encryption)

#### 4.1 비대칭 암호화의 개념
공개키(Public Key)와 개인키(Private Key) 쌍을 사용하는 암호화 방식입니다. 공개키로 암호화하고 개인키로 복호화하는 방식입니다.

#### 4.2 주요 비대칭 암호화 알고리즘

##### RSA (Rivest-Shamir-Adleman)
- **키 길이**: 1024, 2048, 4096비트
- **특징**: 수학적 난이도 기반 (소인수분해)
- **용도**: 디지털 서명, 키 교환
- **보안 수준**: 안전 (2048비트 이상 권장)

```javascript
// RSA 키 생성 및 암호화 예시
const crypto = require('crypto');

// 키 쌍 생성
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

// 공개키로 암호화
function encryptRSA(data, publicKey) {
    return crypto.publicEncrypt(publicKey, Buffer.from(data, 'utf8'));
}

// 개인키로 복호화
function decryptRSA(encryptedData, privateKey) {
    return crypto.privateDecrypt(privateKey, encryptedData);
}
```

##### ECC (Elliptic Curve Cryptography)
- **키 길이**: 256, 384, 521비트
- **특징**: RSA보다 짧은 키로 동일한 보안성 제공
- **용도**: 모바일 기기, IoT 디바이스
- **보안 수준**: 매우 안전

##### DSA (Digital Signature Algorithm)
- **키 길이**: 1024, 2048, 3072비트
- **특징**: 디지털 서명 전용
- **용도**: 디지털 서명
- **보안 수준**: 안전

#### 4.3 비대칭 암호화의 장단점

**장점:**
- 안전한 키 분배
- 디지털 서명 가능
- 키 관리가 상대적으로 쉬움

**단점:**
- 느린 암호화/복호화 속도
- 많은 컴퓨팅 리소스 요구
- 대용량 데이터 처리에 부적합

### 5. 하이브리드 암호화 시스템

#### 5.1 하이브리드 암호화의 개념
대칭 암호화와 비대칭 암호화의 장점을 결합한 방식입니다. 대용량 데이터는 대칭 암호화로 처리하고, 키 교환은 비대칭 암호화를 사용합니다.

#### 5.2 하이브리드 암호화 과정
1. **세션 키 생성**: 대칭 암호화용 임시 키 생성
2. **데이터 암호화**: 세션 키로 대용량 데이터 암호화
3. **키 암호화**: 공개키로 세션 키 암호화
4. **전송**: 암호화된 데이터와 암호화된 세션 키 전송
5. **복호화**: 개인키로 세션 키 복호화 후 데이터 복호화

#### 5.3 실제 응용 사례
- **SSL/TLS**: 웹 브라우저와 서버 간 통신
- **PGP**: 이메일 암호화
- **SSH**: 원격 접속 보안

### 6. 암호화 알고리즘 선택 가이드

#### 6.1 용도별 권장 알고리즘

**해싱:**
- 비밀번호 저장: bcrypt, Argon2, PBKDF2
- 파일 무결성: SHA-256, SHA-512
- 일반적 해싱: SHA-256

**대칭 암호화:**
- 일반 데이터: AES-256
- 모바일 환경: ChaCha20
- 레거시 시스템: 3DES (점진적 대체)

**비대칭 암호화:**
- 키 교환: RSA-2048, ECC-256
- 디지털 서명: RSA-2048, ECDSA
- 모바일/IoT: ECC-256

#### 6.2 보안 수준별 권장사항

**높은 보안 (금융, 의료):**
- 해싱: SHA-512, bcrypt
- 대칭: AES-256
- 비대칭: RSA-4096, ECC-384

**일반 보안 (웹 서비스):**
- 해싱: SHA-256, bcrypt
- 대칭: AES-256
- 비대칭: RSA-2048, ECC-256

**낮은 보안 (개인용):**
- 해싱: SHA-256
- 대칭: AES-128
- 비대칭: RSA-2048

### 7. 암호화 구현 시 주의사항

#### 7.1 일반적인 실수
- 취약한 알고리즘 사용 (MD5, DES)
- 키 관리 부실
- 랜덤 생성기 사용 오류
- 패딩 오라클 공격 방지 부족

#### 7.2 보안 모범 사례
- 최신 암호화 라이브러리 사용
- 키의 안전한 생성과 저장
- 정기적인 키 순환
- 암호화 강도 모니터링

### 8. 결론

암호화 기술은 현대 디지털 보안의 핵심 요소입니다. 해싱, 대칭, 비대칭 암호화는 각각의 고유한 특성과 용도가 있으며, 적절한 조합을 통해 강력한 보안 시스템을 구축할 수 있습니다. 

알고리즘 선택 시에는 보안 요구사항, 성능 요구사항, 구현 복잡도를 종합적으로 고려해야 하며, 지속적인 보안 업데이트와 모니터링이 필수적입니다.

### 9. 참고 자료

- NIST Cryptographic Standards and Guidelines
- RFC 문서 (IETF)
- OWASP Cryptographic Storage Cheat Sheet
- 각 암호화 알고리즘 공식 문서
