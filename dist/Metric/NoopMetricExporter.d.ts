import { AggregationTemporality, InstrumentType, PushMetricExporter, ResourceMetrics } from '@opentelemetry/sdk-metrics-base';
import { ExportResult } from '@opentelemetry/core';
export declare class NoopMetricExporter implements PushMetricExporter {
    forceFlush(): Promise<void>;
    selectAggregationTemporality(instrumentType: InstrumentType): AggregationTemporality;
    export(metrics: ResourceMetrics, resultCallback: (result: ExportResult) => void): void;
    shutdown(): Promise<void>;
}
