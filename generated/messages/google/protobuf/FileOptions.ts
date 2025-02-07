import {
  Type as OptimizeMode,
  name2num,
  num2name,
} from "./FileOptions/OptimizeMode.ts";
import {
  Type as UninterpretedOption,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./UninterpretedOption.ts";
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
  default as Long,
} from "../../../../core/runtime/Long.ts";
import {
  default as deserialize,
} from "../../../../core/runtime/wire/deserialize.ts";

export interface Type {
  javaPackage?: string;
  javaOuterClassname?: string;
  optimizeFor?: OptimizeMode;
  javaMultipleFiles?: boolean;
  goPackage?: string;
  ccGenericServices?: boolean;
  javaGenericServices?: boolean;
  pyGenericServices?: boolean;
  javaGenerateEqualsAndHash?: boolean;
  deprecated?: boolean;
  javaStringCheckUtf8?: boolean;
  ccEnableArenas?: boolean;
  objcClassPrefix?: string;
  csharpNamespace?: string;
  swiftPrefix?: string;
  phpClassPrefix?: string;
  phpNamespace?: string;
  phpGenericServices?: boolean;
  phpMetadataNamespace?: string;
  rubyPackage?: string;
  uninterpretedOption: UninterpretedOption[];
}

export function getDefaultValue(): Type {
  return {
    javaPackage: "",
    javaOuterClassname: "",
    optimizeFor: "UNSPECIFIED",
    javaMultipleFiles: false,
    goPackage: "",
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    javaGenerateEqualsAndHash: false,
    deprecated: false,
    javaStringCheckUtf8: false,
    ccEnableArenas: false,
    objcClassPrefix: "",
    csharpNamespace: "",
    swiftPrefix: "",
    phpClassPrefix: "",
    phpNamespace: "",
    phpGenericServices: false,
    phpMetadataNamespace: "",
    rubyPackage: "",
    uninterpretedOption: [],
  };
}

export function encodeBinary(value: Type): Uint8Array {
  const result: WireMessage = [];
  if (value.javaPackage !== undefined) {
    const tsValue = value.javaPackage;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.javaOuterClassname !== undefined) {
    const tsValue = value.javaOuterClassname;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.optimizeFor !== undefined) {
    const tsValue = value.optimizeFor;
    result.push(
      [9, { type: WireType.Varint as const, value: new Long(name2num[tsValue]) }],
    );
  }
  if (value.javaMultipleFiles !== undefined) {
    const tsValue = value.javaMultipleFiles;
    result.push(
      [10, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.goPackage !== undefined) {
    const tsValue = value.goPackage;
    result.push(
      [11, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.ccGenericServices !== undefined) {
    const tsValue = value.ccGenericServices;
    result.push(
      [16, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.javaGenericServices !== undefined) {
    const tsValue = value.javaGenericServices;
    result.push(
      [17, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.pyGenericServices !== undefined) {
    const tsValue = value.pyGenericServices;
    result.push(
      [18, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.javaGenerateEqualsAndHash !== undefined) {
    const tsValue = value.javaGenerateEqualsAndHash;
    result.push(
      [20, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.deprecated !== undefined) {
    const tsValue = value.deprecated;
    result.push(
      [23, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.javaStringCheckUtf8 !== undefined) {
    const tsValue = value.javaStringCheckUtf8;
    result.push(
      [27, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.ccEnableArenas !== undefined) {
    const tsValue = value.ccEnableArenas;
    result.push(
      [31, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.objcClassPrefix !== undefined) {
    const tsValue = value.objcClassPrefix;
    result.push(
      [36, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.csharpNamespace !== undefined) {
    const tsValue = value.csharpNamespace;
    result.push(
      [37, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.swiftPrefix !== undefined) {
    const tsValue = value.swiftPrefix;
    result.push(
      [39, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.phpClassPrefix !== undefined) {
    const tsValue = value.phpClassPrefix;
    result.push(
      [40, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.phpNamespace !== undefined) {
    const tsValue = value.phpNamespace;
    result.push(
      [41, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.phpGenericServices !== undefined) {
    const tsValue = value.phpGenericServices;
    result.push(
      [42, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.phpMetadataNamespace !== undefined) {
    const tsValue = value.phpMetadataNamespace;
    result.push(
      [44, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.rubyPackage !== undefined) {
    const tsValue = value.rubyPackage;
    result.push(
      [45, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.uninterpretedOption) {
    result.push(
      [999, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
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
    result.javaPackage = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.javaOuterClassname = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.optimizeFor = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.javaMultipleFiles = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.goPackage = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.ccGenericServices = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.javaGenericServices = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.pyGenericServices = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.javaGenerateEqualsAndHash = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.deprecated = value;
  }
  field: {
    const wireValue = wireFields.get(27);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.javaStringCheckUtf8 = value;
  }
  field: {
    const wireValue = wireFields.get(31);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.ccEnableArenas = value;
  }
  field: {
    const wireValue = wireFields.get(36);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.objcClassPrefix = value;
  }
  field: {
    const wireValue = wireFields.get(37);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.csharpNamespace = value;
  }
  field: {
    const wireValue = wireFields.get(39);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.swiftPrefix = value;
  }
  field: {
    const wireValue = wireFields.get(40);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.phpClassPrefix = value;
  }
  field: {
    const wireValue = wireFields.get(41);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.phpNamespace = value;
  }
  field: {
    const wireValue = wireFields.get(42);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.phpGenericServices = value;
  }
  field: {
    const wireValue = wireFields.get(44);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.phpMetadataNamespace = value;
  }
  field: {
    const wireValue = wireFields.get(45);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.rubyPackage = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 999).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.uninterpretedOption = value as any;
  }
  return result;
}
