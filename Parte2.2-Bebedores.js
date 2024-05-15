db.createCollection("Bebedores", {
    validator: {
        $jsonSchema: {
            required: ["_id", "nombre", "presupuesto", "punto", "preferencias", "bares_frecuentados"],
            properties: {
                _id: {
                    bsonType: "int"
                },
                nombre: {
                    bsonType: "string"
                },
                presupuesto: {
                    bsonType: "array",
                    required: ["tipo_presupuesto"],
                    properties: {

                        tipo_presupuesto: {
                            bsonType: "string"
                        }

                    }
                }, 
                punto: {
                    bsonType: "int"
                },
                preferencias: {
                    bsonType: "array",
                    required: ["nombre_bebida"],
                    properties: {

                        nombre_bebida: {
                            bsonType: "string"
                        }

                    }
                }
            }
        }
    }
})