/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.jspb.test.ExtendsWithMessage', null, global);
goog.exportSymbol('proto.jspb.test.ForeignEnum', null, global);
goog.exportSymbol('proto.jspb.test.ForeignMessage', null, global);
goog.exportSymbol('proto.jspb.test.MapEntryOptionalKeysBoolKey', null, global);
goog.exportSymbol('proto.jspb.test.MapEntryOptionalKeysInt32Key', null, global);
goog.exportSymbol('proto.jspb.test.MapEntryOptionalKeysInt64Key', null, global);
goog.exportSymbol('proto.jspb.test.MapEntryOptionalKeysStringKey', null, global);
goog.exportSymbol('proto.jspb.test.MapValueEnum', null, global);
goog.exportSymbol('proto.jspb.test.MapValueMessage', null, global);
goog.exportSymbol('proto.jspb.test.TestAllTypes', null, global);
goog.exportSymbol('proto.jspb.test.TestAllTypes.OptionalGroup', null, global);
goog.exportSymbol('proto.jspb.test.TestAllTypes.RepeatedGroup', null, global);
goog.exportSymbol('proto.jspb.test.TestExtendable', null, global);
goog.exportSymbol('proto.jspb.test.TestMapFields', null, global);
goog.exportSymbol('proto.jspb.test.TestMapFieldsOptionalKeys', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalBool', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalBytes', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalDouble', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalFixed32', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalFixed64', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalFloat', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalForeignEnum', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalInt32', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalInt64', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalSfixed32', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalSfixed64', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalSint32', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalSint64', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalString', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalUint32', null, global);
goog.exportSymbol('proto.jspb.test.extendOptionalUint64', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedBoolList', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedDoubleList', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedFixed32List', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedFixed64List', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedFloatList', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedForeignEnumList', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedInt32List', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedInt64List', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedSfixed32List', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedSfixed64List', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedSint32List', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedSint64List', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedUint32List', null, global);
goog.exportSymbol('proto.jspb.test.extendPackedRepeatedUint64List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedBoolList', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedBytesList', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedDoubleList', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedFixed32List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedFixed64List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedFloatList', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedForeignEnumList', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedInt32List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedInt64List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedSfixed32List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedSfixed64List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedSint32List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedSint64List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedStringList', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedUint32List', null, global);
goog.exportSymbol('proto.jspb.test.extendRepeatedUint64List', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.TestAllTypes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jspb.test.TestAllTypes.repeatedFields_, proto.jspb.test.TestAllTypes.oneofGroups_);
};
goog.inherits(proto.jspb.test.TestAllTypes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.TestAllTypes.displayName = 'proto.jspb.test.TestAllTypes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.jspb.test.TestAllTypes.repeatedFields_ = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,49,52,61,62,63,64,65,66,67,68,69,70,71,72,73];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.jspb.test.TestAllTypes.oneofGroups_ = [[111,112,113,114]];

/**
 * @enum {number}
 */
proto.jspb.test.TestAllTypes.OneofFieldCase = {
  ONEOF_FIELD_NOT_SET: 0,
  ONEOF_UINT32: 111,
  ONEOF_FOREIGN_MESSAGE: 112,
  ONEOF_STRING: 113,
  ONEOF_BYTES: 114
};

/**
 * @return {proto.jspb.test.TestAllTypes.OneofFieldCase}
 */
proto.jspb.test.TestAllTypes.prototype.getOneofFieldCase = function() {
  return /** @type {proto.jspb.test.TestAllTypes.OneofFieldCase} */(jspb.Message.computeOneofCase(this, proto.jspb.test.TestAllTypes.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.TestAllTypes.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.TestAllTypes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.TestAllTypes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestAllTypes.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionalInt32: jspb.Message.getField(msg, 1),
    optionalInt64: jspb.Message.getField(msg, 2),
    optionalUint32: jspb.Message.getField(msg, 3),
    optionalUint64: jspb.Message.getField(msg, 4),
    optionalSint32: jspb.Message.getField(msg, 5),
    optionalSint64: jspb.Message.getField(msg, 6),
    optionalFixed32: jspb.Message.getField(msg, 7),
    optionalFixed64: jspb.Message.getField(msg, 8),
    optionalSfixed32: jspb.Message.getField(msg, 9),
    optionalSfixed64: jspb.Message.getField(msg, 10),
    optionalFloat: jspb.Message.getOptionalFloatingPointField(msg, 11),
    optionalDouble: jspb.Message.getOptionalFloatingPointField(msg, 12),
    optionalBool: jspb.Message.getField(msg, 13),
    optionalString: jspb.Message.getField(msg, 14),
    optionalBytes: msg.getOptionalBytes_asB64(),
    optionalGroup: (f = msg.getOptionalGroup()) && proto.jspb.test.TestAllTypes.OptionalGroup.toObject(includeInstance, f),
    optionalForeignMessage: (f = msg.getOptionalForeignMessage()) && proto.jspb.test.ForeignMessage.toObject(includeInstance, f),
    optionalForeignEnum: jspb.Message.getField(msg, 22),
    repeatedInt32List: jspb.Message.getRepeatedField(msg, 31),
    repeatedInt64List: jspb.Message.getRepeatedField(msg, 32),
    repeatedUint32List: jspb.Message.getRepeatedField(msg, 33),
    repeatedUint64List: jspb.Message.getRepeatedField(msg, 34),
    repeatedSint32List: jspb.Message.getRepeatedField(msg, 35),
    repeatedSint64List: jspb.Message.getRepeatedField(msg, 36),
    repeatedFixed32List: jspb.Message.getRepeatedField(msg, 37),
    repeatedFixed64List: jspb.Message.getRepeatedField(msg, 38),
    repeatedSfixed32List: jspb.Message.getRepeatedField(msg, 39),
    repeatedSfixed64List: jspb.Message.getRepeatedField(msg, 40),
    repeatedFloatList: jspb.Message.getRepeatedFloatingPointField(msg, 41),
    repeatedDoubleList: jspb.Message.getRepeatedFloatingPointField(msg, 42),
    repeatedBoolList: jspb.Message.getRepeatedField(msg, 43),
    repeatedStringList: jspb.Message.getRepeatedField(msg, 44),
    repeatedBytesList: msg.getRepeatedBytesList_asB64(),
    repeatedGroupList: jspb.Message.toObjectList(msg.getRepeatedGroupList(),
    proto.jspb.test.TestAllTypes.RepeatedGroup.toObject, includeInstance),
    repeatedForeignMessageList: jspb.Message.toObjectList(msg.getRepeatedForeignMessageList(),
    proto.jspb.test.ForeignMessage.toObject, includeInstance),
    repeatedForeignEnumList: jspb.Message.getRepeatedField(msg, 52),
    packedRepeatedInt32List: jspb.Message.getRepeatedField(msg, 61),
    packedRepeatedInt64List: jspb.Message.getRepeatedField(msg, 62),
    packedRepeatedUint32List: jspb.Message.getRepeatedField(msg, 63),
    packedRepeatedUint64List: jspb.Message.getRepeatedField(msg, 64),
    packedRepeatedSint32List: jspb.Message.getRepeatedField(msg, 65),
    packedRepeatedSint64List: jspb.Message.getRepeatedField(msg, 66),
    packedRepeatedFixed32List: jspb.Message.getRepeatedField(msg, 67),
    packedRepeatedFixed64List: jspb.Message.getRepeatedField(msg, 68),
    packedRepeatedSfixed32List: jspb.Message.getRepeatedField(msg, 69),
    packedRepeatedSfixed64List: jspb.Message.getRepeatedField(msg, 70),
    packedRepeatedFloatList: jspb.Message.getRepeatedFloatingPointField(msg, 71),
    packedRepeatedDoubleList: jspb.Message.getRepeatedFloatingPointField(msg, 72),
    packedRepeatedBoolList: jspb.Message.getRepeatedField(msg, 73),
    oneofUint32: jspb.Message.getField(msg, 111),
    oneofForeignMessage: (f = msg.getOneofForeignMessage()) && proto.jspb.test.ForeignMessage.toObject(includeInstance, f),
    oneofString: jspb.Message.getField(msg, 113),
    oneofBytes: msg.getOneofBytes_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.TestAllTypes}
 */
proto.jspb.test.TestAllTypes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.TestAllTypes;
  return proto.jspb.test.TestAllTypes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.TestAllTypes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.TestAllTypes}
 */
proto.jspb.test.TestAllTypes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptionalInt32(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOptionalInt64(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOptionalUint32(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOptionalUint64(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setOptionalSint32(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setOptionalSint64(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setOptionalFixed32(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setOptionalFixed64(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setOptionalSfixed32(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setOptionalSfixed64(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOptionalFloat(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOptionalDouble(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOptionalBool(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionalString(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOptionalBytes(value);
      break;
    case 16:
      var value = new proto.jspb.test.TestAllTypes.OptionalGroup;
      reader.readGroup(16, value,proto.jspb.test.TestAllTypes.OptionalGroup.deserializeBinaryFromReader);
      msg.setOptionalGroup(value);
      break;
    case 19:
      var value = new proto.jspb.test.ForeignMessage;
      reader.readMessage(value,proto.jspb.test.ForeignMessage.deserializeBinaryFromReader);
      msg.setOptionalForeignMessage(value);
      break;
    case 22:
      var value = /** @type {!proto.jspb.test.ForeignEnum} */ (reader.readEnum());
      msg.setOptionalForeignEnum(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt32());
      msg.addRepeatedInt32(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addRepeatedInt64(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addRepeatedUint32(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readUint64());
      msg.addRepeatedUint64(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readSint32());
      msg.addRepeatedSint32(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readSint64());
      msg.addRepeatedSint64(value);
      break;
    case 37:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.addRepeatedFixed32(value);
      break;
    case 38:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.addRepeatedFixed64(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.addRepeatedSfixed32(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.addRepeatedSfixed64(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readFloat());
      msg.addRepeatedFloat(value);
      break;
    case 42:
      var value = /** @type {number} */ (reader.readDouble());
      msg.addRepeatedDouble(value);
      break;
    case 43:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.addRepeatedBool(value);
      break;
    case 44:
      var value = /** @type {string} */ (reader.readString());
      msg.addRepeatedString(value);
      break;
    case 45:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addRepeatedBytes(value);
      break;
    case 46:
      var value = new proto.jspb.test.TestAllTypes.RepeatedGroup;
      reader.readGroup(46, value,proto.jspb.test.TestAllTypes.RepeatedGroup.deserializeBinaryFromReader);
      msg.addRepeatedGroup(value);
      break;
    case 49:
      var value = new proto.jspb.test.ForeignMessage;
      reader.readMessage(value,proto.jspb.test.ForeignMessage.deserializeBinaryFromReader);
      msg.addRepeatedForeignMessage(value);
      break;
    case 52:
      var value = /** @type {!proto.jspb.test.ForeignEnum} */ (reader.readEnum());
      msg.addRepeatedForeignEnum(value);
      break;
    case 61:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setPackedRepeatedInt32List(value);
      break;
    case 62:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setPackedRepeatedInt64List(value);
      break;
    case 63:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setPackedRepeatedUint32List(value);
      break;
    case 64:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setPackedRepeatedUint64List(value);
      break;
    case 65:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
      msg.setPackedRepeatedSint32List(value);
      break;
    case 66:
      var value = /** @type {!Array<number>} */ (reader.readPackedSint64());
      msg.setPackedRepeatedSint64List(value);
      break;
    case 67:
      var value = /** @type {!Array<number>} */ (reader.readPackedFixed32());
      msg.setPackedRepeatedFixed32List(value);
      break;
    case 68:
      var value = /** @type {!Array<number>} */ (reader.readPackedFixed64());
      msg.setPackedRepeatedFixed64List(value);
      break;
    case 69:
      var value = /** @type {!Array<number>} */ (reader.readPackedSfixed32());
      msg.setPackedRepeatedSfixed32List(value);
      break;
    case 70:
      var value = /** @type {!Array<number>} */ (reader.readPackedSfixed64());
      msg.setPackedRepeatedSfixed64List(value);
      break;
    case 71:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setPackedRepeatedFloatList(value);
      break;
    case 72:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setPackedRepeatedDoubleList(value);
      break;
    case 73:
      var value = /** @type {!Array<boolean>} */ (reader.readPackedBool());
      msg.setPackedRepeatedBoolList(value);
      break;
    case 111:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOneofUint32(value);
      break;
    case 112:
      var value = new proto.jspb.test.ForeignMessage;
      reader.readMessage(value,proto.jspb.test.ForeignMessage.deserializeBinaryFromReader);
      msg.setOneofForeignMessage(value);
      break;
    case 113:
      var value = /** @type {string} */ (reader.readString());
      msg.setOneofString(value);
      break;
    case 114:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOneofBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.TestAllTypes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.TestAllTypes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.TestAllTypes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestAllTypes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeSint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeSint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeFixed32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeFixed64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeSfixed32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeSfixed64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = message.getOptionalGroup();
  if (f != null) {
    writer.writeGroup(
      16,
      f,
      proto.jspb.test.TestAllTypes.OptionalGroup.serializeBinaryToWriter
    );
  }
  f = message.getOptionalForeignMessage();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.jspb.test.ForeignMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.jspb.test.ForeignEnum} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getRepeatedInt32List();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      31,
      f
    );
  }
  f = message.getRepeatedInt64List();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      32,
      f
    );
  }
  f = message.getRepeatedUint32List();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      33,
      f
    );
  }
  f = message.getRepeatedUint64List();
  if (f.length > 0) {
    writer.writeRepeatedUint64(
      34,
      f
    );
  }
  f = message.getRepeatedSint32List();
  if (f.length > 0) {
    writer.writeRepeatedSint32(
      35,
      f
    );
  }
  f = message.getRepeatedSint64List();
  if (f.length > 0) {
    writer.writeRepeatedSint64(
      36,
      f
    );
  }
  f = message.getRepeatedFixed32List();
  if (f.length > 0) {
    writer.writeRepeatedFixed32(
      37,
      f
    );
  }
  f = message.getRepeatedFixed64List();
  if (f.length > 0) {
    writer.writeRepeatedFixed64(
      38,
      f
    );
  }
  f = message.getRepeatedSfixed32List();
  if (f.length > 0) {
    writer.writeRepeatedSfixed32(
      39,
      f
    );
  }
  f = message.getRepeatedSfixed64List();
  if (f.length > 0) {
    writer.writeRepeatedSfixed64(
      40,
      f
    );
  }
  f = message.getRepeatedFloatList();
  if (f.length > 0) {
    writer.writeRepeatedFloat(
      41,
      f
    );
  }
  f = message.getRepeatedDoubleList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      42,
      f
    );
  }
  f = message.getRepeatedBoolList();
  if (f.length > 0) {
    writer.writeRepeatedBool(
      43,
      f
    );
  }
  f = message.getRepeatedStringList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      44,
      f
    );
  }
  f = message.getRepeatedBytesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      45,
      f
    );
  }
  f = message.getRepeatedGroupList();
  if (f.length > 0) {
    writer.writeRepeatedGroup(
      46,
      f,
      proto.jspb.test.TestAllTypes.RepeatedGroup.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedForeignMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      49,
      f,
      proto.jspb.test.ForeignMessage.serializeBinaryToWriter
    );
  }
  f = message.getRepeatedForeignEnumList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      52,
      f
    );
  }
  f = message.getPackedRepeatedInt32List();
  if (f.length > 0) {
    writer.writePackedInt32(
      61,
      f
    );
  }
  f = message.getPackedRepeatedInt64List();
  if (f.length > 0) {
    writer.writePackedInt64(
      62,
      f
    );
  }
  f = message.getPackedRepeatedUint32List();
  if (f.length > 0) {
    writer.writePackedUint32(
      63,
      f
    );
  }
  f = message.getPackedRepeatedUint64List();
  if (f.length > 0) {
    writer.writePackedUint64(
      64,
      f
    );
  }
  f = message.getPackedRepeatedSint32List();
  if (f.length > 0) {
    writer.writePackedSint32(
      65,
      f
    );
  }
  f = message.getPackedRepeatedSint64List();
  if (f.length > 0) {
    writer.writePackedSint64(
      66,
      f
    );
  }
  f = message.getPackedRepeatedFixed32List();
  if (f.length > 0) {
    writer.writePackedFixed32(
      67,
      f
    );
  }
  f = message.getPackedRepeatedFixed64List();
  if (f.length > 0) {
    writer.writePackedFixed64(
      68,
      f
    );
  }
  f = message.getPackedRepeatedSfixed32List();
  if (f.length > 0) {
    writer.writePackedSfixed32(
      69,
      f
    );
  }
  f = message.getPackedRepeatedSfixed64List();
  if (f.length > 0) {
    writer.writePackedSfixed64(
      70,
      f
    );
  }
  f = message.getPackedRepeatedFloatList();
  if (f.length > 0) {
    writer.writePackedFloat(
      71,
      f
    );
  }
  f = message.getPackedRepeatedDoubleList();
  if (f.length > 0) {
    writer.writePackedDouble(
      72,
      f
    );
  }
  f = message.getPackedRepeatedBoolList();
  if (f.length > 0) {
    writer.writePackedBool(
      73,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 111));
  if (f != null) {
    writer.writeUint32(
      111,
      f
    );
  }
  f = message.getOneofForeignMessage();
  if (f != null) {
    writer.writeMessage(
      112,
      f,
      proto.jspb.test.ForeignMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 113));
  if (f != null) {
    writer.writeString(
      113,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 114));
  if (f != null) {
    writer.writeBytes(
      114,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.TestAllTypes.OptionalGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.TestAllTypes.OptionalGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.TestAllTypes.OptionalGroup.displayName = 'proto.jspb.test.TestAllTypes.OptionalGroup';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.TestAllTypes.OptionalGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.TestAllTypes.OptionalGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.TestAllTypes.OptionalGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestAllTypes.OptionalGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.TestAllTypes.OptionalGroup}
 */
proto.jspb.test.TestAllTypes.OptionalGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.TestAllTypes.OptionalGroup;
  return proto.jspb.test.TestAllTypes.OptionalGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.TestAllTypes.OptionalGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.TestAllTypes.OptionalGroup}
 */
proto.jspb.test.TestAllTypes.OptionalGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setA(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.TestAllTypes.OptionalGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.TestAllTypes.OptionalGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.TestAllTypes.OptionalGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestAllTypes.OptionalGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      17,
      f
    );
  }
};


/**
 * optional int32 a = 17;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.OptionalGroup.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.OptionalGroup.prototype.setA = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.TestAllTypes.OptionalGroup.prototype.clearA = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.OptionalGroup.prototype.hasA = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.TestAllTypes.RepeatedGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.TestAllTypes.RepeatedGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.TestAllTypes.RepeatedGroup.displayName = 'proto.jspb.test.TestAllTypes.RepeatedGroup';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.TestAllTypes.RepeatedGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.TestAllTypes.RepeatedGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.TestAllTypes.RepeatedGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestAllTypes.RepeatedGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.TestAllTypes.RepeatedGroup}
 */
proto.jspb.test.TestAllTypes.RepeatedGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.TestAllTypes.RepeatedGroup;
  return proto.jspb.test.TestAllTypes.RepeatedGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.TestAllTypes.RepeatedGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.TestAllTypes.RepeatedGroup}
 */
proto.jspb.test.TestAllTypes.RepeatedGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 47:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setA(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.TestAllTypes.RepeatedGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.TestAllTypes.RepeatedGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.TestAllTypes.RepeatedGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestAllTypes.RepeatedGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      47,
      f
    );
  }
};


/**
 * optional int32 a = 47;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.RepeatedGroup.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.RepeatedGroup.prototype.setA = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.TestAllTypes.RepeatedGroup.prototype.clearA = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.RepeatedGroup.prototype.hasA = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 optional_int32 = 1;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalInt32 = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalInt32 = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalInt32 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 optional_int64 = 2;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalInt64 = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalInt64 = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalInt64 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 optional_uint32 = 3;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalUint32 = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalUint32 = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalUint32 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 optional_uint64 = 4;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalUint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalUint64 = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalUint64 = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalUint64 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional sint32 optional_sint32 = 5;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalSint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalSint32 = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalSint32 = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalSint32 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional sint64 optional_sint64 = 6;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalSint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalSint64 = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalSint64 = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalSint64 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional fixed32 optional_fixed32 = 7;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalFixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalFixed32 = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalFixed32 = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalFixed32 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional fixed64 optional_fixed64 = 8;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalFixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalFixed64 = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalFixed64 = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalFixed64 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional sfixed32 optional_sfixed32 = 9;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalSfixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalSfixed32 = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalSfixed32 = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalSfixed32 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional sfixed64 optional_sfixed64 = 10;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalSfixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalSfixed64 = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalSfixed64 = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalSfixed64 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional float optional_float = 11;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalFloat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalFloat = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalFloat = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalFloat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double optional_double = 12;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalDouble = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 12, 0.0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalDouble = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalDouble = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalDouble = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool optional_bool = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalBool = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalBool = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalBool = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalBool = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string optional_string = 14;
 * @return {string}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalString = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalString = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalString = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bytes optional_bytes = 15;
 * @return {!(string|Uint8Array)}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes optional_bytes = 15;
 * This is a type-conversion wrapper around `getOptionalBytes()`
 * @return {string}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOptionalBytes()));
};


/**
 * optional bytes optional_bytes = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOptionalBytes()`
 * @return {!Uint8Array}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOptionalBytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalBytes = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalBytes = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalBytes = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional group OptionalGroup = 16;
 * @return {?proto.jspb.test.TestAllTypes.OptionalGroup}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalGroup = function() {
  return /** @type{?proto.jspb.test.TestAllTypes.OptionalGroup} */ (
    jspb.Message.getWrapperField(this, proto.jspb.test.TestAllTypes.OptionalGroup, 16));
};


/** @param {?proto.jspb.test.TestAllTypes.OptionalGroup|undefined} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalGroup = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalGroup = function() {
  this.setOptionalGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalGroup = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ForeignMessage optional_foreign_message = 19;
 * @return {?proto.jspb.test.ForeignMessage}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalForeignMessage = function() {
  return /** @type{?proto.jspb.test.ForeignMessage} */ (
    jspb.Message.getWrapperField(this, proto.jspb.test.ForeignMessage, 19));
};


/** @param {?proto.jspb.test.ForeignMessage|undefined} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalForeignMessage = function(value) {
  jspb.Message.setWrapperField(this, 19, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalForeignMessage = function() {
  this.setOptionalForeignMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalForeignMessage = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ForeignEnum optional_foreign_enum = 22;
 * @return {!proto.jspb.test.ForeignEnum}
 */
proto.jspb.test.TestAllTypes.prototype.getOptionalForeignEnum = function() {
  return /** @type {!proto.jspb.test.ForeignEnum} */ (jspb.Message.getFieldWithDefault(this, 22, 4));
};


/** @param {!proto.jspb.test.ForeignEnum} value */
proto.jspb.test.TestAllTypes.prototype.setOptionalForeignEnum = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.jspb.test.TestAllTypes.prototype.clearOptionalForeignEnum = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOptionalForeignEnum = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * repeated int32 repeated_int32 = 31;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedInt32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 31));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedInt32List = function(value) {
  jspb.Message.setField(this, 31, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedInt32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 31, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedInt32List = function() {
  this.setRepeatedInt32List([]);
};


/**
 * repeated int64 repeated_int64 = 32;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedInt64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 32));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedInt64List = function(value) {
  jspb.Message.setField(this, 32, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedInt64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 32, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedInt64List = function() {
  this.setRepeatedInt64List([]);
};


/**
 * repeated uint32 repeated_uint32 = 33;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedUint32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 33));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedUint32List = function(value) {
  jspb.Message.setField(this, 33, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedUint32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 33, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedUint32List = function() {
  this.setRepeatedUint32List([]);
};


/**
 * repeated uint64 repeated_uint64 = 34;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedUint64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 34));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedUint64List = function(value) {
  jspb.Message.setField(this, 34, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedUint64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 34, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedUint64List = function() {
  this.setRepeatedUint64List([]);
};


/**
 * repeated sint32 repeated_sint32 = 35;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedSint32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 35));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedSint32List = function(value) {
  jspb.Message.setField(this, 35, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedSint32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 35, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedSint32List = function() {
  this.setRepeatedSint32List([]);
};


/**
 * repeated sint64 repeated_sint64 = 36;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedSint64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 36));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedSint64List = function(value) {
  jspb.Message.setField(this, 36, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedSint64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 36, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedSint64List = function() {
  this.setRepeatedSint64List([]);
};


/**
 * repeated fixed32 repeated_fixed32 = 37;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedFixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 37));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedFixed32List = function(value) {
  jspb.Message.setField(this, 37, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedFixed32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 37, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedFixed32List = function() {
  this.setRepeatedFixed32List([]);
};


/**
 * repeated fixed64 repeated_fixed64 = 38;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedFixed64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 38));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedFixed64List = function(value) {
  jspb.Message.setField(this, 38, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedFixed64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 38, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedFixed64List = function() {
  this.setRepeatedFixed64List([]);
};


/**
 * repeated sfixed32 repeated_sfixed32 = 39;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedSfixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 39));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedSfixed32List = function(value) {
  jspb.Message.setField(this, 39, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedSfixed32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 39, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedSfixed32List = function() {
  this.setRepeatedSfixed32List([]);
};


/**
 * repeated sfixed64 repeated_sfixed64 = 40;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedSfixed64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 40));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedSfixed64List = function(value) {
  jspb.Message.setField(this, 40, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedSfixed64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 40, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedSfixed64List = function() {
  this.setRepeatedSfixed64List([]);
};


/**
 * repeated float repeated_float = 41;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedFloatList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 41));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedFloatList = function(value) {
  jspb.Message.setField(this, 41, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedFloat = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 41, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedFloatList = function() {
  this.setRepeatedFloatList([]);
};


/**
 * repeated double repeated_double = 42;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedDoubleList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 42));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedDoubleList = function(value) {
  jspb.Message.setField(this, 42, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedDouble = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 42, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedDoubleList = function() {
  this.setRepeatedDoubleList([]);
};


/**
 * repeated bool repeated_bool = 43;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {!Array<boolean>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedBoolList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedField(this, 43));
};


/** @param {!Array<boolean>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedBoolList = function(value) {
  jspb.Message.setField(this, 43, value || []);
};


/**
 * @param {!boolean} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedBool = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 43, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedBoolList = function() {
  this.setRepeatedBoolList([]);
};


/**
 * repeated string repeated_string = 44;
 * @return {!Array<string>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedStringList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 44));
};


/** @param {!Array<string>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedStringList = function(value) {
  jspb.Message.setField(this, 44, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedString = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 44, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedStringList = function() {
  this.setRepeatedStringList([]);
};


/**
 * repeated bytes repeated_bytes = 45;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedBytesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 45));
};


/**
 * repeated bytes repeated_bytes = 45;
 * This is a type-conversion wrapper around `getRepeatedBytesList()`
 * @return {!Array<string>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedBytesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getRepeatedBytesList()));
};


/**
 * repeated bytes repeated_bytes = 45;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRepeatedBytesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedBytesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getRepeatedBytesList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedBytesList = function(value) {
  jspb.Message.setField(this, 45, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedBytes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 45, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedBytesList = function() {
  this.setRepeatedBytesList([]);
};


/**
 * repeated group RepeatedGroup = 46;
 * @return {!Array<!proto.jspb.test.TestAllTypes.RepeatedGroup>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedGroupList = function() {
  return /** @type{!Array<!proto.jspb.test.TestAllTypes.RepeatedGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.jspb.test.TestAllTypes.RepeatedGroup, 46));
};


/** @param {!Array<!proto.jspb.test.TestAllTypes.RepeatedGroup>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedGroupList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 46, value);
};


/**
 * @param {!proto.jspb.test.TestAllTypes.RepeatedGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jspb.test.TestAllTypes.RepeatedGroup}
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 46, opt_value, proto.jspb.test.TestAllTypes.RepeatedGroup, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedGroupList = function() {
  this.setRepeatedGroupList([]);
};


/**
 * repeated ForeignMessage repeated_foreign_message = 49;
 * @return {!Array<!proto.jspb.test.ForeignMessage>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedForeignMessageList = function() {
  return /** @type{!Array<!proto.jspb.test.ForeignMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.jspb.test.ForeignMessage, 49));
};


/** @param {!Array<!proto.jspb.test.ForeignMessage>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedForeignMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 49, value);
};


/**
 * @param {!proto.jspb.test.ForeignMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jspb.test.ForeignMessage}
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedForeignMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 49, opt_value, proto.jspb.test.ForeignMessage, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedForeignMessageList = function() {
  this.setRepeatedForeignMessageList([]);
};


/**
 * repeated ForeignEnum repeated_foreign_enum = 52;
 * @return {!Array<!proto.jspb.test.ForeignEnum>}
 */
proto.jspb.test.TestAllTypes.prototype.getRepeatedForeignEnumList = function() {
  return /** @type {!Array<!proto.jspb.test.ForeignEnum>} */ (jspb.Message.getRepeatedField(this, 52));
};


/** @param {!Array<!proto.jspb.test.ForeignEnum>} value */
proto.jspb.test.TestAllTypes.prototype.setRepeatedForeignEnumList = function(value) {
  jspb.Message.setField(this, 52, value || []);
};


/**
 * @param {!proto.jspb.test.ForeignEnum} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addRepeatedForeignEnum = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 52, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearRepeatedForeignEnumList = function() {
  this.setRepeatedForeignEnumList([]);
};


/**
 * repeated int32 packed_repeated_int32 = 61;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedInt32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 61));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedInt32List = function(value) {
  jspb.Message.setField(this, 61, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedInt32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 61, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedInt32List = function() {
  this.setPackedRepeatedInt32List([]);
};


/**
 * repeated int64 packed_repeated_int64 = 62;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedInt64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 62));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedInt64List = function(value) {
  jspb.Message.setField(this, 62, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedInt64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 62, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedInt64List = function() {
  this.setPackedRepeatedInt64List([]);
};


/**
 * repeated uint32 packed_repeated_uint32 = 63;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedUint32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 63));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedUint32List = function(value) {
  jspb.Message.setField(this, 63, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedUint32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 63, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedUint32List = function() {
  this.setPackedRepeatedUint32List([]);
};


/**
 * repeated uint64 packed_repeated_uint64 = 64;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedUint64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 64));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedUint64List = function(value) {
  jspb.Message.setField(this, 64, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedUint64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 64, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedUint64List = function() {
  this.setPackedRepeatedUint64List([]);
};


/**
 * repeated sint32 packed_repeated_sint32 = 65;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedSint32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 65));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedSint32List = function(value) {
  jspb.Message.setField(this, 65, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedSint32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 65, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedSint32List = function() {
  this.setPackedRepeatedSint32List([]);
};


/**
 * repeated sint64 packed_repeated_sint64 = 66;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedSint64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 66));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedSint64List = function(value) {
  jspb.Message.setField(this, 66, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedSint64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 66, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedSint64List = function() {
  this.setPackedRepeatedSint64List([]);
};


/**
 * repeated fixed32 packed_repeated_fixed32 = 67;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedFixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 67));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedFixed32List = function(value) {
  jspb.Message.setField(this, 67, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedFixed32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 67, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedFixed32List = function() {
  this.setPackedRepeatedFixed32List([]);
};


/**
 * repeated fixed64 packed_repeated_fixed64 = 68;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedFixed64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 68));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedFixed64List = function(value) {
  jspb.Message.setField(this, 68, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedFixed64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 68, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedFixed64List = function() {
  this.setPackedRepeatedFixed64List([]);
};


/**
 * repeated sfixed32 packed_repeated_sfixed32 = 69;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedSfixed32List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 69));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedSfixed32List = function(value) {
  jspb.Message.setField(this, 69, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedSfixed32 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 69, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedSfixed32List = function() {
  this.setPackedRepeatedSfixed32List([]);
};


/**
 * repeated sfixed64 packed_repeated_sfixed64 = 70;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedSfixed64List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 70));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedSfixed64List = function(value) {
  jspb.Message.setField(this, 70, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedSfixed64 = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 70, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedSfixed64List = function() {
  this.setPackedRepeatedSfixed64List([]);
};


/**
 * repeated float packed_repeated_float = 71;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedFloatList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 71));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedFloatList = function(value) {
  jspb.Message.setField(this, 71, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedFloat = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 71, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedFloatList = function() {
  this.setPackedRepeatedFloatList([]);
};


/**
 * repeated double packed_repeated_double = 72;
 * @return {!Array<number>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedDoubleList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 72));
};


/** @param {!Array<number>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedDoubleList = function(value) {
  jspb.Message.setField(this, 72, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedDouble = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 72, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedDoubleList = function() {
  this.setPackedRepeatedDoubleList([]);
};


/**
 * repeated bool packed_repeated_bool = 73;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {!Array<boolean>}
 */
proto.jspb.test.TestAllTypes.prototype.getPackedRepeatedBoolList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedField(this, 73));
};


/** @param {!Array<boolean>} value */
proto.jspb.test.TestAllTypes.prototype.setPackedRepeatedBoolList = function(value) {
  jspb.Message.setField(this, 73, value || []);
};


/**
 * @param {!boolean} value
 * @param {number=} opt_index
 */
proto.jspb.test.TestAllTypes.prototype.addPackedRepeatedBool = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 73, value, opt_index);
};


proto.jspb.test.TestAllTypes.prototype.clearPackedRepeatedBoolList = function() {
  this.setPackedRepeatedBoolList([]);
};


/**
 * optional uint32 oneof_uint32 = 111;
 * @return {number}
 */
proto.jspb.test.TestAllTypes.prototype.getOneofUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 111, 0));
};


/** @param {number} value */
proto.jspb.test.TestAllTypes.prototype.setOneofUint32 = function(value) {
  jspb.Message.setOneofField(this, 111, proto.jspb.test.TestAllTypes.oneofGroups_[0], value);
};


proto.jspb.test.TestAllTypes.prototype.clearOneofUint32 = function() {
  jspb.Message.setOneofField(this, 111, proto.jspb.test.TestAllTypes.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOneofUint32 = function() {
  return jspb.Message.getField(this, 111) != null;
};


/**
 * optional ForeignMessage oneof_foreign_message = 112;
 * @return {?proto.jspb.test.ForeignMessage}
 */
proto.jspb.test.TestAllTypes.prototype.getOneofForeignMessage = function() {
  return /** @type{?proto.jspb.test.ForeignMessage} */ (
    jspb.Message.getWrapperField(this, proto.jspb.test.ForeignMessage, 112));
};


/** @param {?proto.jspb.test.ForeignMessage|undefined} value */
proto.jspb.test.TestAllTypes.prototype.setOneofForeignMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 112, proto.jspb.test.TestAllTypes.oneofGroups_[0], value);
};


proto.jspb.test.TestAllTypes.prototype.clearOneofForeignMessage = function() {
  this.setOneofForeignMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOneofForeignMessage = function() {
  return jspb.Message.getField(this, 112) != null;
};


/**
 * optional string oneof_string = 113;
 * @return {string}
 */
proto.jspb.test.TestAllTypes.prototype.getOneofString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 113, ""));
};


/** @param {string} value */
proto.jspb.test.TestAllTypes.prototype.setOneofString = function(value) {
  jspb.Message.setOneofField(this, 113, proto.jspb.test.TestAllTypes.oneofGroups_[0], value);
};


proto.jspb.test.TestAllTypes.prototype.clearOneofString = function() {
  jspb.Message.setOneofField(this, 113, proto.jspb.test.TestAllTypes.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOneofString = function() {
  return jspb.Message.getField(this, 113) != null;
};


/**
 * optional bytes oneof_bytes = 114;
 * @return {!(string|Uint8Array)}
 */
proto.jspb.test.TestAllTypes.prototype.getOneofBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 114, ""));
};


/**
 * optional bytes oneof_bytes = 114;
 * This is a type-conversion wrapper around `getOneofBytes()`
 * @return {string}
 */
proto.jspb.test.TestAllTypes.prototype.getOneofBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOneofBytes()));
};


/**
 * optional bytes oneof_bytes = 114;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOneofBytes()`
 * @return {!Uint8Array}
 */
proto.jspb.test.TestAllTypes.prototype.getOneofBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOneofBytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.jspb.test.TestAllTypes.prototype.setOneofBytes = function(value) {
  jspb.Message.setOneofField(this, 114, proto.jspb.test.TestAllTypes.oneofGroups_[0], value);
};


proto.jspb.test.TestAllTypes.prototype.clearOneofBytes = function() {
  jspb.Message.setOneofField(this, 114, proto.jspb.test.TestAllTypes.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestAllTypes.prototype.hasOneofBytes = function() {
  return jspb.Message.getField(this, 114) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.ForeignMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.ForeignMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.ForeignMessage.displayName = 'proto.jspb.test.ForeignMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.ForeignMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.ForeignMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.ForeignMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.ForeignMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    c: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.ForeignMessage}
 */
proto.jspb.test.ForeignMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.ForeignMessage;
  return proto.jspb.test.ForeignMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.ForeignMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.ForeignMessage}
 */
proto.jspb.test.ForeignMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setC(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.ForeignMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.ForeignMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.ForeignMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.ForeignMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 c = 1;
 * @return {number}
 */
proto.jspb.test.ForeignMessage.prototype.getC = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.jspb.test.ForeignMessage.prototype.setC = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.ForeignMessage.prototype.clearC = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.ForeignMessage.prototype.hasC = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.TestExtendable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1, null, null);
};
goog.inherits(proto.jspb.test.TestExtendable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.TestExtendable.displayName = 'proto.jspb.test.TestExtendable';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.TestExtendable.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.TestExtendable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.TestExtendable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestExtendable.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.jspb.test.TestExtendable.extensions, proto.jspb.test.TestExtendable.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.TestExtendable}
 */
proto.jspb.test.TestExtendable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.TestExtendable;
  return proto.jspb.test.TestExtendable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.TestExtendable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.TestExtendable}
 */
proto.jspb.test.TestExtendable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.jspb.test.TestExtendable.extensionsBinary,
        proto.jspb.test.TestExtendable.prototype.getExtension,
        proto.jspb.test.TestExtendable.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.TestExtendable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.TestExtendable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.TestExtendable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestExtendable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.jspb.test.TestExtendable.extensionsBinary, proto.jspb.test.TestExtendable.prototype.getExtension);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.jspb.test.TestExtendable.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.jspb.test.TestExtendable.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.ExtendsWithMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.ExtendsWithMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.ExtendsWithMessage.displayName = 'proto.jspb.test.ExtendsWithMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.ExtendsWithMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.ExtendsWithMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.ExtendsWithMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.ExtendsWithMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    foo: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.ExtendsWithMessage}
 */
proto.jspb.test.ExtendsWithMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.ExtendsWithMessage;
  return proto.jspb.test.ExtendsWithMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.ExtendsWithMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.ExtendsWithMessage}
 */
proto.jspb.test.ExtendsWithMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFoo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.ExtendsWithMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.ExtendsWithMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.ExtendsWithMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.ExtendsWithMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalExtension`.
 * @type {!jspb.ExtensionFieldInfo<!proto.jspb.test.ExtendsWithMessage>}
 */
proto.jspb.test.ExtendsWithMessage.optionalExtension = new jspb.ExtensionFieldInfo(
    19,
    {optionalExtension: 0},
    proto.jspb.test.ExtendsWithMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.jspb.test.ExtendsWithMessage.toObject),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[19] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.ExtendsWithMessage.optionalExtension,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.jspb.test.ExtendsWithMessage.serializeBinaryToWriter,
    proto.jspb.test.ExtendsWithMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[19] = proto.jspb.test.ExtendsWithMessage.optionalExtension;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedExtensionList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.jspb.test.ExtendsWithMessage>>}
 */
proto.jspb.test.ExtendsWithMessage.repeatedExtensionList = new jspb.ExtensionFieldInfo(
    49,
    {repeatedExtensionList: 0},
    proto.jspb.test.ExtendsWithMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.jspb.test.ExtendsWithMessage.toObject),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[49] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.ExtendsWithMessage.repeatedExtensionList,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
    proto.jspb.test.ExtendsWithMessage.serializeBinaryToWriter,
    proto.jspb.test.ExtendsWithMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[49] = proto.jspb.test.ExtendsWithMessage.repeatedExtensionList;

/**
 * optional int32 foo = 1;
 * @return {number}
 */
proto.jspb.test.ExtendsWithMessage.prototype.getFoo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.jspb.test.ExtendsWithMessage.prototype.setFoo = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.ExtendsWithMessage.prototype.clearFoo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.ExtendsWithMessage.prototype.hasFoo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `optionalExtension`.
 * @type {!jspb.ExtensionFieldInfo<!proto.jspb.test.ExtendsWithMessage>}
 */
proto.jspb.test.ExtendsWithMessage.optionalExtension = new jspb.ExtensionFieldInfo(
    19,
    {optionalExtension: 0},
    proto.jspb.test.ExtendsWithMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.jspb.test.ExtendsWithMessage.toObject),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[19] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.ExtendsWithMessage.optionalExtension,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.jspb.test.ExtendsWithMessage.serializeBinaryToWriter,
    proto.jspb.test.ExtendsWithMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[19] = proto.jspb.test.ExtendsWithMessage.optionalExtension;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `repeatedExtensionList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.jspb.test.ExtendsWithMessage>>}
 */
proto.jspb.test.ExtendsWithMessage.repeatedExtensionList = new jspb.ExtensionFieldInfo(
    49,
    {repeatedExtensionList: 0},
    proto.jspb.test.ExtendsWithMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.jspb.test.ExtendsWithMessage.toObject),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[49] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.ExtendsWithMessage.repeatedExtensionList,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
    proto.jspb.test.ExtendsWithMessage.serializeBinaryToWriter,
    proto.jspb.test.ExtendsWithMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[49] = proto.jspb.test.ExtendsWithMessage.repeatedExtensionList;


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.TestMapFields = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.TestMapFields, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.TestMapFields.displayName = 'proto.jspb.test.TestMapFields';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.TestMapFields.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.TestMapFields.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.TestMapFields} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestMapFields.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapStringStringMap: (f = msg.getMapStringStringMap()) ? f.toObject(includeInstance, undefined) : [],
    mapStringInt32Map: (f = msg.getMapStringInt32Map()) ? f.toObject(includeInstance, undefined) : [],
    mapStringInt64Map: (f = msg.getMapStringInt64Map()) ? f.toObject(includeInstance, undefined) : [],
    mapStringBoolMap: (f = msg.getMapStringBoolMap()) ? f.toObject(includeInstance, undefined) : [],
    mapStringDoubleMap: (f = msg.getMapStringDoubleMap()) ? f.toObject(includeInstance, undefined) : [],
    mapStringEnumMap: (f = msg.getMapStringEnumMap()) ? f.toObject(includeInstance, undefined) : [],
    mapStringMsgMap: (f = msg.getMapStringMsgMap()) ? f.toObject(includeInstance, proto.jspb.test.MapValueMessage.toObject) : [],
    mapInt32StringMap: (f = msg.getMapInt32StringMap()) ? f.toObject(includeInstance, undefined) : [],
    mapInt64StringMap: (f = msg.getMapInt64StringMap()) ? f.toObject(includeInstance, undefined) : [],
    mapBoolStringMap: (f = msg.getMapBoolStringMap()) ? f.toObject(includeInstance, undefined) : [],
    testMapFields: (f = msg.getTestMapFields()) && proto.jspb.test.TestMapFields.toObject(includeInstance, f),
    mapStringTestmapfieldsMap: (f = msg.getMapStringTestmapfieldsMap()) ? f.toObject(includeInstance, proto.jspb.test.TestMapFields.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.TestMapFields}
 */
proto.jspb.test.TestMapFields.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.TestMapFields;
  return proto.jspb.test.TestMapFields.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.TestMapFields} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.TestMapFields}
 */
proto.jspb.test.TestMapFields.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMapStringStringMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 2:
      var value = msg.getMapStringInt32Map();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "");
         });
      break;
    case 3:
      var value = msg.getMapStringInt64Map();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "");
         });
      break;
    case 4:
      var value = msg.getMapStringBoolMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "");
         });
      break;
    case 5:
      var value = msg.getMapStringDoubleMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readDouble, null, "");
         });
      break;
    case 6:
      var value = msg.getMapStringEnumMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readEnum, null, "");
         });
      break;
    case 7:
      var value = msg.getMapStringMsgMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.jspb.test.MapValueMessage.deserializeBinaryFromReader, "");
         });
      break;
    case 8:
      var value = msg.getMapInt32StringMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readString, null, 0);
         });
      break;
    case 9:
      var value = msg.getMapInt64StringMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt64, jspb.BinaryReader.prototype.readString, null, 0);
         });
      break;
    case 10:
      var value = msg.getMapBoolStringMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readBool, jspb.BinaryReader.prototype.readString, null, false);
         });
      break;
    case 11:
      var value = new proto.jspb.test.TestMapFields;
      reader.readMessage(value,proto.jspb.test.TestMapFields.deserializeBinaryFromReader);
      msg.setTestMapFields(value);
      break;
    case 12:
      var value = msg.getMapStringTestmapfieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.jspb.test.TestMapFields.deserializeBinaryFromReader, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.TestMapFields.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.TestMapFields.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.TestMapFields} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestMapFields.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapStringStringMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMapStringInt32Map(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getMapStringInt64Map(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getMapStringBoolMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
  f = message.getMapStringDoubleMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getMapStringEnumMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeEnum);
  }
  f = message.getMapStringMsgMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.jspb.test.MapValueMessage.serializeBinaryToWriter);
  }
  f = message.getMapInt32StringMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMapInt64StringMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeInt64, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMapBoolStringMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeBool, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTestMapFields();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.jspb.test.TestMapFields.serializeBinaryToWriter
    );
  }
  f = message.getMapStringTestmapfieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.jspb.test.TestMapFields.serializeBinaryToWriter);
  }
};


/**
 * map<string, string> map_string_string = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.jspb.test.TestMapFields.prototype.getMapStringStringMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


proto.jspb.test.TestMapFields.prototype.clearMapStringStringMap = function() {
  this.getMapStringStringMap().clear();
};


/**
 * map<string, int32> map_string_int32 = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.jspb.test.TestMapFields.prototype.getMapStringInt32Map = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


proto.jspb.test.TestMapFields.prototype.clearMapStringInt32Map = function() {
  this.getMapStringInt32Map().clear();
};


/**
 * map<string, int64> map_string_int64 = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.jspb.test.TestMapFields.prototype.getMapStringInt64Map = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


proto.jspb.test.TestMapFields.prototype.clearMapStringInt64Map = function() {
  this.getMapStringInt64Map().clear();
};


/**
 * map<string, bool> map_string_bool = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.jspb.test.TestMapFields.prototype.getMapStringBoolMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


proto.jspb.test.TestMapFields.prototype.clearMapStringBoolMap = function() {
  this.getMapStringBoolMap().clear();
};


/**
 * map<string, double> map_string_double = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.jspb.test.TestMapFields.prototype.getMapStringDoubleMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


proto.jspb.test.TestMapFields.prototype.clearMapStringDoubleMap = function() {
  this.getMapStringDoubleMap().clear();
};


/**
 * map<string, MapValueEnum> map_string_enum = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.jspb.test.MapValueEnum>}
 */
proto.jspb.test.TestMapFields.prototype.getMapStringEnumMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.jspb.test.MapValueEnum>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.jspb.test.TestMapFields.prototype.clearMapStringEnumMap = function() {
  this.getMapStringEnumMap().clear();
};


/**
 * map<string, MapValueMessage> map_string_msg = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.jspb.test.MapValueMessage>}
 */
proto.jspb.test.TestMapFields.prototype.getMapStringMsgMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.jspb.test.MapValueMessage>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.jspb.test.MapValueMessage));
};


proto.jspb.test.TestMapFields.prototype.clearMapStringMsgMap = function() {
  this.getMapStringMsgMap().clear();
};


/**
 * map<int32, string> map_int32_string = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,string>}
 */
proto.jspb.test.TestMapFields.prototype.getMapInt32StringMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,string>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


proto.jspb.test.TestMapFields.prototype.clearMapInt32StringMap = function() {
  this.getMapInt32StringMap().clear();
};


/**
 * map<int64, string> map_int64_string = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,string>}
 */
proto.jspb.test.TestMapFields.prototype.getMapInt64StringMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,string>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


proto.jspb.test.TestMapFields.prototype.clearMapInt64StringMap = function() {
  this.getMapInt64StringMap().clear();
};


/**
 * map<bool, string> map_bool_string = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<boolean,string>}
 */
proto.jspb.test.TestMapFields.prototype.getMapBoolStringMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<boolean,string>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


proto.jspb.test.TestMapFields.prototype.clearMapBoolStringMap = function() {
  this.getMapBoolStringMap().clear();
};


/**
 * optional TestMapFields test_map_fields = 11;
 * @return {?proto.jspb.test.TestMapFields}
 */
proto.jspb.test.TestMapFields.prototype.getTestMapFields = function() {
  return /** @type{?proto.jspb.test.TestMapFields} */ (
    jspb.Message.getWrapperField(this, proto.jspb.test.TestMapFields, 11));
};


/** @param {?proto.jspb.test.TestMapFields|undefined} value */
proto.jspb.test.TestMapFields.prototype.setTestMapFields = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.jspb.test.TestMapFields.prototype.clearTestMapFields = function() {
  this.setTestMapFields(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestMapFields.prototype.hasTestMapFields = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * map<string, TestMapFields> map_string_testmapfields = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.jspb.test.TestMapFields>}
 */
proto.jspb.test.TestMapFields.prototype.getMapStringTestmapfieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.jspb.test.TestMapFields>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      proto.jspb.test.TestMapFields));
};


proto.jspb.test.TestMapFields.prototype.clearMapStringTestmapfieldsMap = function() {
  this.getMapStringTestmapfieldsMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.MapEntryOptionalKeysStringKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.MapEntryOptionalKeysStringKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.MapEntryOptionalKeysStringKey.displayName = 'proto.jspb.test.MapEntryOptionalKeysStringKey';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.MapEntryOptionalKeysStringKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.MapEntryOptionalKeysStringKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    value: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.MapEntryOptionalKeysStringKey}
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.MapEntryOptionalKeysStringKey;
  return proto.jspb.test.MapEntryOptionalKeysStringKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.MapEntryOptionalKeysStringKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.MapEntryOptionalKeysStringKey}
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.MapEntryOptionalKeysStringKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.MapEntryOptionalKeysStringKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.MapEntryOptionalKeysStringKey.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.MapEntryOptionalKeysInt32Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.MapEntryOptionalKeysInt32Key.displayName = 'proto.jspb.test.MapEntryOptionalKeysInt32Key';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.MapEntryOptionalKeysInt32Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.MapEntryOptionalKeysInt32Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    value: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.MapEntryOptionalKeysInt32Key}
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.MapEntryOptionalKeysInt32Key;
  return proto.jspb.test.MapEntryOptionalKeysInt32Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.MapEntryOptionalKeysInt32Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.MapEntryOptionalKeysInt32Key}
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.MapEntryOptionalKeysInt32Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.MapEntryOptionalKeysInt32Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 key = 1;
 * @return {number}
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.MapEntryOptionalKeysInt32Key.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.MapEntryOptionalKeysInt64Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.MapEntryOptionalKeysInt64Key.displayName = 'proto.jspb.test.MapEntryOptionalKeysInt64Key';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.MapEntryOptionalKeysInt64Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.MapEntryOptionalKeysInt64Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    value: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.MapEntryOptionalKeysInt64Key}
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.MapEntryOptionalKeysInt64Key;
  return proto.jspb.test.MapEntryOptionalKeysInt64Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.MapEntryOptionalKeysInt64Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.MapEntryOptionalKeysInt64Key}
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.MapEntryOptionalKeysInt64Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.MapEntryOptionalKeysInt64Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 key = 1;
 * @return {number}
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.MapEntryOptionalKeysInt64Key.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.MapEntryOptionalKeysBoolKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.MapEntryOptionalKeysBoolKey.displayName = 'proto.jspb.test.MapEntryOptionalKeysBoolKey';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.MapEntryOptionalKeysBoolKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.MapEntryOptionalKeysBoolKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    value: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.MapEntryOptionalKeysBoolKey}
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.MapEntryOptionalKeysBoolKey;
  return proto.jspb.test.MapEntryOptionalKeysBoolKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.MapEntryOptionalKeysBoolKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.MapEntryOptionalKeysBoolKey}
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.MapEntryOptionalKeysBoolKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.MapEntryOptionalKeysBoolKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool key = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.getKey = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.MapEntryOptionalKeysBoolKey.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.TestMapFieldsOptionalKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.TestMapFieldsOptionalKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.TestMapFieldsOptionalKeys.displayName = 'proto.jspb.test.TestMapFieldsOptionalKeys';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.TestMapFieldsOptionalKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.TestMapFieldsOptionalKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestMapFieldsOptionalKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapStringString: (f = msg.getMapStringString()) && proto.jspb.test.MapEntryOptionalKeysStringKey.toObject(includeInstance, f),
    mapInt32String: (f = msg.getMapInt32String()) && proto.jspb.test.MapEntryOptionalKeysInt32Key.toObject(includeInstance, f),
    mapInt64String: (f = msg.getMapInt64String()) && proto.jspb.test.MapEntryOptionalKeysInt64Key.toObject(includeInstance, f),
    mapBoolString: (f = msg.getMapBoolString()) && proto.jspb.test.MapEntryOptionalKeysBoolKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.TestMapFieldsOptionalKeys}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.TestMapFieldsOptionalKeys;
  return proto.jspb.test.TestMapFieldsOptionalKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.TestMapFieldsOptionalKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.TestMapFieldsOptionalKeys}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.jspb.test.MapEntryOptionalKeysStringKey;
      reader.readMessage(value,proto.jspb.test.MapEntryOptionalKeysStringKey.deserializeBinaryFromReader);
      msg.setMapStringString(value);
      break;
    case 8:
      var value = new proto.jspb.test.MapEntryOptionalKeysInt32Key;
      reader.readMessage(value,proto.jspb.test.MapEntryOptionalKeysInt32Key.deserializeBinaryFromReader);
      msg.setMapInt32String(value);
      break;
    case 9:
      var value = new proto.jspb.test.MapEntryOptionalKeysInt64Key;
      reader.readMessage(value,proto.jspb.test.MapEntryOptionalKeysInt64Key.deserializeBinaryFromReader);
      msg.setMapInt64String(value);
      break;
    case 10:
      var value = new proto.jspb.test.MapEntryOptionalKeysBoolKey;
      reader.readMessage(value,proto.jspb.test.MapEntryOptionalKeysBoolKey.deserializeBinaryFromReader);
      msg.setMapBoolString(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.TestMapFieldsOptionalKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.TestMapFieldsOptionalKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.TestMapFieldsOptionalKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapStringString();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.jspb.test.MapEntryOptionalKeysStringKey.serializeBinaryToWriter
    );
  }
  f = message.getMapInt32String();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.jspb.test.MapEntryOptionalKeysInt32Key.serializeBinaryToWriter
    );
  }
  f = message.getMapInt64String();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.jspb.test.MapEntryOptionalKeysInt64Key.serializeBinaryToWriter
    );
  }
  f = message.getMapBoolString();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.jspb.test.MapEntryOptionalKeysBoolKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional MapEntryOptionalKeysStringKey map_string_string = 1;
 * @return {?proto.jspb.test.MapEntryOptionalKeysStringKey}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.getMapStringString = function() {
  return /** @type{?proto.jspb.test.MapEntryOptionalKeysStringKey} */ (
    jspb.Message.getWrapperField(this, proto.jspb.test.MapEntryOptionalKeysStringKey, 1));
};


/** @param {?proto.jspb.test.MapEntryOptionalKeysStringKey|undefined} value */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.setMapStringString = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.jspb.test.TestMapFieldsOptionalKeys.prototype.clearMapStringString = function() {
  this.setMapStringString(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.hasMapStringString = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MapEntryOptionalKeysInt32Key map_int32_string = 8;
 * @return {?proto.jspb.test.MapEntryOptionalKeysInt32Key}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.getMapInt32String = function() {
  return /** @type{?proto.jspb.test.MapEntryOptionalKeysInt32Key} */ (
    jspb.Message.getWrapperField(this, proto.jspb.test.MapEntryOptionalKeysInt32Key, 8));
};


/** @param {?proto.jspb.test.MapEntryOptionalKeysInt32Key|undefined} value */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.setMapInt32String = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.jspb.test.TestMapFieldsOptionalKeys.prototype.clearMapInt32String = function() {
  this.setMapInt32String(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.hasMapInt32String = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MapEntryOptionalKeysInt64Key map_int64_string = 9;
 * @return {?proto.jspb.test.MapEntryOptionalKeysInt64Key}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.getMapInt64String = function() {
  return /** @type{?proto.jspb.test.MapEntryOptionalKeysInt64Key} */ (
    jspb.Message.getWrapperField(this, proto.jspb.test.MapEntryOptionalKeysInt64Key, 9));
};


/** @param {?proto.jspb.test.MapEntryOptionalKeysInt64Key|undefined} value */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.setMapInt64String = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.jspb.test.TestMapFieldsOptionalKeys.prototype.clearMapInt64String = function() {
  this.setMapInt64String(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.hasMapInt64String = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MapEntryOptionalKeysBoolKey map_bool_string = 10;
 * @return {?proto.jspb.test.MapEntryOptionalKeysBoolKey}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.getMapBoolString = function() {
  return /** @type{?proto.jspb.test.MapEntryOptionalKeysBoolKey} */ (
    jspb.Message.getWrapperField(this, proto.jspb.test.MapEntryOptionalKeysBoolKey, 10));
};


/** @param {?proto.jspb.test.MapEntryOptionalKeysBoolKey|undefined} value */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.setMapBoolString = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.jspb.test.TestMapFieldsOptionalKeys.prototype.clearMapBoolString = function() {
  this.setMapBoolString(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.TestMapFieldsOptionalKeys.prototype.hasMapBoolString = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.test.MapValueMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jspb.test.MapValueMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.test.MapValueMessage.displayName = 'proto.jspb.test.MapValueMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.test.MapValueMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.test.MapValueMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.test.MapValueMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapValueMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    foo: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.test.MapValueMessage}
 */
proto.jspb.test.MapValueMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.test.MapValueMessage;
  return proto.jspb.test.MapValueMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.test.MapValueMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.test.MapValueMessage}
 */
proto.jspb.test.MapValueMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFoo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.test.MapValueMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.test.MapValueMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.test.MapValueMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.test.MapValueMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 foo = 1;
 * @return {number}
 */
proto.jspb.test.MapValueMessage.prototype.getFoo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.jspb.test.MapValueMessage.prototype.setFoo = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.jspb.test.MapValueMessage.prototype.clearFoo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.jspb.test.MapValueMessage.prototype.hasFoo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.jspb.test.ForeignEnum = {
  FOREIGN_FOO: 4,
  FOREIGN_BAR: 5,
  FOREIGN_BAZ: 6
};

/**
 * @enum {number}
 */
proto.jspb.test.MapValueEnum = {
  MAP_VALUE_FOO: 0,
  MAP_VALUE_BAR: 1,
  MAP_VALUE_BAZ: 2
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalInt32`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalInt32 = new jspb.ExtensionFieldInfo(
    1,
    {extendOptionalInt32: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[1] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalInt32,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[1] = proto.jspb.test.extendOptionalInt32;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalInt64`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalInt64 = new jspb.ExtensionFieldInfo(
    2,
    {extendOptionalInt64: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[2] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalInt64,
    jspb.BinaryReader.prototype.readInt64,
    jspb.BinaryWriter.prototype.writeInt64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[2] = proto.jspb.test.extendOptionalInt64;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalUint32`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalUint32 = new jspb.ExtensionFieldInfo(
    3,
    {extendOptionalUint32: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[3] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalUint32,
    jspb.BinaryReader.prototype.readUint32,
    jspb.BinaryWriter.prototype.writeUint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[3] = proto.jspb.test.extendOptionalUint32;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalUint64`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalUint64 = new jspb.ExtensionFieldInfo(
    4,
    {extendOptionalUint64: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[4] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalUint64,
    jspb.BinaryReader.prototype.readUint64,
    jspb.BinaryWriter.prototype.writeUint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[4] = proto.jspb.test.extendOptionalUint64;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalSint32`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalSint32 = new jspb.ExtensionFieldInfo(
    5,
    {extendOptionalSint32: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[5] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalSint32,
    jspb.BinaryReader.prototype.readSint32,
    jspb.BinaryWriter.prototype.writeSint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[5] = proto.jspb.test.extendOptionalSint32;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalSint64`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalSint64 = new jspb.ExtensionFieldInfo(
    6,
    {extendOptionalSint64: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[6] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalSint64,
    jspb.BinaryReader.prototype.readSint64,
    jspb.BinaryWriter.prototype.writeSint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[6] = proto.jspb.test.extendOptionalSint64;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalFixed32`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalFixed32 = new jspb.ExtensionFieldInfo(
    7,
    {extendOptionalFixed32: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[7] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalFixed32,
    jspb.BinaryReader.prototype.readFixed32,
    jspb.BinaryWriter.prototype.writeFixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[7] = proto.jspb.test.extendOptionalFixed32;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalFixed64`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalFixed64 = new jspb.ExtensionFieldInfo(
    8,
    {extendOptionalFixed64: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[8] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalFixed64,
    jspb.BinaryReader.prototype.readFixed64,
    jspb.BinaryWriter.prototype.writeFixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[8] = proto.jspb.test.extendOptionalFixed64;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalSfixed32`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalSfixed32 = new jspb.ExtensionFieldInfo(
    9,
    {extendOptionalSfixed32: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[9] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalSfixed32,
    jspb.BinaryReader.prototype.readSfixed32,
    jspb.BinaryWriter.prototype.writeSfixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[9] = proto.jspb.test.extendOptionalSfixed32;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalSfixed64`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalSfixed64 = new jspb.ExtensionFieldInfo(
    10,
    {extendOptionalSfixed64: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[10] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalSfixed64,
    jspb.BinaryReader.prototype.readSfixed64,
    jspb.BinaryWriter.prototype.writeSfixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[10] = proto.jspb.test.extendOptionalSfixed64;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalFloat`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalFloat = new jspb.ExtensionFieldInfo(
    11,
    {extendOptionalFloat: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[11] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalFloat,
    jspb.BinaryReader.prototype.readFloat,
    jspb.BinaryWriter.prototype.writeFloat,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[11] = proto.jspb.test.extendOptionalFloat;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalDouble`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.jspb.test.extendOptionalDouble = new jspb.ExtensionFieldInfo(
    12,
    {extendOptionalDouble: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[12] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalDouble,
    jspb.BinaryReader.prototype.readDouble,
    jspb.BinaryWriter.prototype.writeDouble,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[12] = proto.jspb.test.extendOptionalDouble;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalBool`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.jspb.test.extendOptionalBool = new jspb.ExtensionFieldInfo(
    13,
    {extendOptionalBool: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[13] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalBool,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[13] = proto.jspb.test.extendOptionalBool;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalString`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.jspb.test.extendOptionalString = new jspb.ExtensionFieldInfo(
    14,
    {extendOptionalString: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[14] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalString,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[14] = proto.jspb.test.extendOptionalString;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalBytes`.
 * @type {!jspb.ExtensionFieldInfo<!(string|Uint8Array)>}
 */
proto.jspb.test.extendOptionalBytes = new jspb.ExtensionFieldInfo(
    15,
    {extendOptionalBytes: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[15] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalBytes,
    jspb.BinaryReader.prototype.readBytes,
    jspb.BinaryWriter.prototype.writeBytes,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[15] = proto.jspb.test.extendOptionalBytes;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendOptionalForeignEnum`.
 * @type {!jspb.ExtensionFieldInfo<!proto.jspb.test.ForeignEnum>}
 */
proto.jspb.test.extendOptionalForeignEnum = new jspb.ExtensionFieldInfo(
    22,
    {extendOptionalForeignEnum: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.test.TestExtendable.extensionsBinary[22] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendOptionalForeignEnum,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[22] = proto.jspb.test.extendOptionalForeignEnum;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedInt32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedInt32List = new jspb.ExtensionFieldInfo(
    31,
    {extendRepeatedInt32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[31] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedInt32List,
    jspb.BinaryReader.prototype.readInt32,
    jspb.BinaryWriter.prototype.writeRepeatedInt32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[31] = proto.jspb.test.extendRepeatedInt32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedInt64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedInt64List = new jspb.ExtensionFieldInfo(
    32,
    {extendRepeatedInt64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[32] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedInt64List,
    jspb.BinaryReader.prototype.readInt64,
    jspb.BinaryWriter.prototype.writeRepeatedInt64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[32] = proto.jspb.test.extendRepeatedInt64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedUint32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedUint32List = new jspb.ExtensionFieldInfo(
    33,
    {extendRepeatedUint32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[33] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedUint32List,
    jspb.BinaryReader.prototype.readUint32,
    jspb.BinaryWriter.prototype.writeRepeatedUint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[33] = proto.jspb.test.extendRepeatedUint32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedUint64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedUint64List = new jspb.ExtensionFieldInfo(
    34,
    {extendRepeatedUint64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[34] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedUint64List,
    jspb.BinaryReader.prototype.readUint64,
    jspb.BinaryWriter.prototype.writeRepeatedUint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[34] = proto.jspb.test.extendRepeatedUint64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedSint32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedSint32List = new jspb.ExtensionFieldInfo(
    35,
    {extendRepeatedSint32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[35] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedSint32List,
    jspb.BinaryReader.prototype.readSint32,
    jspb.BinaryWriter.prototype.writeRepeatedSint32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[35] = proto.jspb.test.extendRepeatedSint32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedSint64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedSint64List = new jspb.ExtensionFieldInfo(
    36,
    {extendRepeatedSint64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[36] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedSint64List,
    jspb.BinaryReader.prototype.readSint64,
    jspb.BinaryWriter.prototype.writeRepeatedSint64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[36] = proto.jspb.test.extendRepeatedSint64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedFixed32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedFixed32List = new jspb.ExtensionFieldInfo(
    37,
    {extendRepeatedFixed32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[37] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedFixed32List,
    jspb.BinaryReader.prototype.readFixed32,
    jspb.BinaryWriter.prototype.writeRepeatedFixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[37] = proto.jspb.test.extendRepeatedFixed32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedFixed64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedFixed64List = new jspb.ExtensionFieldInfo(
    38,
    {extendRepeatedFixed64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[38] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedFixed64List,
    jspb.BinaryReader.prototype.readFixed64,
    jspb.BinaryWriter.prototype.writeRepeatedFixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[38] = proto.jspb.test.extendRepeatedFixed64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedSfixed32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedSfixed32List = new jspb.ExtensionFieldInfo(
    39,
    {extendRepeatedSfixed32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[39] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedSfixed32List,
    jspb.BinaryReader.prototype.readSfixed32,
    jspb.BinaryWriter.prototype.writeRepeatedSfixed32,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[39] = proto.jspb.test.extendRepeatedSfixed32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedSfixed64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedSfixed64List = new jspb.ExtensionFieldInfo(
    40,
    {extendRepeatedSfixed64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[40] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedSfixed64List,
    jspb.BinaryReader.prototype.readSfixed64,
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[40] = proto.jspb.test.extendRepeatedSfixed64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedFloatList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedFloatList = new jspb.ExtensionFieldInfo(
    41,
    {extendRepeatedFloatList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[41] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedFloatList,
    jspb.BinaryReader.prototype.readFloat,
    jspb.BinaryWriter.prototype.writeRepeatedFloat,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[41] = proto.jspb.test.extendRepeatedFloatList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedDoubleList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendRepeatedDoubleList = new jspb.ExtensionFieldInfo(
    42,
    {extendRepeatedDoubleList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[42] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedDoubleList,
    jspb.BinaryReader.prototype.readDouble,
    jspb.BinaryWriter.prototype.writeRepeatedDouble,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[42] = proto.jspb.test.extendRepeatedDoubleList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedBoolList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<boolean>>}
 */
proto.jspb.test.extendRepeatedBoolList = new jspb.ExtensionFieldInfo(
    43,
    {extendRepeatedBoolList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[43] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedBoolList,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeRepeatedBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[43] = proto.jspb.test.extendRepeatedBoolList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedStringList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.jspb.test.extendRepeatedStringList = new jspb.ExtensionFieldInfo(
    44,
    {extendRepeatedStringList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[44] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedStringList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[44] = proto.jspb.test.extendRepeatedStringList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedBytesList`.
 * @type {!jspb.ExtensionFieldInfo<!(Array<!Uint8Array>|Array<string>)>}
 */
proto.jspb.test.extendRepeatedBytesList = new jspb.ExtensionFieldInfo(
    45,
    {extendRepeatedBytesList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[45] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedBytesList,
    jspb.BinaryReader.prototype.readBytes,
    jspb.BinaryWriter.prototype.writeRepeatedBytes,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[45] = proto.jspb.test.extendRepeatedBytesList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendRepeatedForeignEnumList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.jspb.test.ForeignEnum>>}
 */
proto.jspb.test.extendRepeatedForeignEnumList = new jspb.ExtensionFieldInfo(
    52,
    {extendRepeatedForeignEnumList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[52] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendRepeatedForeignEnumList,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeRepeatedEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[52] = proto.jspb.test.extendRepeatedForeignEnumList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedInt32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedInt32List = new jspb.ExtensionFieldInfo(
    61,
    {extendPackedRepeatedInt32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[61] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedInt32List,
    jspb.BinaryReader.prototype.readPackedInt32,
    jspb.BinaryWriter.prototype.writePackedInt32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[61] = proto.jspb.test.extendPackedRepeatedInt32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedInt64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedInt64List = new jspb.ExtensionFieldInfo(
    62,
    {extendPackedRepeatedInt64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[62] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedInt64List,
    jspb.BinaryReader.prototype.readPackedInt64,
    jspb.BinaryWriter.prototype.writePackedInt64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[62] = proto.jspb.test.extendPackedRepeatedInt64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedUint32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedUint32List = new jspb.ExtensionFieldInfo(
    63,
    {extendPackedRepeatedUint32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[63] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedUint32List,
    jspb.BinaryReader.prototype.readPackedUint32,
    jspb.BinaryWriter.prototype.writePackedUint32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[63] = proto.jspb.test.extendPackedRepeatedUint32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedUint64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedUint64List = new jspb.ExtensionFieldInfo(
    64,
    {extendPackedRepeatedUint64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[64] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedUint64List,
    jspb.BinaryReader.prototype.readPackedUint64,
    jspb.BinaryWriter.prototype.writePackedUint64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[64] = proto.jspb.test.extendPackedRepeatedUint64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedSint32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedSint32List = new jspb.ExtensionFieldInfo(
    65,
    {extendPackedRepeatedSint32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[65] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedSint32List,
    jspb.BinaryReader.prototype.readPackedSint32,
    jspb.BinaryWriter.prototype.writePackedSint32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[65] = proto.jspb.test.extendPackedRepeatedSint32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedSint64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedSint64List = new jspb.ExtensionFieldInfo(
    66,
    {extendPackedRepeatedSint64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[66] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedSint64List,
    jspb.BinaryReader.prototype.readPackedSint64,
    jspb.BinaryWriter.prototype.writePackedSint64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[66] = proto.jspb.test.extendPackedRepeatedSint64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedFixed32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedFixed32List = new jspb.ExtensionFieldInfo(
    67,
    {extendPackedRepeatedFixed32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[67] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedFixed32List,
    jspb.BinaryReader.prototype.readPackedFixed32,
    jspb.BinaryWriter.prototype.writePackedFixed32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[67] = proto.jspb.test.extendPackedRepeatedFixed32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedFixed64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedFixed64List = new jspb.ExtensionFieldInfo(
    68,
    {extendPackedRepeatedFixed64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[68] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedFixed64List,
    jspb.BinaryReader.prototype.readPackedFixed64,
    jspb.BinaryWriter.prototype.writePackedFixed64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[68] = proto.jspb.test.extendPackedRepeatedFixed64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedSfixed32List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedSfixed32List = new jspb.ExtensionFieldInfo(
    69,
    {extendPackedRepeatedSfixed32List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[69] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedSfixed32List,
    jspb.BinaryReader.prototype.readPackedSfixed32,
    jspb.BinaryWriter.prototype.writePackedSfixed32,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[69] = proto.jspb.test.extendPackedRepeatedSfixed32List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedSfixed64List`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedSfixed64List = new jspb.ExtensionFieldInfo(
    70,
    {extendPackedRepeatedSfixed64List: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[70] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedSfixed64List,
    jspb.BinaryReader.prototype.readPackedSfixed64,
    jspb.BinaryWriter.prototype.writePackedSfixed64,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[70] = proto.jspb.test.extendPackedRepeatedSfixed64List;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedFloatList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedFloatList = new jspb.ExtensionFieldInfo(
    71,
    {extendPackedRepeatedFloatList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[71] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedFloatList,
    jspb.BinaryReader.prototype.readPackedFloat,
    jspb.BinaryWriter.prototype.writePackedFloat,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[71] = proto.jspb.test.extendPackedRepeatedFloatList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedDoubleList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<number>>}
 */
proto.jspb.test.extendPackedRepeatedDoubleList = new jspb.ExtensionFieldInfo(
    72,
    {extendPackedRepeatedDoubleList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[72] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedDoubleList,
    jspb.BinaryReader.prototype.readPackedDouble,
    jspb.BinaryWriter.prototype.writePackedDouble,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[72] = proto.jspb.test.extendPackedRepeatedDoubleList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedBoolList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<boolean>>}
 */
proto.jspb.test.extendPackedRepeatedBoolList = new jspb.ExtensionFieldInfo(
    73,
    {extendPackedRepeatedBoolList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[73] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedBoolList,
    jspb.BinaryReader.prototype.readPackedBool,
    jspb.BinaryWriter.prototype.writePackedBool,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[73] = proto.jspb.test.extendPackedRepeatedBoolList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `extendPackedRepeatedForeignEnumList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.jspb.test.ForeignEnum>>}
 */
proto.jspb.test.extendPackedRepeatedForeignEnumList = new jspb.ExtensionFieldInfo(
    82,
    {extendPackedRepeatedForeignEnumList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

proto.jspb.test.TestExtendable.extensionsBinary[82] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.test.extendPackedRepeatedForeignEnumList,
    jspb.BinaryReader.prototype.readPackedEnum,
    jspb.BinaryWriter.prototype.writePackedEnum,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.test.TestExtendable.extensions[82] = proto.jspb.test.extendPackedRepeatedForeignEnumList;

goog.object.extend(exports, proto.jspb.test);
