/*
    BEGIN_MODULE KerberosV5Spec2
    OID: iso.identified-organization.dod.internet.security.kerberosV5.modules.krb5spec2
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

export const id_krb5: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* kerberosV5 */ 2,
]);

export type KerberosFlags = asn1.BIT_STRING;
let _cached_decoder_for_KerberosFlags: __utils.ASN1Decoder<
    KerberosFlags
> | null = null;
let _cached_encoder_for_KerberosFlags: __utils.ASN1Encoder<
    KerberosFlags
> | null = null;
export function _decode_KerberosFlags(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KerberosFlags) {
        _cached_decoder_for_KerberosFlags = __utils._decodeBitString;
    }
    return _cached_decoder_for_KerberosFlags(el);
}
export function _encode_KerberosFlags(
    value: KerberosFlags,
    elGetter: __utils.ASN1Encoder<KerberosFlags>
) {
    if (!_cached_encoder_for_KerberosFlags) {
        _cached_encoder_for_KerberosFlags = __utils._encodeBitString;
    }
    return _cached_encoder_for_KerberosFlags(value, elGetter);
}

export type TicketFlags = KerberosFlags; // DefinedType
let _cached_decoder_for_TicketFlags: __utils.ASN1Decoder<
    TicketFlags
> | null = null;
let _cached_encoder_for_TicketFlags: __utils.ASN1Encoder<
    TicketFlags
> | null = null;
export function _decode_TicketFlags(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TicketFlags) {
        _cached_decoder_for_TicketFlags = _decode_KerberosFlags;
    }
    return _cached_decoder_for_TicketFlags(el);
}
export function _encode_TicketFlags(
    value: TicketFlags,
    elGetter: __utils.ASN1Encoder<TicketFlags>
) {
    if (!_cached_encoder_for_TicketFlags) {
        _cached_encoder_for_TicketFlags = _encode_KerberosFlags;
    }
    return _cached_encoder_for_TicketFlags(value, elGetter);
}

export type Int32 = asn1.INTEGER;
let _cached_decoder_for_Int32: __utils.ASN1Decoder<Int32> | null = null;
let _cached_encoder_for_Int32: __utils.ASN1Encoder<Int32> | null = null;
export function _decode_Int32(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Int32) {
        _cached_decoder_for_Int32 = __utils._decodeInteger;
    }
    return _cached_decoder_for_Int32(el);
}
export function _encode_Int32(
    value: Int32,
    elGetter: __utils.ASN1Encoder<Int32>
) {
    if (!_cached_encoder_for_Int32) {
        _cached_encoder_for_Int32 = __utils._encodeInteger;
    }
    return _cached_encoder_for_Int32(value, elGetter);
}

export class EncryptionKey {
    constructor(
        readonly keytype: Int32,
        readonly keyvalue: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptionKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "keytype",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyvalue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptionKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptionKey: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncryptionKey: __utils.ASN1Decoder<
    EncryptionKey
> | null = null;
let _cached_encoder_for_EncryptionKey: __utils.ASN1Encoder<
    EncryptionKey
> | null = null;
export function _decode_EncryptionKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptionKey) {
        _cached_decoder_for_EncryptionKey = function (
            el: asn1.ASN1Element
        ): EncryptionKey {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "EncryptionKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "keytype";
            sequence[1].name = "keyvalue";
            let keytype!: Int32;
            let keyvalue!: asn1.OCTET_STRING;
            keytype = __utils._decode_explicit<Int32>(() => _decode_Int32)(
                sequence[0]
            );
            keyvalue = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(sequence[1]);
            // TODO: Validate values.
            return new EncryptionKey(keytype, keyvalue);
        };
    }
    return _cached_decoder_for_EncryptionKey(el);
}
export function _encode_EncryptionKey(
    value: EncryptionKey,
    elGetter: __utils.ASN1Encoder<EncryptionKey>
) {
    if (!_cached_encoder_for_EncryptionKey) {
        _cached_encoder_for_EncryptionKey = function (
            value: EncryptionKey,
            elGetter: __utils.ASN1Encoder<EncryptionKey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.keytype, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeOctetString,
                            __utils.BER
                        )(value.keyvalue, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncryptionKey(value, elGetter);
}

export type KerberosString = asn1.GeneralString; // GeneralString
let _cached_decoder_for_KerberosString: __utils.ASN1Decoder<
    KerberosString
> | null = null;
let _cached_encoder_for_KerberosString: __utils.ASN1Encoder<
    KerberosString
> | null = null;
export function _decode_KerberosString(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KerberosString) {
        _cached_decoder_for_KerberosString = __utils._decodeGeneralString;
    }
    return _cached_decoder_for_KerberosString(el);
}
export function _encode_KerberosString(
    value: KerberosString,
    elGetter: __utils.ASN1Encoder<KerberosString>
) {
    if (!_cached_encoder_for_KerberosString) {
        _cached_encoder_for_KerberosString = __utils._encodeGeneralString;
    }
    return _cached_encoder_for_KerberosString(value, elGetter);
}

export type Realm = KerberosString; // DefinedType
let _cached_decoder_for_Realm: __utils.ASN1Decoder<Realm> | null = null;
let _cached_encoder_for_Realm: __utils.ASN1Encoder<Realm> | null = null;
export function _decode_Realm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Realm) {
        _cached_decoder_for_Realm = _decode_KerberosString;
    }
    return _cached_decoder_for_Realm(el);
}
export function _encode_Realm(
    value: Realm,
    elGetter: __utils.ASN1Encoder<Realm>
) {
    if (!_cached_encoder_for_Realm) {
        _cached_encoder_for_Realm = _encode_KerberosString;
    }
    return _cached_encoder_for_Realm(value, elGetter);
}

export class PrincipalName {
    constructor(
        readonly name_type: Int32,
        readonly name_string: KerberosString[]
    ) {}
}
export const _root_component_type_list_1_spec_for_PrincipalName: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "name-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name-string",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PrincipalName: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PrincipalName: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PrincipalName: __utils.ASN1Decoder<
    PrincipalName
> | null = null;
let _cached_encoder_for_PrincipalName: __utils.ASN1Encoder<
    PrincipalName
> | null = null;
export function _decode_PrincipalName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrincipalName) {
        _cached_decoder_for_PrincipalName = function (
            el: asn1.ASN1Element
        ): PrincipalName {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "PrincipalName contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "name-type";
            sequence[1].name = "name-string";
            let name_type!: Int32;
            let name_string!: KerberosString[];
            name_type = __utils._decode_explicit<Int32>(() => _decode_Int32)(
                sequence[0]
            );
            name_string = __utils._decode_explicit<KerberosString[]>(() =>
                __utils._decodeSequenceOf<KerberosString>(
                    () => _decode_KerberosString
                )
            )(sequence[1]);
            // TODO: Validate values.
            return new PrincipalName(name_type, name_string);
        };
    }
    return _cached_decoder_for_PrincipalName(el);
}
export function _encode_PrincipalName(
    value: PrincipalName,
    elGetter: __utils.ASN1Encoder<PrincipalName>
) {
    if (!_cached_encoder_for_PrincipalName) {
        _cached_encoder_for_PrincipalName = function (
            value: PrincipalName,
            elGetter: __utils.ASN1Encoder<PrincipalName>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.name_type, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () =>
                                __utils._encodeSequenceOf<KerberosString>(
                                    () => _encode_KerberosString,
                                    __utils.BER
                                ),
                            __utils.BER
                        )(value.name_string, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PrincipalName(value, elGetter);
}

export class TransitedEncoding {
    constructor(
        readonly tr_type: Int32,
        readonly contents: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_TransitedEncoding: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "tr-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contents",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TransitedEncoding: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TransitedEncoding: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TransitedEncoding: __utils.ASN1Decoder<
    TransitedEncoding
> | null = null;
let _cached_encoder_for_TransitedEncoding: __utils.ASN1Encoder<
    TransitedEncoding
> | null = null;
export function _decode_TransitedEncoding(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TransitedEncoding) {
        _cached_decoder_for_TransitedEncoding = function (
            el: asn1.ASN1Element
        ): TransitedEncoding {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "TransitedEncoding contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "tr-type";
            sequence[1].name = "contents";
            let tr_type!: Int32;
            let contents!: asn1.OCTET_STRING;
            tr_type = __utils._decode_explicit<Int32>(() => _decode_Int32)(
                sequence[0]
            );
            contents = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(sequence[1]);
            // TODO: Validate values.
            return new TransitedEncoding(tr_type, contents);
        };
    }
    return _cached_decoder_for_TransitedEncoding(el);
}
export function _encode_TransitedEncoding(
    value: TransitedEncoding,
    elGetter: __utils.ASN1Encoder<TransitedEncoding>
) {
    if (!_cached_encoder_for_TransitedEncoding) {
        _cached_encoder_for_TransitedEncoding = function (
            value: TransitedEncoding,
            elGetter: __utils.ASN1Encoder<TransitedEncoding>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.tr_type, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeOctetString,
                            __utils.BER
                        )(value.contents, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TransitedEncoding(value, elGetter);
}

export type KerberosTime = asn1.GeneralizedTime; // GeneralizedTime
let _cached_decoder_for_KerberosTime: __utils.ASN1Decoder<
    KerberosTime
> | null = null;
let _cached_encoder_for_KerberosTime: __utils.ASN1Encoder<
    KerberosTime
> | null = null;
export function _decode_KerberosTime(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KerberosTime) {
        _cached_decoder_for_KerberosTime = __utils._decodeGeneralizedTime;
    }
    return _cached_decoder_for_KerberosTime(el);
}
export function _encode_KerberosTime(
    value: KerberosTime,
    elGetter: __utils.ASN1Encoder<KerberosTime>
) {
    if (!_cached_encoder_for_KerberosTime) {
        _cached_encoder_for_KerberosTime = __utils._encodeGeneralizedTime;
    }
    return _cached_encoder_for_KerberosTime(value, elGetter);
}

export class HostAddress {
    constructor(
        readonly addr_type: Int32,
        readonly address: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_HostAddress: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "addr-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "address",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_HostAddress: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_HostAddress: __utils.ComponentSpec[] = [];
let _cached_decoder_for_HostAddress: __utils.ASN1Decoder<
    HostAddress
> | null = null;
let _cached_encoder_for_HostAddress: __utils.ASN1Encoder<
    HostAddress
> | null = null;
export function _decode_HostAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HostAddress) {
        _cached_decoder_for_HostAddress = function (
            el: asn1.ASN1Element
        ): HostAddress {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "HostAddress contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "addr-type";
            sequence[1].name = "address";
            let addr_type!: Int32;
            let address!: asn1.OCTET_STRING;
            addr_type = __utils._decode_explicit<Int32>(() => _decode_Int32)(
                sequence[0]
            );
            address = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(sequence[1]);
            // TODO: Validate values.
            return new HostAddress(addr_type, address);
        };
    }
    return _cached_decoder_for_HostAddress(el);
}
export function _encode_HostAddress(
    value: HostAddress,
    elGetter: __utils.ASN1Encoder<HostAddress>
) {
    if (!_cached_encoder_for_HostAddress) {
        _cached_encoder_for_HostAddress = function (
            value: HostAddress,
            elGetter: __utils.ASN1Encoder<HostAddress>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.addr_type, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeOctetString,
                            __utils.BER
                        )(value.address, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_HostAddress(value, elGetter);
}

export type HostAddresses = HostAddress[]; // SequenceOfType
let _cached_decoder_for_HostAddresses: __utils.ASN1Decoder<
    HostAddresses
> | null = null;
let _cached_encoder_for_HostAddresses: __utils.ASN1Encoder<
    HostAddresses
> | null = null;
export function _decode_HostAddresses(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HostAddresses) {
        _cached_decoder_for_HostAddresses = __utils._decodeSequenceOf<
            HostAddress
        >(() => _decode_HostAddress);
    }
    return _cached_decoder_for_HostAddresses(el);
}
export function _encode_HostAddresses(
    value: HostAddresses,
    elGetter: __utils.ASN1Encoder<HostAddresses>
) {
    if (!_cached_encoder_for_HostAddresses) {
        _cached_encoder_for_HostAddresses = __utils._encodeSequenceOf<
            HostAddress
        >(() => _encode_HostAddress, __utils.BER);
    }
    return _cached_encoder_for_HostAddresses(value, elGetter);
}

export class AuthorizationData_Item {
    constructor(readonly ad_type: Int32, readonly ad_data: asn1.OCTET_STRING) {}
}
export const _root_component_type_list_1_spec_for_AuthorizationData_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ad-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ad-data",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AuthorizationData_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AuthorizationData_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AuthorizationData_Item: __utils.ASN1Decoder<
    AuthorizationData_Item
> | null = null;
let _cached_encoder_for_AuthorizationData_Item: __utils.ASN1Encoder<
    AuthorizationData_Item
> | null = null;
export function _decode_AuthorizationData_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthorizationData_Item) {
        _cached_decoder_for_AuthorizationData_Item = function (
            el: asn1.ASN1Element
        ): AuthorizationData_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "AuthorizationData-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "ad-type";
            sequence[1].name = "ad-data";
            let ad_type!: Int32;
            let ad_data!: asn1.OCTET_STRING;
            ad_type = __utils._decode_explicit<Int32>(() => _decode_Int32)(
                sequence[0]
            );
            ad_data = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(sequence[1]);
            // TODO: Validate values.
            return new AuthorizationData_Item(ad_type, ad_data);
        };
    }
    return _cached_decoder_for_AuthorizationData_Item(el);
}
export function _encode_AuthorizationData_Item(
    value: AuthorizationData_Item,
    elGetter: __utils.ASN1Encoder<AuthorizationData_Item>
) {
    if (!_cached_encoder_for_AuthorizationData_Item) {
        _cached_encoder_for_AuthorizationData_Item = function (
            value: AuthorizationData_Item,
            elGetter: __utils.ASN1Encoder<AuthorizationData_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.ad_type, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeOctetString,
                            __utils.BER
                        )(value.ad_data, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AuthorizationData_Item(value, elGetter);
}

export type AuthorizationData = AuthorizationData_Item[]; // SequenceOfType
let _cached_decoder_for_AuthorizationData: __utils.ASN1Decoder<
    AuthorizationData
> | null = null;
let _cached_encoder_for_AuthorizationData: __utils.ASN1Encoder<
    AuthorizationData
> | null = null;
export function _decode_AuthorizationData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthorizationData) {
        _cached_decoder_for_AuthorizationData = __utils._decodeSequenceOf<
            AuthorizationData_Item
        >(() => _decode_AuthorizationData_Item);
    }
    return _cached_decoder_for_AuthorizationData(el);
}
export function _encode_AuthorizationData(
    value: AuthorizationData,
    elGetter: __utils.ASN1Encoder<AuthorizationData>
) {
    if (!_cached_encoder_for_AuthorizationData) {
        _cached_encoder_for_AuthorizationData = __utils._encodeSequenceOf<
            AuthorizationData_Item
        >(() => _encode_AuthorizationData_Item, __utils.BER);
    }
    return _cached_encoder_for_AuthorizationData(value, elGetter);
}

export class EncTicketPart {
    constructor(
        readonly flags: TicketFlags,
        readonly key: EncryptionKey,
        readonly crealm: Realm,
        readonly cname: PrincipalName,
        readonly transited: TransitedEncoding,
        readonly authtime: KerberosTime,
        readonly starttime: asn1.OPTIONAL<KerberosTime>,
        readonly endtime: KerberosTime,
        readonly renew_till: asn1.OPTIONAL<KerberosTime>,
        readonly caddr: asn1.OPTIONAL<HostAddresses>,
        readonly authorization_data: asn1.OPTIONAL<AuthorizationData>
    ) {}
}
export const _root_component_type_list_1_spec_for_EncTicketPart: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "flags",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "key",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crealm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "transited",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authtime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "starttime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "endtime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "renew-till",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "caddr",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authorization-data",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncTicketPart: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncTicketPart: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncTicketPart: __utils.ASN1Decoder<
    EncTicketPart
> | null = null;
let _cached_encoder_for_EncTicketPart: __utils.ASN1Encoder<
    EncTicketPart
> | null = null;
export function _decode_EncTicketPart(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncTicketPart) {
        _cached_decoder_for_EncTicketPart = __utils._decode_explicit<
            EncTicketPart
        >(
            () =>
                function (el: asn1.ASN1Element): EncTicketPart {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let flags!: TicketFlags;
                    let key!: EncryptionKey;
                    let crealm!: Realm;
                    let cname!: PrincipalName;
                    let transited!: TransitedEncoding;
                    let authtime!: KerberosTime;
                    let starttime: asn1.OPTIONAL<KerberosTime>;
                    let endtime!: KerberosTime;
                    let renew_till: asn1.OPTIONAL<KerberosTime>;
                    let caddr: asn1.OPTIONAL<HostAddresses>;
                    let authorization_data: asn1.OPTIONAL<AuthorizationData>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        flags: (_el: asn1.ASN1Element): void => {
                            flags = __utils._decode_explicit<TicketFlags>(
                                () => _decode_TicketFlags
                            )(_el);
                        },
                        key: (_el: asn1.ASN1Element): void => {
                            key = __utils._decode_explicit<EncryptionKey>(
                                () => _decode_EncryptionKey
                            )(_el);
                        },
                        crealm: (_el: asn1.ASN1Element): void => {
                            crealm = __utils._decode_explicit<Realm>(
                                () => _decode_Realm
                            )(_el);
                        },
                        cname: (_el: asn1.ASN1Element): void => {
                            cname = __utils._decode_explicit<PrincipalName>(
                                () => _decode_PrincipalName
                            )(_el);
                        },
                        transited: (_el: asn1.ASN1Element): void => {
                            transited = __utils._decode_explicit<
                                TransitedEncoding
                            >(() => _decode_TransitedEncoding)(_el);
                        },
                        authtime: (_el: asn1.ASN1Element): void => {
                            authtime = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        starttime: (_el: asn1.ASN1Element): void => {
                            starttime = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        endtime: (_el: asn1.ASN1Element): void => {
                            endtime = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        "renew-till": (_el: asn1.ASN1Element): void => {
                            renew_till = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        caddr: (_el: asn1.ASN1Element): void => {
                            caddr = __utils._decode_explicit<HostAddresses>(
                                () => _decode_HostAddresses
                            )(_el);
                        },
                        "authorization-data": (_el: asn1.ASN1Element): void => {
                            authorization_data = __utils._decode_explicit<
                                AuthorizationData
                            >(() => _decode_AuthorizationData)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_EncTicketPart,
                        _extension_additions_list_spec_for_EncTicketPart,
                        _root_component_type_list_2_spec_for_EncTicketPart,
                        undefined
                    );
                    return new EncTicketPart /* SEQUENCE_CONSTRUCTOR_CALL */(
                        flags,
                        key,
                        crealm,
                        cname,
                        transited,
                        authtime,
                        starttime,
                        endtime,
                        renew_till,
                        caddr,
                        authorization_data
                    );
                }
        );
    }
    return _cached_decoder_for_EncTicketPart(el);
}
export function _encode_EncTicketPart(
    value: EncTicketPart,
    elGetter: __utils.ASN1Encoder<EncTicketPart>
) {
    if (!_cached_encoder_for_EncTicketPart) {
        _cached_encoder_for_EncTicketPart = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            3,
            () =>
                function (
                    value: EncTicketPart,
                    elGetter: __utils.ASN1Encoder<EncTicketPart>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => _encode_TicketFlags,
                                    __utils.BER
                                )(value.flags, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => _encode_EncryptionKey,
                                    __utils.BER
                                )(value.key, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    2,
                                    () => _encode_Realm,
                                    __utils.BER
                                )(value.crealm, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    3,
                                    () => _encode_PrincipalName,
                                    __utils.BER
                                )(value.cname, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    4,
                                    () => _encode_TransitedEncoding,
                                    __utils.BER
                                )(value.transited, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    5,
                                    () => _encode_KerberosTime,
                                    __utils.BER
                                )(value.authtime, __utils.BER),
                                /* IF_ABSENT  */ value.starttime === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          6,
                                          () => _encode_KerberosTime,
                                          __utils.BER
                                      )(value.starttime, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    7,
                                    () => _encode_KerberosTime,
                                    __utils.BER
                                )(value.endtime, __utils.BER),
                                /* IF_ABSENT  */ value.renew_till === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          8,
                                          () => _encode_KerberosTime,
                                          __utils.BER
                                      )(value.renew_till, __utils.BER),
                                /* IF_ABSENT  */ value.caddr === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          9,
                                          () => _encode_HostAddresses,
                                          __utils.BER
                                      )(value.caddr, __utils.BER),
                                /* IF_ABSENT  */ value.authorization_data ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          10,
                                          () => _encode_AuthorizationData,
                                          __utils.BER
                                      )(value.authorization_data, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_EncTicketPart(value, elGetter);
}

export class PA_DATA {
    constructor(
        readonly padata_type: Int32,
        readonly padata_value: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_PA_DATA: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "padata-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "padata-value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PA_DATA: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PA_DATA: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PA_DATA: __utils.ASN1Decoder<PA_DATA> | null = null;
let _cached_encoder_for_PA_DATA: __utils.ASN1Encoder<PA_DATA> | null = null;
export function _decode_PA_DATA(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PA_DATA) {
        _cached_decoder_for_PA_DATA = function (el: asn1.ASN1Element): PA_DATA {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "PA-DATA contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "padata-type";
            sequence[1].name = "padata-value";
            let padata_type!: Int32;
            let padata_value!: asn1.OCTET_STRING;
            padata_type = __utils._decode_explicit<Int32>(() => _decode_Int32)(
                sequence[0]
            );
            padata_value = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(sequence[1]);
            // TODO: Validate values.
            return new PA_DATA(padata_type, padata_value);
        };
    }
    return _cached_decoder_for_PA_DATA(el);
}
export function _encode_PA_DATA(
    value: PA_DATA,
    elGetter: __utils.ASN1Encoder<PA_DATA>
) {
    if (!_cached_encoder_for_PA_DATA) {
        _cached_encoder_for_PA_DATA = function (
            value: PA_DATA,
            elGetter: __utils.ASN1Encoder<PA_DATA>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.padata_type, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            2,
                            () => __utils._encodeOctetString,
                            __utils.BER
                        )(value.padata_value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PA_DATA(value, elGetter);
}

export type KDCOptions = KerberosFlags; // DefinedType
let _cached_decoder_for_KDCOptions: __utils.ASN1Decoder<
    KDCOptions
> | null = null;
let _cached_encoder_for_KDCOptions: __utils.ASN1Encoder<
    KDCOptions
> | null = null;
export function _decode_KDCOptions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KDCOptions) {
        _cached_decoder_for_KDCOptions = _decode_KerberosFlags;
    }
    return _cached_decoder_for_KDCOptions(el);
}
export function _encode_KDCOptions(
    value: KDCOptions,
    elGetter: __utils.ASN1Encoder<KDCOptions>
) {
    if (!_cached_encoder_for_KDCOptions) {
        _cached_encoder_for_KDCOptions = _encode_KerberosFlags;
    }
    return _cached_encoder_for_KDCOptions(value, elGetter);
}

export type UInt32 = asn1.INTEGER;
let _cached_decoder_for_UInt32: __utils.ASN1Decoder<UInt32> | null = null;
let _cached_encoder_for_UInt32: __utils.ASN1Encoder<UInt32> | null = null;
export function _decode_UInt32(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UInt32) {
        _cached_decoder_for_UInt32 = __utils._decodeInteger;
    }
    return _cached_decoder_for_UInt32(el);
}
export function _encode_UInt32(
    value: UInt32,
    elGetter: __utils.ASN1Encoder<UInt32>
) {
    if (!_cached_encoder_for_UInt32) {
        _cached_encoder_for_UInt32 = __utils._encodeInteger;
    }
    return _cached_encoder_for_UInt32(value, elGetter);
}

export class EncryptedData {
    constructor(
        readonly etype: Int32,
        readonly kvno: asn1.OPTIONAL<UInt32>,
        readonly cipher: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "etype",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "kvno",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cipher",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedData: __utils.ASN1Decoder<
    EncryptedData
> | null = null;
let _cached_encoder_for_EncryptedData: __utils.ASN1Encoder<
    EncryptedData
> | null = null;
export function _decode_EncryptedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedData) {
        _cached_decoder_for_EncryptedData = function (
            el: asn1.ASN1Element
        ): EncryptedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let etype!: Int32;
            let kvno: asn1.OPTIONAL<UInt32>;
            let cipher!: asn1.OCTET_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                etype: (_el: asn1.ASN1Element): void => {
                    etype = __utils._decode_explicit<Int32>(
                        () => _decode_Int32
                    )(_el);
                },
                kvno: (_el: asn1.ASN1Element): void => {
                    kvno = __utils._decode_explicit<UInt32>(
                        () => _decode_UInt32
                    )(_el);
                },
                cipher: (_el: asn1.ASN1Element): void => {
                    cipher = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedData,
                _extension_additions_list_spec_for_EncryptedData,
                _root_component_type_list_2_spec_for_EncryptedData,
                undefined
            );
            return new EncryptedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                etype,
                kvno,
                cipher
            );
        };
    }
    return _cached_decoder_for_EncryptedData(el);
}
export function _encode_EncryptedData(
    value: EncryptedData,
    elGetter: __utils.ASN1Encoder<EncryptedData>
) {
    if (!_cached_encoder_for_EncryptedData) {
        _cached_encoder_for_EncryptedData = function (
            value: EncryptedData,
            elGetter: __utils.ASN1Encoder<EncryptedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.etype, __utils.BER),
                        /* IF_ABSENT  */ value.kvno === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_UInt32,
                                  __utils.BER
                              )(value.kvno, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            2,
                            () => __utils._encodeOctetString,
                            __utils.BER
                        )(value.cipher, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedData(value, elGetter);
}

export class Ticket {
    constructor(
        readonly tkt_vno: asn1.INTEGER,
        readonly realm: Realm,
        readonly sname: PrincipalName,
        readonly enc_part: EncryptedData
    ) {}
}
export const _root_component_type_list_1_spec_for_Ticket: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "tkt-vno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "realm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "enc-part",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Ticket: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Ticket: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Ticket: __utils.ASN1Decoder<Ticket> | null = null;
let _cached_encoder_for_Ticket: __utils.ASN1Encoder<Ticket> | null = null;
export function _decode_Ticket(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Ticket) {
        _cached_decoder_for_Ticket = __utils._decode_explicit<Ticket>(
            () =>
                function (el: asn1.ASN1Element): Ticket {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 4) {
                        throw new asn1.ASN1ConstructionError(
                            "Ticket contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    // TODO: Validate tags.
                    sequence[0].name = "tkt-vno";
                    sequence[1].name = "realm";
                    sequence[2].name = "sname";
                    sequence[3].name = "enc-part";
                    let tkt_vno!: asn1.INTEGER;
                    let realm!: Realm;
                    let sname!: PrincipalName;
                    let enc_part!: EncryptedData;
                    tkt_vno = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[0]);
                    realm = __utils._decode_explicit<Realm>(
                        () => _decode_Realm
                    )(sequence[1]);
                    sname = __utils._decode_explicit<PrincipalName>(
                        () => _decode_PrincipalName
                    )(sequence[2]);
                    enc_part = __utils._decode_explicit<EncryptedData>(
                        () => _decode_EncryptedData
                    )(sequence[3]);
                    // TODO: Validate values.
                    return new Ticket(tkt_vno, realm, sname, enc_part);
                }
        );
    }
    return _cached_decoder_for_Ticket(el);
}
export function _encode_Ticket(
    value: Ticket,
    elGetter: __utils.ASN1Encoder<Ticket>
) {
    if (!_cached_encoder_for_Ticket) {
        _cached_encoder_for_Ticket = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            1,
            () =>
                function (
                    value: Ticket,
                    elGetter: __utils.ASN1Encoder<Ticket>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.tkt_vno, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => _encode_Realm,
                                    __utils.BER
                                )(value.realm, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    2,
                                    () => _encode_PrincipalName,
                                    __utils.BER
                                )(value.sname, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    3,
                                    () => _encode_EncryptedData,
                                    __utils.BER
                                )(value.enc_part, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_Ticket(value, elGetter);
}

export class KDC_REQ_BODY {
    constructor(
        readonly kdc_options: KDCOptions,
        readonly cname: asn1.OPTIONAL<PrincipalName>,
        readonly realm: Realm,
        readonly sname: asn1.OPTIONAL<PrincipalName>,
        readonly from_: asn1.OPTIONAL<KerberosTime>,
        readonly till: KerberosTime,
        readonly rtime: asn1.OPTIONAL<KerberosTime>,
        readonly nonce: UInt32,
        readonly etype: Int32[],
        readonly addresses: asn1.OPTIONAL<HostAddresses>,
        readonly enc_authorization_data: asn1.OPTIONAL<EncryptedData>,
        readonly additional_tickets: asn1.OPTIONAL<Ticket[]>
    ) {}
}
export const _root_component_type_list_1_spec_for_KDC_REQ_BODY: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "kdc-options",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cname",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "realm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sname",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "from",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "till",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "rtime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nonce",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "etype",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "addresses",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "enc-authorization-data",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "additional-tickets",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KDC_REQ_BODY: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KDC_REQ_BODY: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KDC_REQ_BODY: __utils.ASN1Decoder<
    KDC_REQ_BODY
> | null = null;
let _cached_encoder_for_KDC_REQ_BODY: __utils.ASN1Encoder<
    KDC_REQ_BODY
> | null = null;
export function _decode_KDC_REQ_BODY(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KDC_REQ_BODY) {
        _cached_decoder_for_KDC_REQ_BODY = function (
            el: asn1.ASN1Element
        ): KDC_REQ_BODY {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let kdc_options!: KDCOptions;
            let cname: asn1.OPTIONAL<PrincipalName>;
            let realm!: Realm;
            let sname: asn1.OPTIONAL<PrincipalName>;
            let from_: asn1.OPTIONAL<KerberosTime>;
            let till!: KerberosTime;
            let rtime: asn1.OPTIONAL<KerberosTime>;
            let nonce!: UInt32;
            let etype!: Int32[];
            let addresses: asn1.OPTIONAL<HostAddresses>;
            let enc_authorization_data: asn1.OPTIONAL<EncryptedData>;
            let additional_tickets: asn1.OPTIONAL<Ticket[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "kdc-options": (_el: asn1.ASN1Element): void => {
                    kdc_options = __utils._decode_explicit<KDCOptions>(
                        () => _decode_KDCOptions
                    )(_el);
                },
                cname: (_el: asn1.ASN1Element): void => {
                    cname = __utils._decode_explicit<PrincipalName>(
                        () => _decode_PrincipalName
                    )(_el);
                },
                realm: (_el: asn1.ASN1Element): void => {
                    realm = __utils._decode_explicit<Realm>(
                        () => _decode_Realm
                    )(_el);
                },
                sname: (_el: asn1.ASN1Element): void => {
                    sname = __utils._decode_explicit<PrincipalName>(
                        () => _decode_PrincipalName
                    )(_el);
                },
                from: (_el: asn1.ASN1Element): void => {
                    from_ = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                till: (_el: asn1.ASN1Element): void => {
                    till = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                rtime: (_el: asn1.ASN1Element): void => {
                    rtime = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                nonce: (_el: asn1.ASN1Element): void => {
                    nonce = __utils._decode_explicit<UInt32>(
                        () => _decode_UInt32
                    )(_el);
                },
                etype: (_el: asn1.ASN1Element): void => {
                    etype = __utils._decode_explicit<Int32[]>(() =>
                        __utils._decodeSequenceOf<Int32>(() => _decode_Int32)
                    )(_el);
                },
                addresses: (_el: asn1.ASN1Element): void => {
                    addresses = __utils._decode_explicit<HostAddresses>(
                        () => _decode_HostAddresses
                    )(_el);
                },
                "enc-authorization-data": (_el: asn1.ASN1Element): void => {
                    enc_authorization_data = __utils._decode_explicit<
                        EncryptedData
                    >(() => _decode_EncryptedData)(_el);
                },
                "additional-tickets": (_el: asn1.ASN1Element): void => {
                    additional_tickets = __utils._decode_explicit<Ticket[]>(
                        () =>
                            __utils._decodeSequenceOf<Ticket>(
                                () => _decode_Ticket
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KDC_REQ_BODY,
                _extension_additions_list_spec_for_KDC_REQ_BODY,
                _root_component_type_list_2_spec_for_KDC_REQ_BODY,
                undefined
            );
            return new KDC_REQ_BODY /* SEQUENCE_CONSTRUCTOR_CALL */(
                kdc_options,
                cname,
                realm,
                sname,
                from_,
                till,
                rtime,
                nonce,
                etype,
                addresses,
                enc_authorization_data,
                additional_tickets
            );
        };
    }
    return _cached_decoder_for_KDC_REQ_BODY(el);
}
export function _encode_KDC_REQ_BODY(
    value: KDC_REQ_BODY,
    elGetter: __utils.ASN1Encoder<KDC_REQ_BODY>
) {
    if (!_cached_encoder_for_KDC_REQ_BODY) {
        _cached_encoder_for_KDC_REQ_BODY = function (
            value: KDC_REQ_BODY,
            elGetter: __utils.ASN1Encoder<KDC_REQ_BODY>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_KDCOptions,
                            __utils.BER
                        )(value.kdc_options, __utils.BER),
                        /* IF_ABSENT  */ value.cname === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_PrincipalName,
                                  __utils.BER
                              )(value.cname, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            2,
                            () => _encode_Realm,
                            __utils.BER
                        )(value.realm, __utils.BER),
                        /* IF_ABSENT  */ value.sname === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_PrincipalName,
                                  __utils.BER
                              )(value.sname, __utils.BER),
                        /* IF_ABSENT  */ value.from_ === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  4,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.from_, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            5,
                            () => _encode_KerberosTime,
                            __utils.BER
                        )(value.till, __utils.BER),
                        /* IF_ABSENT  */ value.rtime === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  6,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.rtime, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            7,
                            () => _encode_UInt32,
                            __utils.BER
                        )(value.nonce, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            8,
                            () =>
                                __utils._encodeSequenceOf<Int32>(
                                    () => _encode_Int32,
                                    __utils.BER
                                ),
                            __utils.BER
                        )(value.etype, __utils.BER),
                        /* IF_ABSENT  */ value.addresses === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  9,
                                  () => _encode_HostAddresses,
                                  __utils.BER
                              )(value.addresses, __utils.BER),
                        /* IF_ABSENT  */ value.enc_authorization_data ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  10,
                                  () => _encode_EncryptedData,
                                  __utils.BER
                              )(value.enc_authorization_data, __utils.BER),
                        /* IF_ABSENT  */ value.additional_tickets === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  11,
                                  () =>
                                      __utils._encodeSequenceOf<Ticket>(
                                          () => _encode_Ticket,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.additional_tickets, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_KDC_REQ_BODY(value, elGetter);
}

export class KDC_REQ {
    constructor(
        readonly pvno: asn1.INTEGER,
        readonly msg_type: asn1.INTEGER,
        readonly padata: asn1.OPTIONAL<PA_DATA[]>,
        readonly req_body: KDC_REQ_BODY
    ) {}
}
export const _root_component_type_list_1_spec_for_KDC_REQ: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pvno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msg-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "padata",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "req-body",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KDC_REQ: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KDC_REQ: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KDC_REQ: __utils.ASN1Decoder<KDC_REQ> | null = null;
let _cached_encoder_for_KDC_REQ: __utils.ASN1Encoder<KDC_REQ> | null = null;
export function _decode_KDC_REQ(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KDC_REQ) {
        _cached_decoder_for_KDC_REQ = function (el: asn1.ASN1Element): KDC_REQ {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pvno!: asn1.INTEGER;
            let msg_type!: asn1.INTEGER;
            let padata: asn1.OPTIONAL<PA_DATA[]>;
            let req_body!: KDC_REQ_BODY;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                pvno: (_el: asn1.ASN1Element): void => {
                    pvno = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                "msg-type": (_el: asn1.ASN1Element): void => {
                    msg_type = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                padata: (_el: asn1.ASN1Element): void => {
                    padata = __utils._decode_explicit<PA_DATA[]>(() =>
                        __utils._decodeSequenceOf<PA_DATA>(
                            () => _decode_PA_DATA
                        )
                    )(_el);
                },
                "req-body": (_el: asn1.ASN1Element): void => {
                    req_body = __utils._decode_explicit<KDC_REQ_BODY>(
                        () => _decode_KDC_REQ_BODY
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KDC_REQ,
                _extension_additions_list_spec_for_KDC_REQ,
                _root_component_type_list_2_spec_for_KDC_REQ,
                undefined
            );
            return new KDC_REQ /* SEQUENCE_CONSTRUCTOR_CALL */(
                pvno,
                msg_type,
                padata,
                req_body
            );
        };
    }
    return _cached_decoder_for_KDC_REQ(el);
}
export function _encode_KDC_REQ(
    value: KDC_REQ,
    elGetter: __utils.ASN1Encoder<KDC_REQ>
) {
    if (!_cached_encoder_for_KDC_REQ) {
        _cached_encoder_for_KDC_REQ = function (
            value: KDC_REQ,
            elGetter: __utils.ASN1Encoder<KDC_REQ>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeInteger,
                            __utils.BER
                        )(value.pvno, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            2,
                            () => __utils._encodeInteger,
                            __utils.BER
                        )(value.msg_type, __utils.BER),
                        /* IF_ABSENT  */ value.padata === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () =>
                                      __utils._encodeSequenceOf<PA_DATA>(
                                          () => _encode_PA_DATA,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.padata, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            4,
                            () => _encode_KDC_REQ_BODY,
                            __utils.BER
                        )(value.req_body, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_KDC_REQ(value, elGetter);
}

export type AS_REQ = KDC_REQ; // DefinedType
let _cached_decoder_for_AS_REQ: __utils.ASN1Decoder<AS_REQ> | null = null;
let _cached_encoder_for_AS_REQ: __utils.ASN1Encoder<AS_REQ> | null = null;
export function _decode_AS_REQ(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AS_REQ) {
        _cached_decoder_for_AS_REQ = __utils._decode_explicit<AS_REQ>(
            () => _decode_KDC_REQ
        );
    }
    return _cached_decoder_for_AS_REQ(el);
}
export function _encode_AS_REQ(
    value: AS_REQ,
    elGetter: __utils.ASN1Encoder<AS_REQ>
) {
    if (!_cached_encoder_for_AS_REQ) {
        _cached_encoder_for_AS_REQ = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            10,
            () => _encode_KDC_REQ,
            __utils.BER
        );
    }
    return _cached_encoder_for_AS_REQ(value, elGetter);
}

export type TGS_REQ = KDC_REQ; // DefinedType
let _cached_decoder_for_TGS_REQ: __utils.ASN1Decoder<TGS_REQ> | null = null;
let _cached_encoder_for_TGS_REQ: __utils.ASN1Encoder<TGS_REQ> | null = null;
export function _decode_TGS_REQ(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TGS_REQ) {
        _cached_decoder_for_TGS_REQ = __utils._decode_explicit<TGS_REQ>(
            () => _decode_KDC_REQ
        );
    }
    return _cached_decoder_for_TGS_REQ(el);
}
export function _encode_TGS_REQ(
    value: TGS_REQ,
    elGetter: __utils.ASN1Encoder<TGS_REQ>
) {
    if (!_cached_encoder_for_TGS_REQ) {
        _cached_encoder_for_TGS_REQ = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            12,
            () => _encode_KDC_REQ,
            __utils.BER
        );
    }
    return _cached_encoder_for_TGS_REQ(value, elGetter);
}

export class KDC_REP {
    constructor(
        readonly pvno: asn1.INTEGER,
        readonly msg_type: asn1.INTEGER,
        readonly padata: asn1.OPTIONAL<PA_DATA[]>,
        readonly crealm: Realm,
        readonly cname: PrincipalName,
        readonly ticket: Ticket,
        readonly enc_part: EncryptedData
    ) {}
}
export const _root_component_type_list_1_spec_for_KDC_REP: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pvno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msg-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "padata",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crealm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ticket",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "enc-part",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KDC_REP: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KDC_REP: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KDC_REP: __utils.ASN1Decoder<KDC_REP> | null = null;
let _cached_encoder_for_KDC_REP: __utils.ASN1Encoder<KDC_REP> | null = null;
export function _decode_KDC_REP(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KDC_REP) {
        _cached_decoder_for_KDC_REP = function (el: asn1.ASN1Element): KDC_REP {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pvno!: asn1.INTEGER;
            let msg_type!: asn1.INTEGER;
            let padata: asn1.OPTIONAL<PA_DATA[]>;
            let crealm!: Realm;
            let cname!: PrincipalName;
            let ticket!: Ticket;
            let enc_part!: EncryptedData;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                pvno: (_el: asn1.ASN1Element): void => {
                    pvno = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                "msg-type": (_el: asn1.ASN1Element): void => {
                    msg_type = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                padata: (_el: asn1.ASN1Element): void => {
                    padata = __utils._decode_explicit<PA_DATA[]>(() =>
                        __utils._decodeSequenceOf<PA_DATA>(
                            () => _decode_PA_DATA
                        )
                    )(_el);
                },
                crealm: (_el: asn1.ASN1Element): void => {
                    crealm = __utils._decode_explicit<Realm>(
                        () => _decode_Realm
                    )(_el);
                },
                cname: (_el: asn1.ASN1Element): void => {
                    cname = __utils._decode_explicit<PrincipalName>(
                        () => _decode_PrincipalName
                    )(_el);
                },
                ticket: (_el: asn1.ASN1Element): void => {
                    ticket = __utils._decode_explicit<Ticket>(
                        () => _decode_Ticket
                    )(_el);
                },
                "enc-part": (_el: asn1.ASN1Element): void => {
                    enc_part = __utils._decode_explicit<EncryptedData>(
                        () => _decode_EncryptedData
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KDC_REP,
                _extension_additions_list_spec_for_KDC_REP,
                _root_component_type_list_2_spec_for_KDC_REP,
                undefined
            );
            return new KDC_REP /* SEQUENCE_CONSTRUCTOR_CALL */(
                pvno,
                msg_type,
                padata,
                crealm,
                cname,
                ticket,
                enc_part
            );
        };
    }
    return _cached_decoder_for_KDC_REP(el);
}
export function _encode_KDC_REP(
    value: KDC_REP,
    elGetter: __utils.ASN1Encoder<KDC_REP>
) {
    if (!_cached_encoder_for_KDC_REP) {
        _cached_encoder_for_KDC_REP = function (
            value: KDC_REP,
            elGetter: __utils.ASN1Encoder<KDC_REP>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeInteger,
                            __utils.BER
                        )(value.pvno, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeInteger,
                            __utils.BER
                        )(value.msg_type, __utils.BER),
                        /* IF_ABSENT  */ value.padata === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () =>
                                      __utils._encodeSequenceOf<PA_DATA>(
                                          () => _encode_PA_DATA,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.padata, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            3,
                            () => _encode_Realm,
                            __utils.BER
                        )(value.crealm, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            4,
                            () => _encode_PrincipalName,
                            __utils.BER
                        )(value.cname, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            5,
                            () => _encode_Ticket,
                            __utils.BER
                        )(value.ticket, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            6,
                            () => _encode_EncryptedData,
                            __utils.BER
                        )(value.enc_part, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_KDC_REP(value, elGetter);
}

export type AS_REP = KDC_REP; // DefinedType
let _cached_decoder_for_AS_REP: __utils.ASN1Decoder<AS_REP> | null = null;
let _cached_encoder_for_AS_REP: __utils.ASN1Encoder<AS_REP> | null = null;
export function _decode_AS_REP(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AS_REP) {
        _cached_decoder_for_AS_REP = __utils._decode_explicit<AS_REP>(
            () => _decode_KDC_REP
        );
    }
    return _cached_decoder_for_AS_REP(el);
}
export function _encode_AS_REP(
    value: AS_REP,
    elGetter: __utils.ASN1Encoder<AS_REP>
) {
    if (!_cached_encoder_for_AS_REP) {
        _cached_encoder_for_AS_REP = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            11,
            () => _encode_KDC_REP,
            __utils.BER
        );
    }
    return _cached_encoder_for_AS_REP(value, elGetter);
}

export type TGS_REP = KDC_REP; // DefinedType
let _cached_decoder_for_TGS_REP: __utils.ASN1Decoder<TGS_REP> | null = null;
let _cached_encoder_for_TGS_REP: __utils.ASN1Encoder<TGS_REP> | null = null;
export function _decode_TGS_REP(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TGS_REP) {
        _cached_decoder_for_TGS_REP = __utils._decode_explicit<TGS_REP>(
            () => _decode_KDC_REP
        );
    }
    return _cached_decoder_for_TGS_REP(el);
}
export function _encode_TGS_REP(
    value: TGS_REP,
    elGetter: __utils.ASN1Encoder<TGS_REP>
) {
    if (!_cached_encoder_for_TGS_REP) {
        _cached_encoder_for_TGS_REP = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            13,
            () => _encode_KDC_REP,
            __utils.BER
        );
    }
    return _cached_encoder_for_TGS_REP(value, elGetter);
}

export class LastReq_Item {
    constructor(readonly lr_type: Int32, readonly lr_value: KerberosTime) {}
}
export const _root_component_type_list_1_spec_for_LastReq_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "lr-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lr-value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_LastReq_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_LastReq_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_LastReq_Item: __utils.ASN1Decoder<
    LastReq_Item
> | null = null;
let _cached_encoder_for_LastReq_Item: __utils.ASN1Encoder<
    LastReq_Item
> | null = null;
export function _decode_LastReq_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LastReq_Item) {
        _cached_decoder_for_LastReq_Item = function (
            el: asn1.ASN1Element
        ): LastReq_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "LastReq-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "lr-type";
            sequence[1].name = "lr-value";
            let lr_type!: Int32;
            let lr_value!: KerberosTime;
            lr_type = __utils._decode_explicit<Int32>(() => _decode_Int32)(
                sequence[0]
            );
            lr_value = __utils._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
            )(sequence[1]);
            // TODO: Validate values.
            return new LastReq_Item(lr_type, lr_value);
        };
    }
    return _cached_decoder_for_LastReq_Item(el);
}
export function _encode_LastReq_Item(
    value: LastReq_Item,
    elGetter: __utils.ASN1Encoder<LastReq_Item>
) {
    if (!_cached_encoder_for_LastReq_Item) {
        _cached_encoder_for_LastReq_Item = function (
            value: LastReq_Item,
            elGetter: __utils.ASN1Encoder<LastReq_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.lr_type, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => _encode_KerberosTime,
                            __utils.BER
                        )(value.lr_value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_LastReq_Item(value, elGetter);
}

export type LastReq = LastReq_Item[]; // SequenceOfType
let _cached_decoder_for_LastReq: __utils.ASN1Decoder<LastReq> | null = null;
let _cached_encoder_for_LastReq: __utils.ASN1Encoder<LastReq> | null = null;
export function _decode_LastReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LastReq) {
        _cached_decoder_for_LastReq = __utils._decodeSequenceOf<LastReq_Item>(
            () => _decode_LastReq_Item
        );
    }
    return _cached_decoder_for_LastReq(el);
}
export function _encode_LastReq(
    value: LastReq,
    elGetter: __utils.ASN1Encoder<LastReq>
) {
    if (!_cached_encoder_for_LastReq) {
        _cached_encoder_for_LastReq = __utils._encodeSequenceOf<LastReq_Item>(
            () => _encode_LastReq_Item,
            __utils.BER
        );
    }
    return _cached_encoder_for_LastReq(value, elGetter);
}

export class EncKDCRepPart {
    constructor(
        readonly key: EncryptionKey,
        readonly last_req: LastReq,
        readonly nonce: UInt32,
        readonly key_expiration: asn1.OPTIONAL<KerberosTime>,
        readonly flags: TicketFlags,
        readonly authtime: KerberosTime,
        readonly starttime: asn1.OPTIONAL<KerberosTime>,
        readonly endtime: KerberosTime,
        readonly renew_till: asn1.OPTIONAL<KerberosTime>,
        readonly srealm: Realm,
        readonly sname: PrincipalName,
        readonly caddr: asn1.OPTIONAL<HostAddresses>
    ) {}
}
export const _root_component_type_list_1_spec_for_EncKDCRepPart: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "key",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "last-req",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nonce",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "key-expiration",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "flags",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authtime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "starttime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "endtime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "renew-till",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "srealm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "caddr",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncKDCRepPart: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncKDCRepPart: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncKDCRepPart: __utils.ASN1Decoder<
    EncKDCRepPart
> | null = null;
let _cached_encoder_for_EncKDCRepPart: __utils.ASN1Encoder<
    EncKDCRepPart
> | null = null;
export function _decode_EncKDCRepPart(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncKDCRepPart) {
        _cached_decoder_for_EncKDCRepPart = function (
            el: asn1.ASN1Element
        ): EncKDCRepPart {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let key!: EncryptionKey;
            let last_req!: LastReq;
            let nonce!: UInt32;
            let key_expiration: asn1.OPTIONAL<KerberosTime>;
            let flags!: TicketFlags;
            let authtime!: KerberosTime;
            let starttime: asn1.OPTIONAL<KerberosTime>;
            let endtime!: KerberosTime;
            let renew_till: asn1.OPTIONAL<KerberosTime>;
            let srealm!: Realm;
            let sname!: PrincipalName;
            let caddr: asn1.OPTIONAL<HostAddresses>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                key: (_el: asn1.ASN1Element): void => {
                    key = __utils._decode_explicit<EncryptionKey>(
                        () => _decode_EncryptionKey
                    )(_el);
                },
                "last-req": (_el: asn1.ASN1Element): void => {
                    last_req = __utils._decode_explicit<LastReq>(
                        () => _decode_LastReq
                    )(_el);
                },
                nonce: (_el: asn1.ASN1Element): void => {
                    nonce = __utils._decode_explicit<UInt32>(
                        () => _decode_UInt32
                    )(_el);
                },
                "key-expiration": (_el: asn1.ASN1Element): void => {
                    key_expiration = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                flags: (_el: asn1.ASN1Element): void => {
                    flags = __utils._decode_explicit<TicketFlags>(
                        () => _decode_TicketFlags
                    )(_el);
                },
                authtime: (_el: asn1.ASN1Element): void => {
                    authtime = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                starttime: (_el: asn1.ASN1Element): void => {
                    starttime = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                endtime: (_el: asn1.ASN1Element): void => {
                    endtime = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                "renew-till": (_el: asn1.ASN1Element): void => {
                    renew_till = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                srealm: (_el: asn1.ASN1Element): void => {
                    srealm = __utils._decode_explicit<Realm>(
                        () => _decode_Realm
                    )(_el);
                },
                sname: (_el: asn1.ASN1Element): void => {
                    sname = __utils._decode_explicit<PrincipalName>(
                        () => _decode_PrincipalName
                    )(_el);
                },
                caddr: (_el: asn1.ASN1Element): void => {
                    caddr = __utils._decode_explicit<HostAddresses>(
                        () => _decode_HostAddresses
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncKDCRepPart,
                _extension_additions_list_spec_for_EncKDCRepPart,
                _root_component_type_list_2_spec_for_EncKDCRepPart,
                undefined
            );
            return new EncKDCRepPart /* SEQUENCE_CONSTRUCTOR_CALL */(
                key,
                last_req,
                nonce,
                key_expiration,
                flags,
                authtime,
                starttime,
                endtime,
                renew_till,
                srealm,
                sname,
                caddr
            );
        };
    }
    return _cached_decoder_for_EncKDCRepPart(el);
}
export function _encode_EncKDCRepPart(
    value: EncKDCRepPart,
    elGetter: __utils.ASN1Encoder<EncKDCRepPart>
) {
    if (!_cached_encoder_for_EncKDCRepPart) {
        _cached_encoder_for_EncKDCRepPart = function (
            value: EncKDCRepPart,
            elGetter: __utils.ASN1Encoder<EncKDCRepPart>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_EncryptionKey,
                            __utils.BER
                        )(value.key, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => _encode_LastReq,
                            __utils.BER
                        )(value.last_req, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            2,
                            () => _encode_UInt32,
                            __utils.BER
                        )(value.nonce, __utils.BER),
                        /* IF_ABSENT  */ value.key_expiration === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.key_expiration, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            4,
                            () => _encode_TicketFlags,
                            __utils.BER
                        )(value.flags, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            5,
                            () => _encode_KerberosTime,
                            __utils.BER
                        )(value.authtime, __utils.BER),
                        /* IF_ABSENT  */ value.starttime === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  6,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.starttime, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            7,
                            () => _encode_KerberosTime,
                            __utils.BER
                        )(value.endtime, __utils.BER),
                        /* IF_ABSENT  */ value.renew_till === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  8,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.renew_till, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            9,
                            () => _encode_Realm,
                            __utils.BER
                        )(value.srealm, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            10,
                            () => _encode_PrincipalName,
                            __utils.BER
                        )(value.sname, __utils.BER),
                        /* IF_ABSENT  */ value.caddr === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  11,
                                  () => _encode_HostAddresses,
                                  __utils.BER
                              )(value.caddr, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncKDCRepPart(value, elGetter);
}

export type EncASRepPart = EncKDCRepPart; // DefinedType
let _cached_decoder_for_EncASRepPart: __utils.ASN1Decoder<
    EncASRepPart
> | null = null;
let _cached_encoder_for_EncASRepPart: __utils.ASN1Encoder<
    EncASRepPart
> | null = null;
export function _decode_EncASRepPart(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncASRepPart) {
        _cached_decoder_for_EncASRepPart = __utils._decode_explicit<
            EncASRepPart
        >(() => _decode_EncKDCRepPart);
    }
    return _cached_decoder_for_EncASRepPart(el);
}
export function _encode_EncASRepPart(
    value: EncASRepPart,
    elGetter: __utils.ASN1Encoder<EncASRepPart>
) {
    if (!_cached_encoder_for_EncASRepPart) {
        _cached_encoder_for_EncASRepPart = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            25,
            () => _encode_EncKDCRepPart,
            __utils.BER
        );
    }
    return _cached_encoder_for_EncASRepPart(value, elGetter);
}

export type EncTGSRepPart = EncKDCRepPart; // DefinedType
let _cached_decoder_for_EncTGSRepPart: __utils.ASN1Decoder<
    EncTGSRepPart
> | null = null;
let _cached_encoder_for_EncTGSRepPart: __utils.ASN1Encoder<
    EncTGSRepPart
> | null = null;
export function _decode_EncTGSRepPart(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncTGSRepPart) {
        _cached_decoder_for_EncTGSRepPart = __utils._decode_explicit<
            EncTGSRepPart
        >(() => _decode_EncKDCRepPart);
    }
    return _cached_decoder_for_EncTGSRepPart(el);
}
export function _encode_EncTGSRepPart(
    value: EncTGSRepPart,
    elGetter: __utils.ASN1Encoder<EncTGSRepPart>
) {
    if (!_cached_encoder_for_EncTGSRepPart) {
        _cached_encoder_for_EncTGSRepPart = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            26,
            () => _encode_EncKDCRepPart,
            __utils.BER
        );
    }
    return _cached_encoder_for_EncTGSRepPart(value, elGetter);
}

export type APOptions = KerberosFlags; // DefinedType
let _cached_decoder_for_APOptions: __utils.ASN1Decoder<APOptions> | null = null;
let _cached_encoder_for_APOptions: __utils.ASN1Encoder<APOptions> | null = null;
export function _decode_APOptions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_APOptions) {
        _cached_decoder_for_APOptions = _decode_KerberosFlags;
    }
    return _cached_decoder_for_APOptions(el);
}
export function _encode_APOptions(
    value: APOptions,
    elGetter: __utils.ASN1Encoder<APOptions>
) {
    if (!_cached_encoder_for_APOptions) {
        _cached_encoder_for_APOptions = _encode_KerberosFlags;
    }
    return _cached_encoder_for_APOptions(value, elGetter);
}

export class AP_REQ {
    constructor(
        readonly pvno: asn1.INTEGER,
        readonly msg_type: asn1.INTEGER,
        readonly ap_options: APOptions,
        readonly ticket: Ticket,
        readonly authenticator: EncryptedData
    ) {}
}
export const _root_component_type_list_1_spec_for_AP_REQ: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pvno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msg-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ap-options",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ticket",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authenticator",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AP_REQ: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AP_REQ: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AP_REQ: __utils.ASN1Decoder<AP_REQ> | null = null;
let _cached_encoder_for_AP_REQ: __utils.ASN1Encoder<AP_REQ> | null = null;
export function _decode_AP_REQ(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AP_REQ) {
        _cached_decoder_for_AP_REQ = __utils._decode_explicit<AP_REQ>(
            () =>
                function (el: asn1.ASN1Element): AP_REQ {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 5) {
                        throw new asn1.ASN1ConstructionError(
                            "AP-REQ contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    // TODO: Validate tags.
                    sequence[0].name = "pvno";
                    sequence[1].name = "msg-type";
                    sequence[2].name = "ap-options";
                    sequence[3].name = "ticket";
                    sequence[4].name = "authenticator";
                    let pvno!: asn1.INTEGER;
                    let msg_type!: asn1.INTEGER;
                    let ap_options!: APOptions;
                    let ticket!: Ticket;
                    let authenticator!: EncryptedData;
                    pvno = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[0]);
                    msg_type = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[1]);
                    ap_options = __utils._decode_explicit<APOptions>(
                        () => _decode_APOptions
                    )(sequence[2]);
                    ticket = __utils._decode_explicit<Ticket>(
                        () => _decode_Ticket
                    )(sequence[3]);
                    authenticator = __utils._decode_explicit<EncryptedData>(
                        () => _decode_EncryptedData
                    )(sequence[4]);
                    // TODO: Validate values.
                    return new AP_REQ(
                        pvno,
                        msg_type,
                        ap_options,
                        ticket,
                        authenticator
                    );
                }
        );
    }
    return _cached_decoder_for_AP_REQ(el);
}
export function _encode_AP_REQ(
    value: AP_REQ,
    elGetter: __utils.ASN1Encoder<AP_REQ>
) {
    if (!_cached_encoder_for_AP_REQ) {
        _cached_encoder_for_AP_REQ = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            14,
            () =>
                function (
                    value: AP_REQ,
                    elGetter: __utils.ASN1Encoder<AP_REQ>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.pvno, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.msg_type, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    2,
                                    () => _encode_APOptions,
                                    __utils.BER
                                )(value.ap_options, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    3,
                                    () => _encode_Ticket,
                                    __utils.BER
                                )(value.ticket, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    4,
                                    () => _encode_EncryptedData,
                                    __utils.BER
                                )(value.authenticator, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_AP_REQ(value, elGetter);
}

export class Checksum {
    constructor(
        readonly cksumtype: Int32,
        readonly checksum: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_Checksum: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "cksumtype",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "checksum",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Checksum: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Checksum: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Checksum: __utils.ASN1Decoder<Checksum> | null = null;
let _cached_encoder_for_Checksum: __utils.ASN1Encoder<Checksum> | null = null;
export function _decode_Checksum(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Checksum) {
        _cached_decoder_for_Checksum = function (
            el: asn1.ASN1Element
        ): Checksum {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "Checksum contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "cksumtype";
            sequence[1].name = "checksum";
            let cksumtype!: Int32;
            let checksum!: asn1.OCTET_STRING;
            cksumtype = __utils._decode_explicit<Int32>(() => _decode_Int32)(
                sequence[0]
            );
            checksum = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(sequence[1]);
            // TODO: Validate values.
            return new Checksum(cksumtype, checksum);
        };
    }
    return _cached_decoder_for_Checksum(el);
}
export function _encode_Checksum(
    value: Checksum,
    elGetter: __utils.ASN1Encoder<Checksum>
) {
    if (!_cached_encoder_for_Checksum) {
        _cached_encoder_for_Checksum = function (
            value: Checksum,
            elGetter: __utils.ASN1Encoder<Checksum>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.cksumtype, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeOctetString,
                            __utils.BER
                        )(value.checksum, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Checksum(value, elGetter);
}

export type Microseconds = asn1.INTEGER;
let _cached_decoder_for_Microseconds: __utils.ASN1Decoder<
    Microseconds
> | null = null;
let _cached_encoder_for_Microseconds: __utils.ASN1Encoder<
    Microseconds
> | null = null;
export function _decode_Microseconds(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Microseconds) {
        _cached_decoder_for_Microseconds = __utils._decodeInteger;
    }
    return _cached_decoder_for_Microseconds(el);
}
export function _encode_Microseconds(
    value: Microseconds,
    elGetter: __utils.ASN1Encoder<Microseconds>
) {
    if (!_cached_encoder_for_Microseconds) {
        _cached_encoder_for_Microseconds = __utils._encodeInteger;
    }
    return _cached_encoder_for_Microseconds(value, elGetter);
}

export class Authenticator {
    constructor(
        readonly authenticator_vno: asn1.INTEGER,
        readonly crealm: Realm,
        readonly cname: PrincipalName,
        readonly cksum: asn1.OPTIONAL<Checksum>,
        readonly cusec: Microseconds,
        readonly ctime: KerberosTime,
        readonly subkey: asn1.OPTIONAL<EncryptionKey>,
        readonly seq_number: asn1.OPTIONAL<UInt32>,
        readonly authorization_data: asn1.OPTIONAL<AuthorizationData>
    ) {}
}
export const _root_component_type_list_1_spec_for_Authenticator: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "authenticator-vno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crealm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cksum",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cusec",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ctime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subkey",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "seq-number",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authorization-data",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Authenticator: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Authenticator: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Authenticator: __utils.ASN1Decoder<
    Authenticator
> | null = null;
let _cached_encoder_for_Authenticator: __utils.ASN1Encoder<
    Authenticator
> | null = null;
export function _decode_Authenticator(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Authenticator) {
        _cached_decoder_for_Authenticator = __utils._decode_explicit<
            Authenticator
        >(
            () =>
                function (el: asn1.ASN1Element): Authenticator {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let authenticator_vno!: asn1.INTEGER;
                    let crealm!: Realm;
                    let cname!: PrincipalName;
                    let cksum: asn1.OPTIONAL<Checksum>;
                    let cusec!: Microseconds;
                    let ctime!: KerberosTime;
                    let subkey: asn1.OPTIONAL<EncryptionKey>;
                    let seq_number: asn1.OPTIONAL<UInt32>;
                    let authorization_data: asn1.OPTIONAL<AuthorizationData>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        "authenticator-vno": (_el: asn1.ASN1Element): void => {
                            authenticator_vno = __utils._decode_explicit<
                                asn1.INTEGER
                            >(() => __utils._decodeInteger)(_el);
                        },
                        crealm: (_el: asn1.ASN1Element): void => {
                            crealm = __utils._decode_explicit<Realm>(
                                () => _decode_Realm
                            )(_el);
                        },
                        cname: (_el: asn1.ASN1Element): void => {
                            cname = __utils._decode_explicit<PrincipalName>(
                                () => _decode_PrincipalName
                            )(_el);
                        },
                        cksum: (_el: asn1.ASN1Element): void => {
                            cksum = __utils._decode_explicit<Checksum>(
                                () => _decode_Checksum
                            )(_el);
                        },
                        cusec: (_el: asn1.ASN1Element): void => {
                            cusec = __utils._decode_explicit<Microseconds>(
                                () => _decode_Microseconds
                            )(_el);
                        },
                        ctime: (_el: asn1.ASN1Element): void => {
                            ctime = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        subkey: (_el: asn1.ASN1Element): void => {
                            subkey = __utils._decode_explicit<EncryptionKey>(
                                () => _decode_EncryptionKey
                            )(_el);
                        },
                        "seq-number": (_el: asn1.ASN1Element): void => {
                            seq_number = __utils._decode_explicit<UInt32>(
                                () => _decode_UInt32
                            )(_el);
                        },
                        "authorization-data": (_el: asn1.ASN1Element): void => {
                            authorization_data = __utils._decode_explicit<
                                AuthorizationData
                            >(() => _decode_AuthorizationData)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_Authenticator,
                        _extension_additions_list_spec_for_Authenticator,
                        _root_component_type_list_2_spec_for_Authenticator,
                        undefined
                    );
                    return new Authenticator /* SEQUENCE_CONSTRUCTOR_CALL */(
                        authenticator_vno,
                        crealm,
                        cname,
                        cksum,
                        cusec,
                        ctime,
                        subkey,
                        seq_number,
                        authorization_data
                    );
                }
        );
    }
    return _cached_decoder_for_Authenticator(el);
}
export function _encode_Authenticator(
    value: Authenticator,
    elGetter: __utils.ASN1Encoder<Authenticator>
) {
    if (!_cached_encoder_for_Authenticator) {
        _cached_encoder_for_Authenticator = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            2,
            () =>
                function (
                    value: Authenticator,
                    elGetter: __utils.ASN1Encoder<Authenticator>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.authenticator_vno, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => _encode_Realm,
                                    __utils.BER
                                )(value.crealm, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    2,
                                    () => _encode_PrincipalName,
                                    __utils.BER
                                )(value.cname, __utils.BER),
                                /* IF_ABSENT  */ value.cksum === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          3,
                                          () => _encode_Checksum,
                                          __utils.BER
                                      )(value.cksum, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    4,
                                    () => _encode_Microseconds,
                                    __utils.BER
                                )(value.cusec, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    5,
                                    () => _encode_KerberosTime,
                                    __utils.BER
                                )(value.ctime, __utils.BER),
                                /* IF_ABSENT  */ value.subkey === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          6,
                                          () => _encode_EncryptionKey,
                                          __utils.BER
                                      )(value.subkey, __utils.BER),
                                /* IF_ABSENT  */ value.seq_number === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          7,
                                          () => _encode_UInt32,
                                          __utils.BER
                                      )(value.seq_number, __utils.BER),
                                /* IF_ABSENT  */ value.authorization_data ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          8,
                                          () => _encode_AuthorizationData,
                                          __utils.BER
                                      )(value.authorization_data, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_Authenticator(value, elGetter);
}

export class AP_REP {
    constructor(
        readonly pvno: asn1.INTEGER,
        readonly msg_type: asn1.INTEGER,
        readonly enc_part: EncryptedData
    ) {}
}
export const _root_component_type_list_1_spec_for_AP_REP: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pvno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msg-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "enc-part",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AP_REP: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AP_REP: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AP_REP: __utils.ASN1Decoder<AP_REP> | null = null;
let _cached_encoder_for_AP_REP: __utils.ASN1Encoder<AP_REP> | null = null;
export function _decode_AP_REP(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AP_REP) {
        _cached_decoder_for_AP_REP = __utils._decode_explicit<AP_REP>(
            () =>
                function (el: asn1.ASN1Element): AP_REP {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 3) {
                        throw new asn1.ASN1ConstructionError(
                            "AP-REP contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    // TODO: Validate tags.
                    sequence[0].name = "pvno";
                    sequence[1].name = "msg-type";
                    sequence[2].name = "enc-part";
                    let pvno!: asn1.INTEGER;
                    let msg_type!: asn1.INTEGER;
                    let enc_part!: EncryptedData;
                    pvno = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[0]);
                    msg_type = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[1]);
                    enc_part = __utils._decode_explicit<EncryptedData>(
                        () => _decode_EncryptedData
                    )(sequence[2]);
                    // TODO: Validate values.
                    return new AP_REP(pvno, msg_type, enc_part);
                }
        );
    }
    return _cached_decoder_for_AP_REP(el);
}
export function _encode_AP_REP(
    value: AP_REP,
    elGetter: __utils.ASN1Encoder<AP_REP>
) {
    if (!_cached_encoder_for_AP_REP) {
        _cached_encoder_for_AP_REP = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            15,
            () =>
                function (
                    value: AP_REP,
                    elGetter: __utils.ASN1Encoder<AP_REP>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.pvno, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.msg_type, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    2,
                                    () => _encode_EncryptedData,
                                    __utils.BER
                                )(value.enc_part, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_AP_REP(value, elGetter);
}

export class EncAPRepPart {
    constructor(
        readonly ctime: KerberosTime,
        readonly cusec: Microseconds,
        readonly subkey: asn1.OPTIONAL<EncryptionKey>,
        readonly seq_number: asn1.OPTIONAL<UInt32>
    ) {}
}
export const _root_component_type_list_1_spec_for_EncAPRepPart: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ctime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cusec",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subkey",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "seq-number",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncAPRepPart: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncAPRepPart: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncAPRepPart: __utils.ASN1Decoder<
    EncAPRepPart
> | null = null;
let _cached_encoder_for_EncAPRepPart: __utils.ASN1Encoder<
    EncAPRepPart
> | null = null;
export function _decode_EncAPRepPart(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncAPRepPart) {
        _cached_decoder_for_EncAPRepPart = __utils._decode_explicit<
            EncAPRepPart
        >(
            () =>
                function (el: asn1.ASN1Element): EncAPRepPart {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let ctime!: KerberosTime;
                    let cusec!: Microseconds;
                    let subkey: asn1.OPTIONAL<EncryptionKey>;
                    let seq_number: asn1.OPTIONAL<UInt32>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        ctime: (_el: asn1.ASN1Element): void => {
                            ctime = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        cusec: (_el: asn1.ASN1Element): void => {
                            cusec = __utils._decode_explicit<Microseconds>(
                                () => _decode_Microseconds
                            )(_el);
                        },
                        subkey: (_el: asn1.ASN1Element): void => {
                            subkey = __utils._decode_explicit<EncryptionKey>(
                                () => _decode_EncryptionKey
                            )(_el);
                        },
                        "seq-number": (_el: asn1.ASN1Element): void => {
                            seq_number = __utils._decode_explicit<UInt32>(
                                () => _decode_UInt32
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_EncAPRepPart,
                        _extension_additions_list_spec_for_EncAPRepPart,
                        _root_component_type_list_2_spec_for_EncAPRepPart,
                        undefined
                    );
                    return new EncAPRepPart /* SEQUENCE_CONSTRUCTOR_CALL */(
                        ctime,
                        cusec,
                        subkey,
                        seq_number
                    );
                }
        );
    }
    return _cached_decoder_for_EncAPRepPart(el);
}
export function _encode_EncAPRepPart(
    value: EncAPRepPart,
    elGetter: __utils.ASN1Encoder<EncAPRepPart>
) {
    if (!_cached_encoder_for_EncAPRepPart) {
        _cached_encoder_for_EncAPRepPart = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            27,
            () =>
                function (
                    value: EncAPRepPart,
                    elGetter: __utils.ASN1Encoder<EncAPRepPart>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => _encode_KerberosTime,
                                    __utils.BER
                                )(value.ctime, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => _encode_Microseconds,
                                    __utils.BER
                                )(value.cusec, __utils.BER),
                                /* IF_ABSENT  */ value.subkey === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          2,
                                          () => _encode_EncryptionKey,
                                          __utils.BER
                                      )(value.subkey, __utils.BER),
                                /* IF_ABSENT  */ value.seq_number === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          3,
                                          () => _encode_UInt32,
                                          __utils.BER
                                      )(value.seq_number, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_EncAPRepPart(value, elGetter);
}

export class KRB_SAFE_BODY {
    constructor(
        readonly user_data: asn1.OCTET_STRING,
        readonly timestamp: asn1.OPTIONAL<KerberosTime>,
        readonly usec: asn1.OPTIONAL<Microseconds>,
        readonly seq_number: asn1.OPTIONAL<UInt32>,
        readonly s_address: HostAddress,
        readonly r_address: asn1.OPTIONAL<HostAddress>
    ) {}
}
export const _root_component_type_list_1_spec_for_KRB_SAFE_BODY: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "user-data",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timestamp",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "usec",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "seq-number",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "s-address",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "r-address",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KRB_SAFE_BODY: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KRB_SAFE_BODY: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KRB_SAFE_BODY: __utils.ASN1Decoder<
    KRB_SAFE_BODY
> | null = null;
let _cached_encoder_for_KRB_SAFE_BODY: __utils.ASN1Encoder<
    KRB_SAFE_BODY
> | null = null;
export function _decode_KRB_SAFE_BODY(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KRB_SAFE_BODY) {
        _cached_decoder_for_KRB_SAFE_BODY = function (
            el: asn1.ASN1Element
        ): KRB_SAFE_BODY {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let user_data!: asn1.OCTET_STRING;
            let timestamp: asn1.OPTIONAL<KerberosTime>;
            let usec: asn1.OPTIONAL<Microseconds>;
            let seq_number: asn1.OPTIONAL<UInt32>;
            let s_address!: HostAddress;
            let r_address: asn1.OPTIONAL<HostAddress>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "user-data": (_el: asn1.ASN1Element): void => {
                    user_data = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                timestamp: (_el: asn1.ASN1Element): void => {
                    timestamp = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                usec: (_el: asn1.ASN1Element): void => {
                    usec = __utils._decode_explicit<Microseconds>(
                        () => _decode_Microseconds
                    )(_el);
                },
                "seq-number": (_el: asn1.ASN1Element): void => {
                    seq_number = __utils._decode_explicit<UInt32>(
                        () => _decode_UInt32
                    )(_el);
                },
                "s-address": (_el: asn1.ASN1Element): void => {
                    s_address = __utils._decode_explicit<HostAddress>(
                        () => _decode_HostAddress
                    )(_el);
                },
                "r-address": (_el: asn1.ASN1Element): void => {
                    r_address = __utils._decode_explicit<HostAddress>(
                        () => _decode_HostAddress
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KRB_SAFE_BODY,
                _extension_additions_list_spec_for_KRB_SAFE_BODY,
                _root_component_type_list_2_spec_for_KRB_SAFE_BODY,
                undefined
            );
            return new KRB_SAFE_BODY /* SEQUENCE_CONSTRUCTOR_CALL */(
                user_data,
                timestamp,
                usec,
                seq_number,
                s_address,
                r_address
            );
        };
    }
    return _cached_decoder_for_KRB_SAFE_BODY(el);
}
export function _encode_KRB_SAFE_BODY(
    value: KRB_SAFE_BODY,
    elGetter: __utils.ASN1Encoder<KRB_SAFE_BODY>
) {
    if (!_cached_encoder_for_KRB_SAFE_BODY) {
        _cached_encoder_for_KRB_SAFE_BODY = function (
            value: KRB_SAFE_BODY,
            elGetter: __utils.ASN1Encoder<KRB_SAFE_BODY>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeOctetString,
                            __utils.BER
                        )(value.user_data, __utils.BER),
                        /* IF_ABSENT  */ value.timestamp === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.timestamp, __utils.BER),
                        /* IF_ABSENT  */ value.usec === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_Microseconds,
                                  __utils.BER
                              )(value.usec, __utils.BER),
                        /* IF_ABSENT  */ value.seq_number === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_UInt32,
                                  __utils.BER
                              )(value.seq_number, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            4,
                            () => _encode_HostAddress,
                            __utils.BER
                        )(value.s_address, __utils.BER),
                        /* IF_ABSENT  */ value.r_address === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  5,
                                  () => _encode_HostAddress,
                                  __utils.BER
                              )(value.r_address, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_KRB_SAFE_BODY(value, elGetter);
}

export class KRB_SAFE {
    constructor(
        readonly pvno: asn1.INTEGER,
        readonly msg_type: asn1.INTEGER,
        readonly safe_body: KRB_SAFE_BODY,
        readonly cksum: Checksum
    ) {}
}
export const _root_component_type_list_1_spec_for_KRB_SAFE: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pvno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msg-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "safe-body",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cksum",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KRB_SAFE: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KRB_SAFE: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KRB_SAFE: __utils.ASN1Decoder<KRB_SAFE> | null = null;
let _cached_encoder_for_KRB_SAFE: __utils.ASN1Encoder<KRB_SAFE> | null = null;
export function _decode_KRB_SAFE(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KRB_SAFE) {
        _cached_decoder_for_KRB_SAFE = __utils._decode_explicit<KRB_SAFE>(
            () =>
                function (el: asn1.ASN1Element): KRB_SAFE {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 4) {
                        throw new asn1.ASN1ConstructionError(
                            "KRB-SAFE contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    // TODO: Validate tags.
                    sequence[0].name = "pvno";
                    sequence[1].name = "msg-type";
                    sequence[2].name = "safe-body";
                    sequence[3].name = "cksum";
                    let pvno!: asn1.INTEGER;
                    let msg_type!: asn1.INTEGER;
                    let safe_body!: KRB_SAFE_BODY;
                    let cksum!: Checksum;
                    pvno = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[0]);
                    msg_type = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[1]);
                    safe_body = __utils._decode_explicit<KRB_SAFE_BODY>(
                        () => _decode_KRB_SAFE_BODY
                    )(sequence[2]);
                    cksum = __utils._decode_explicit<Checksum>(
                        () => _decode_Checksum
                    )(sequence[3]);
                    // TODO: Validate values.
                    return new KRB_SAFE(pvno, msg_type, safe_body, cksum);
                }
        );
    }
    return _cached_decoder_for_KRB_SAFE(el);
}
export function _encode_KRB_SAFE(
    value: KRB_SAFE,
    elGetter: __utils.ASN1Encoder<KRB_SAFE>
) {
    if (!_cached_encoder_for_KRB_SAFE) {
        _cached_encoder_for_KRB_SAFE = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            20,
            () =>
                function (
                    value: KRB_SAFE,
                    elGetter: __utils.ASN1Encoder<KRB_SAFE>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.pvno, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.msg_type, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    2,
                                    () => _encode_KRB_SAFE_BODY,
                                    __utils.BER
                                )(value.safe_body, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    3,
                                    () => _encode_Checksum,
                                    __utils.BER
                                )(value.cksum, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_KRB_SAFE(value, elGetter);
}

export class KRB_PRIV {
    constructor(
        readonly pvno: asn1.INTEGER,
        readonly msg_type: asn1.INTEGER,
        readonly enc_part: EncryptedData
    ) {}
}
export const _root_component_type_list_1_spec_for_KRB_PRIV: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pvno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msg-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "enc-part",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KRB_PRIV: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KRB_PRIV: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KRB_PRIV: __utils.ASN1Decoder<KRB_PRIV> | null = null;
let _cached_encoder_for_KRB_PRIV: __utils.ASN1Encoder<KRB_PRIV> | null = null;
export function _decode_KRB_PRIV(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KRB_PRIV) {
        _cached_decoder_for_KRB_PRIV = __utils._decode_explicit<KRB_PRIV>(
            () =>
                function (el: asn1.ASN1Element): KRB_PRIV {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 3) {
                        throw new asn1.ASN1ConstructionError(
                            "KRB-PRIV contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    // TODO: Validate tags.
                    sequence[0].name = "pvno";
                    sequence[1].name = "msg-type";
                    sequence[2].name = "enc-part";
                    let pvno!: asn1.INTEGER;
                    let msg_type!: asn1.INTEGER;
                    let enc_part!: EncryptedData;
                    pvno = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[0]);
                    msg_type = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[1]);
                    enc_part = __utils._decode_explicit<EncryptedData>(
                        () => _decode_EncryptedData
                    )(sequence[2]);
                    // TODO: Validate values.
                    return new KRB_PRIV(pvno, msg_type, enc_part);
                }
        );
    }
    return _cached_decoder_for_KRB_PRIV(el);
}
export function _encode_KRB_PRIV(
    value: KRB_PRIV,
    elGetter: __utils.ASN1Encoder<KRB_PRIV>
) {
    if (!_cached_encoder_for_KRB_PRIV) {
        _cached_encoder_for_KRB_PRIV = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            21,
            () =>
                function (
                    value: KRB_PRIV,
                    elGetter: __utils.ASN1Encoder<KRB_PRIV>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.pvno, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.msg_type, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    3,
                                    () => _encode_EncryptedData,
                                    __utils.BER
                                )(value.enc_part, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_KRB_PRIV(value, elGetter);
}

export class EncKrbPrivPart {
    constructor(
        readonly user_data: asn1.OCTET_STRING,
        readonly timestamp: asn1.OPTIONAL<KerberosTime>,
        readonly usec: asn1.OPTIONAL<Microseconds>,
        readonly seq_number: asn1.OPTIONAL<UInt32>,
        readonly s_address: HostAddress,
        readonly r_address: asn1.OPTIONAL<HostAddress>
    ) {}
}
export const _root_component_type_list_1_spec_for_EncKrbPrivPart: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "user-data",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timestamp",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "usec",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "seq-number",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "s-address",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "r-address",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncKrbPrivPart: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncKrbPrivPart: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncKrbPrivPart: __utils.ASN1Decoder<
    EncKrbPrivPart
> | null = null;
let _cached_encoder_for_EncKrbPrivPart: __utils.ASN1Encoder<
    EncKrbPrivPart
> | null = null;
export function _decode_EncKrbPrivPart(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncKrbPrivPart) {
        _cached_decoder_for_EncKrbPrivPart = __utils._decode_explicit<
            EncKrbPrivPart
        >(
            () =>
                function (el: asn1.ASN1Element): EncKrbPrivPart {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let user_data!: asn1.OCTET_STRING;
                    let timestamp: asn1.OPTIONAL<KerberosTime>;
                    let usec: asn1.OPTIONAL<Microseconds>;
                    let seq_number: asn1.OPTIONAL<UInt32>;
                    let s_address!: HostAddress;
                    let r_address: asn1.OPTIONAL<HostAddress>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        "user-data": (_el: asn1.ASN1Element): void => {
                            user_data = __utils._decode_explicit<
                                asn1.OCTET_STRING
                            >(() => __utils._decodeOctetString)(_el);
                        },
                        timestamp: (_el: asn1.ASN1Element): void => {
                            timestamp = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        usec: (_el: asn1.ASN1Element): void => {
                            usec = __utils._decode_explicit<Microseconds>(
                                () => _decode_Microseconds
                            )(_el);
                        },
                        "seq-number": (_el: asn1.ASN1Element): void => {
                            seq_number = __utils._decode_explicit<UInt32>(
                                () => _decode_UInt32
                            )(_el);
                        },
                        "s-address": (_el: asn1.ASN1Element): void => {
                            s_address = __utils._decode_explicit<HostAddress>(
                                () => _decode_HostAddress
                            )(_el);
                        },
                        "r-address": (_el: asn1.ASN1Element): void => {
                            r_address = __utils._decode_explicit<HostAddress>(
                                () => _decode_HostAddress
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_EncKrbPrivPart,
                        _extension_additions_list_spec_for_EncKrbPrivPart,
                        _root_component_type_list_2_spec_for_EncKrbPrivPart,
                        undefined
                    );
                    return new EncKrbPrivPart /* SEQUENCE_CONSTRUCTOR_CALL */(
                        user_data,
                        timestamp,
                        usec,
                        seq_number,
                        s_address,
                        r_address
                    );
                }
        );
    }
    return _cached_decoder_for_EncKrbPrivPart(el);
}
export function _encode_EncKrbPrivPart(
    value: EncKrbPrivPart,
    elGetter: __utils.ASN1Encoder<EncKrbPrivPart>
) {
    if (!_cached_encoder_for_EncKrbPrivPart) {
        _cached_encoder_for_EncKrbPrivPart = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            28,
            () =>
                function (
                    value: EncKrbPrivPart,
                    elGetter: __utils.ASN1Encoder<EncKrbPrivPart>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => __utils._encodeOctetString,
                                    __utils.BER
                                )(value.user_data, __utils.BER),
                                /* IF_ABSENT  */ value.timestamp === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          1,
                                          () => _encode_KerberosTime,
                                          __utils.BER
                                      )(value.timestamp, __utils.BER),
                                /* IF_ABSENT  */ value.usec === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          2,
                                          () => _encode_Microseconds,
                                          __utils.BER
                                      )(value.usec, __utils.BER),
                                /* IF_ABSENT  */ value.seq_number === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          3,
                                          () => _encode_UInt32,
                                          __utils.BER
                                      )(value.seq_number, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    4,
                                    () => _encode_HostAddress,
                                    __utils.BER
                                )(value.s_address, __utils.BER),
                                /* IF_ABSENT  */ value.r_address === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          5,
                                          () => _encode_HostAddress,
                                          __utils.BER
                                      )(value.r_address, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_EncKrbPrivPart(value, elGetter);
}

export class KRB_CRED {
    constructor(
        readonly pvno: asn1.INTEGER,
        readonly msg_type: asn1.INTEGER,
        readonly tickets: Ticket[],
        readonly enc_part: EncryptedData
    ) {}
}
export const _root_component_type_list_1_spec_for_KRB_CRED: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pvno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msg-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tickets",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "enc-part",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KRB_CRED: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KRB_CRED: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KRB_CRED: __utils.ASN1Decoder<KRB_CRED> | null = null;
let _cached_encoder_for_KRB_CRED: __utils.ASN1Encoder<KRB_CRED> | null = null;
export function _decode_KRB_CRED(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KRB_CRED) {
        _cached_decoder_for_KRB_CRED = __utils._decode_explicit<KRB_CRED>(
            () =>
                function (el: asn1.ASN1Element): KRB_CRED {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 4) {
                        throw new asn1.ASN1ConstructionError(
                            "KRB-CRED contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    // TODO: Validate tags.
                    sequence[0].name = "pvno";
                    sequence[1].name = "msg-type";
                    sequence[2].name = "tickets";
                    sequence[3].name = "enc-part";
                    let pvno!: asn1.INTEGER;
                    let msg_type!: asn1.INTEGER;
                    let tickets!: Ticket[];
                    let enc_part!: EncryptedData;
                    pvno = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[0]);
                    msg_type = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(sequence[1]);
                    tickets = __utils._decode_explicit<Ticket[]>(() =>
                        __utils._decodeSequenceOf<Ticket>(() => _decode_Ticket)
                    )(sequence[2]);
                    enc_part = __utils._decode_explicit<EncryptedData>(
                        () => _decode_EncryptedData
                    )(sequence[3]);
                    // TODO: Validate values.
                    return new KRB_CRED(pvno, msg_type, tickets, enc_part);
                }
        );
    }
    return _cached_decoder_for_KRB_CRED(el);
}
export function _encode_KRB_CRED(
    value: KRB_CRED,
    elGetter: __utils.ASN1Encoder<KRB_CRED>
) {
    if (!_cached_encoder_for_KRB_CRED) {
        _cached_encoder_for_KRB_CRED = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            22,
            () =>
                function (
                    value: KRB_CRED,
                    elGetter: __utils.ASN1Encoder<KRB_CRED>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.pvno, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.msg_type, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    2,
                                    () =>
                                        __utils._encodeSequenceOf<Ticket>(
                                            () => _encode_Ticket,
                                            __utils.BER
                                        ),
                                    __utils.BER
                                )(value.tickets, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    3,
                                    () => _encode_EncryptedData,
                                    __utils.BER
                                )(value.enc_part, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_KRB_CRED(value, elGetter);
}

export class KrbCredInfo {
    constructor(
        readonly key: EncryptionKey,
        readonly prealm: asn1.OPTIONAL<Realm>,
        readonly pname: asn1.OPTIONAL<PrincipalName>,
        readonly flags: asn1.OPTIONAL<TicketFlags>,
        readonly authtime: asn1.OPTIONAL<KerberosTime>,
        readonly starttime: asn1.OPTIONAL<KerberosTime>,
        readonly endtime: asn1.OPTIONAL<KerberosTime>,
        readonly renew_till: asn1.OPTIONAL<KerberosTime>,
        readonly srealm: asn1.OPTIONAL<Realm>,
        readonly sname: asn1.OPTIONAL<PrincipalName>,
        readonly caddr: asn1.OPTIONAL<HostAddresses>
    ) {}
}
export const _root_component_type_list_1_spec_for_KrbCredInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "key",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "prealm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pname",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "flags",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authtime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "starttime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "endtime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "renew-till",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "srealm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sname",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "caddr",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KrbCredInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KrbCredInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KrbCredInfo: __utils.ASN1Decoder<
    KrbCredInfo
> | null = null;
let _cached_encoder_for_KrbCredInfo: __utils.ASN1Encoder<
    KrbCredInfo
> | null = null;
export function _decode_KrbCredInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KrbCredInfo) {
        _cached_decoder_for_KrbCredInfo = function (
            el: asn1.ASN1Element
        ): KrbCredInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let key!: EncryptionKey;
            let prealm: asn1.OPTIONAL<Realm>;
            let pname: asn1.OPTIONAL<PrincipalName>;
            let flags: asn1.OPTIONAL<TicketFlags>;
            let authtime: asn1.OPTIONAL<KerberosTime>;
            let starttime: asn1.OPTIONAL<KerberosTime>;
            let endtime: asn1.OPTIONAL<KerberosTime>;
            let renew_till: asn1.OPTIONAL<KerberosTime>;
            let srealm: asn1.OPTIONAL<Realm>;
            let sname: asn1.OPTIONAL<PrincipalName>;
            let caddr: asn1.OPTIONAL<HostAddresses>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                key: (_el: asn1.ASN1Element): void => {
                    key = __utils._decode_explicit<EncryptionKey>(
                        () => _decode_EncryptionKey
                    )(_el);
                },
                prealm: (_el: asn1.ASN1Element): void => {
                    prealm = __utils._decode_explicit<Realm>(
                        () => _decode_Realm
                    )(_el);
                },
                pname: (_el: asn1.ASN1Element): void => {
                    pname = __utils._decode_explicit<PrincipalName>(
                        () => _decode_PrincipalName
                    )(_el);
                },
                flags: (_el: asn1.ASN1Element): void => {
                    flags = __utils._decode_explicit<TicketFlags>(
                        () => _decode_TicketFlags
                    )(_el);
                },
                authtime: (_el: asn1.ASN1Element): void => {
                    authtime = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                starttime: (_el: asn1.ASN1Element): void => {
                    starttime = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                endtime: (_el: asn1.ASN1Element): void => {
                    endtime = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                "renew-till": (_el: asn1.ASN1Element): void => {
                    renew_till = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                srealm: (_el: asn1.ASN1Element): void => {
                    srealm = __utils._decode_explicit<Realm>(
                        () => _decode_Realm
                    )(_el);
                },
                sname: (_el: asn1.ASN1Element): void => {
                    sname = __utils._decode_explicit<PrincipalName>(
                        () => _decode_PrincipalName
                    )(_el);
                },
                caddr: (_el: asn1.ASN1Element): void => {
                    caddr = __utils._decode_explicit<HostAddresses>(
                        () => _decode_HostAddresses
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KrbCredInfo,
                _extension_additions_list_spec_for_KrbCredInfo,
                _root_component_type_list_2_spec_for_KrbCredInfo,
                undefined
            );
            return new KrbCredInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                key,
                prealm,
                pname,
                flags,
                authtime,
                starttime,
                endtime,
                renew_till,
                srealm,
                sname,
                caddr
            );
        };
    }
    return _cached_decoder_for_KrbCredInfo(el);
}
export function _encode_KrbCredInfo(
    value: KrbCredInfo,
    elGetter: __utils.ASN1Encoder<KrbCredInfo>
) {
    if (!_cached_encoder_for_KrbCredInfo) {
        _cached_encoder_for_KrbCredInfo = function (
            value: KrbCredInfo,
            elGetter: __utils.ASN1Encoder<KrbCredInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_EncryptionKey,
                            __utils.BER
                        )(value.key, __utils.BER),
                        /* IF_ABSENT  */ value.prealm === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Realm,
                                  __utils.BER
                              )(value.prealm, __utils.BER),
                        /* IF_ABSENT  */ value.pname === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_PrincipalName,
                                  __utils.BER
                              )(value.pname, __utils.BER),
                        /* IF_ABSENT  */ value.flags === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_TicketFlags,
                                  __utils.BER
                              )(value.flags, __utils.BER),
                        /* IF_ABSENT  */ value.authtime === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  4,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.authtime, __utils.BER),
                        /* IF_ABSENT  */ value.starttime === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  5,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.starttime, __utils.BER),
                        /* IF_ABSENT  */ value.endtime === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  6,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.endtime, __utils.BER),
                        /* IF_ABSENT  */ value.renew_till === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  7,
                                  () => _encode_KerberosTime,
                                  __utils.BER
                              )(value.renew_till, __utils.BER),
                        /* IF_ABSENT  */ value.srealm === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  8,
                                  () => _encode_Realm,
                                  __utils.BER
                              )(value.srealm, __utils.BER),
                        /* IF_ABSENT  */ value.sname === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  9,
                                  () => _encode_PrincipalName,
                                  __utils.BER
                              )(value.sname, __utils.BER),
                        /* IF_ABSENT  */ value.caddr === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  10,
                                  () => _encode_HostAddresses,
                                  __utils.BER
                              )(value.caddr, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_KrbCredInfo(value, elGetter);
}

export class EncKrbCredPart {
    constructor(
        readonly ticket_info: KrbCredInfo[],
        readonly nonce: asn1.OPTIONAL<UInt32>,
        readonly timestamp: asn1.OPTIONAL<KerberosTime>,
        readonly usec: asn1.OPTIONAL<Microseconds>,
        readonly s_address: asn1.OPTIONAL<HostAddress>,
        readonly r_address: asn1.OPTIONAL<HostAddress>
    ) {}
}
export const _root_component_type_list_1_spec_for_EncKrbCredPart: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ticket-info",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nonce",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timestamp",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "usec",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "s-address",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "r-address",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncKrbCredPart: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncKrbCredPart: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncKrbCredPart: __utils.ASN1Decoder<
    EncKrbCredPart
> | null = null;
let _cached_encoder_for_EncKrbCredPart: __utils.ASN1Encoder<
    EncKrbCredPart
> | null = null;
export function _decode_EncKrbCredPart(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncKrbCredPart) {
        _cached_decoder_for_EncKrbCredPart = __utils._decode_explicit<
            EncKrbCredPart
        >(
            () =>
                function (el: asn1.ASN1Element): EncKrbCredPart {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let ticket_info!: KrbCredInfo[];
                    let nonce: asn1.OPTIONAL<UInt32>;
                    let timestamp: asn1.OPTIONAL<KerberosTime>;
                    let usec: asn1.OPTIONAL<Microseconds>;
                    let s_address: asn1.OPTIONAL<HostAddress>;
                    let r_address: asn1.OPTIONAL<HostAddress>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        "ticket-info": (_el: asn1.ASN1Element): void => {
                            ticket_info = __utils._decode_explicit<
                                KrbCredInfo[]
                            >(() =>
                                __utils._decodeSequenceOf<KrbCredInfo>(
                                    () => _decode_KrbCredInfo
                                )
                            )(_el);
                        },
                        nonce: (_el: asn1.ASN1Element): void => {
                            nonce = __utils._decode_explicit<UInt32>(
                                () => _decode_UInt32
                            )(_el);
                        },
                        timestamp: (_el: asn1.ASN1Element): void => {
                            timestamp = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        usec: (_el: asn1.ASN1Element): void => {
                            usec = __utils._decode_explicit<Microseconds>(
                                () => _decode_Microseconds
                            )(_el);
                        },
                        "s-address": (_el: asn1.ASN1Element): void => {
                            s_address = __utils._decode_explicit<HostAddress>(
                                () => _decode_HostAddress
                            )(_el);
                        },
                        "r-address": (_el: asn1.ASN1Element): void => {
                            r_address = __utils._decode_explicit<HostAddress>(
                                () => _decode_HostAddress
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_EncKrbCredPart,
                        _extension_additions_list_spec_for_EncKrbCredPart,
                        _root_component_type_list_2_spec_for_EncKrbCredPart,
                        undefined
                    );
                    return new EncKrbCredPart /* SEQUENCE_CONSTRUCTOR_CALL */(
                        ticket_info,
                        nonce,
                        timestamp,
                        usec,
                        s_address,
                        r_address
                    );
                }
        );
    }
    return _cached_decoder_for_EncKrbCredPart(el);
}
export function _encode_EncKrbCredPart(
    value: EncKrbCredPart,
    elGetter: __utils.ASN1Encoder<EncKrbCredPart>
) {
    if (!_cached_encoder_for_EncKrbCredPart) {
        _cached_encoder_for_EncKrbCredPart = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            29,
            () =>
                function (
                    value: EncKrbCredPart,
                    elGetter: __utils.ASN1Encoder<EncKrbCredPart>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () =>
                                        __utils._encodeSequenceOf<KrbCredInfo>(
                                            () => _encode_KrbCredInfo,
                                            __utils.BER
                                        ),
                                    __utils.BER
                                )(value.ticket_info, __utils.BER),
                                /* IF_ABSENT  */ value.nonce === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          1,
                                          () => _encode_UInt32,
                                          __utils.BER
                                      )(value.nonce, __utils.BER),
                                /* IF_ABSENT  */ value.timestamp === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          2,
                                          () => _encode_KerberosTime,
                                          __utils.BER
                                      )(value.timestamp, __utils.BER),
                                /* IF_ABSENT  */ value.usec === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          3,
                                          () => _encode_Microseconds,
                                          __utils.BER
                                      )(value.usec, __utils.BER),
                                /* IF_ABSENT  */ value.s_address === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          4,
                                          () => _encode_HostAddress,
                                          __utils.BER
                                      )(value.s_address, __utils.BER),
                                /* IF_ABSENT  */ value.r_address === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          5,
                                          () => _encode_HostAddress,
                                          __utils.BER
                                      )(value.r_address, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_EncKrbCredPart(value, elGetter);
}

export class KRB_ERROR {
    constructor(
        readonly pvno: asn1.INTEGER,
        readonly msg_type: asn1.INTEGER,
        readonly ctime: asn1.OPTIONAL<KerberosTime>,
        readonly cusec: asn1.OPTIONAL<Microseconds>,
        readonly stime: KerberosTime,
        readonly susec: Microseconds,
        readonly error_code: Int32,
        readonly crealm: asn1.OPTIONAL<Realm>,
        readonly cname: asn1.OPTIONAL<PrincipalName>,
        readonly realm: Realm,
        readonly sname: PrincipalName,
        readonly e_text: asn1.OPTIONAL<KerberosString>,
        readonly e_data: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_KRB_ERROR: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pvno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msg-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ctime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cusec",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "stime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "susec",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "error-code",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crealm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cname",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "realm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "e-text",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "e-data",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 12),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KRB_ERROR: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KRB_ERROR: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KRB_ERROR: __utils.ASN1Decoder<KRB_ERROR> | null = null;
let _cached_encoder_for_KRB_ERROR: __utils.ASN1Encoder<KRB_ERROR> | null = null;
export function _decode_KRB_ERROR(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KRB_ERROR) {
        _cached_decoder_for_KRB_ERROR = __utils._decode_explicit<KRB_ERROR>(
            () =>
                function (el: asn1.ASN1Element): KRB_ERROR {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let pvno!: asn1.INTEGER;
                    let msg_type!: asn1.INTEGER;
                    let ctime: asn1.OPTIONAL<KerberosTime>;
                    let cusec: asn1.OPTIONAL<Microseconds>;
                    let stime!: KerberosTime;
                    let susec!: Microseconds;
                    let error_code!: Int32;
                    let crealm: asn1.OPTIONAL<Realm>;
                    let cname: asn1.OPTIONAL<PrincipalName>;
                    let realm!: Realm;
                    let sname!: PrincipalName;
                    let e_text: asn1.OPTIONAL<KerberosString>;
                    let e_data: asn1.OPTIONAL<asn1.OCTET_STRING>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        pvno: (_el: asn1.ASN1Element): void => {
                            pvno = __utils._decode_explicit<asn1.INTEGER>(
                                () => __utils._decodeInteger
                            )(_el);
                        },
                        "msg-type": (_el: asn1.ASN1Element): void => {
                            msg_type = __utils._decode_explicit<asn1.INTEGER>(
                                () => __utils._decodeInteger
                            )(_el);
                        },
                        ctime: (_el: asn1.ASN1Element): void => {
                            ctime = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        cusec: (_el: asn1.ASN1Element): void => {
                            cusec = __utils._decode_explicit<Microseconds>(
                                () => _decode_Microseconds
                            )(_el);
                        },
                        stime: (_el: asn1.ASN1Element): void => {
                            stime = __utils._decode_explicit<KerberosTime>(
                                () => _decode_KerberosTime
                            )(_el);
                        },
                        susec: (_el: asn1.ASN1Element): void => {
                            susec = __utils._decode_explicit<Microseconds>(
                                () => _decode_Microseconds
                            )(_el);
                        },
                        "error-code": (_el: asn1.ASN1Element): void => {
                            error_code = __utils._decode_explicit<Int32>(
                                () => _decode_Int32
                            )(_el);
                        },
                        crealm: (_el: asn1.ASN1Element): void => {
                            crealm = __utils._decode_explicit<Realm>(
                                () => _decode_Realm
                            )(_el);
                        },
                        cname: (_el: asn1.ASN1Element): void => {
                            cname = __utils._decode_explicit<PrincipalName>(
                                () => _decode_PrincipalName
                            )(_el);
                        },
                        realm: (_el: asn1.ASN1Element): void => {
                            realm = __utils._decode_explicit<Realm>(
                                () => _decode_Realm
                            )(_el);
                        },
                        sname: (_el: asn1.ASN1Element): void => {
                            sname = __utils._decode_explicit<PrincipalName>(
                                () => _decode_PrincipalName
                            )(_el);
                        },
                        "e-text": (_el: asn1.ASN1Element): void => {
                            e_text = __utils._decode_explicit<KerberosString>(
                                () => _decode_KerberosString
                            )(_el);
                        },
                        "e-data": (_el: asn1.ASN1Element): void => {
                            e_data = __utils._decode_explicit<
                                asn1.OCTET_STRING
                            >(() => __utils._decodeOctetString)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_KRB_ERROR,
                        _extension_additions_list_spec_for_KRB_ERROR,
                        _root_component_type_list_2_spec_for_KRB_ERROR,
                        undefined
                    );
                    return new KRB_ERROR /* SEQUENCE_CONSTRUCTOR_CALL */(
                        pvno,
                        msg_type,
                        ctime,
                        cusec,
                        stime,
                        susec,
                        error_code,
                        crealm,
                        cname,
                        realm,
                        sname,
                        e_text,
                        e_data
                    );
                }
        );
    }
    return _cached_decoder_for_KRB_ERROR(el);
}
export function _encode_KRB_ERROR(
    value: KRB_ERROR,
    elGetter: __utils.ASN1Encoder<KRB_ERROR>
) {
    if (!_cached_encoder_for_KRB_ERROR) {
        _cached_encoder_for_KRB_ERROR = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            30,
            () =>
                function (
                    value: KRB_ERROR,
                    elGetter: __utils.ASN1Encoder<KRB_ERROR>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.pvno, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => __utils._encodeInteger,
                                    __utils.BER
                                )(value.msg_type, __utils.BER),
                                /* IF_ABSENT  */ value.ctime === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          2,
                                          () => _encode_KerberosTime,
                                          __utils.BER
                                      )(value.ctime, __utils.BER),
                                /* IF_ABSENT  */ value.cusec === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          3,
                                          () => _encode_Microseconds,
                                          __utils.BER
                                      )(value.cusec, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    4,
                                    () => _encode_KerberosTime,
                                    __utils.BER
                                )(value.stime, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    5,
                                    () => _encode_Microseconds,
                                    __utils.BER
                                )(value.susec, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    6,
                                    () => _encode_Int32,
                                    __utils.BER
                                )(value.error_code, __utils.BER),
                                /* IF_ABSENT  */ value.crealm === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          7,
                                          () => _encode_Realm,
                                          __utils.BER
                                      )(value.crealm, __utils.BER),
                                /* IF_ABSENT  */ value.cname === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          8,
                                          () => _encode_PrincipalName,
                                          __utils.BER
                                      )(value.cname, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    9,
                                    () => _encode_Realm,
                                    __utils.BER
                                )(value.realm, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    10,
                                    () => _encode_PrincipalName,
                                    __utils.BER
                                )(value.sname, __utils.BER),
                                /* IF_ABSENT  */ value.e_text === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          11,
                                          () => _encode_KerberosString,
                                          __utils.BER
                                      )(value.e_text, __utils.BER),
                                /* IF_ABSENT  */ value.e_data === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          12,
                                          () => __utils._encodeOctetString,
                                          __utils.BER
                                      )(value.e_data, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_KRB_ERROR(value, elGetter);
}

export type METHOD_DATA = PA_DATA[]; // SequenceOfType
let _cached_decoder_for_METHOD_DATA: __utils.ASN1Decoder<
    METHOD_DATA
> | null = null;
let _cached_encoder_for_METHOD_DATA: __utils.ASN1Encoder<
    METHOD_DATA
> | null = null;
export function _decode_METHOD_DATA(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_METHOD_DATA) {
        _cached_decoder_for_METHOD_DATA = __utils._decodeSequenceOf<PA_DATA>(
            () => _decode_PA_DATA
        );
    }
    return _cached_decoder_for_METHOD_DATA(el);
}
export function _encode_METHOD_DATA(
    value: METHOD_DATA,
    elGetter: __utils.ASN1Encoder<METHOD_DATA>
) {
    if (!_cached_encoder_for_METHOD_DATA) {
        _cached_encoder_for_METHOD_DATA = __utils._encodeSequenceOf<PA_DATA>(
            () => _encode_PA_DATA,
            __utils.BER
        );
    }
    return _cached_encoder_for_METHOD_DATA(value, elGetter);
}

export class TYPED_DATA_Item {
    constructor(
        readonly data_type: Int32,
        readonly data_value: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_TYPED_DATA_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "data-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "data-value",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TYPED_DATA_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TYPED_DATA_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TYPED_DATA_Item: __utils.ASN1Decoder<
    TYPED_DATA_Item
> | null = null;
let _cached_encoder_for_TYPED_DATA_Item: __utils.ASN1Encoder<
    TYPED_DATA_Item
> | null = null;
export function _decode_TYPED_DATA_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TYPED_DATA_Item) {
        _cached_decoder_for_TYPED_DATA_Item = function (
            el: asn1.ASN1Element
        ): TYPED_DATA_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let data_type!: Int32;
            let data_value: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "data-type": (_el: asn1.ASN1Element): void => {
                    data_type = __utils._decode_explicit<Int32>(
                        () => _decode_Int32
                    )(_el);
                },
                "data-value": (_el: asn1.ASN1Element): void => {
                    data_value = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TYPED_DATA_Item,
                _extension_additions_list_spec_for_TYPED_DATA_Item,
                _root_component_type_list_2_spec_for_TYPED_DATA_Item,
                undefined
            );
            return new TYPED_DATA_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                data_type,
                data_value
            );
        };
    }
    return _cached_decoder_for_TYPED_DATA_Item(el);
}
export function _encode_TYPED_DATA_Item(
    value: TYPED_DATA_Item,
    elGetter: __utils.ASN1Encoder<TYPED_DATA_Item>
) {
    if (!_cached_encoder_for_TYPED_DATA_Item) {
        _cached_encoder_for_TYPED_DATA_Item = function (
            value: TYPED_DATA_Item,
            elGetter: __utils.ASN1Encoder<TYPED_DATA_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.data_type, __utils.BER),
                        /* IF_ABSENT  */ value.data_value === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.data_value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TYPED_DATA_Item(value, elGetter);
}

export type TYPED_DATA = TYPED_DATA_Item[]; // SequenceOfType
let _cached_decoder_for_TYPED_DATA: __utils.ASN1Decoder<
    TYPED_DATA
> | null = null;
let _cached_encoder_for_TYPED_DATA: __utils.ASN1Encoder<
    TYPED_DATA
> | null = null;
export function _decode_TYPED_DATA(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TYPED_DATA) {
        _cached_decoder_for_TYPED_DATA = __utils._decodeSequenceOf<
            TYPED_DATA_Item
        >(() => _decode_TYPED_DATA_Item);
    }
    return _cached_decoder_for_TYPED_DATA(el);
}
export function _encode_TYPED_DATA(
    value: TYPED_DATA,
    elGetter: __utils.ASN1Encoder<TYPED_DATA>
) {
    if (!_cached_encoder_for_TYPED_DATA) {
        _cached_encoder_for_TYPED_DATA = __utils._encodeSequenceOf<
            TYPED_DATA_Item
        >(() => _encode_TYPED_DATA_Item, __utils.BER);
    }
    return _cached_encoder_for_TYPED_DATA(value, elGetter);
}

export type PA_ENC_TIMESTAMP = EncryptedData; // DefinedType
let _cached_decoder_for_PA_ENC_TIMESTAMP: __utils.ASN1Decoder<
    PA_ENC_TIMESTAMP
> | null = null;
let _cached_encoder_for_PA_ENC_TIMESTAMP: __utils.ASN1Encoder<
    PA_ENC_TIMESTAMP
> | null = null;
export function _decode_PA_ENC_TIMESTAMP(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PA_ENC_TIMESTAMP) {
        _cached_decoder_for_PA_ENC_TIMESTAMP = _decode_EncryptedData;
    }
    return _cached_decoder_for_PA_ENC_TIMESTAMP(el);
}
export function _encode_PA_ENC_TIMESTAMP(
    value: PA_ENC_TIMESTAMP,
    elGetter: __utils.ASN1Encoder<PA_ENC_TIMESTAMP>
) {
    if (!_cached_encoder_for_PA_ENC_TIMESTAMP) {
        _cached_encoder_for_PA_ENC_TIMESTAMP = _encode_EncryptedData;
    }
    return _cached_encoder_for_PA_ENC_TIMESTAMP(value, elGetter);
}

export class PA_ENC_TS_ENC {
    constructor(
        readonly patimestamp: KerberosTime,
        readonly pausec: asn1.OPTIONAL<Microseconds>
    ) {}
}
export const _root_component_type_list_1_spec_for_PA_ENC_TS_ENC: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "patimestamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pausec",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PA_ENC_TS_ENC: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PA_ENC_TS_ENC: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PA_ENC_TS_ENC: __utils.ASN1Decoder<
    PA_ENC_TS_ENC
> | null = null;
let _cached_encoder_for_PA_ENC_TS_ENC: __utils.ASN1Encoder<
    PA_ENC_TS_ENC
> | null = null;
export function _decode_PA_ENC_TS_ENC(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PA_ENC_TS_ENC) {
        _cached_decoder_for_PA_ENC_TS_ENC = function (
            el: asn1.ASN1Element
        ): PA_ENC_TS_ENC {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let patimestamp!: KerberosTime;
            let pausec: asn1.OPTIONAL<Microseconds>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                patimestamp: (_el: asn1.ASN1Element): void => {
                    patimestamp = __utils._decode_explicit<KerberosTime>(
                        () => _decode_KerberosTime
                    )(_el);
                },
                pausec: (_el: asn1.ASN1Element): void => {
                    pausec = __utils._decode_explicit<Microseconds>(
                        () => _decode_Microseconds
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PA_ENC_TS_ENC,
                _extension_additions_list_spec_for_PA_ENC_TS_ENC,
                _root_component_type_list_2_spec_for_PA_ENC_TS_ENC,
                undefined
            );
            return new PA_ENC_TS_ENC /* SEQUENCE_CONSTRUCTOR_CALL */(
                patimestamp,
                pausec
            );
        };
    }
    return _cached_decoder_for_PA_ENC_TS_ENC(el);
}
export function _encode_PA_ENC_TS_ENC(
    value: PA_ENC_TS_ENC,
    elGetter: __utils.ASN1Encoder<PA_ENC_TS_ENC>
) {
    if (!_cached_encoder_for_PA_ENC_TS_ENC) {
        _cached_encoder_for_PA_ENC_TS_ENC = function (
            value: PA_ENC_TS_ENC,
            elGetter: __utils.ASN1Encoder<PA_ENC_TS_ENC>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_KerberosTime,
                            __utils.BER
                        )(value.patimestamp, __utils.BER),
                        /* IF_ABSENT  */ value.pausec === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Microseconds,
                                  __utils.BER
                              )(value.pausec, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PA_ENC_TS_ENC(value, elGetter);
}

export class ETYPE_INFO_ENTRY {
    constructor(
        readonly etype: Int32,
        readonly salt: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_ETYPE_INFO_ENTRY: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "etype",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "salt",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ETYPE_INFO_ENTRY: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ETYPE_INFO_ENTRY: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ETYPE_INFO_ENTRY: __utils.ASN1Decoder<
    ETYPE_INFO_ENTRY
> | null = null;
let _cached_encoder_for_ETYPE_INFO_ENTRY: __utils.ASN1Encoder<
    ETYPE_INFO_ENTRY
> | null = null;
export function _decode_ETYPE_INFO_ENTRY(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ETYPE_INFO_ENTRY) {
        _cached_decoder_for_ETYPE_INFO_ENTRY = function (
            el: asn1.ASN1Element
        ): ETYPE_INFO_ENTRY {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let etype!: Int32;
            let salt: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                etype: (_el: asn1.ASN1Element): void => {
                    etype = __utils._decode_explicit<Int32>(
                        () => _decode_Int32
                    )(_el);
                },
                salt: (_el: asn1.ASN1Element): void => {
                    salt = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ETYPE_INFO_ENTRY,
                _extension_additions_list_spec_for_ETYPE_INFO_ENTRY,
                _root_component_type_list_2_spec_for_ETYPE_INFO_ENTRY,
                undefined
            );
            return new ETYPE_INFO_ENTRY /* SEQUENCE_CONSTRUCTOR_CALL */(
                etype,
                salt
            );
        };
    }
    return _cached_decoder_for_ETYPE_INFO_ENTRY(el);
}
export function _encode_ETYPE_INFO_ENTRY(
    value: ETYPE_INFO_ENTRY,
    elGetter: __utils.ASN1Encoder<ETYPE_INFO_ENTRY>
) {
    if (!_cached_encoder_for_ETYPE_INFO_ENTRY) {
        _cached_encoder_for_ETYPE_INFO_ENTRY = function (
            value: ETYPE_INFO_ENTRY,
            elGetter: __utils.ASN1Encoder<ETYPE_INFO_ENTRY>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.etype, __utils.BER),
                        /* IF_ABSENT  */ value.salt === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.salt, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ETYPE_INFO_ENTRY(value, elGetter);
}

export type ETYPE_INFO = ETYPE_INFO_ENTRY[]; // SequenceOfType
let _cached_decoder_for_ETYPE_INFO: __utils.ASN1Decoder<
    ETYPE_INFO
> | null = null;
let _cached_encoder_for_ETYPE_INFO: __utils.ASN1Encoder<
    ETYPE_INFO
> | null = null;
export function _decode_ETYPE_INFO(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ETYPE_INFO) {
        _cached_decoder_for_ETYPE_INFO = __utils._decodeSequenceOf<
            ETYPE_INFO_ENTRY
        >(() => _decode_ETYPE_INFO_ENTRY);
    }
    return _cached_decoder_for_ETYPE_INFO(el);
}
export function _encode_ETYPE_INFO(
    value: ETYPE_INFO,
    elGetter: __utils.ASN1Encoder<ETYPE_INFO>
) {
    if (!_cached_encoder_for_ETYPE_INFO) {
        _cached_encoder_for_ETYPE_INFO = __utils._encodeSequenceOf<
            ETYPE_INFO_ENTRY
        >(() => _encode_ETYPE_INFO_ENTRY, __utils.BER);
    }
    return _cached_encoder_for_ETYPE_INFO(value, elGetter);
}

export class ETYPE_INFO2_ENTRY {
    constructor(
        readonly etype: Int32,
        readonly salt: asn1.OPTIONAL<KerberosString>,
        readonly s2kparams: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_ETYPE_INFO2_ENTRY: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "etype",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "salt",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "s2kparams",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ETYPE_INFO2_ENTRY: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ETYPE_INFO2_ENTRY: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ETYPE_INFO2_ENTRY: __utils.ASN1Decoder<
    ETYPE_INFO2_ENTRY
> | null = null;
let _cached_encoder_for_ETYPE_INFO2_ENTRY: __utils.ASN1Encoder<
    ETYPE_INFO2_ENTRY
> | null = null;
export function _decode_ETYPE_INFO2_ENTRY(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ETYPE_INFO2_ENTRY) {
        _cached_decoder_for_ETYPE_INFO2_ENTRY = function (
            el: asn1.ASN1Element
        ): ETYPE_INFO2_ENTRY {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let etype!: Int32;
            let salt: asn1.OPTIONAL<KerberosString>;
            let s2kparams: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                etype: (_el: asn1.ASN1Element): void => {
                    etype = __utils._decode_explicit<Int32>(
                        () => _decode_Int32
                    )(_el);
                },
                salt: (_el: asn1.ASN1Element): void => {
                    salt = __utils._decode_explicit<KerberosString>(
                        () => _decode_KerberosString
                    )(_el);
                },
                s2kparams: (_el: asn1.ASN1Element): void => {
                    s2kparams = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ETYPE_INFO2_ENTRY,
                _extension_additions_list_spec_for_ETYPE_INFO2_ENTRY,
                _root_component_type_list_2_spec_for_ETYPE_INFO2_ENTRY,
                undefined
            );
            return new ETYPE_INFO2_ENTRY /* SEQUENCE_CONSTRUCTOR_CALL */(
                etype,
                salt,
                s2kparams
            );
        };
    }
    return _cached_decoder_for_ETYPE_INFO2_ENTRY(el);
}
export function _encode_ETYPE_INFO2_ENTRY(
    value: ETYPE_INFO2_ENTRY,
    elGetter: __utils.ASN1Encoder<ETYPE_INFO2_ENTRY>
) {
    if (!_cached_encoder_for_ETYPE_INFO2_ENTRY) {
        _cached_encoder_for_ETYPE_INFO2_ENTRY = function (
            value: ETYPE_INFO2_ENTRY,
            elGetter: __utils.ASN1Encoder<ETYPE_INFO2_ENTRY>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.etype, __utils.BER),
                        /* IF_ABSENT  */ value.salt === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_KerberosString,
                                  __utils.BER
                              )(value.salt, __utils.BER),
                        /* IF_ABSENT  */ value.s2kparams === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.s2kparams, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ETYPE_INFO2_ENTRY(value, elGetter);
}

export type ETYPE_INFO2 = ETYPE_INFO2_ENTRY[]; // SequenceOfType
let _cached_decoder_for_ETYPE_INFO2: __utils.ASN1Decoder<
    ETYPE_INFO2
> | null = null;
let _cached_encoder_for_ETYPE_INFO2: __utils.ASN1Encoder<
    ETYPE_INFO2
> | null = null;
export function _decode_ETYPE_INFO2(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ETYPE_INFO2) {
        _cached_decoder_for_ETYPE_INFO2 = __utils._decodeSequenceOf<
            ETYPE_INFO2_ENTRY
        >(() => _decode_ETYPE_INFO2_ENTRY);
    }
    return _cached_decoder_for_ETYPE_INFO2(el);
}
export function _encode_ETYPE_INFO2(
    value: ETYPE_INFO2,
    elGetter: __utils.ASN1Encoder<ETYPE_INFO2>
) {
    if (!_cached_encoder_for_ETYPE_INFO2) {
        _cached_encoder_for_ETYPE_INFO2 = __utils._encodeSequenceOf<
            ETYPE_INFO2_ENTRY
        >(() => _encode_ETYPE_INFO2_ENTRY, __utils.BER);
    }
    return _cached_encoder_for_ETYPE_INFO2(value, elGetter);
}

export type AD_IF_RELEVANT = AuthorizationData; // DefinedType
let _cached_decoder_for_AD_IF_RELEVANT: __utils.ASN1Decoder<
    AD_IF_RELEVANT
> | null = null;
let _cached_encoder_for_AD_IF_RELEVANT: __utils.ASN1Encoder<
    AD_IF_RELEVANT
> | null = null;
export function _decode_AD_IF_RELEVANT(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AD_IF_RELEVANT) {
        _cached_decoder_for_AD_IF_RELEVANT = _decode_AuthorizationData;
    }
    return _cached_decoder_for_AD_IF_RELEVANT(el);
}
export function _encode_AD_IF_RELEVANT(
    value: AD_IF_RELEVANT,
    elGetter: __utils.ASN1Encoder<AD_IF_RELEVANT>
) {
    if (!_cached_encoder_for_AD_IF_RELEVANT) {
        _cached_encoder_for_AD_IF_RELEVANT = _encode_AuthorizationData;
    }
    return _cached_encoder_for_AD_IF_RELEVANT(value, elGetter);
}

export class AD_KDCIssued {
    constructor(
        readonly ad_checksum: Checksum,
        readonly i_realm: asn1.OPTIONAL<Realm>,
        readonly i_sname: asn1.OPTIONAL<PrincipalName>,
        readonly elements: AuthorizationData
    ) {}
}
export const _root_component_type_list_1_spec_for_AD_KDCIssued: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ad-checksum",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "i-realm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "i-sname",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "elements",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AD_KDCIssued: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AD_KDCIssued: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AD_KDCIssued: __utils.ASN1Decoder<
    AD_KDCIssued
> | null = null;
let _cached_encoder_for_AD_KDCIssued: __utils.ASN1Encoder<
    AD_KDCIssued
> | null = null;
export function _decode_AD_KDCIssued(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AD_KDCIssued) {
        _cached_decoder_for_AD_KDCIssued = function (
            el: asn1.ASN1Element
        ): AD_KDCIssued {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let ad_checksum!: Checksum;
            let i_realm: asn1.OPTIONAL<Realm>;
            let i_sname: asn1.OPTIONAL<PrincipalName>;
            let elements!: AuthorizationData;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "ad-checksum": (_el: asn1.ASN1Element): void => {
                    ad_checksum = __utils._decode_explicit<Checksum>(
                        () => _decode_Checksum
                    )(_el);
                },
                "i-realm": (_el: asn1.ASN1Element): void => {
                    i_realm = __utils._decode_explicit<Realm>(
                        () => _decode_Realm
                    )(_el);
                },
                "i-sname": (_el: asn1.ASN1Element): void => {
                    i_sname = __utils._decode_explicit<PrincipalName>(
                        () => _decode_PrincipalName
                    )(_el);
                },
                elements: (_el: asn1.ASN1Element): void => {
                    elements = __utils._decode_explicit<AuthorizationData>(
                        () => _decode_AuthorizationData
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AD_KDCIssued,
                _extension_additions_list_spec_for_AD_KDCIssued,
                _root_component_type_list_2_spec_for_AD_KDCIssued,
                undefined
            );
            return new AD_KDCIssued /* SEQUENCE_CONSTRUCTOR_CALL */(
                ad_checksum,
                i_realm,
                i_sname,
                elements
            );
        };
    }
    return _cached_decoder_for_AD_KDCIssued(el);
}
export function _encode_AD_KDCIssued(
    value: AD_KDCIssued,
    elGetter: __utils.ASN1Encoder<AD_KDCIssued>
) {
    if (!_cached_encoder_for_AD_KDCIssued) {
        _cached_encoder_for_AD_KDCIssued = function (
            value: AD_KDCIssued,
            elGetter: __utils.ASN1Encoder<AD_KDCIssued>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Checksum,
                            __utils.BER
                        )(value.ad_checksum, __utils.BER),
                        /* IF_ABSENT  */ value.i_realm === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Realm,
                                  __utils.BER
                              )(value.i_realm, __utils.BER),
                        /* IF_ABSENT  */ value.i_sname === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_PrincipalName,
                                  __utils.BER
                              )(value.i_sname, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            3,
                            () => _encode_AuthorizationData,
                            __utils.BER
                        )(value.elements, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AD_KDCIssued(value, elGetter);
}

export class AD_AND_OR {
    constructor(
        readonly condition_count: Int32,
        readonly elements: AuthorizationData
    ) {}
}
export const _root_component_type_list_1_spec_for_AD_AND_OR: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "condition-count",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "elements",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AD_AND_OR: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AD_AND_OR: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AD_AND_OR: __utils.ASN1Decoder<AD_AND_OR> | null = null;
let _cached_encoder_for_AD_AND_OR: __utils.ASN1Encoder<AD_AND_OR> | null = null;
export function _decode_AD_AND_OR(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AD_AND_OR) {
        _cached_decoder_for_AD_AND_OR = function (
            el: asn1.ASN1Element
        ): AD_AND_OR {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "AD-AND-OR contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "condition-count";
            sequence[1].name = "elements";
            let condition_count!: Int32;
            let elements!: AuthorizationData;
            condition_count = __utils._decode_explicit<Int32>(
                () => _decode_Int32
            )(sequence[0]);
            elements = __utils._decode_explicit<AuthorizationData>(
                () => _decode_AuthorizationData
            )(sequence[1]);
            // TODO: Validate values.
            return new AD_AND_OR(condition_count, elements);
        };
    }
    return _cached_decoder_for_AD_AND_OR(el);
}
export function _encode_AD_AND_OR(
    value: AD_AND_OR,
    elGetter: __utils.ASN1Encoder<AD_AND_OR>
) {
    if (!_cached_encoder_for_AD_AND_OR) {
        _cached_encoder_for_AD_AND_OR = function (
            value: AD_AND_OR,
            elGetter: __utils.ASN1Encoder<AD_AND_OR>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Int32,
                            __utils.BER
                        )(value.condition_count, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => _encode_AuthorizationData,
                            __utils.BER
                        )(value.elements, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AD_AND_OR(value, elGetter);
}

export type AD_MANDATORY_FOR_KDC = AuthorizationData; // DefinedType
let _cached_decoder_for_AD_MANDATORY_FOR_KDC: __utils.ASN1Decoder<
    AD_MANDATORY_FOR_KDC
> | null = null;
let _cached_encoder_for_AD_MANDATORY_FOR_KDC: __utils.ASN1Encoder<
    AD_MANDATORY_FOR_KDC
> | null = null;
export function _decode_AD_MANDATORY_FOR_KDC(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AD_MANDATORY_FOR_KDC) {
        _cached_decoder_for_AD_MANDATORY_FOR_KDC = _decode_AuthorizationData;
    }
    return _cached_decoder_for_AD_MANDATORY_FOR_KDC(el);
}
export function _encode_AD_MANDATORY_FOR_KDC(
    value: AD_MANDATORY_FOR_KDC,
    elGetter: __utils.ASN1Encoder<AD_MANDATORY_FOR_KDC>
) {
    if (!_cached_encoder_for_AD_MANDATORY_FOR_KDC) {
        _cached_encoder_for_AD_MANDATORY_FOR_KDC = _encode_AuthorizationData;
    }
    return _cached_encoder_for_AD_MANDATORY_FOR_KDC(value, elGetter);
}

/* END_MODULE KerberosV5Spec2 */
