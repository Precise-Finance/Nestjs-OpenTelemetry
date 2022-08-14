import { Inject, Injectable } from '@nestjs/common';
import { Constants } from '../Constants';
import { OpenTelemetryModuleConfig } from '../OpenTelemetryModuleConfig';
import { NodeSDK } from '@opentelemetry/sdk-node';
import {
  ExplicitBucketHistogramAggregation,
  InstrumentType,
  MeterProvider,
  View,
} from '@opentelemetry/sdk-metrics-base';
import * as metrics from '@opentelemetry/api-metrics';

@Injectable()
export class MetricService {
  private readonly meterProvider: MeterProvider;

  constructor(
    @Inject(Constants.SDK_CONFIG)
    private readonly sdkConfig: OpenTelemetryModuleConfig,
    @Inject(Constants.SDK) private readonly nodeSDK: NodeSDK,
  ) {
    this.meterProvider = new MeterProvider({
      views: [
        new View({
          aggregation: new ExplicitBucketHistogramAggregation([
            0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10,
          ]),
          instrumentType: InstrumentType.HISTOGRAM,
        }),
      ],
    });
    this.meterProvider.addMetricReader(sdkConfig.metricReader);
  }

  public getMeter(): metrics.Meter {
    return this.meterProvider.getMeter('default');
  }

  public getProvider(): MeterProvider {
    return this.meterProvider;
  }

  public getLabels(): Record<string, any> {
    const attr = this.nodeSDK['_resource']?.attributes ?? {};
    delete attr['process.command'];
    delete attr['process.executable.name'];
    delete attr['process.pid'];
    delete attr['process.command_line'];

    if (!attr['application']) {
      attr['application'] = this.sdkConfig.applicationName;
    }

    return attr;
  }
}
