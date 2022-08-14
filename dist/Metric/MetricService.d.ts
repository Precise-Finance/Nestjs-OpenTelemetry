import { OpenTelemetryModuleConfig } from '../OpenTelemetryModuleConfig';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { MeterProvider } from '@opentelemetry/sdk-metrics-base';
import * as metrics from '@opentelemetry/api-metrics';
export declare class MetricService {
    private readonly sdkConfig;
    private readonly nodeSDK;
    private readonly meterProvider;
    constructor(sdkConfig: OpenTelemetryModuleConfig, nodeSDK: NodeSDK);
    getMeter(): metrics.Meter;
    getProvider(): MeterProvider;
    getLabels(): Record<string, any>;
}
