const MongoClient = require('mongodb').MongoClient;

// 🔧 여기에 Atlas에서 제공하는 실제 연결 문자열을 붙여넣기
// Atlas → Database → Connect → Connect your application에서 복사
const uri = "mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.byoavre.mongodb.net/test?retryWrites=true&w=majority";

async function testRealConnection() {
    const client = new MongoClient(uri);
    
    try {
        console.log('🔗 Atlas 연결 시도...');
        console.log('사용자명:', uri.split('://')[1].split(':')[0]);
        await client.connect();
        console.log('✅ Atlas 연결 성공!');
        
        // 데이터베이스 목록 확인
        const adminDb = client.db('admin');
        const result = await adminDb.admin().listDatabases();
        console.log('📊 데이터베이스 목록:', result.databases.map(db => db.name));
        
        // test 데이터베이스의 컬렉션 확인
        const testDb = client.db('test');
        const collections = await testDb.listCollections().toArray();
        console.log('📁 test DB 컬렉션:', collections.map(col => col.name));
        
    } catch (error) {
        console.error('❌ 연결 실패:', error.message);
        console.error('코드:', error.code);
        
        if (error.code === 8000) {
            console.log('\n🔧 해결 방법:');
            console.log('1. Atlas → Database Access에서 사용자 확인');
            console.log('2. Atlas → Network Access에서 "Add IP Address" → "0.0.0.0/0" 추가');
            console.log('3. 연결 문자열의 사용자명과 비밀번호 확인');
            console.log('4. 클러스터 이름이 올바른지 확인');
        }
    } finally {
        await client.close();
    }
}

testRealConnection(); 