
import * as moment from 'moment';
export class DummyUtil {
    private now = moment();
    public generateData(size: number = 100) {
        const items = Array<ChartData>();
        for (let i = 0; i < size; i++) {
            items.push( this.getNextEventData());
        }
        return items;
    }

    public getNextEventData(index: number = 1 ): ChartData {
        const ts = this.now.add(index, 'minutes').format('HH:mm');
        const values: Array<number> = [];
        const value1 = this.random(150, 230);
        const value2 = value1 - this.random(20, 40);
        const value3 = value2 - this.random(50, 60);
        const value4 = value3 - this.random(80, 90) - 10;
        values.push(value1);
        values.push(value2);
        values.push(value3);
        values.push( value4 >= 0 ? value4 : 5);
        return  new ChartData(ts, values);
    }

    private random(min: number = 100, max: number = 200) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export class ChartData {
    public timestamp = '';
    public values: Array<number> = [];
    constructor(ts: string, values: Array<number> = []) {
        this.timestamp = ts;
        this.values = values;
    }
}
