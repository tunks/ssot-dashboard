import * as d3 from 'd3';
export class Bullet {
    orient = 'left'; // TODO top & bottom
    reverse = false;
    duration = 0;
   // ranges = function(d: any){this.bulletRanges(d););
    // markers = bulletMarkers,
    // measures = bulletMeasures,
    width = 380;
    height = 30;
    tickFormat = null;

    private bulletMarkers(d: any) {
        return d.markers;
    }
    private bulletMeasures(d: any) {
        return d.measures;
    }
    private bulletRanges(d: any) {
        return d.ranges;
    }
    public ranges(d: any) {
        return this.bulletRanges(d);
    }

    public bulletTranslate(x: any) {
      return function(d) {
          return 'translate(" + x(d) + ",0)';
      };
    }
    public bulletWidth(x: any) {
        const x0 = x(0);
        return function(d) {
          return Math.abs(x(d) - x0);
        };
      }


}
