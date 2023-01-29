/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'server-chan',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx798451ed236a1988',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '57e46b88b9f6d3568cabe1c4eb8acb7e',

  PROVINCE: '天津',
  CITY: '天津',

    "USERS":[
        {
            "name":"苏大美女",
            "id":"omNiO59NUN1ApifPFTf291VZxw3c",
            "useTemplateId":"0001",
            "province":"天津",
            "city":"天津",
            "horoscopeDate":"02-28",
            "horoscopeDateType":"今日",
            "openUrl":"https://shuangxunian.github.io/",
            "festivals":[
                {
                    "type":"*生日",
                    "name":"生日",
                    "date":"02-28",
                    "year":"1994"
                }
            ],
            "customizedDateList":[
                {
                    "keyword":"成为同志",
                    "date":"2018-05-04"
                },
                {
                    "keyword":"成为战友",
                    "date":"2022-05-05"
                },
                {
                    "keyword":"曲奇",
                    "date":"2022-11-08"
                }
            ]
        }
    ],



  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],
    "SWITCH":{
        "weather":true,
        "holidaytts":true,
        "CIBA":true,
        "oneTalk":true,
        "earthyLoveWords":true,
        "momentCopyrighting":false,
        "poisonChickenSoup":false,
        "poetry":true,
        "horoscope":false,
        "birthdayMessage":true
    }
}

module.exports = USER_CONFIG

