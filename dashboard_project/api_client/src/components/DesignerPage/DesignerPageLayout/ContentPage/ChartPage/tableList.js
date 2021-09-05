const tableList=[
    {
        name: 'api_server_cellmodel',
        columns: [
            {
                name: 'cell_no',
                type: 'integer',
            },
            {
                name: 'cell_pollution',
                type: 'float',
            },
            {
                name: 'cell_width',
                type: 'float',
            },
            {
                name: 'cell_thickness',
                type: 'float',
            },
        ]
    },
    {
        name: 'api_server_unitmodel',
        columns: [
            {
                name: 'unit_no',
                type: 'integer',
            },
            {
                name: 'unit_condition',
                type: 'string',
            },
            {
                name: 'unit_strength',
                type: 'float',
            },
            {
                name: 'unit_purity',
                type: 'float',
            },
            {
                name: 'unit_precision',
                type: 'float',
            },
            {
                name: 'unit_cell_no',
                type: 'integer',
                reference: 'cell_no@api_server_cellmodel',

            },
        ],
        children: [
            {
                name: 'api_server_cellmodel',
            },
        ]
    },
    {
        name: 'api_server_wafermodel',
        columns: [
            {
                name: 'wafer_lot',
                type: 'integer',
            },
            {
                name: 'wafer_wafer',
                type: 'integer',
            },
            {
                name: 'wafer_group',
                type: 'integer',
            },
            {
                name: 'wafer_punchSeq',
                type: 'integer',
            },
            {
                name: 'wafer_week',
                type: 'interger',
            },
            {
                name: 'wafer_day',
                type: 'string',
            },
            {
                name: 'wafer_shift',
                type: 'string',
            },
            {
                name: 'wafer_worker',
                type: 'integer',
            },
            {
                name: 'wafer_stepper',
                type: 'integer',
            },
            {
                name: 'wafer_conductivity',
                type: 'float',
            },
            {
                name: 'wafer_strength',
                type: 'float',
            },
            {
                name: 'wafer_purity',
                type: 'float',
            },
            {
                name: 'wafer_precision',
                type: 'float',
            },
            {
                name: 'wafer_temperature',
                type: 'float',
            },
            {
                name: 'wafer_humidity',
                type: 'float',
            },
            {
                name: 'wafer_pollution',
                type: 'float',
            },
            {
                name: 'wafer_width',
                type: 'float',
            },
            {
                name: 'wafer_thickness',
                type: 'float',
            },
            {
                name: 'wafer_noise',
                type: 'float',
            },
            {
                name: 'wafer_mq',
                type: 'float',
            },
            {
                name: 'wafer_mac',
                type: 'float',
            },
            {
                name: 'wafer_logic',
                type: 'float',
            },
            {
                name: 'wafer_signal_A',
                type: 'float',
            },
            {
                name: 'wafer_signal_B',
                type: 'float',
            },
            {
                name: 'wafer_date',
                type: 'date',
            },
            {
                name: 'wafer_die_x',
                type: 'integer',
            },
            {
                name: 'wafer_die_y',
                type: 'integer',
            },
            {
                name: 'wafer_unit_no',
                type: 'integer',
                reference: 'unit_no@api_server_unitmodel',
            },
        ],
        children:[
            {
                name: 'api_server_unitmodel',
            },
        ]
    },
]

export default tableList