export const CC_GRPC_MAP = {
    "FooService": {
        grpcHost: "localhost:50051",
        protoName: "foo_service",
        methodList: [
            "Execute",
        ],
    },
    "BarService": {
        grpcHost: "localhost:50052",
        protoName: "bar_service",
        methodList: [
            "Execute",
        ],
    },
    "BazService": {
        grpcHost: "localhost:50053",
        protoName: "baz_service",
        methodList: [
            "Execute",
        ],
    },
    "MessageService": {
        grpcHost: "localhost:50054",
        protoName: "message_service",
        methodList: [
            "connect",
        ],
    },
} as const;

export const CC_GRPC_PROTO_PATH = process.env.CC_GRPC_PROTO_PATH || "./proto";
