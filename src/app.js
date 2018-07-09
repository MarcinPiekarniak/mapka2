// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component} from 'react';
import {connect} from 'react-redux';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

import {loadSampleConfigurations} from './actions';
import {replaceLoadDataModal} from './factories/load-data-modal';

import sampleTripData from './data/sample-trip-data';
import sampleGeojson from './data/sample-geojson.json';
import sampleIconCsv, {config as savedMapConfig} from './data/sample-icon-csv';
import {updateVisData, addDataToMap, removeLayer} from 'kepler.gl/actions';
import Processors from 'kepler.gl/processors';
import layerConfig from './layer.json';

import json_01_teren_lotniska from './data2/01_teren_lotniska.json';
import json_02_nawierzchnia_utwardzona from './data2/02_nawierzchnia_utwardzona.json';
import json_03_stanowiska_postojowe from './data2/03_stanowiska_postojowe.json';
import json_04_pas_startowy from './data2/04_pas_startowy.json';
//import json_05_poziome_oznaczenia_pasa from './data2/05_poziome_oznaczenia_pasa.json';
//import json_06_linie_przerywane_pasa from './data2/06_linie_przerywane_pasa.json';
import json_07_drogi_poza_obszarem_kolowania from './data2/07_drogi_poza_obszarem_kolowania.json';
import json_08_drogi_w_obszarze_kolowania from './data2/08_drogi_w_obszarze_kolowania.json';
//import json_09a_oznakowanie_poziome_drogowe_przerywane_drobne from './data2/09a_oznakowanie_poziome_drogowe_przerywane_drobne.json';
//import json_09_oznakowanie_poziome_drogowe_przerywane from './data2/09_oznakowanie_poziome_drogowe_przerywane.json';
//import json_10_oznakowanie_poziome_drogowe_podwojne_linie from './data2/10_oznakowanie_poziome_drogowe_podwojne_linie.json';
//import json_11_oznakowanie_poziome_drogowe_gruba_linia from './data2/11_oznakowanie_poziome_drogowe_gruba_linia.json';
//import json_12_oznakowanie_poziome_drogowe_ciagle from './data2/12_oznakowanie_poziome_drogowe_ciagle.json';
//import json_13_linie_bezpieczenstwa from './data2/13_linie_bezpieczenstwa.json';
//import json_14_oznakowanie_poziome_ciemne from './data2/14_oznakowanie_poziome_ciemne.json';
//import json_15_oznakowanie_poziome_czarne_bez_ramki from './data2/15_oznakowanie_poziome_czarne_bez_ramki.json';
//import json_16_oznakowanie_poziome_zolte from './data2/16_oznakowanie_poziome_zolte.json';
import json_17_tory_dla_pieszych from './data2/17_tory_dla_pieszych.json';
import json_18_budynki from './data2/18_budynki.json';
//import json_19_miejsca_oczekiwania_linie_przerywane from './data2/19_miejsca_oczekiwania_linie_przerywane.json';
//import json_20_miejsca_oczekiwania_linie_ciagle from './data2/20_miejsca_oczekiwania_linie_ciagle.json';
//import json_21_krawedz_drogi_kolowania from './data2/21_krawedz_drogi_kolowania.json';
//import json_22_os_drogi_kolowania from './data2/22_os_drogi_kolowania.json';
//import json_23_os_drogi_kolowania_stanowiska_uzupelniajacego from './data2/23_os_drogi_kolowania_stanowiska_uzupelniajacego.json';
import json_24_pola_techniczne from './data2/24_pola_techniczne.json';
import json_25_strefy_zakazu_parkowania from './data2/25_strefy_zakazu_parkowania.json';
//import json_26_strefy_stanowisk_postojowych from './data2/26_strefy_stanowisk_postojowych.json';
//import json_27_miejsca_parkingowe from './data2/27_miejsca_parkingowe.json';

import LAYER_CONFIGS from './layer_configs.js';

/*
const layers = {
  json_01_teren_lotniska,
  json_02_nawierzchnia_utwardzona,
  json_03_stanowiska_postojowe,
  json_04_pas_startowy,
  //json_05_poziome_oznaczenia_pasa,
  //json_06_linie_przerywane_pasa,
  json_07_drogi_poza_obszarem_kolowania,
  json_08_drogi_w_obszarze_kolowania,
  //json_09a_oznakowanie_poziome_drogowe_przerywane_drobne,
  //json_09_oznakowanie_poziome_drogowe_przerywane,
  //json_10_oznakowanie_poziome_drogowe_podwojne_linie,
  //json_11_oznakowanie_poziome_drogowe_gruba_linia,
  //json_12_oznakowanie_poziome_drogowe_ciagle,
  //json_13_linie_bezpieczenstwa,
  //json_14_oznakowanie_poziome_ciemne,
  //json_15_oznakowanie_poziome_czarne_bez_ramki,
  //json_16_oznakowanie_poziome_zolte,
  json_17_tory_dla_pieszych,
  json_18_budynki,
  //json_19_miejsca_oczekiwania_linie_przerywane,
  //json_20_miejsca_oczekiwania_linie_ciagle,
  //json_21_krawedz_drogi_kolowania,
  //json_22_os_drogi_kolowania,
  //json_23_os_drogi_kolowania_stanowiska_uzupelniajacego,
  json_24_pola_techniczne,
  json_25_strefy_zakazu_parkowania,
  //json_26_strefy_stanowisk_postojowych,
  //json_27_miejsca_parkingowe,
};*/

const layers = {
  json_01_teren_lotniska,
};




const KeplerGl = require('kepler.gl/components').injectComponents([
  replaceLoadDataModal()
]);

const MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line
//eslint-disable import/first
// Sample data
/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */
let xxx = 0;
function getIndividualConfig(configParam) {
   let config = JSON.parse(JSON.stringify(configParam));
   if (config.color == null) return null;
   let copiedConfig = JSON.parse(JSON.stringify(layerConfig));
   copiedConfig.layers[0].id = 'x' + xxx; //todo think about it
   xxx = xxx + 1;
   //console.log(config);

   //color
   //hover ?
   //extruded
   //elevation
   //opacity

   if (config.color != null) {
     copiedConfig.layers[0].config.color = config.color;
     copiedConfig.layers[0].config.highlightColor = config.color;
   }

   if (config.opacity != null) {
     copiedConfig.layers[0].config.visConfig.opacity = config.opacity;
   }



   //console.log(copiedConfig.layers[0].config.color);
   //console.log(copiedConfig.layers[0].config.color);
   //console.log(copiedConfig.layers[0].config.color[0]);



   copiedConfig.layers[0].config.dataId = config.file;
   copiedConfig.layers[0].config.label = config.file;

   return copiedConfig;
}

function mergeConfigs(configs) {
  let res = {layers:[]}
  for (let i = 0; i < configs.length; ++i) {
    if (configs[i] != null) {
      res.layers.push(configs[i].layers[0]);
    }

  }
  return res;
}

function generateConfig() {
  let indexes = [];
  let configs = [];

  for (let i = LAYER_CONFIGS.length - 1; i >= 0; --i) {
    indexes.push(i);
  }

  for (let i = 0; i < indexes.length; ++i) {
    //console.log(indexes[i]);
    //console.log(LAYER_CONFIGS[indexes[i]]);
    //console.log(getIndividualConfig(LAYER_CONFIGS[indexes[i]]));
    configs.push(getIndividualConfig(LAYER_CONFIGS[indexes[i]]));
  }
  //console.log('configs');
  //console.log(configs);
  return mergeConfigs(configs);
}

//console.log('wololo');
//console.log(generateConfig());



class App extends Component {
  componentWillMount() {
    // if we pass an id as part f the url
    // we ry to fetch along map configurations
    const {params: {id: sampleMapId} = {}} = this.props;
    this.props.dispatch(loadSampleConfigurations(sampleMapId));
  }

  componentDidMount() {
    // load sample data
    this._loadSampleData();
  }

  _loadSampleData() {
  /*
    this.props.dispatch(
      updateVisData(
        // datasets
        {
          info: {
            label: 'Sample Taxi Trips in New York City',
            id: 'test_trip_data'
          },
          data: sampleTripData
        },
        // option
        {
          centerMap: true,
          readOnly: false
        },
        // config
        {
          filters: [
            {
              id: 'me',
              dataId: 'test_trip_data',
              name: 'tpep_pickup_datetime',
              type: 'timeRange',
              enlarged: true
            }
          ]
        }
      )
    );*/

    // load icon data and config and process csv file

    let dataToDisplay = [];
    let geojsonsConfig = generateConfig();
    for (let i = LAYER_CONFIGS.length - 1; i >= 0; --i) {
      dataToDisplay.push({
        info: {label: LAYER_CONFIGS[i].file, id: LAYER_CONFIGS[i].file},
        data: Processors.processGeojson(layers[LAYER_CONFIGS[i].file])
      });
    }

    this.props.dispatch(updateVisData(dataToDisplay, null, geojsonsConfig));

    let newConfig = {}
    newConfig.layers = geojsonsConfig.layers.concat(savedMapConfig.config.visState.layers);
    newConfig.filters = [];
    dataToDisplay.push({
      info: {
        label: 'Icon Data',
        id: 'test_icon_data'
      },
      data: Processors.processCsvData(sampleIconCsv)
    });

/*
    setTimeout(() => {
      this.props.dispatch(
        updateVisData(
          dataToDisplay,
          {
            centerMap: true
          },
          newConfig
        )
      );
    },5000);
*/

    setInterval(() => {
    //  this.props.dispatch(removeLayer(0));

      this.props.dispatch(
        updateVisData(
          dataToDisplay,
          {
            centerMap: true
          },
          newConfig
        )
      );
      dataToDisplay[dataToDisplay.length - 1].data.rows[0][0] += 0.0001;
      dataToDisplay[dataToDisplay.length - 1].data.rows[0][1] += 0.0001;

    }, 3000);



    /*
    this.props.dispatch(
      updateVisData(
        [
          {
            info: {
              label: 'Icon Data',
              id: 'test_icon_data'
            },
            data: Processors.processCsvData(sampleIconCsv)
          }
        ],
        {
          centerMap: true
        },
        newConfig
      )
    );
*/

/*
    this.props.dispatch(
      updateVisData(
        [
          {
            info: {
              label: 'Icon Data',
              id: 'test_icon_data'
            },
            data: Processors.processCsvData(sampleIconCsv)
          }
        ],
        {
          centerMap: true
        },
        savedMapConfig.config.visState
      )
    );
*/
/*
    console.log('data');
    console.log(Processors.processCsvData(sampleIconCsv));
    let pointData = Processors.processCsvData(sampleIconCsv);
    setInterval(() => {
      this.props.dispatch(removeLayer(0));


      pointData.rows[0][0] += 0.0001;
      pointData.rows[0][1] += 0.0001;

      pointData.rows[1][0] -= 0.0001;
      pointData.rows[1][1] -= 0.0001;
      console.log(pointData);
      //setTimeout(() => {
        this.props.dispatch(
          updateVisData(
            [
              {
                info: {
                  label: 'Icon Data',
                  id: 'test_icon_data'
                },
                data: pointData
              }
            ],
            {
              centerMap: false
            },
            //savedMapConfig.config.visState
          )
        );
      //}, 500);


    }, 1000);
*/





/*
    this.props.dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: 'Icon Data',
              id: 'test_icon_data'
            },
            data: Processors.processCsvData(sampleIconCsv)
          }
        ],
        options: {
          centerMap: true
        },
        config: savedMapConfig
      })
    );
*/




    /*
    this.props.dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: 'Icon Data',
              id: 'test_icon_data'
            },
            data: Processors.processCsvData(sampleIconCsv)
          }
        ],
        options: {
          centerMap: true
        },
        config: savedMapConfig
      })
    );
    */

    //for (var i = 0; i < LAYER_CONFIGS.length; ++i) {
    /*  this.props.dispatch(
        updateVisData({
          info: {label: LAYER_CONFIGS[0].file, id: LAYER_CONFIGS[0].file},
          data: Processors.processGeojson(layers[LAYER_CONFIGS[0].file])
        }, null, getConfig(LAYER_CONFIGS[0]))
      );*/

/*
      this.props.dispatch(
        updateVisData({
          info: {label: LAYER_CONFIGS[1].file, id: LAYER_CONFIGS[1].file},
          data: Processors.processGeojson(layers[LAYER_CONFIGS[1].file])
        })
      );*/







  //  }
    // load geojson
    /*
    this.props.dispatch(
      updateVisData({
        info: {label: 'SF Zip Geo'},
        data: Processors.processGeojson(layers[0])
      }, null, null)
    );*/
    /*
    this.props.dispatch(
      updateVisData({
        info: {label: 'SF Zip Geo', id: "moje"},
        data: Processors.processGeojson(layers[0])
      }, null, layerConfig)
    );*/


  }

  render() {
    return (
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
        <AutoSizer>
          {({height, width}) => (
            <KeplerGl
              mapboxApiAccessToken={MAPBOX_TOKEN}
              id="map"
              /*
               * Specify path to keplerGl state, because it is not mount at the root
               */
              getState={state => state.demo.keplerGl}
              width={width}
              height={height}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, dispatchToProps)(App);
