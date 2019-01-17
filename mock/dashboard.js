import Mock from 'mockjs'

const Dashboard = Mock.mock({
  'numbers': [
    {
      'icon': 'el-icon-view',
      'title': 'Online Review',
      'number|1000-3000': 1000,
      'color': '#64ea91'
    },
    {
      'icon': 'el-icon-star-on',
      'title': 'New Customers',
      'number|2000-4000': 2000,
      'color': '#8fc9fb'
    },
    {
      'icon': 'el-icon-tickets',
      'title': 'Active Projects',
      'number|3000-5000': 3000,
      'color': '#d897eb'
    },
    {
      'icon': 'el-icon-goods',
      'title': 'Referrals',
      'number|3000-6000': 3000,
      'color': '#f69899'
    },
  ],
  'sales|9': [
    {
      'name|+1': 2010,
      'Clothes|200-500': 1,
      'Food|180-400': 1,
      'Electronics|300-550': 1,
    },
  ],
  'totalComplete|9': [
    {
      'name|+1': 2010,
      'task|200-500': 1,
      'card|130-400': 1,
    },
  ],
  'weather': {
    'temperature|0-25': 15,
    'city': '南京',
    'desc': '晴转多云'
  },
  'rencentSales': [
    {
      'name': 'Bruce',
      'status': '3',
      'date': '2018-12-12',
      'price': '998',
      'avatar': 'http://dummyimage.com/48x48/f28979/757575.png&text=B',
      'assess': 'It\'s very nice. very useful.'
    },
    {
      'name': 'John',
      'status': '2',
      'date': '2018-12-13',
      'price': '202',
      'avatar': 'http://dummyimage.com/48x48/798bf2/757575.png&text=J',
      'assess': 'It\'s very nice. very useful.'
    },
    {
      'name': 'Taylor',
      'status': '1',
      'date': '2018-12-14',
      'price': '899',
      "avatar": 'http://dummyimage.com/48x48/aff279/757575.png&text=T',
      'assess': 'It\'s very nice. very useful.'
    },
    {
      'name': 'Robot',
      'status': '0',
      'date': '2018-12-15',
      'price': '998',
      "avatar": 'http://dummyimage.com/48x48/798bf2/757575.png&text=R',
      'assess': 'It\'s very nice. very useful.'
    }
  ]
})

export default Dashboard