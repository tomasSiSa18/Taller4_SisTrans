db.Bares.updateMany(
  { direccion: { $exists: false } },
  [
    {
      $set: {
        direccion: {
          ciudad: "$ciudad",
          codigo_postal: { $floor: { $add: [{ $multiply: [{ $rand: {} }, 89999] }, 10000] } }, // Generates a random integer between 10000 and 99999
          direccion: { 
            $concat: [
              "Calle ", 
              { $toString: { $floor: { $add: [{ $rand: {} }, 1] } } } // Generates a random integer between 1 and 100 for the street number
            ] 
          },
          telefono: { 
            $concat: [
              "000-", { $toString: { $floor: { $multiply: [{ $rand: {} }, 8999999] } } }
            ]
          }
        }
      }
    }
  ]
)