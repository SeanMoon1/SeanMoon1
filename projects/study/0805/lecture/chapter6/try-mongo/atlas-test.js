const MongoClient = require('mongodb').MongoClient;

// Atlas에서 제공하는 연결 문자열을 여기에 붙여넣기
const uri = "mongodb+srv://mongodb_user:simplepassword123@cluster0.byoavre.mongodb.net/test?retryWrites=true&w=majority";

async function testAtlasConnection() {
    const client = new MongoClient(uri);
    
    try {
        console.log('🔗 Atlas 연결 시도...');
        await client.connect();
        console.log('✅ Atlas 연결 성공!');
        
        // 데이터베이스 목록 확인
        const adminDb = client.db('admin');
        const result = await adminDb.admin().listDatabases();
        console.log('📊 데이터베이스 목록:', result.databases.map(db => db.name));
        
    } catch (error) {
        console.error('❌ 연결 실패:', error.message);
        console.error('코드:', error.code);
        
        if (error.code === 8000) {
            console.log('\n🔧 해결 방법:');
            console.log('1. Atlas → Database Access에서 사용자 확인');
            console.log('2. Atlas → Network Access에서 IP 허용');
            console.log('3. 연결 문자열의 비밀번호 확인');
        }
    } finally {
        await client.close();
    }
}

testAtlasConnection(); 