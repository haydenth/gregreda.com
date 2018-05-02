var DrawMap = function(element)
{
	var elm = jQuery(element);
	var obj = {
		"loading_image": "",
		"map": null,
		"map_id": null,
		"qs": [],
		"drawingzoom": false,
		"polygoncomplete": false,
		"polygonbounds": null,
		"drawingboundviewport": null,
		"initialize": false,
		"initialize_data": null,
		"mapLoaded": false,
		"drawingManager": null,
		"selectedShape": null,
		"selectedShapeGUID": null,
		"polygonData": [],
		"editmode": false,
		"initmap": function(options) {
			var that = this;
			this.qs = this.getQueryString();
			this.initialize = options.initialize;

			this.mapOptions = {
				"scrollWheel": true,
				"zoom": ("undefined" != typeof this.qs["zoom"]) ? parseInt(this.qs["zoom"]) : 6,
				"mapTypeId": google.maps.MapTypeId.SATELLITE,
				"mapTypeControl": true,
				"mapTypeControlOptions": {style: google.maps.MapTypeControlStyle.DEFAULT},
				"zoomControl": true,
				"zoomControlOptions": {style : google.maps.ZoomControlStyle.LARGE},
				"panControl": false,
				"streetViewControl": false
			};
			this.map = new google.maps.Map(jQuery("#" + options.map_id)[0], this.mapOptions);
			this.map.setOptions({styles: 1});
			this.map_id = options.map_id;

			this.drawingManager = new google.maps.drawing.DrawingManager({
				//drawingMode: google.maps.drawing.OverlayType.POLYGON,
				drawingControl : false,
				polygonOptions : {
					fillColor : '#E9967A',
					strokeColor : '#DC143C',
					strokeWeight : 5,
					zIndex : 1,
					editable : false
				}
			});

			this.initDrawingControls();

			google.maps.event.addListener(this.drawingManager, 'polygoncomplete', function(polygon) {
				that.drawingManager.setDrawingMode(null);
				that.setSelection(polygon);
				that.addPolygon(polygon, that.selectedShapeGUID);
				jQuery("#map-tools #div_polygon #dpolygon").removeClass("hidden");
				//jQuery("#map-tools #div_polygon").append("<button id='epolygon'>Edit</button>");
			});

			if (("undefined" != typeof this.qs["latitude"]) && ("undefined" != typeof this.qs["longitude"]))
			{
				this.map_loaded();

				jQuery('#' + this.map_id).bind('mapLoaded', function() {
					that.map.setCenter(new google.maps.LatLng(parseFloat(that.qs["latitude"]), parseFloat(that.qs["longitude"])));

					console.log('map loaded');
					that.get_polygon_data();
				});
			}
		}, // end of initmap

		"initDrawingControls": function() {
			var that = this;
			var drawing_buttons = "<div id='drawing_options'><div id='div_polygon'><button id='dpolygon'>Create Polygon</button><button id='capolygon'>Clear All</button><button id='spolygon'>Save</button></div>";
			drawing_buttons += "</div>";

			if (jQuery("#map-tools #drawing_options").length > 0)
				jQuery("#map-tools #drawing_options").replaceWith(drawing_buttons);
			else
				jQuery("#map-tools").append(drawing_buttons);

			jQuery(document).on("click", "#dpolygon", function() {
				that.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
				that.drawingManager.setMap(that.map);
				that.selectedShapeGUID = that.getGUID();
				jQuery("#map-tools #div_polygon #dpolygon").addClass("hidden");
			}); // end of jQuery(document).on("click", "#dpolygon"

			jQuery(document).on("click", "#capolygon", function() {
				if (that.selectedShape) {
					if (this.polygoncomplete) {
						this.polygoncomplete = false;
					}
					that.selectedShape.setMap(null);
					that.clearSelection();
				}
				that.clearPolygons();
				that.drawingManager.setDrawingMode(null);
				setTimeout(function() {
					that.drawingManager.setDrawingMode(null);
				}, 10);
				jQuery("#map-tools #div_polygon #dpolygon").html("Create Polygon");
			}); // end of jQuery(document).on("click", "#capolygon")

			jQuery(document).on("click", "#spolygon", function() {
				var center = that.map.getCenter();
				var polygons = [];
				var vertices, path;
				var i, j;
				for (i=0; i<that.polygonData.length; i++) {
					path = that.polygonData[i].poly.getPath().getArray();
					vertices = [];
					for (j=0; j<path.length; j++) {
						vertices.push([path[j].lat(), path[j].lng()]);
					}
					polygons.push({
						"guid": that.polygonData[i].guid,
						"polygon": vertices
					});
				}
				jQuery.ajax({
					"method": "POST",
					"url": "http://54.83.26.143/log",
					"dataType": "json",
					"data": {
						"latitude": center.lat(),
						"longitude": center.lng(),
						"zoom": that.map.getZoom(),
						"polygons": polygons
					},
					"beforeSend": function(xhr) {
						xhr.setRequestHeader('Content-Type', 'application/json');
					}
				}).done(function(response) {
					if ("SUCCESS" == response.result)
						alert("Saved.");
					else
						alert("Save unsuccessful.");
				});
			});
		}, // end of initDrawingControls
		"map_loaded": function() {
			var that = this;
			google.maps.event.addListenerOnce(this.map, 'idle', function() {
				if (!that.mapLoaded) {
					jQuery('#' + that.map_id).trigger('mapLoaded');
					that.mapLoaded = true;
				}
			});
		},
		"clearPolygons": function() {
			var i;
			for (i=0; i<this.polygonData.length; i++) {
				this.polygonData[i].poly.setMap(null);
			}
			this.polygonData = [];
		},
		"getGUID": function() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
						.toString(16)
						.substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
					s4() + '-' + s4() + s4() + s4();
		},
		"clearSelection": function() {
			if (this.selectedShape) {
				this.selectedShape.setEditable(false);
				this.selectedShape = null;
			}
		},
		"setSelection": function(shape) {
			this.clearSelection();
			this.selectedShape = shape;
		},
		"get_polygon_data": function() {
			var center = null;
			if (this.map) {
				center = this.map.getCenter();
				this.clearPolygons();
				data = {
					latitude: center.lat(),
					longitude: center.lng()
				};
				this.ajax_request=jQuery.ajax({
					type : "GET",
					dataType : "json",
					url : "",
					data : data,
					cache : false,
					complete: function(){}
				}).done(function(response) {
					//create new google.maps.LatLngBounds to store all markers' position
					that.marker_bounds = new google.maps.LatLngBounds();
					that.renderPolygons(response.polygons);
/*
					that.editmode=true;
					that.edit_savedpolygon();
*/
				});
			}
		},
		"addPolygon": function(polygon, guid) {
			var found, i;
			found = false;
			for (i=0; i<this.polygonData.length; i++) {
				if (this.polygonData[i].guid == guid) {
					this.polygonData[i].poly = polygon;
					found = true;
					break;
				}
			}
			if (!found) {
				this.polygonData.push({
					poly: polygon,
					guid: guid
				});
			}
		},
		"renderPolygons": function(polygons) {
			// TODO:  Not needed right now
		},
		"find_cluster": function(p1, p2) {
			var R, dLat, dLon, a, c, d;
			if (!p1 || !p2)
				    return 0;

			R = 6371; // Radius of the Earth in km
			dLat = (p2.lat - p1.lat) * Math.PI / 180;
			dLon = (p2.lng - p1.lng) * Math.PI / 180;
			a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
				Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) *
				Math.sin(dLon / 2) * Math.sin(dLon / 2);
			c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			d = R * c;
			return d;
		},
		"getQueryString": function() {
			var a = window.location.search.substr(1).split('&');
			var b, p, i;
			if (a == "") return {};
			b = {};
			for (i = 0; i < a.length; ++i)
			{
				p=a[i].split('=');
				if (p.length != 2) continue;
				b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
			}
			return b;
		},
		"getParameterByName": function(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
			return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}
	}; // End of obj definition

	this.obj = obj;
}; // End of DrawMap definition

// Static variables
DrawMap.drawmap = null;

// MapSearch internal function
DrawMap.prototype.fncall = function(method, options) {
	var indirect;
	if ("undefined" != typeof options)
		options.self = this;
	if (-1 !== method.indexOf(".")) {
		indirect = method.split(".");
		if ((2 == indirect.length) && (typeof(this.obj[indirect[0]][indirect[1]]) == 'function'))
		{
			this.obj[indirect[0]].obj = this.obj;
			return this.obj[indirect[0]][indirect[1]].apply(this.obj[indirect[0]], Array.prototype.slice.call(arguments, 1));
		}
	}
	else if (typeof(this.obj[method]) == 'function')
		return this.obj[method].apply(this.obj, Array.prototype.slice.call(arguments, 1));
}

jQuery.fn.drawMap = function(options, args)
{
	var b;
	if (this.push && (0 == this.length))
	{
		if (typeof(options) == 'string')
		{
			if (null != DrawMap.drawmap)
				return DrawMap.drawmap.fncall(options, args);
		}
	}
	else return jQuery(this).each(function()
	{
		var o = this;
		if (typeof(options) == 'string')
		{
			if ("undefined" == typeof(o.drawmap))
			{
				o.drawmap = new DrawMap(this);
				DrawMap.drawmap = o.drawmap;
				if ("object" == typeof args)
					args.map_id = this.id;
			}
			return o.drawmap.fncall(options, args);
		}
		else {
			options.map_id = this.id;
			o.drawmap = new DrawMap(this);
			DrawMap.drawmap = o.drawmap;
			return o.drawmap.fncall("initmap", options);
		}
	});
};
