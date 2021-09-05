const menuList=[
    {
        title: 'Chart',
        key: '/api_client/designer/chart',
    },
    {
        title: 'Personal',
        key: '/api_client/designer/personal',
    },
    {
        title: 'Setting',
        key: '/api_client/setting',
        children:[
            {
                title:'Record',
                key:'/api_client/designer/setting/record',
            },
        ]
    },
]

export default menuList