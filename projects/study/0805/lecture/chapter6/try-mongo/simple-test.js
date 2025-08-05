const MongoClient = require('mongodb').MongoClient;

// 연결 문자열 (비밀번호는 실제 Atlas에서 확인된 것으로 변경)
const uri = "mongodb+srv://moonaki43:YOUR_ACTUAL_PASSWORD@cluster0.byoavre.mongodb.net/test?retryWrites=true&w=majority";

async function testConnection() {
    const client = new MongoClient(uri);
    
    try {
        console.log('MongoDB Atlas에 연결 시도 중...');
        await client.connect();
        console.log('✅ MongoDB Atlas 연결 성공!');
        
        // 데이터베이스 목록 확인
        const adminDb = client.db('admin');
        const databases = await adminDb.admin().listDatabases();
        console.log('사용 가능한 데이터베이스:', databases.databases.map(db => db.name));
        
    } catch (error) {
        console.error('❌ MongoDB 연결 실패:');
        console.error('오류 메시지:', error.message);
        console.error('오류 코드:', error.code);
        
        if (error.code === 8000) {
            console.log('\n💡 해결 방법:');
            console.log('1. MongoDB Atlas에서 Database Access 확인');
            console.log('2. 사용자명과 비밀번호 확인');
            console.log('3. Network Access에서 IP 허용 확인');
        }
    } finally {
        await client.close();
    }
}

testConnection(); 