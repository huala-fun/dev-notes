export default {
  title: '开发笔记',
  description: '记录工作学习中遇到的技术问题',
  head: [
    // 改变title的图标
    [
      'link', { rel: 'icon', href: '/favicon.ico', },
    ],
    [
      'link', { rel: 'stylesheet', href: '/main.css', },
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
        activeMatch: ''
      },
      {
        text: 'Nginx',
        link: '/nginx/',
        activeMatch: '/nginx'
      },
      {
        text: 'ElasticStack',
        link: '/elasticstack/',
        activeMatch: '/elasticstack'
      },
      {
        text: 'Redis',
        link: '/redis/',
        activeMatch: '/redis'
      },
      {
        text: '消息队列',
        items: [
          { text: 'Kafka', link: '/mq/kafka/', activeMatch: '/mq/kafka/' }
        ]
      },
      {
        text: '分布式组件',
        items: [
          { text: 'zookeeper', link: '/components/zookeeper/', activeMatch: '/components/zookeeper/' }
        ]
      }
    ],
    sidebar: {
      'components/zookeeper': [
        {
          text: 'ZooKeeper 入门',
          collapsible: true,
          items: [
            { text: 'ZooKeeper 初识', link: '/components/zookeeper/' },
            { text: 'ZooKeeper 安装部署', link: '/components/zookeeper/install' }
          ]
        },
        {
          text: 'ZooKeeper 代码实战',
          collapsible: true,
          items: [
            { text: 'ZooKeeper 增删改查', link: '/components/zookeeper/code/crud' },
            { text: 'ZooKeeper 权限管理', link: '/components/zookeeper/code/permissions' }
          ]
        }
      ],
      'mq/kafka': [
        {
          text: 'Kafka 安装部署',
          collapsible: true,
          items: [
            { text: '初识 Kafka', link: '/mq/kafka/' },
            { text: 'Kafka 安装部署', link: '/mq/kafka/install' },
            { text: 'Kafka 常用命令', link: '/mq/kafka/command' }
          ]
        }
      ],
      'nginx': [
        {
          text: 'Nginx实战',
          collapsible: true,
          items: [
            { text: 'Nginx 配置 https', link: '/nginx/https' }
          ]
        }
      ],
      'elasticstack': [
        {
          text: 'ElasticStack 相关部署',
          collapsible: true,
          items: [
            { text: 'ES、Kibana 部署', link: '/elasticstack/' }
          ]
        },
        {
          text: 'ElasticStack 进阶调优',
          collapsible: true,
          items: [
            { text: 'reindex', link: '/elasticstack/reindex', }
          ]
        }
      ],
      'redis': [
        {
          text: 'Redis 进阶',
          collapsible: true,
          items: [
            { text: 'Redis 实现排行榜', link: '/redis/' }
          ]
        }
      ]
    }
  }
}
