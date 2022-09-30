// @ts-nocheck
import { merge } from 'topojson';
import topoV1 from '../world.json';
import topoV2 from '../world-aggregated.json';
import { aggregatedViewFFEnabled } from './featureFlags';

const constructTopos = () => {
  const zones = {};
  const topo = aggregatedViewFFEnabled() ? topoV2 : topoV1;

  Object.keys(topo.objects).forEach((k) => {
    if (!topo.objects[k].arcs) {
      return;
    }
    const geo = {
      geometry: merge(topo, [topo.objects[k]]),
      properties: topo.objects[k].properties,
    };
    // Exclude zones with null geometries.
    if (geo.geometry) {
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      zones[k] = geo;
    }
  });

  return zones;
};

export default constructTopos;
