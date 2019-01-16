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
})

export default Dashboard