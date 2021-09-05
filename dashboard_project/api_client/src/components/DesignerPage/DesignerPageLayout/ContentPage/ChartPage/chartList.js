const chartList=[
    {
        name: 'heatmaps_chart',
        first_axis: ['integer', 'float', 'string', 'boolean', 'date'],
        second_axis: ['integer', 'float', 'string', 'boolean', 'date'], 
        first_axis_num: 'single',
        second_axis_num: 'single',   
    },
    {
        name: 'bar_chart',
        first_axis: ['integer', 'float', 'string', 'boolean', 'date'],
        second_axis: ['integer', 'float', 'string(c)'], 
        first_axis_num: 'single',
        second_axis_num: 'multiple',    
    },
    {
        name: 'polar_chart',
        first_axis: ['integer', 'float', 'string', 'date'],    
        first_axis_num: 'multiple',
    },
    {
        name: 'boxplot_chart',
        first_axis: ['integer', 'float', 'string', 'boolean', 'date'],
        second_axis: ['integer', 'float', 'string(c)'], 
        first_axis_num: 'single',
        second_axis_num: 'multiple',   
    },
    {
        name: 'pie_chart',
        first_axis: ['integer', 'float', 'string(c)'], 
        first_axis_num: 'multiple',
    },
    {
        name: 'line_chart',
        first_axis: ['integer', 'float', 'string(c)'],  
        second_axis: ['integer', 'float', 'string(c)'],  
        first_axis_num: 'single',
        second_axis_num: 'multiple',
    },
    {
        name: 'dot_chart',
        first_axis: ['integer', 'float', 'string(c)'],  
        second_axis: ['integer', 'float', 'string(c)'],   
        first_axis_num: 'single',
        second_axis_num: 'multiple',
    },
    {
        name: 'bubble_chart',
        first_axis: ['integer', 'float', 'string', 'boolean', 'date'],  
        second_axis: ['integer', 'float', 'string', 'boolean', 'date'],
        third_axis:['integer', 'float', 'string(c)'],  
        first_axis_num: 'single',
        second_axis_num: 'single',
        third_axis_num: 'multiple',
    },
    {
        name: '3D_chart',
        first_axis: ['integer', 'float', 'string', 'boolean', 'date'],  
        second_axis: ['integer', 'float', 'string', 'boolean', 'date'],
        third_axis: ['integer', 'float', 'string', 'boolean', 'date'],
        first_axis_num: 'single',
        second_axis_num: 'single',
        third_axis_num: 'multiple',
    },
]

export default chartList