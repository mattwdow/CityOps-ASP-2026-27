import * as turf from '@turf/turf';

export interface RouteRecord {
  route_id: string;
  name: string;
  short_name: string;
  composite_score?: number;
  trip_count?: number;
  stability_class: string;
  coords: [number, number][]; // [lat, lng]
  grade?: string;
  total_pop_served?: number;
  route_length_km?: number;
  is_regional?: boolean;
}

export const STABILITY_COLORS: Record<string, string> = {
  'Essential Equity Routes': '#3B82F6',   // Blue
  'High Swing Routes': '#EF4444',         // Red
  'Moderate Swing Routes': '#F59E0B',     // Amber
  'Low Equity-Priority Routes': '#10B981',// Emerald
  'Regional': '#475569',                  // Slate
};

/**
 * Convert route LineStrings into 3D Ribbon Wall polygons (extrusion layers require Polygons)
 * Height is keyed to trip_count or frequency.
 */
export function buildRouteRibbonPolygons(routes: RouteRecord[], widthMeters: number = 24) {
  const features = routes
    .filter((r) => r.coords && r.coords.length > 1)
    .map((r) => {
      // Mapbox expects [lng, lat]
      const lineCoords = r.coords.map(([lat, lng]) => [lng, lat]);
      const line = turf.lineString(lineCoords);
      
      // Buffer the line to give it a physical ground footprint width
      const buffered = turf.buffer(line, widthMeters / 1000, { units: 'kilometers' });
      
      // Extrude height based on trip frequency or composite score (scaled to 15m - 120m)
      const normalizedHeight = Math.min(120, Math.max(18, (r.trip_count || (r.composite_score ? r.composite_score * 1.2 : 45))));
      
      return {
        ...buffered,
        properties: {
          route_id: r.route_id,
          name: r.name,
          short_name: r.short_name,
          score: r.composite_score,
          trip_count: r.trip_count || 50,
          stability_class: r.stability_class || 'Moderate Swing Routes',
          color: STABILITY_COLORS[r.stability_class] || '#94A3B8',
          wall_height: normalizedHeight,
          wall_base: 0,
        },
      };
    });
    
  return turf.featureCollection(features);
}
