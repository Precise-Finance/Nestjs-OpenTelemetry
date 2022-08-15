import { OpenTelemetryModuleConfig } from '../OpenTelemetryModuleConfig';
import { NodeSDK } from '@opentelemetry/sdk-node';
import * as api from '@opentelemetry/api-metrics';
export declare class MetricService {
    private readonly sdkConfig;
    private readonly nodeSDK;
    private readonly meterProvider;
    constructor(sdkConfig: OpenTelemetryModuleConfig, nodeSDK: NodeSDK);
    getMeter(): api.Meter;
    getProvider(): api.MeterProvider;
    getLabels(): Record<string, any>;
}
