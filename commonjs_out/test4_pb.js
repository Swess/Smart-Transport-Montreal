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

var test3_pb = require('./test3_pb.js');
goog.exportSymbol('proto.jspb.exttest.floatingMsgFieldTwo', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `floatingMsgFieldTwo`.
 * @type {!jspb.ExtensionFieldInfo<!proto.jspb.exttest.ExtensionMessage>}
 */
proto.jspb.exttest.floatingMsgFieldTwo = new jspb.ExtensionFieldInfo(
    103,
    {floatingMsgFieldTwo: 0},
    test3_pb.ExtensionMessage,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         test3_pb.ExtensionMessage.toObject),
    0);

test3_pb.TestExtensionsMessage.extensionsBinary[103] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.exttest.floatingMsgFieldTwo,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    test3_pb.ExtensionMessage.serializeBinaryToWriter,
    test3_pb.ExtensionMessage.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
test3_pb.TestExtensionsMessage.extensions[103] = proto.jspb.exttest.floatingMsgFieldTwo;

goog.object.extend(exports, proto.jspb.exttest);
