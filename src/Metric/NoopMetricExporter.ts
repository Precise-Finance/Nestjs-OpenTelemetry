import {
  AggregationTemporality,
  InstrumentType,
  PushMetricExporter,
  ResourceMetrics,
} from '@opentelemetry/sdk-metrics-base';
import { ExportResult } from '@opentelemetry/core';

export class NoopMetricExporter implements PushMetricExporter {
  forceFlush(): Promise<void> {
    return Promise.resolve(undefined);
  }
  selectAggregationTemporality(
    instrumentType: InstrumentType,
  ): AggregationTemporality {
    return null;
  }
  export(
    metrics: ResourceMetrics,
    resultCallback: (result: ExportResult) => void,
  ): void {
    // noop
  }

  shutdown(): Promise<void> {
    return Promise.resolve(undefined);
  }
}
