var global = Function('return this')();
var googleProtobuf = require('google-protobuf');
var testdeps = require('testdeps_commonjs');
global.goog = testdeps.goog;
global.jspb = testdeps.jspb;
var asserts = require('closure_asserts_commonjs');

// Bring asserts into the global namespace.
googleProtobuf.object.extend(global, asserts);
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// Test suite is written using Jasmine -- see http://jasmine.github.io/



var test_pb = require('./test_pb');
googleProtobuf.exportSymbol('proto.jspb.test.Deeply.Nested.Message', test_pb.Deeply.Nested.Message, global);

var test2_pb = require('./test2_pb');
googleProtobuf.exportSymbol('proto.jspb.test.ForeignNestedFieldMessage', test2_pb.ForeignNestedFieldMessage, global);

describe('Message test suite', function() {
  // Verify that we can successfully use a field referring to a nested message
  // from a different .proto file.
  it('testForeignNestedMessage', function() {
    var msg = new proto.jspb.test.ForeignNestedFieldMessage();
    var nested = new proto.jspb.test.Deeply.Nested.Message();
    nested.setCount(5);
    msg.setDeeplyNestedMessage(nested);
    assertEquals(5, msg.getDeeplyNestedMessage().getCount());

    // After a serialization-deserialization round trip we should get back the
    // same data we started with.
    var serialized = msg.serializeBinary();
    var deserialized =
        proto.jspb.test.ForeignNestedFieldMessage.deserializeBinary(serialized);
    assertEquals(5, deserialized.getDeeplyNestedMessage().getCount());
  });
});
