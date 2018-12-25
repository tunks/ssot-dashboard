
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DummyService {
    private now = moment();
    public generateData(size: number = 100) {
        const elements = Array<ChartElement>();
        for (let i = 0; i < size; i++) {
            const item = this.getNextEventData();
            elements.push(item);
        }
        return new ChartData(elements);
    }

    public getNextEventData(index: number = 1 ): ChartElement {
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
        return  new ChartElement(ts, values);
    }

    private random(min: number = 100, max: number = 200) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export class ChartData {
    public elements: Array<ChartElement> = [];
    constructor( elements: Array<ChartElement> = []) {
        this.elements = elements;
    }

    getSummary(): Array<number> {
     const summary = Array<number>();
     for (let i = 0; i < this.elements.length; i++) {
          this.elements[i].values.forEach(function( value , index) {
                if (!summary[index]) {
                    summary[index] = 0;
                }
                summary[index] += value;
          });
     }
     return summary;
    }
}

export class ChartElement {
    public timestamp = '';
    public values: Array<number> = [];
    constructor(ts: string, values: Array<number> = []) {
        this.timestamp = ts;
        this.values = values;
    }
}
