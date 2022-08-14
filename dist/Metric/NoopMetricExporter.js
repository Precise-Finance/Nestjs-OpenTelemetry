"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopMetricExporter = void 0;
class NoopMetricExporter {
    forceFlush() {
        return Promise.resolve(undefined);
    }
    selectAggregationTemporality(instrumentType) {
        return null;
    }
    export(metrics, resultCallback) {
    }
    shutdown() {
        return Promise.resolve(undefined);
    }
}
exports.NoopMetricExporter = NoopMetricExporter;
//# sourceMappingURL=NoopMetricExporter.js.map