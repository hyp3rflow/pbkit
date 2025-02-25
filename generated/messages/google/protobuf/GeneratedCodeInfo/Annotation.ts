import {
  WireMessage,
} from "../../../../../core/runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../../core/runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
  unpackFns,
} from "../../../../../core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../../core/runtime/wire/deserialize.ts";

export interface Type {
  path: number[];
  sourceFile?: string;
  begin?: number;
  end?: number;
}

export function getDefaultValue(): Type {
  return {
    path: [],
    sourceFile: "",
    begin: 0,
    end: 0,
  };
}

export function encodeBinary(value: Type): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.path) {
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.sourceFile !== undefined) {
    const tsValue = value.sourceFile;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.begin !== undefined) {
    const tsValue = value.begin;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.end !== undefined) {
    const tsValue = value.end;
    result.push(
      [4, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): Type {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues));
    if (!value.length) break collection;
    result.path = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.sourceFile = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.begin = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.end = value;
  }
  return result;
}
