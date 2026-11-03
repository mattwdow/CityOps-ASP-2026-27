export interface TransitBeacon {
  id: string;
  name: string;
  type: 'lrt' | 'transit_centre' | 'hub';
  line?: 'Capital' | 'Metro' | 'Valley' | 'Capital & Metro' | 'Shared Core';
  coords: [number, number]; // [lng, lat]
  color: string;
}

export const TRANSIT_BEACONS: TransitBeacon[] = [
  // ==========================================
  // CAPITAL LINE LRT STATIONS (Blue Line)
  // ==========================================
  { id: 'lrt-clareview', name: 'Clareview LRT Station', type: 'lrt', line: 'Capital', coords: [-113.4114, 53.6017], color: '#3B82F6' },
  { id: 'lrt-belvedere', name: 'Belvedere LRT Station', type: 'lrt', line: 'Capital', coords: [-113.4328, 53.5883], color: '#3B82F6' },
  { id: 'lrt-coliseum', name: 'Coliseum LRT Station', type: 'lrt', line: 'Capital', coords: [-113.4583, 53.5706], color: '#3B82F6' },
  { id: 'lrt-stadium', name: 'Stadium LRT Station', type: 'lrt', line: 'Capital', coords: [-113.4705, 53.5601], color: '#3B82F6' },
  { id: 'lrt-churchill', name: 'Churchill Station (Capital/Metro/Valley)', type: 'lrt', line: 'Shared Core', coords: [-113.4890, 53.5440], color: '#F4B223' },
  { id: 'lrt-central', name: 'Central LRT Station', type: 'lrt', line: 'Capital & Metro', coords: [-113.4919, 53.5411], color: '#3B82F6' },
  { id: 'lrt-bay', name: 'Bay/Enterprise Square Station', type: 'lrt', line: 'Capital & Metro', coords: [-113.4988, 53.5409], color: '#3B82F6' },
  { id: 'lrt-corona', name: 'Corona LRT Station', type: 'lrt', line: 'Capital & Metro', coords: [-113.5058, 53.5408], color: '#3B82F6' },
  { id: 'lrt-govcentre', name: 'Government Centre Station', type: 'lrt', line: 'Capital & Metro', coords: [-113.5103, 53.5361], color: '#3B82F6' },
  { id: 'lrt-university', name: 'University LRT Station', type: 'lrt', line: 'Capital & Metro', coords: [-113.5219, 53.5250], color: '#3B82F6' },
  { id: 'lrt-healthsciences', name: 'Health Sciences/Jubilee Station', type: 'lrt', line: 'Capital & Metro', coords: [-113.5259, 53.5199], color: '#3B82F6' },
  { id: 'lrt-mckernan', name: 'McKernan/Belgravia Station', type: 'lrt', line: 'Capital', coords: [-113.5262, 53.5134], color: '#3B82F6' },
  { id: 'lrt-southcampus', name: 'South Campus / Fort Edmonton Park', type: 'lrt', line: 'Capital', coords: [-113.5285, 53.5023], color: '#3B82F6' },
  { id: 'lrt-southgate', name: 'Southgate LRT Station', type: 'lrt', line: 'Capital', coords: [-113.5167, 53.4861], color: '#3B82F6' },
  { id: 'lrt-centurypark', name: 'Century Park LRT Station', type: 'lrt', line: 'Capital', coords: [-113.5164, 53.4575], color: '#3B82F6' },

  // ==========================================
  // METRO LINE LRT STATIONS (Branch/North)
  // ==========================================
  { id: 'lrt-nait', name: 'NAIT / Blatchford Market Station', type: 'lrt', line: 'Metro', coords: [-113.5092, 53.5670], color: '#10B981' },
  { id: 'lrt-kingsway', name: 'Kingsway / Royal Alex Station', type: 'lrt', line: 'Metro', coords: [-113.5014, 53.5580], color: '#10B981' },
  { id: 'lrt-macewan', name: 'MacEwan LRT Station', type: 'lrt', line: 'Metro', coords: [-113.4925, 53.5478], color: '#10B981' },

  // ==========================================
  // VALLEY LINE SOUTHEAST LRT STATIONS (Red Line)
  // ==========================================
  { id: 'lrt-102street', name: '102 Street Valley Line Stop', type: 'lrt', line: 'Valley', coords: [-113.4952, 53.5432], color: '#EF4444' },
  { id: 'lrt-quarters', name: 'Quarters Valley Line Stop', type: 'lrt', line: 'Valley', coords: [-113.4801, 53.5437], color: '#EF4444' },
  { id: 'lrt-muttart', name: 'Muttart Valley Line Stop', type: 'lrt', line: 'Valley', coords: [-113.4799, 53.5363], color: '#EF4444' },
  { id: 'lrt-strathearn', name: 'Strathearn Valley Line Stop', type: 'lrt', line: 'Valley', coords: [-113.4625, 53.5317], color: '#EF4444' },
  { id: 'lrt-holyrood', name: 'Holyrood Valley Line Stop', type: 'lrt', line: 'Valley', coords: [-113.4575, 53.5280], color: '#EF4444' },
  { id: 'lrt-bonniedoon', name: 'Bonnie Doon Valley Line Stop', type: 'lrt', line: 'Valley', coords: [-113.4554, 53.5197], color: '#EF4444' },
  { id: 'lrt-avonmore', name: 'Avonmore Valley Line Stop', type: 'lrt', line: 'Valley', coords: [-113.4551, 53.5104], color: '#EF4444' },
  { id: 'lrt-davies', name: 'Davies Station (Valley Line)', type: 'lrt', line: 'Valley', coords: [-113.4439, 53.4996], color: '#EF4444' },
  { id: 'lrt-millbourne', name: 'Millbourne / Woodvale Stop', type: 'lrt', line: 'Valley', coords: [-113.4390, 53.4753], color: '#EF4444' },
  { id: 'lrt-greynuns', name: 'Grey Nuns Hospital Stop', type: 'lrt', line: 'Valley', coords: [-113.4347, 53.4630], color: '#EF4444' },
  { id: 'lrt-millwoods', name: 'Mill Woods LRT Station', type: 'lrt', line: 'Valley', coords: [-113.4306, 53.4583], color: '#EF4444' },

  // ==========================================
  // CITY OF EDMONTON MAJOR TRANSIT CENTRES
  // ==========================================
  { id: 'tc-abbottsfield', name: 'Abbottsfield Transit Centre', type: 'transit_centre', coords: [-113.3898, 53.5721], color: '#F59E0B' },
  { id: 'tc-belvedere', name: 'Belvedere Transit Centre', type: 'transit_centre', coords: [-113.4332, 53.5882], color: '#F59E0B' },
  { id: 'tc-capilano', name: 'Capilano Transit Centre', type: 'transit_centre', coords: [-113.4222, 53.5386], color: '#F59E0B' },
  { id: 'tc-castledowns', name: 'Castle Downs Transit Centre', type: 'transit_centre', coords: [-113.5168, 53.6167], color: '#F59E0B' },
  { id: 'tc-centurypark', name: 'Century Park Transit Centre', type: 'transit_centre', coords: [-113.5161, 53.4578], color: '#F59E0B' },
  { id: 'tc-clareview', name: 'Clareview Transit Centre', type: 'transit_centre', coords: [-113.4110, 53.6015], color: '#F59E0B' },
  { id: 'tc-coliseum', name: 'Coliseum Transit Centre', type: 'transit_centre', coords: [-113.4580, 53.5701], color: '#F59E0B' },
  { id: 'tc-davies', name: 'Davies Transit Centre', type: 'transit_centre', coords: [-113.4445, 53.4990], color: '#F59E0B' },
  { id: 'tc-eauxclaires', name: 'Eaux Claires Transit Centre', type: 'transit_centre', coords: [-113.4904, 53.6183], color: '#F59E0B' },
  { id: 'tc-govcentre', name: 'Government Centre Transit Centre', type: 'transit_centre', coords: [-113.5065, 53.5350], color: '#F59E0B' },
  { id: 'tc-heritagevalley', name: 'Heritage Valley Transit Centre', type: 'transit_centre', coords: [-113.5350, 53.4340], color: '#F59E0B' },
  { id: 'tc-jasperplace', name: 'Jasper Place Transit Centre', type: 'transit_centre', coords: [-113.5920, 53.5410], color: '#F59E0B' },
  { id: 'tc-kingsway', name: 'Kingsway Transit Centre', type: 'transit_centre', coords: [-113.5010, 53.5585], color: '#F59E0B' },
  { id: 'tc-leger', name: 'Leger Transit Centre', type: 'transit_centre', coords: [-113.5801, 53.4554], color: '#F59E0B' },
  { id: 'tc-lewisfarms', name: 'Lewis Farms Transit Centre', type: 'transit_centre', coords: [-113.6668, 53.5232], color: '#F59E0B' },
  { id: 'tc-meadows', name: 'Meadows Transit Centre', type: 'transit_centre', coords: [-113.3679, 53.4785], color: '#F59E0B' },
  { id: 'tc-millwoods', name: 'Mill Woods Transit Centre', type: 'transit_centre', coords: [-113.4310, 53.4580], color: '#F59E0B' },
  { id: 'tc-northgate', name: 'Northgate Transit Centre', type: 'transit_centre', coords: [-113.4905, 53.5983], color: '#F59E0B' },
  { id: 'tc-southcampus', name: 'South Campus Transit Centre', type: 'transit_centre', coords: [-113.5290, 53.5020], color: '#F59E0B' },
  { id: 'tc-southgate', name: 'Southgate Transit Centre', type: 'transit_centre', coords: [-113.5186, 53.4862], color: '#F59E0B' },
  { id: 'tc-stadium', name: 'Stadium Transit Centre', type: 'transit_centre', coords: [-113.4710, 53.5605], color: '#F59E0B' },
  { id: 'tc-university', name: 'University Transit Centre', type: 'transit_centre', coords: [-113.5225, 53.5255], color: '#F59E0B' },
  { id: 'tc-westedmontonmall', name: 'West Edmonton Mall Transit Centre', type: 'transit_centre', coords: [-113.6203, 53.5200], color: '#F59E0B' },
  { id: 'tc-westmount', name: 'Westmount Transit Centre', type: 'transit_centre', coords: [-113.5557, 53.5612], color: '#F59E0B' }
];
