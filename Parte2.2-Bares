db.createCollection("Bares", {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                '_id',
                'nombre',
                'ciudad',
                'presupuesto',
                'cant_sedes',
                'oferta_bebidas',
                'direccion'
            ],
            properties: {
                _id: {
                    bsonType: 'int'
                },
                nombre: {
                    bsonType: 'string'
                },
                ciudad: {
                    bsonType: 'string'
                },
                presupuesto: {
                    bsonType: 'array',
                    required: [
                        'tipo_presupueso'
                    ],
                    properties: {
                        tipo_presupueso: {
                            bsonType: 'string'
                        }
                    }
                },
                cant_sedes: {
                    bsonType: 'int'
                },
                oferta_bebidas: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'object',
                        required: [
                            'nombre',
                            'grado_alcohol',
                            'tipo',
                            'horario',
                            'precio'
                        ],
                        properties: {
                            nombre: {
                                bsonType: 'string'
                            },
                            grado_alcohol: {
                                bsonType: [
                                    'int',
                                    'null'
                                ]
                            },
                            tipo: {
                                bsonType: 'string'
                            },
                            horario: {
                                bsonType: 'string'
                            },
                            precio: {
                                bsonType: 'int'
                            }
                        }
                    }
                },
                direccion: {
                    bsonType: 'object',
                    required: [
                        'ciudad',
                        'codigo_postal',
                        'direccion',
                        'telefono'
                    ],
                    properties: {
                        ciudad: {
                            bsonType: 'string'
                        },
                        codigo_postal: {
                            bsonType: 'double'
                        },
                        direccion: {
                            bsonType: 'string'
                        },
                        telefono: {
                            bsonType: 'string'
                        }
                    }
                }
            }
        }
    }
});