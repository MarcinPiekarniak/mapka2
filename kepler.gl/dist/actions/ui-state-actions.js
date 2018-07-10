'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setExportFiltered = exports.setExportDataType = exports.setExportSelectedDataset = exports.cleanupExportImage = exports.setExportImageDataUri = exports.startExportingImage = exports.toggleLegend = exports.setResolution = exports.setRatio = exports.setExportData = exports.setExportConfig = exports.openDeleteModal = exports.toggleMapControl = exports.toggleModal = exports.toggleSidePanel = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _reduxActions = require('redux-actions');

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var CLEANUP_EXPORT_IMAGE = _actionTypes2.default.CLEANUP_EXPORT_IMAGE,
    OPEN_DELETE_MODAL = _actionTypes2.default.OPEN_DELETE_MODAL,
    SET_EXPORT_DATA_TYPE = _actionTypes2.default.SET_EXPORT_DATA_TYPE,
    SET_EXPORT_FILTERED = _actionTypes2.default.SET_EXPORT_FILTERED,
    SET_EXPORT_IMAGE_DATA_URI = _actionTypes2.default.SET_EXPORT_IMAGE_DATA_URI,
    SET_EXPORT_CONFIG = _actionTypes2.default.SET_EXPORT_CONFIG,
    SET_EXPORT_DATA = _actionTypes2.default.SET_EXPORT_DATA,
    SET_EXPORT_SELECTED_DATASET = _actionTypes2.default.SET_EXPORT_SELECTED_DATASET,
    SET_RATIO = _actionTypes2.default.SET_RATIO,
    SET_RESOLUTION = _actionTypes2.default.SET_RESOLUTION,
    START_EXPORTING_IMAGE = _actionTypes2.default.START_EXPORTING_IMAGE,
    TOGGLE_LEGEND = _actionTypes2.default.TOGGLE_LEGEND,
    TOGGLE_MODAL = _actionTypes2.default.TOGGLE_MODAL,
    TOGGLE_SIDE_PANEL = _actionTypes2.default.TOGGLE_SIDE_PANEL,
    TOGGLE_MAP_CONTROL = _actionTypes2.default.TOGGLE_MAP_CONTROL;

// second argument of createAction is expected to be payloadCreator or undefined

var _map = [TOGGLE_SIDE_PANEL, TOGGLE_MODAL, TOGGLE_MAP_CONTROL, OPEN_DELETE_MODAL, SET_RATIO, SET_RESOLUTION, TOGGLE_LEGEND, START_EXPORTING_IMAGE, SET_EXPORT_IMAGE_DATA_URI, CLEANUP_EXPORT_IMAGE, SET_EXPORT_SELECTED_DATASET, SET_EXPORT_DATA_TYPE, SET_EXPORT_FILTERED, SET_EXPORT_CONFIG, SET_EXPORT_DATA].map(function (a) {
  return (0, _reduxActions.createAction)(a);
}),
    _map2 = (0, _slicedToArray3.default)(_map, 15),
    toggleSidePanel = _map2[0],
    toggleModal = _map2[1],
    toggleMapControl = _map2[2],
    openDeleteModal = _map2[3],

// export image
setRatio = _map2[4],
    setResolution = _map2[5],
    toggleLegend = _map2[6],
    startExportingImage = _map2[7],
    setExportImageDataUri = _map2[8],
    cleanupExportImage = _map2[9],

// export data
setExportSelectedDataset = _map2[10],
    setExportDataType = _map2[11],
    setExportFiltered = _map2[12],
    setExportConfig = _map2[13],
    setExportData = _map2[14];

exports.toggleSidePanel = toggleSidePanel;
exports.toggleModal = toggleModal;
exports.toggleMapControl = toggleMapControl;
exports.openDeleteModal = openDeleteModal;
exports.setExportConfig = setExportConfig;
exports.setExportData = setExportData;
exports.setRatio = setRatio;
exports.setResolution = setResolution;
exports.toggleLegend = toggleLegend;
exports.startExportingImage = startExportingImage;
exports.setExportImageDataUri = setExportImageDataUri;
exports.cleanupExportImage = cleanupExportImage;
exports.setExportSelectedDataset = setExportSelectedDataset;
exports.setExportDataType = setExportDataType;
exports.setExportFiltered = setExportFiltered;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3VpLXN0YXRlLWFjdGlvbnMuanMiXSwibmFtZXMiOlsiQ0xFQU5VUF9FWFBPUlRfSU1BR0UiLCJBY3Rpb25UeXBlcyIsIk9QRU5fREVMRVRFX01PREFMIiwiU0VUX0VYUE9SVF9EQVRBX1RZUEUiLCJTRVRfRVhQT1JUX0ZJTFRFUkVEIiwiU0VUX0VYUE9SVF9JTUFHRV9EQVRBX1VSSSIsIlNFVF9FWFBPUlRfQ09ORklHIiwiU0VUX0VYUE9SVF9EQVRBIiwiU0VUX0VYUE9SVF9TRUxFQ1RFRF9EQVRBU0VUIiwiU0VUX1JBVElPIiwiU0VUX1JFU09MVVRJT04iLCJTVEFSVF9FWFBPUlRJTkdfSU1BR0UiLCJUT0dHTEVfTEVHRU5EIiwiVE9HR0xFX01PREFMIiwiVE9HR0xFX1NJREVfUEFORUwiLCJUT0dHTEVfTUFQX0NPTlRST0wiLCJtYXAiLCJhIiwidG9nZ2xlU2lkZVBhbmVsIiwidG9nZ2xlTW9kYWwiLCJ0b2dnbGVNYXBDb250cm9sIiwib3BlbkRlbGV0ZU1vZGFsIiwic2V0UmF0aW8iLCJzZXRSZXNvbHV0aW9uIiwidG9nZ2xlTGVnZW5kIiwic3RhcnRFeHBvcnRpbmdJbWFnZSIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsImNsZWFudXBFeHBvcnRJbWFnZSIsInNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCIsInNldEV4cG9ydERhdGFUeXBlIiwic2V0RXhwb3J0RmlsdGVyZWQiLCJzZXRFeHBvcnRDb25maWciLCJzZXRFeHBvcnREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0FBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQU1FQSxvQixHQWVFQyxxQixDQWZGRCxvQjtJQUNBRSxpQixHQWNFRCxxQixDQWRGQyxpQjtJQUNBQyxvQixHQWFFRixxQixDQWJGRSxvQjtJQUNBQyxtQixHQVlFSCxxQixDQVpGRyxtQjtJQUNBQyx5QixHQVdFSixxQixDQVhGSSx5QjtJQUNBQyxpQixHQVVFTCxxQixDQVZGSyxpQjtJQUNBQyxlLEdBU0VOLHFCLENBVEZNLGU7SUFDQUMsMkIsR0FRRVAscUIsQ0FSRk8sMkI7SUFDQUMsUyxHQU9FUixxQixDQVBGUSxTO0lBQ0FDLGMsR0FNRVQscUIsQ0FORlMsYztJQUNBQyxxQixHQUtFVixxQixDQUxGVSxxQjtJQUNBQyxhLEdBSUVYLHFCLENBSkZXLGE7SUFDQUMsWSxHQUdFWixxQixDQUhGWSxZO0lBQ0FDLGlCLEdBRUViLHFCLENBRkZhLGlCO0lBQ0FDLGtCLEdBQ0VkLHFCLENBREZjLGtCOztBQUdGOztXQW1CSSxDQUNGRCxpQkFERSxFQUVGRCxZQUZFLEVBR0ZFLGtCQUhFLEVBSUZiLGlCQUpFLEVBS0ZPLFNBTEUsRUFNRkMsY0FORSxFQU9GRSxhQVBFLEVBUUZELHFCQVJFLEVBU0ZOLHlCQVRFLEVBVUZMLG9CQVZFLEVBV0ZRLDJCQVhFLEVBWUZMLG9CQVpFLEVBYUZDLG1CQWJFLEVBY0ZFLGlCQWRFLEVBZUZDLGVBZkUsRUFnQkZTLEdBaEJFLENBZ0JFO0FBQUEsU0FBSyxnQ0FBYUMsQ0FBYixDQUFMO0FBQUEsQ0FoQkYsQzs7SUFqQkZDLGU7SUFDQUMsVztJQUNBQyxnQjtJQUNBQyxlOztBQUNBO0FBQ0FDLFE7SUFDQUMsYTtJQUNBQyxZO0lBQ0FDLG1CO0lBQ0FDLHFCO0lBQ0FDLGtCOztBQUNBO0FBQ0FDLHdCO0lBQ0FDLGlCO0lBQ0FDLGlCO0lBQ0FDLGU7SUFDQUMsYTs7UUFvQkFkLGUsR0FBQUEsZTtRQUFpQkMsVyxHQUFBQSxXO1FBQWFDLGdCLEdBQUFBLGdCO1FBQWtCQyxlLEdBQUFBLGU7UUFBaUJVLGUsR0FBQUEsZTtRQUFpQkMsYSxHQUFBQSxhO1FBQ2xGVixRLEdBQUFBLFE7UUFBVUMsYSxHQUFBQSxhO1FBQWVDLFksR0FBQUEsWTtRQUFjQyxtQixHQUFBQSxtQjtRQUFxQkMscUIsR0FBQUEscUI7UUFBdUJDLGtCLEdBQUFBLGtCO1FBQ25GQyx3QixHQUFBQSx3QjtRQUEwQkMsaUIsR0FBQUEsaUI7UUFBbUJDLGlCLEdBQUFBLGlCIiwiZmlsZSI6InVpLXN0YXRlLWFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NyZWF0ZUFjdGlvbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IHtcbiAgQ0xFQU5VUF9FWFBPUlRfSU1BR0UsXG4gIE9QRU5fREVMRVRFX01PREFMLFxuICBTRVRfRVhQT1JUX0RBVEFfVFlQRSxcbiAgU0VUX0VYUE9SVF9GSUxURVJFRCxcbiAgU0VUX0VYUE9SVF9JTUFHRV9EQVRBX1VSSSxcbiAgU0VUX0VYUE9SVF9DT05GSUcsXG4gIFNFVF9FWFBPUlRfREFUQSxcbiAgU0VUX0VYUE9SVF9TRUxFQ1RFRF9EQVRBU0VULFxuICBTRVRfUkFUSU8sXG4gIFNFVF9SRVNPTFVUSU9OLFxuICBTVEFSVF9FWFBPUlRJTkdfSU1BR0UsXG4gIFRPR0dMRV9MRUdFTkQsXG4gIFRPR0dMRV9NT0RBTCxcbiAgVE9HR0xFX1NJREVfUEFORUwsXG4gIFRPR0dMRV9NQVBfQ09OVFJPTFxufSA9IEFjdGlvblR5cGVzO1xuXG4vLyBzZWNvbmQgYXJndW1lbnQgb2YgY3JlYXRlQWN0aW9uIGlzIGV4cGVjdGVkIHRvIGJlIHBheWxvYWRDcmVhdG9yIG9yIHVuZGVmaW5lZFxuY29uc3QgW1xuICB0b2dnbGVTaWRlUGFuZWwsXG4gIHRvZ2dsZU1vZGFsLFxuICB0b2dnbGVNYXBDb250cm9sLFxuICBvcGVuRGVsZXRlTW9kYWwsXG4gIC8vIGV4cG9ydCBpbWFnZVxuICBzZXRSYXRpbyxcbiAgc2V0UmVzb2x1dGlvbixcbiAgdG9nZ2xlTGVnZW5kLFxuICBzdGFydEV4cG9ydGluZ0ltYWdlLFxuICBzZXRFeHBvcnRJbWFnZURhdGFVcmksXG4gIGNsZWFudXBFeHBvcnRJbWFnZSxcbiAgLy8gZXhwb3J0IGRhdGFcbiAgc2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0LFxuICBzZXRFeHBvcnREYXRhVHlwZSxcbiAgc2V0RXhwb3J0RmlsdGVyZWQsXG4gIHNldEV4cG9ydENvbmZpZyxcbiAgc2V0RXhwb3J0RGF0YVxuXSA9IFtcbiAgVE9HR0xFX1NJREVfUEFORUwsXG4gIFRPR0dMRV9NT0RBTCxcbiAgVE9HR0xFX01BUF9DT05UUk9MLFxuICBPUEVOX0RFTEVURV9NT0RBTCxcbiAgU0VUX1JBVElPLFxuICBTRVRfUkVTT0xVVElPTixcbiAgVE9HR0xFX0xFR0VORCxcbiAgU1RBUlRfRVhQT1JUSU5HX0lNQUdFLFxuICBTRVRfRVhQT1JUX0lNQUdFX0RBVEFfVVJJLFxuICBDTEVBTlVQX0VYUE9SVF9JTUFHRSxcbiAgU0VUX0VYUE9SVF9TRUxFQ1RFRF9EQVRBU0VULFxuICBTRVRfRVhQT1JUX0RBVEFfVFlQRSxcbiAgU0VUX0VYUE9SVF9GSUxURVJFRCxcbiAgU0VUX0VYUE9SVF9DT05GSUcsXG4gIFNFVF9FWFBPUlRfREFUQVxuXS5tYXAoYSA9PiBjcmVhdGVBY3Rpb24oYSkpO1xuXG5leHBvcnQge1xuICB0b2dnbGVTaWRlUGFuZWwsIHRvZ2dsZU1vZGFsLCB0b2dnbGVNYXBDb250cm9sLCBvcGVuRGVsZXRlTW9kYWwsIHNldEV4cG9ydENvbmZpZywgc2V0RXhwb3J0RGF0YSxcbiAgc2V0UmF0aW8sIHNldFJlc29sdXRpb24sIHRvZ2dsZUxlZ2VuZCwgc3RhcnRFeHBvcnRpbmdJbWFnZSwgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpLCBjbGVhbnVwRXhwb3J0SW1hZ2UsXG4gIHNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCwgc2V0RXhwb3J0RGF0YVR5cGUsIHNldEV4cG9ydEZpbHRlcmVkXG59O1xuIl19