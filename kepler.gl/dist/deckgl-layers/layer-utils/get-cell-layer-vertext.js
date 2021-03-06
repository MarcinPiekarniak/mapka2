'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCellLayerVertex = getCellLayerVertex;
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

/*
 * Amendment to default layer vertex shader
 * @param {string} vs
 * @param {bool} opt.highlightPicked - whether to highlight picked element
 *
 */
function getCellLayerVertex(vs, _ref) {
  var highlightPicked = _ref.highlightPicked;

  var output = vs;

  if (highlightPicked) {
    output = output.replace('vec3 lightWeightedColor = lightWeight * instanceColors.rgb;', 'vec3 lightWeightedColor = lightWeight * mix(1.0, mix(1.0, 1.2, selected), extruded) * instanceColors.rgb;');
  }

  return output;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xheWVyLXV0aWxzL2dldC1jZWxsLWxheWVyLXZlcnRleHQuanMiXSwibmFtZXMiOlsiZ2V0Q2VsbExheWVyVmVydGV4IiwidnMiLCJoaWdobGlnaHRQaWNrZWQiLCJvdXRwdXQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7OztRQTBCZ0JBLGtCLEdBQUFBLGtCO0FBMUJoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTU8sU0FBU0Esa0JBQVQsQ0FBNEJDLEVBQTVCLFFBQW1EO0FBQUEsTUFBbEJDLGVBQWtCLFFBQWxCQSxlQUFrQjs7QUFDeEQsTUFBSUMsU0FBU0YsRUFBYjs7QUFFQSxNQUFJQyxlQUFKLEVBQXFCO0FBQ25CQyxhQUFTQSxPQUFPQyxPQUFQLENBQ1AsNkRBRE8sOEdBQVQ7QUFLRDs7QUFFRCxTQUFPRCxNQUFQO0FBQ0QiLCJmaWxlIjoiZ2V0LWNlbGwtbGF5ZXItdmVydGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qXG4gKiBBbWVuZG1lbnQgdG8gZGVmYXVsdCBsYXllciB2ZXJ0ZXggc2hhZGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdnNcbiAqIEBwYXJhbSB7Ym9vbH0gb3B0LmhpZ2hsaWdodFBpY2tlZCAtIHdoZXRoZXIgdG8gaGlnaGxpZ2h0IHBpY2tlZCBlbGVtZW50XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VsbExheWVyVmVydGV4KHZzLCB7aGlnaGxpZ2h0UGlja2VkfSkge1xuICBsZXQgb3V0cHV0ID0gdnM7XG5cbiAgaWYgKGhpZ2hsaWdodFBpY2tlZCkge1xuICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKFxuICAgICAgJ3ZlYzMgbGlnaHRXZWlnaHRlZENvbG9yID0gbGlnaHRXZWlnaHQgKiBpbnN0YW5jZUNvbG9ycy5yZ2I7JyxcblxuICAgICAgYHZlYzMgbGlnaHRXZWlnaHRlZENvbG9yID0gbGlnaHRXZWlnaHQgKiBtaXgoMS4wLCBtaXgoMS4wLCAxLjIsIHNlbGVjdGVkKSwgZXh0cnVkZWQpICogaW5zdGFuY2VDb2xvcnMucmdiO2BcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbiJdfQ==