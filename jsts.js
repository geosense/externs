/**
 * @fileoverview Externs for JSTS
 * @externs
 */

var jsts = {};

/** 
 * @const
 */
jsts.io = {};

/** 
 * @const
 */
jsts.geom = {};

/**
 * Geometry Constructor
 * @constructor
 */
jsts.geom.Geometry = function() {};

/**
 * @type {string}
 */
jsts.geom.Geometry.name = 'jsts.geom.Geometry';

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
 * Reader constructor
 * @contructor
 */
jsts.io.GeoJSONReader = function() {};

/**
 * @param {Object} geoJson
 * @return {jsts.geom.Geometry}
 */
jsts.io.GeoJSONReader.prototype.read = function(geoJson) {};

/**
 * writer constructor
 * @contructor
 */
jsts.io.GeoJSONWriter = function() {};

/**
 * @param {jsts.geom.Geometry} geometry
 * @return {Object} data
 */
jsts.io.GeoJSONWriter.prototype.write = function(geometry) {};
