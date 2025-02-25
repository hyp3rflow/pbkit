import {
  Type as FieldDescriptorProto,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./FieldDescriptorProto.ts";
import {
  Type as DescriptorProto,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./DescriptorProto.ts";
import {
  Type as EnumDescriptorProto,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./EnumDescriptorProto.ts";
import {
  Type as ExtensionRange,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./DescriptorProto/ExtensionRange.ts";
import {
  Type as MessageOptions,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./MessageOptions.ts";
import {
  Type as OneofDescriptorProto,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
} from "./OneofDescriptorProto.ts";
import {
  Type as ReservedRange,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
} from "./DescriptorProto/ReservedRange.ts";
import {
  WireMessage,
  WireType,
} from "../../../../core/runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../core/runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../core/runtime/wire/deserialize.ts";

export interface Type {
  name?: string;
  field: FieldDescriptorProto[];
  nestedType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  extensionRange: ExtensionRange[];
  extension: FieldDescriptorProto[];
  options?: MessageOptions;
  oneofDecl: OneofDescriptorProto[];
  reservedRange: ReservedRange[];
  reservedName: string[];
}

export function getDefaultValue(): Type {
  return {
    name: "",
    field: [],
    nestedType: [],
    enumType: [],
    extensionRange: [],
    extension: [],
    options: undefined,
    oneofDecl: [],
    reservedRange: [],
    reservedName: [],
  };
}

export function encodeBinary(value: Type): Uint8Array {
  const result: WireMessage = [];
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.field) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.nestedType) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.enumType) {
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  for (const tsValue of value.extensionRange) {
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  for (const tsValue of value.extension) {
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.options !== undefined) {
    const tsValue = value.options;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  for (const tsValue of value.oneofDecl) {
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_6(tsValue) }],
    );
  }
  for (const tsValue of value.reservedRange) {
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_7(tsValue) }],
    );
  }
  for (const tsValue of value.reservedName) {
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): Type {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.field = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.nestedType = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.enumType = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.extensionRange = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.extension = value as any;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.options = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 8).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_6(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.oneofDecl = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 9).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_7(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.reservedRange = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 10).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.reservedName = value as any;
  }
  return result;
}
