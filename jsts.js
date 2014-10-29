/**
 * @fileoverview Externs for JSTS
 * @externs
 */
var jsts = {};

jsts.io = {};

jsts.geom = {};

/**
 * @construtor
 */
jsts.geom.Geometry = function () {};

/**
 * @param {number} distance
 * @param {number} quadrantSegments
 *          quadrant of a circle.
 * @param {number} endCapStyle
 * @return {jsts.geom.Geometry}
 *         may be empty).
 */
jsts.geom.Geometry.prototype.buffer = function (distance, quadrantSegments, endCapStyle) {};

/**
 * @return {string}
 */
jsts.geom.Geometry.prototype.getGeometryType = function () {};

/**
 * @param {jsts.geom.Geometry} g
 * @return {boolean}
 */
jsts.geom.Geometry.prototype.crosses = function (g) {};

/**
 * @param {jsts.geom.Geometry} g
 * @return {boolean}
 */
jsts.geom.Geometry.prototype.overlaps = function (g) {};

/**
 * @param {jsts.geom.Geometry} g
 * @return {boolean}
 */
jsts.geom.Geometry.prototype.within = function (g) {};

/**
 * @contructor
 */
jsts.io.GeoJSONReader = function() {};

/**
 * @param {Object} geoJson
 * @return {jsts.geom.Geometry}
 */
jsts.io.GeoJSONWriter.prototype.read = function(geoJson) {};

/**
 * @contructor
 */
jsts.io.GeoJSONWriter = function() {};

/**
 * @param {jsts.geom.Geometry} geometry
 * @return {Object} data
 */
jsts.io.GeoJSONWriter.prototype.write = function(geometry) {};
