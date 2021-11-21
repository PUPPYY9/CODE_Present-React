import React, { useState, useEffect } from 'react';
import { Histogram } from '@ant-design/charts';

const data = require('./NewPathcsv1.json')

function Graph_His() {

    var config = {
        data: data,
        binField: 'Score',
        binWidth: 1,
        tooltip: {
            showMarkers: false,
            position: 'top',
        },
        interactions: [{ type: 'element-highlight' }],
        meta: {
            range: {
                min: 24,
                max: 71,
                tickInterval: 1,
            },
            count: {
                max: 20,
                nice: true,
            },
        },
    };
    return <Histogram {...config} />;
};

export default Graph_His;