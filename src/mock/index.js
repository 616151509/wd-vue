// 使用 Mock
import Mock from 'mockjs'
var url = 'http://localhost:8080/'

Mock.mock(url+'/home/catelist', 'get', function() {
    return Mock.mock({
        "user|1-3": [{
            'name': '@cname',
            'id': 88
        }
      ]
    });
});