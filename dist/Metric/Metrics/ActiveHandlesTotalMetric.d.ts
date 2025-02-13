import { BaseMetric } from './BaseMetric';
import { MetricService } from '../MetricService';
export declare class ActiveHandlesTotalMetric implements BaseMetric {
    private readonly metricService;
    name: string;
    description: string;
    private observableBase;
    constructor(metricService: MetricService);
    inject(): Promise<void>;
    private observerCallback;
}
