// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '系统管理',
    icon: 'folder-o',
    children: [
      { path: '/sys/rule', title: '角色管理' },
      { path: '/sys/user', title: '用户管理' },
      { path: '/sys/menu', title: '菜单管理' }
    ]
  },
  {
    title: '基础资料',
    icon: 'folder-o',
    children: [
      { path: '/base/area', title: '小区管理' },
      { path: '/base/building', title: '楼栋管理' },
      { path: '/base/room', title: '套户管理' },
      { path: '/base/owner', title: '业主管理' }
    ]
  }
]
